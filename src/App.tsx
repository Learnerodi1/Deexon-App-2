import './App.css'
import { ThemeContextProvider } from './component/context/ThemeContext'
// import { BodyLayout } from './component/body/bodyLayout'
import { AllRoutes } from './component/routes/routes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ThemeContextProvider>
      <AllRoutes/>
    </ThemeContextProvider>
    </>
  )
}

export default App
