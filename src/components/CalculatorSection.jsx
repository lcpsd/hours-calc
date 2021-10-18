import { Screen } from '../components/Screen'
import {KeyboardSection} from '../components/KeyboardSection'
import '../styles/calculatorSection.scss'

export function CalculatorSection() {
    
    return (
        <div id="calculator-section">
            <Screen/>
            <KeyboardSection/>
        </div>
    )
}