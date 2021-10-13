import '../styles/home.scss'

import { ShowHistoryButton } from '../components/ShowHistoryButton'
import { HistorySection } from '../components/HistorySection'
import { CalculatorSection } from '../components/CalculatorSection'
import { ScreenContextProvider } from '../context/ScreenContext'
import { KeyboardContextProvider } from '../context/KeyboardContext'


export function Home() {
    
    return (
        <main>
            <div className="container">
                <KeyboardContextProvider>
                    <ScreenContextProvider>
                        <CalculatorSection/>
                        <ShowHistoryButton/>
                        <HistorySection/>
                    </ScreenContextProvider>
                </KeyboardContextProvider>
            </div>
        </main>
    )
}