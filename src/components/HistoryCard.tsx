import '../styles/historyCard.scss'

interface HistoryCardProps {
    operation: string
    result: string
}

export function HistoryCard({operation, result}:HistoryCardProps) {
    
    return (
        <div className="history-card">
            <p className="operation">{operation}</p>
            <p className="result">{result}</p>
        </div>
    )
}