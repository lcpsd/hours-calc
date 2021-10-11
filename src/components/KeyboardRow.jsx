import '../styles/keyboardRow.scss'
import { KeyboardKey } from './KeyboardKey'

export function KeyboardRow({symbols}) {
    
    return (
        <div className="keyboard-row">
            {
                Object.entries(symbols)
                .map(([key, value]) =>{
                    return(
                        <KeyboardKey key={key} value={value}/>
                    )
                })
            }
        </div>
    )
}