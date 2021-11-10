import { Screen } from './Screen'
import {KeyboardSection} from './KeyboardSection'
import '../styles/calculatorSection.scss'

export function CalculatorSection() {
    
    return (
        <div id="calculator-section">
            <Screen/>
            <KeyboardSection/>
        </div>
    )
}