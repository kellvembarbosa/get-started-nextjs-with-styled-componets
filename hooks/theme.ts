import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeTheme, themeState } from "../atoms/atomTheme";

export const useTheme = () => ({
    themeId: useRecoilValue(themeState),
    changeTheme : useSetRecoilState(changeTheme)
})