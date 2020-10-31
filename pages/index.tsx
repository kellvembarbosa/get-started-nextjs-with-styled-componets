import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Main from '../components/layout/Main'
import { themeState } from '../recoils/atoms'
import { changeMode } from '../recoils/selectors';

export default function Home() {
  const isDarkMode = useRecoilValue(themeState)
  const setDarkMode = useSetRecoilState(changeMode); 
  return (
    <Main>
      <button onClick={() => setDarkMode(!isDarkMode) }>Alterar Theme {isDarkMode ? 'LIGHT' : 'DARK' } </button>
    </Main>
  )
}
