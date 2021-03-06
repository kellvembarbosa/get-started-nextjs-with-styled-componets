import { atom } from "recoil"
import { DefaultTheme } from 'styled-components'

export const DARK_THEME: DefaultTheme = {
    colors: {
        primaryColor: "#4447E2",
        secundaryColor: "#5F5F6E",
        MainBackgroundColor: "#131419",
        SecundaryBackgroundColor: "#1C1C24",
        cardColor: "#2D2D3A",

        textColor: "#fff",
        secundaryTextColor: "#fdfdfd",

        textDarkColor: "#000",
        secundaryTextDarkColor: "#333",

        switchSun: "#ffd700",
        switchMoon: "#ffffff"
    },

    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    }
}

export const LIGHT_THEME: DefaultTheme = {
    colors: {
        primaryColor: "#4447E2",
        secundaryColor: "#5F5F6E",
        MainBackgroundColor: "#fdfdfd",
        SecundaryBackgroundColor: "#ffff",
        cardColor: "#fdfdfd",

        textColor: "#000",
        secundaryTextColor: "#333",

        textDarkColor: "#fff",
        secundaryTextDarkColor: "#fdfdfd",
        
        switchSun: "#ffd700",
        switchMoon: "#ffffff"
    },

    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    }
}