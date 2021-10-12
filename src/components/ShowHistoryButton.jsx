import arrow from '../public/arrow.png'
import '../styles/showHistoryButton.scss'

export function ShowHistoryButton() {
    
    return (
        <button className="show-history-button">
            <img src={arrow} alt="" />
        </button>
    )
}