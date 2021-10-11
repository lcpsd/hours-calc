import { Navbar } from '../components/Navbar'
import { Screen } from '../components/Screen'
import '../styles/home.scss'

export function Home() {
    
    return (
        <div id="home">
            <Navbar/>
            <main>
                <Screen/>
            </main>
        </div>
    )
}