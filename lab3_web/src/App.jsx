import { Progress } from './componets/progress/progress'
import { Button } from './componets/button/button'
import { ResponseCard } from './componets/responseCard/responseCard'
import { ResponseOptions } from './componets/responseOptions/responseOptions'

import applejack from './assets/Applejack.jpg'

//¿Cuál de estas imágenes te hace sentir más en paz?

import a2 from "./assets/Campo de Manzanos.jpg"
import b2 from "./assets/Biblioteca.jpg"
import c2 from "./assets/Prado con animales.jpg"
import d2 from "./assets/Cielo azul con arcoiris.jpg"

function App() {
  return (
    <>
      <div id='appContainer'>

      </div>
      {/* <Progress actualPage="1" totalPages="10"></Progress>
      <Button text="Hola como estas"></Button>
      <ResponseCard type="text" text="Respuesta"></ResponseCard>
      <ResponseCard type="image" image={applejack}></ResponseCard> */}

      <ResponseOptions type="text" quant={["1", "2", "3", "4"]}></ResponseOptions>

      <ResponseOptions type="image" quant={[a2, b2, c2, d2]}></ResponseOptions>
    </>
  )
}

export default App
