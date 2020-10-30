import { atom, selector } from "recoil";
import { DEFAULT_THEME } from "../constants/data";

 export const themeState = atom({
     key: 'themeState',
     default: DEFAULT_THEME
 })

export const changeTheme = selector({
    key: 'changeTheme',
    get: ({get}) => {
        const currentTheme = get(themeState)
        const localTheme = localStorage.getItem('DARK_MODE')
        
        return parseInt(localTheme) || currentTheme
    },
    set: ({set}, newValue) => {
        localStorage.setItem('DARK_MODE', newValue.toString());
        set(themeState, newValue)
    }
})