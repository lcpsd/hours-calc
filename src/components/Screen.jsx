import {useScreen} from '../hooks/useScreen'
import '../styles/screen.scss'

export function Screen() {

    const {operator, 
        positionCounter, 
        position1, 
        position2, 
        position3,
        setPositionCounter,
    } = useScreen()

    return (
        <div id="screen">
            <p id="last-operation">asas</p>

            <div className="text-container">

                <div id="P1" className={
                    positionCounter >= 1 && positionCounter <= 2 ? 
                    "positionActive" : ""} 
                    onClick={() => setPositionCounter(1)}>
                    
                        {position1}
                </div>

                <span className="hour-divisor">:</span>

                <div id="P2"  className={
                    positionCounter >= 3 && positionCounter <= 4 ? 
                    "positionActive" : ""}
                    onClick={() => setPositionCounter(3)}>
                    
                        {position2}
                </div>

                <span className="hour-divisor">:</span>

                <div id="P3" className={
                    positionCounter >= 5 && positionCounter <= 6 ? 
                    "positionActive" : ""}
                    onClick={() => setPositionCounter(5)}>

                        {position3}
                </div>
                
                {
                    operator ?
                    <span className="operator">{operator}</span>
                    :
                    <span></span>
                }

            </div>
        </div>
    )
}