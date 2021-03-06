import { createContext, useState } from "react";
import { useHistoryHook } from "../hooks/useHistoryHook";

export const ScreenContext = createContext('')

export function ScreenContextProvider(props) {

    //positions states
    const [position1, setPosition1] = useState("00")
    const [position2, setPosition2] = useState("00")
    const [position3, setPosition3] = useState("00")

    const [lastKey, setLastKey] = useState("")

    const [lastOperation, setLastOperation] = useState("")

    const [positionCounter, setPositionCounter] = useState(1)

    const [operator, setOperator] = useState("")

    const [operatorNumber, setOperatorNumber] = useState(Number)

    const {operations, setOperations} = useHistoryHook()

    //logical of key inputs
    function digitsInput(keyValue) {
        //functions
        function setDigitOne(setPosition) {
            setPosition(keyValue)
            setPositionCounter(positionCounter + 1)
        }

        function setDigitTwo(setPosition, position) {
            setPosition(position + keyValue)
            if(positionCounter >= 3 || position1.length >= 4)setPositionCounter(positionCounter + 1)
        }

        function clearFields(option) {

            switch (option) {
                case "hour":
                    setPosition1("00")
                    setPosition2("00")
                    setPosition3("00")
                    break
                case "all":
                    setPosition1("00")
                    setPosition2("00")
                    setPosition3("00")
                    setOperator("")
                    setPositionCounter(1)
                    setOperatorNumber()
                    break
                case "operator":
                    setOperator("")
                    setPositionCounter(1)
                    setOperatorNumber()
                    break
                default:
                    return
            }

        }

        function secondsToHHMMSS(secondsToConvert) {

            var sec_num = parseInt(secondsToConvert, 10)
            var hours = Math.floor(sec_num / 3600)
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60)
            var seconds = sec_num - (hours * 3600) - (minutes * 60)

            if (hours < 10) hours = "0" + hours
            if (minutes < 10) minutes = "0" + minutes
            if (seconds < 10) seconds = "0" + seconds

            return [hours, minutes, seconds]
        }

        function hoursFormatToSeconds(hours, minutes, seconds) {
            return (Number(hours) * 3600) + (Number(minutes) * 60) + (Number(seconds))
        }

        function lastOperationToSeconds(operatorToSplit) {
            let splitedLastOperation = lastOperation.split(":")
            splitedLastOperation[2] = splitedLastOperation[2].split(operatorToSplit)[0]

            return hoursFormatToSeconds(
                splitedLastOperation[0],
                splitedLastOperation[1],
                splitedLastOperation[2])
        }

        async function toOperations(lastOperation, currentOperation, result){
            
            let id = 0

            if(await operations.length === 10){
                let tempArray = [...operations]

                tempArray.pop()

                tempArray.forEach(item => item.id +=1)

                tempArray.unshift(
                    {
                        id,
                        operator,
                        lastOperation,
                        currentOperation,
                        result
                    }
                )
                
                setOperations(tempArray)

                return
            }
            
            if(await operations.length === 0) id = 1
            if(await operations.length !== 0) id = await operations.length + 1

            let tempArray =[...operations]
            tempArray.unshift({
                id,
                operator,
                lastOperation,
                currentOperation,
                result
            })

            setOperations(tempArray)
        }

        //declarations
        const allOperators = ["P1", "P2", "P3", "x", "??", "/", "-", "+", "=", "AC"]

        const positionOperators = ["P1", "P2", "P3"]

        const commumOperators = ["x", "??", "-", "+", "="]

        //conditionals
        //checks value is a number
        if (!allOperators.includes(keyValue) && keyValue >= 0) {

            //checks if is a result in screen to sum
            if ((position1 || position2 || position3) !== "00" && lastKey === "+" && positionCounter === 1) {
                setLastOperation(`${position1}:${position2}:${position3}${operator}`)
                clearFields('hour')
                setPositionCounter(1)
            }

            switch (positionCounter) {
                case 1:
                    setDigitOne(setPosition1)
                    break;
                case 2:
                    position1.length < 4 && setDigitTwo(setPosition1, position1)
                    break;
                case 3:
                    setDigitOne(setPosition2)
                    break;
                case 4:
                    if (parseInt(position2) <= 5) setDigitTwo(setPosition2, position2)
                    break;
                case 5:
                    setDigitOne(setPosition3)
                    break;
                case 6:
                    if (parseInt(position3) <= 5) setDigitTwo(setPosition3, position3)
                    setPositionCounter(1)
                    break;
                case 7:
                    if (operatorNumber) setOperatorNumber(operatorNumber + keyValue)
                    if (!operatorNumber) setOperatorNumber(keyValue)
                    break;
                default:
                    return
            }

        }

        //Check position selectors
        if (positionOperators.includes(keyValue)) {
            switch (keyValue) {
                case "P1":
                    setPositionCounter(1)
                    break;
                case "P2":
                    setPositionCounter(3)
                    break;
                case "P3":
                    setPositionCounter(5)
                    break;
                default:
                    return
            }
        }

        //checks clear screen key
        if (keyValue === "AC") {
            setLastOperation("")
            clearFields('all')
        }

        //checks and process commum math operators
        if (commumOperators.includes(keyValue)) {

            setLastKey(keyValue)

            //sum
            //checks if it's first sum
            if (keyValue === "+" && (position1 !== "00" || position2 !== "00" || position3 !== "00") && !lastOperation && !operatorNumber) {
                setLastOperation(`${position1}:${position2}:${position3}${keyValue}`)
                clearFields('hour')
                setPositionCounter(1)

                setLastKey(keyValue)
                return
            }

            //show result or sum with next value
            if ((keyValue === "+" || "=") && (position1 !== "00" || position2 !== "00" || position3 !== "00") && lastOperation && !operatorNumber && lastKey === "+") {

                const secondQuery = `${position1}:${position2}:${position3}${keyValue}`

                let result

                result = secondsToHHMMSS(lastOperationToSeconds("+") + hoursFormatToSeconds(position1, position2, position3))

                setPosition1(result[0])
                setPosition2(result[1])
                setPosition3(result[2])
                
                toOperations(lastOperation, secondQuery, `${result[0]}:${result[1]}:${result[2]}`)

                setLastOperation("")

                setPositionCounter(1)

                setLastKey(keyValue)
                return
            }

            //multiply
            //operation query
            if (keyValue === "x" && (position1 !== "00" || position2 !== "00" || position3 !== "00") && !lastOperation) {
                setPositionCounter(7)
                setOperator("x")
                setLastKey(keyValue)
                return
            }

            //result
            if (keyValue === "=" && (position1 !== "00" || position2 !== "00" || position3 !== "00") && operator === "x" && operatorNumber) {
                
                const secondQuery = `${position1}:${position2}:${position3}${keyValue}`

                const result = secondsToHHMMSS(hoursFormatToSeconds(position1, position2, position3) * operatorNumber)

                setPosition1(result[0])
                setPosition2(result[1])
                setPosition3(result[2])

                toOperations(lastOperation, secondQuery, `${result[0]}:${result[1]}:${result[2]}`)

                clearFields('operator')
                setLastKey(keyValue)

            }

            //if sum or subtraction
            if ((keyValue === ("+" || "-")) && (position1 !== "00" || position2 !== "00" || position3 !== "00") && (operator === "x") && operatorNumber) {
                const result = secondsToHHMMSS(hoursFormatToSeconds(position1, position2, position3) * operatorNumber)

                setLastOperation(`${result[0]}:${result[1]}:${result[2]}`)
                clearFields('hour')
                clearFields('operator')
                setPositionCounter(1)
                setLastKey(keyValue)
            }

            //divider
            //operation query
            if (keyValue === "??" && (position1 !== "00" || position2 !== "00" || position3 !== "00") && !lastOperation) {
                setPositionCounter(7)
                setOperator("??")
                setLastKey(keyValue)
                return
            }

            //result
            if (keyValue === "=" && (position1 !== "00" || position2 !== "00" || position3 !== "00") && operator === "??" && operatorNumber) {

                const secondQuery = `${position1}:${position2}:${position3}${keyValue}`

                const result = secondsToHHMMSS(hoursFormatToSeconds(position1, position2, position3) / operatorNumber)

                setPosition1(result[0])
                setPosition2(result[1])
                setPosition3(result[2])

                toOperations(lastOperation, secondQuery, `${result[0]}:${result[1]}:${result[2]}`)

                clearFields('operator')

                setLastKey(keyValue)

            }

            //if sum or subtraction
            if ((keyValue === ("+" || "-")) && (position1 !== "00" || position2 !== "00" || position3 !== "00") && operator === "??" && operatorNumber) {
                const result = secondsToHHMMSS(hoursFormatToSeconds(position1, position2, position3) / operatorNumber)

                setLastOperation(`${result[0]}:${result[1]}:${result[2]}`)
                clearFields('hour')
                clearFields('operator')
                setPositionCounter(1)
                setLastKey(keyValue)
            }

            //subtraction
            //checks if it's first subtraction
            if (keyValue === "-" && (position1 !== "00" || position2 !== "00" || position3 !== "00") && !lastOperation && !operatorNumber) {
                
                setLastKey(keyValue)

                setLastOperation(`${position1}:${position2}:${position3}${keyValue}`)
                clearFields('hour')
                setPositionCounter(1)

                return
            }

            //show result or subtract from next value
            if ((keyValue === "-" || "=") && (position1 !== "00" || position2 !== "00" || position3 !== "00") && lastOperation && !operatorNumber && lastKey === "-") {

                const secondQuery = `${position1}:${position2}:${position3}${keyValue}`

                let result

                result = secondsToHHMMSS(lastOperationToSeconds("-") - hoursFormatToSeconds(position1, position2, position3))

                if(result[0].split("-").length > 1 ){
                    result[0] = result[0].split("-")
                    result[0] = "-" + result[0][1]
                }
                
                setPosition1(result[0])
                setPosition2(result[1])
                setPosition3(result[2])

                toOperations(lastOperation, secondQuery, `${result[0]}:${result[1]}:${result[2]}`)

                setLastOperation("")

                setLastKey(keyValue)

                setPositionCounter(1)
                return
            }
            
        }
    }

    return (
        <ScreenContext.Provider value={{
            position1,
            setPosition1,

            position2,
            setPosition2,

            position3,
            setPosition3,

            digitsInput,
            setPositionCounter,
            positionCounter,
            operator,

            setLastOperation,
            lastOperation,

            operatorNumber,
        }}>
            {props.children}
        </ScreenContext.Provider>
    )
}