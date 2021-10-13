import { createContext, useState } from "react";

export const KeyboardContext = createContext('')

export function KeyboardContextProvider(props){

    const [currentKey, setCurrentKey] = useState('')

    return(
        <KeyboardContext.Provider value={{currentKey, setCurrentKey}}>
            {props.children}
        </KeyboardContext.Provider>
    )
}