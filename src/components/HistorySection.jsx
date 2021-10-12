import {HistoryCard} from './HistoryCard'
import closeIcon from '../public/close.png'
import '../styles/historySection.scss'
import {useHistoryHook} from '../hooks/useHistoryHook'

export function HistorySection() {

    const {isMenuVisible, setMenuVisibility} = useHistoryHook()

    const operations=[
        {
            id:1,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:2,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:3,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:4,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:5,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:6,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:7,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:8,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:9,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        },
        {
            id:10,
            operation:"00:01:00 * 10",
            result: "00:10:00"
        }
    ]

    return (
        <div id="history-section" className={isMenuVisible}>

                <img id="close-icon" src={closeIcon} alt="" 
                onClick={() => setMenuVisibility('hidded')}/>
            
            <h3>History</h3>
            {
                operations.map(({id ,operation, result}) => {
                    return <HistoryCard key={id} operation={operation} 
                    result={result}
                    />
                })
            }
            
        </div>
    )
}