import '../styles/screen.scss'

export function Screen() {
    
    return (
        <div id="screen">
            <p className="text-container">

                <span id="P1">00</span>

                <span className="hour-divisor">:</span>

                <span id="P2">00</span>

                <span className="hour-divisor">:</span>

                <span id="P3">00</span>

            </p>
        </div>
    )
}