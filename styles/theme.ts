import { atom } from "recoil"

export interface ThemeObject {
    colors: {
        primaryColor: string,
        secundaryColor: string,
        MainBackgroundColor: string,
        SecundaryBackgroundColor : string,
        cardColor: string,

        textColor: string,
        secundaryTextColor: string,

        textDarkColor: string,
        secundaryTextDarkColor: string
    },
    breakpoints: {
        sm: string,
        md: string,
        lg: string,
        xl: string,
    }
}

export const themes: ThemeObject[] = [
    {
        colors: {
            primaryColor: "#4447E2",
            secundaryColor: "#5F5F6E",
            MainBackgroundColor: "#131419",
            SecundaryBackgroundColor: "#1C1C24",
            cardColor: "#2D2D3A",

            textColor: "#fff",
            secundaryTextColor: "#fdfdfd",

            textDarkColor: "#000",
            secundaryTextDarkColor: "#333"
        },

        breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        }
    },
    {
        colors: {
            primaryColor: "#4447E2",
            secundaryColor: "#5F5F6E",
            MainBackgroundColor: "#fdfdfd",
            SecundaryBackgroundColor: "#ffff",
            cardColor: "#fdfdfd",

            textColor: "#000",
            secundaryTextColor: "#333",

            textDarkColor: "#fff",
            secundaryTextDarkColor: "#fdfdfd"
        },

        breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        }
    }
]