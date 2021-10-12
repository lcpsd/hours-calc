import '../styles/home.scss'

import { ShowHistoryButton } from '../components/ShowHistoryButton'
import { HistorySection } from '../components/HistorySection'
import { CalculatorSection } from '../components/CalculatorSection'


export function Home() {
    
    return (
        <main>
            <div className="container">
                <CalculatorSection/>
                <ShowHistoryButton/>
                <HistorySection/>
            </div>
        </main>
    )
}