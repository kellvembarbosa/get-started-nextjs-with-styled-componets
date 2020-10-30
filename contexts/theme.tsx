import React, { useContext, useEffect, useState } from "react";
import { themes } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/theme";
import { DEFAULT_THEME } from "../constants/data";

function ThemeRecoilProvider({ children }) {
    const { themeId, changeTheme } = useTheme()
    const [monted, setMonted] = useState(false)

    useEffect(() => {
        const darkModeValue = localStorage.getItem('DARK_MODE')
        changeTheme(darkModeValue ? parseInt(darkModeValue) : DEFAULT_THEME )
        setMonted(true)
    }, [])

    if(!monted){
        return <div />
    }
    
    return (
        <ThemeProvider theme={themes[themeId]}>
            { children}
        </ThemeProvider>
    )
}

export default ThemeRecoilProvider