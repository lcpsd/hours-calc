import arrow from '../public/arrow.png'
import '../styles/scrollScreenButton.scss'

export function ScrollScreenButton() {
    
    return (
        <button className="scroll-screen-button">
            <img src={arrow} alt="" />
        </button>
    )
}