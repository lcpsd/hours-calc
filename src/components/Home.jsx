import { Navbar } from '../components/Navbar'
import '../styles/home.scss'
import { CalculatorSection } from './CalculatorSection'
import { ScrollScreenButton } from './ScrollScreenButton'

export function Home() {
    
    return (
        <div id="home">
            <Navbar/>
            <main>
                <CalculatorSection/>
                <ScrollScreenButton/>
            </main>
        </div>
    )
}