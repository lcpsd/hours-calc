import {HistoryCard} from './HistoryCard'
import closeIcon from '../public/close.png'
import '../styles/historySection.scss'
import {useHistoryHook} from '../hooks/useHistoryHook'
import { useEffect, useState } from 'react'

export function HistorySection() {

    const {isMenuVisible, setMenuVisibility} = useHistoryHook()

    const [operations, setOperations] = useState([])

    let localStorageData = Object.entries(localStorage).filter(([key, value]) => key.includes("@hours-calc/"))

    async function getLocalStorage(){
        return await Promise.resolve(
            Object.entries(localStorage).filter(([key, value]) => key.includes("@hours-calc/"))
        )
    }

    useEffect(() => {
        async function fetchHistoryData(){

            let tempArray = await getLocalStorage()
    
            tempArray.sort((itemA, itemB) => {
                return (parseInt(itemA[0].split('@hours-calc/')[1]) - parseInt(itemB[0].split('@hours-calc/')[1]))
            })

            setOperations(tempArray)
        }

        fetchHistoryData()

    },[localStorageData])

    return (
        <div id="history-section" className={isMenuVisible}>

                <img id="close-icon" src={closeIcon} alt="" 
                onClick={() => setMenuVisibility('hidded')}/>
            
            <h3>History</h3>
            {
                operations.map((operation) => {
                    return <HistoryCard key={operation[0]} 
                    operation={operation[1].split(",")[0] + operation[1].split(",")[1]} 
                    result={operation[1].split(",")[2]}
                    />
                })
            }
            
        </div>
    )
}