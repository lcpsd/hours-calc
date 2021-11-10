import { createContext, useState, ReactNode } from "react";

interface Operation {
    id: Number
    operator: String
    lastOperation: string
    currentOperation: string
    result: string
}

interface HistoryProviderProps {
    children: ReactNode
}

interface HistoryProviderValue {
    operations: Operation[]
    setOperations: (value: Operation[]) => void
    isMenuVisible: string
    setMenuVisibility: (value: string) => void
}

export const HistoryContext = createContext<HistoryProviderValue>({} as HistoryProviderValue)

export function HistoryContextProvider(props:HistoryProviderProps){

    const [operations, setOperations] = useState<Operation[]>([])

    const [isMenuVisible, setMenuVisibility] = useState('hidded')

    return(
        <HistoryContext.Provider value={{isMenuVisible, setMenuVisibility, operations, setOperations}}>
            {props.children}
        </HistoryContext.Provider>
    )
}