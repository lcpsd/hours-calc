import { useContext } from "react";
import { ScreenContext } from "../context/ScreenContext";

export function useScreen(){
    return useContext(ScreenContext)
}