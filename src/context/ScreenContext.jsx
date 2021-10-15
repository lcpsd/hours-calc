import { createContext, useState } from "react";

export const ScreenContext = createContext('')

export function ScreenContextProvider(props){

    //positions states
    const [position1, setPosition1] = useState("00")
    const [position2, setPosition2] = useState("00")
    const [position3, setPosition3] = useState("00")

    const [lastKey, setLastKey] = useState("")

    const [lastOperation, setLastOperation] = useState("")

    const [positionCounter, setPositionCounter] = useState(1)

    const [operator, setOperator] = useState("")

    const [operatorNumber, setOperatorNumber] = useState(Number)

    //logical of key inputs
    function digitsInput(keyValue){

        //functions
        function setDigitOne(setPosition){
            setPosition(keyValue)
            setPositionCounter(positionCounter + 1)
        }

        function setDigitTwo(setPosition, position){
            let ten = position + keyValue
            setPosition(ten)
            setPositionCounter(positionCounter + 1)
        }

        function clearFields(option){

            if(option === 'hour'){
                setPosition1("00") 
                setPosition2("00") 
                setPosition3("00")

                return
            }

            if('all'){
                setPosition1("00") 
                setPosition2("00") 
                setPosition3("00")
                setOperator("")
                setPositionCounter(1)
                setOperatorNumber()
                
                return
            }
        }

        function secondsToHHMMSS(secondsToConvert) {

            var sec_num = parseInt(secondsToConvert, 10)
            var hours   = Math.floor(sec_num / 3600)
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60)
            var seconds = sec_num - (hours * 3600) - (minutes * 60)
        
            if (hours   < 10) hours   = "0"+hours
            if (minutes < 10) minutes = "0"+minutes
            if (seconds < 10) seconds = "0"+seconds

            return [hours, minutes, seconds]
        }

        function hoursFormatToSeconds(hours, minutes, seconds){
            return (Number(hours) * 3600 ) + (Number(minutes)*60) + (Number(seconds))
        }

        function lastOperationToSeconds(){
            let splitedLastOperation = lastOperation.split(":")
            splitedLastOperation[2] = splitedLastOperation[2].split('+')[0]

            return hoursFormatToSeconds(
                splitedLastOperation[0],
                splitedLastOperation[1],
                splitedLastOperation[2])
        }

        //declarations
        const allOperators = ["P1", "P2", "P3", "x", "÷", "/", "-", "+", "=", "AC"]

        const positionOperators = ["P1", "P2", "P3"]

        const commumOperators = ["x", "÷", "-", "+", "="]

        //conditionals
        //checks value is a number
        if(!allOperators.includes(keyValue)){

            if((position1 || position2 || position3) !== "00" && lastKey === "+" && positionCounter === 1){
                setLastOperation(`${position1}:${position2}:${position3}${operator}`)
                clearFields('hour')
                setPositionCounter(1)
            }

            switch(positionCounter){
                case 1:
                    setDigitOne(setPosition1)
                    break;

                case 2:
                    setDigitTwo(setPosition1, position1)
                    break;

                case 3:
                    setDigitOne(setPosition2)
                    break;

                case 4:
                    setDigitTwo(setPosition2, position2)
                    break;
                case 5:
                    setDigitOne(setPosition3)
                    break;
                case 6:
                    setDigitTwo(setPosition3, position3)
                    setPositionCounter(1)
                    break;
                case 7:
                    setOperatorNumber(keyValue)
                    break;
                default:
                    return
            }

        }

        //Check position selectors
        if(positionOperators.includes(keyValue)){
            switch(keyValue){
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
        if(keyValue === "AC"){
            setLastOperation("")
            clearFields('all')
        }

        //checks commum math operators
        if(commumOperators.includes(keyValue)){

            setLastKey(keyValue)

            //checks if it's first sum
            if(keyValue === "+" && [position1, position2, position3] !== "00" && !lastOperation){
                setLastOperation(`${position1}:${position2}:${position3}${operator}`)
                clearFields('hour')
                setPositionCounter(1)

                return
            }

            if((keyValue === "+" || keyValue === "=") && (position1 || position2 || position3 !== "00") && lastOperation){

                const result = secondsToHHMMSS(lastOperationToSeconds() + hoursFormatToSeconds(position1, position2, position3))

                setPosition1(result[0])
                setPosition2(result[1])
                setPosition3(result[2])

                setLastOperation("")

                setPositionCounter(1)
                return
            }
        }


    }

    return(
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

            operatorNumber
            }}>
            {props.children}
        </ScreenContext.Provider>
    )
}