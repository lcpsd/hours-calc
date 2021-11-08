import { createContext, useState } from "react";

export const HistoryContext = createContext('')

export function HistoryContextProvider(props){

    const [operations, setOperations] = useState([])

    const [isMenuVisible, setMenuVisibility] = useState('hidded')

    return(
        <HistoryContext.Provider value={{isMenuVisible, setMenuVisibility, operations, setOperations}}>
            {props.children}
        </HistoryContext.Provider>
    )
}