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


                {/* 
                
                    1 - Criar lógica de multiplicação
                        1 - Pegar o texto que está em cada div e concatenar em uma única string

                        2 - separar hora, minuto e segundo

                        3 - transformar todos em minutos

                        4 - fazer a multiplicação

                        5 - exibir resultado final
                    
                    3 - Criar lógica de soma
                        1 - Pegar o texto que está em cada div e concatenar em uma única string

                        2 - separar hora, minuto e segundo

                        3 - transformar todos em minutos

                        4 - somar todos

                        5 - transformar todos em hora

                        6 - armazenar em um estado

                        7 - aguardar a segunda entrada, refazer processos, fazer o calculo

                        6 - exibir resultado final

                */}

            </div>
        </div>
    )
}