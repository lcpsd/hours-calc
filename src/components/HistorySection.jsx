import {HistoryCard} from './HistoryCard'
import '../styles/historySection.scss'

export function HistorySection() {
    
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
    ]

    return (
        <div id="history-section">
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