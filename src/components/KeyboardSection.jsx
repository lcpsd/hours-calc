//import { useEffect, useState } from 'react'
import {KeyboardRow} from '../components/KeyboardRow'
//import { useScreen } from '../hooks/useScreen'
import '../styles/keyboardSection.scss'

export function KeyboardSection() {
    
    // const [hasKeyDown, setHasKeyDown] = useState(false)

    // const {digitsInput} = useScreen()

    // useEffect(() => {

    //     if(!hasKeyDown){
    //         setHasKeyDown(true)

    //         window.addEventListener('keydown', event => {
    //             digitsInput(event.key)
    //         })
    //     }
    // }, [hasKeyDown, digitsInput])

    return (
        <div id="keyboard-section">

            <KeyboardRow symbols={{
                1: "P1",
                2: "P2",
                3: "P3",
                4: "AC"
            }}/>

            <KeyboardRow symbols={{
                1: "7",
                2: "8",
                3: "9",
                4: "÷"
            }}/>

            <KeyboardRow symbols={{
                1: "4",
                2: "5",
                3: "6",
                4: "x"
            }}/>

            <KeyboardRow symbols={{
                1: "1",
                2: "2",
                3: "3",
                4: "-"
            }}/>

            <KeyboardRow symbols={{
                1: "0",
                2: "=",
                3: "+",
            }}/>
        </div>
    )
}