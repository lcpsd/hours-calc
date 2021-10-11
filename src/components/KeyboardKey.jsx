import '../styles/keyboardKey.scss'

export function KeyboardKey({value}) {
    
    return (
        <div className={
            value === "=" ? "equal keyboard-key":
            value === "+" ? "addition keyboard-key":
            value === "-" ? "subtraction keyboard-key":
            value === "x" ? "multiply keyboard-key":
            value === "÷" ? "divider keyboard-key":
            value + " keyboard-key"
        } key={toString(value)}>{value}</div>
    )
}