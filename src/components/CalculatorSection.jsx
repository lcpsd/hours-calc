import { Screen } from '../components/Screen'
import {KeyboardSection} from '../components/KeyboardSection'
import '../styles/home.scss'

export function CalculatorSection() {
    
    return (
        <section id="calculator-section">
            <Screen/>
            <KeyboardSection/>
        </section>
    )
}