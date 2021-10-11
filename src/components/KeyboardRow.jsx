import '../styles/keyboardRow.scss'

export function KeyboardRow({symbols}) {
    
    return (
        <div className="keyboard-row">
            {
                Object.entries(symbols)
                .map(([key, value]) =>{
                    return(
                        <div key={key} className={
                            value === "=" ? "equal":
                            value === "+" ? "addition":
                            value === "-" ? "subtraction":
                            value === "x" ? "multiply":
                            value === "÷" ? "divider":
                            value
                            
                        }>{value}</div>
                    )
                })
            }
        </div>
    )
}