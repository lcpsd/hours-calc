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
        }

        const allOperators = ["P1", "P2", "P3", "x", "÷", "/", "-", "+", "="]

        const commumOperators = ["x", "÷", "/", "-", "+", "="]

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

            clearFields()
        }

        if(commumOperators.includes(keyValue)){
            setOperator(keyValue)
            setPositionCounter(7)
        }

        if(keyValue === "="){
            setLastOperation(`${position1}:${position2}:${position3}+${operator}+${operatorNumber}`)
            
            clearFields()
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