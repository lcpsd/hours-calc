import '../styles/historyCard.scss'

export function HistoryCard({operation, result}) {
    
    return (
        <div className="history-card">
            <p className="operation">{operation}</p>
            <p className="result">{result}</p>
        </div>
    )
}