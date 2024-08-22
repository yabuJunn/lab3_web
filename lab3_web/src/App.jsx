import { Progress } from './componets/progress/progress'
import { Button } from './componets/button/button'
import { ResponseCard } from './componets/responseCard/responseCard'
import { ResponseOptions } from './componets/responseOptions/responseOptions'

import applejack from './assets/Applejack.jpg'


function App() {
  return (
    <>
      <div id='appContainer'>

      </div>
      {/* <Progress actualPage="1" totalPages="10"></Progress>
      <Button text="Hola como estas"></Button>
      <ResponseCard type="text" text="Respuesta"></ResponseCard>
      <ResponseCard type="image" image={applejack}></ResponseCard> */}

      <ResponseOptions></ResponseOptions>
    </>
  )
}

export default App
