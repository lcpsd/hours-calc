import { Navbar } from '../components/Navbar'
import { Screen } from '../components/Screen'
import {KeyboardSection} from '../components/KeyboardSection'
import '../styles/home.scss'
import { ShowHistoryButton } from '../components/ShowHistoryButton'
import { HistorySection } from '../components/HistorySection'

export function Home() {
    
    return (
        <div className="main-container">
            <div id="home">
                <Navbar/>
                <main>
                    <Screen/>
                    <KeyboardSection/>
                    <ShowHistoryButton/>
                </main>

                <aside>
                    <HistorySection/>  
                </aside>
            </div>
        </div>
    )
}