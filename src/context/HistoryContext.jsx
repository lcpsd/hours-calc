import { createContext, useState } from "react";

export const HistoryContext = createContext('')

export function HistoryContextProvider(props){

    const [isMenuVisible, setMenuVisibility] = useState('hidded')

    return(
        <HistoryContext.Provider value={{isMenuVisible, setMenuVisibility}}>
            {props.children}
        </HistoryContext.Provider>
    )
}