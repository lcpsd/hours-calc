import { useHistoryHook } from '../hooks/useHistoryHook'
import history from '../public/history.png'
import '../styles/showHistoryButton.scss'

export function ShowHistoryButton() {
    
    const {setMenuVisibility} = useHistoryHook()

    return (
        <button className="show-history-button" 
        onClick={() => setMenuVisibility('visible')}>
            <img src={history} alt="" />
        </button>
    )
}