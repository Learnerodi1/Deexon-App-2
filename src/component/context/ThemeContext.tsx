import { createContext, useState } from "react";
type themeBody = {
    theme: boolean,
    toggleTheme : ()=>void;
}
export let ThemeContext = createContext<themeBody | null>(null)

export const ThemeContextProvider = ({children} : {children : React.ReactNode}) =>{
    let [theme, setTheme] = useState(false)
    const toggleTheme = () => setTheme(prev => !prev)
    
    return(
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}