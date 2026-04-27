import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export const UseTheme = () =>{
    const themeContext = useContext(ThemeContext)
    
    return themeContext;
}