import './page.css'

import { Progress } from '../progress/progress'
import { Button } from '../button/button'
import { ResponseCard } from '../responseCard/responseCard'
import { ResponseOptions } from '../responseOptions/responseOptions'

import imagenPortada from '../../assets/MLP_Friendship_is_Magic_Group_Shot.jpg'

import applejack from '../../assets/Applejack.jpg'

//¿Cuál de estas imágenes te hace sentir más en paz?

import a2 from "../../assets/Campo de Manzanos.jpg"
import b2 from "../../assets/Biblioteca.jpg"
import c2 from "../../assets/Prado con animales.jpg"
import d2 from "../../assets/Cielo azul con arcoiris.jpg"

export function Page() {
    return <>
        {/* <div className='page' id='portada'>
            <h1>¿Qué personaje de My Little Pony eres?</h1>

            <img src={imagenPortada} alt="Mane Six" id='imagenPortada' />

            <p>¡Sumérgete en el colorido mundo de Equestria! ¿Alguna vez te has preguntado qué pony de las Mane Six se parece más a ti? Desde la leal Rainbow Dash hasta la generosa Rarity, cada uno tiene algo especial. Responde este divertido test y descubre cuál de estos encantadores personajes refleja tu personalidad. ¡Prepárate para un viaje mágico y personal!</p>

            <Button text="Comenzar test"></Button>
        </div> */}

        {/* <div className='page' id='pregunta1'>
            <h1>¿Cómo prefieres pasar un día libre?</h1>
            <Progress actualPage="1" totalPages="10"></Progress>
            <ResponseOptions type="text" quant={["Organizando una fiesta para mis amigos", "Perfeccionando un nuevo proyecto creativo", "Leyendo un buen libro en un lugar tranquilo", "Explorando al aire libre, disfrutando de la naturaleza"]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        <div className='page' id='pregunta2'>
            <h1>¿Cuál de estas imágenes te hace sentir más en paz?</h1>
            <Progress actualPage="2" totalPages="10"></Progress>
            <ResponseOptions type="image" quant={[a2, b2, c2, d2]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div>
    </>
}