import {useScreen} from '../hooks/useScreen'
import '../styles/screen.scss'

export function Screen() {
    
    const {positionCounter, position1, position2, position3} = useScreen()

    return (
        <div id="screen">
            <div className="text-container">

                <div id="P1" className={
                    positionCounter >= 1 && positionCounter <= 2 ? 
                    "positionActive" : ""}>{position1}</div>

                <span className="hour-divisor">:</span>

                <div id="P2"  className={
                    positionCounter >= 3 && positionCounter <= 4 ? 
                    "positionActive" : ""}>{position2}</div>

                <span className="hour-divisor">:</span>

                <div id="P3" className={
                    positionCounter >= 5 && positionCounter <= 6 ? 
                    "positionActive" : ""}>{position3}</div>

                {/* 
                    1 - Exigir operador após a posição 3

                    2 - aguardar e coletar a próxima entrada de hora

                    3 - Pegar o texto que está em cada div e concatenar em uma única string

                    4 - converter operadores para linguagem de programação

                    5 - fazer o calculo de hora de acordo com os valores

                    6 - exibir resultado final
                */}

            </div>
        </div>
    )
}