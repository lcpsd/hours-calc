import { Navbar } from '../components/Navbar'
import { Screen } from '../components/Screen'
import {KeyboardSection} from '../components/KeyboardSection'
import '../styles/home.scss'
import { ScrollScreenButton } from '../components/ScrollScreenButton'
import { HistorySection } from '../components/HistorySection'

export function Home() {
    
    return (
        <div className="main-container">
            <div id="home">
                <Navbar/>
                <main>
                    <Screen/>
                    <KeyboardSection/>
                    <ScrollScreenButton/>
                </main>
                <footer>
                    <HistorySection/>  
                </footer>
            </div>
        </div>
    )
}