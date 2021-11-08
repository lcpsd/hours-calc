import {HistoryCard} from './HistoryCard'
import closeIcon from '../public/close.png'
import '../styles/historySection.scss'
import {useHistoryHook} from '../hooks/useHistoryHook'

export function HistorySection() {

    const {isMenuVisible, setMenuVisibility, operations} = useHistoryHook()

    return (
        <div id="history-section" className={isMenuVisible}>

                <img id="close-icon" src={closeIcon} alt="" 
                onClick={() => setMenuVisibility('hidded')}/>
            
            <h3>History</h3>
            {   operations &&
                    operations.map(({
                        id,
                        operator,
                        lastOperation,
                        currentOperation,
                        result
                    }) => {
                        return <HistoryCard key={id} 
                        operation={lastOperation+operator+currentOperation} 
                        result={result}
                        />
                    })
            }
            
        </div>
    )
}