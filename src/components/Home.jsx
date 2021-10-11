import { Navbar } from '../components/Navbar'
import '../styles/home.scss'
import { CalculatorSection } from './CalculatorSection'

export function Home() {
    
    return (
        <div id="home">
            <Navbar/>
            <main>
                <CalculatorSection/>
            </main>
        </div>
    )
}