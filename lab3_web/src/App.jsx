import { Progress } from './componets/progress/progress'
import { Button } from './componets/button/button'

function App() {
  return (
    <>
      <div id='appContainer'>

      </div>
      <Progress actualPage="1" totalPages="10"></Progress>
      <Button text="Hola como estas"></Button>
    </>
  )
}

export default App
