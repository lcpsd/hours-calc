import { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

export function useHistoryHook(){
    return useContext(HistoryContext)
}