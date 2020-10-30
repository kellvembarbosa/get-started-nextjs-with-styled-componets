import Main from '../components/layout/Main'
import { useTheme } from '../hooks/theme'

export default function Home() {
  const { themeId, changeTheme } = useTheme()
  return (
    <Main>
      <button onClick={() => changeTheme(themeId ? 0 : 1) }>Alterar Theme { themeId == 1 ? 'DARK' : 'LIGHT' } </button>
    </Main>
  )
}
