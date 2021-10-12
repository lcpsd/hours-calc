import { Navbar } from '../components/Navbar'
import '../styles/home.scss'
import { CalculatorSection } from './CalculatorSection'
import { ShowHistoryButton } from './ShowHistoryButton'

export function Home() {
    
    return (
        <div id="home">
            <Navbar/>
            <main>
                <CalculatorSection/>
                <ShowHistoryButton/>
            </main>
        </div>
    )
}