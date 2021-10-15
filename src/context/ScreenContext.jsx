import { createContext, useState } from "react";

export const ScreenContext = createContext('')

export function ScreenContextProvider(props){

    //positions states
    const [position1, setPosition1] = useState("00")
    const [position2, setPosition2] = useState("00")
    const [position3, setPosition3] = useState("00")

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

        function clearFields(){
            setPosition1("00") 
            setPosition2("00") 
            setPosition3("00")
            setOperator("")
            setPositionCounter(1)
            setOperatorNumber()
        }

        function toHHMMSS(secondsToConvert) {

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

        //declarations
        const allOperators = ["P1", "P2", "P3", "x", "÷", "/", "-", "+", "="]

        const commumOperators = ["x", "÷", "/", "-", "+"]

        //conditionals
        //checks value is a number
        if(!allOperators.includes(keyValue)){
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

        //checks clear screen key
        if(keyValue === "AC"){
            setLastOperation("")
            clearFields()
        }

        //checks commum math operators
        if(commumOperators.includes(keyValue)){
            
            //sum
            if(keyValue === '+' && (position1 || position2 || position3) !== "00" && lastOperation === ''){
                setLastOperation(`${position1}:${position2}:${position3}${operator}${operatorNumber}`)

                setPosition1("00") 
                setPosition2("00") 
                setPosition3("00")
            }

            //if sum started
            if(keyValue === '+' && (position1 || position2 || position3) !== "00" && lastOperation !== ""){

                function lastOperationToSeconds(){
                        let splitedLastOperation = lastOperation.split(":")
                        splitedLastOperation[2] = splitedLastOperation[2].split('+')[0]

                        return hoursFormatToSeconds(
                            splitedLastOperation[0],
                            splitedLastOperation[1],
                            splitedLastOperation[2])
                    }
                
                const lastOperationInSeconds = lastOperationToSeconds()
                
                let resultFieldsToSeconds = hoursFormatToSeconds(position1, position2, position3)

                const finalSeconds = lastOperationInSeconds + resultFieldsToSeconds

                let finalHour = toHHMMSS(finalSeconds)

                setPosition1(finalHour[0])
                setPosition2(finalHour[1])
                setPosition3(finalHour[2])

                setLastOperation("")
                setPositionCounter(1)

                return
            }

        }

        //checks equals about equals, multiply and divider
        if(keyValue === "=" && (operator === "x" || operator === "÷")){
            
            //convert fields to seconds
            let resultFieldsToSeconds = hoursFormatToSeconds(position1, position2, position3)

            /* eslint-disable */
            operator === "x" ? 
            resultFieldsToSeconds *= Number(operatorNumber)
            :operator === "÷" ?resultFieldsToSeconds = resultFieldsToSeconds / Number(operatorNumber) 
            : null
            
            setLastOperation(`${position1}:${position2}:${position3}${operator}${operatorNumber}`)

            let finalHour = toHHMMSS(resultFieldsToSeconds)

            setPosition1(finalHour[0])
            setPosition1(finalHour[1])
            setPosition1(finalHour[2])

            setOperator("")
            setPositionCounter(1)
            setOperatorNumber()
            
        }

        //Check position selectors
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