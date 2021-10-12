import {KeyboardRow} from '../components/KeyboardRow'

import '../styles/keyboardSection.scss'

export function KeyboardSection() {
    
    return (
        <div id="keyboard-section">

            <KeyboardRow symbols={{
                1: "P1",
                2: "P2",
                3: "P3",
                4: ":",
            }}/>

            <KeyboardRow symbols={{
                1: "7",
                2: "8",
                3: "9",
                4: "AC"
            }}/>

            <KeyboardRow symbols={{
                1: "4",
                2: "5",
                3: "6",
                4: "÷"
            }}/>

            <KeyboardRow symbols={{
                1: "1",
                2: "2",
                3: "3",
                4: "x"
            }}/>

            <KeyboardRow symbols={{
                1: "0",
                2: "=",
                3: "+",
                4: "-",
            }}/>
        </div>
    )
}