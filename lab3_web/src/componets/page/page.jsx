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

//Elige la imagen que mejor representa tu estilo ideal

import a5 from "../../assets/Vestido elegante con gemas.jpg"
import b5 from "../../assets/Atuendo de Fiesta.jpg"
import c5 from "../../assets/Atuendo deportivo.jpg"
import d5 from "../../assets/Atuendo con mariposas.jpg"

//¿Cuál de estas imágenes te inspira más?}

import a7 from "../../assets/Montaña al amanecer.jpg"
import b7 from "../../assets/Un huerto.jpg"
import c7 from "../../assets/Nubes suaves.jpg"
import d7 from "../../assets/Habitacion de costura.jpg"

//Elige la imagen que te haga sonreír

import a8 from "../../assets/Grupo de amigos riendo.jpg"
import b8 from "../../assets/Arcoiris despues de la lluvia.jpg"
import c8 from "../../assets/Conejo en jardin.jpg"
import d8 from "../../assets/Libros y una taza de cafe.jpg"

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

        {/* <div className='page' id='pregunta2'>
            <h1>¿Cuál de estas imágenes te hace sentir más en paz?</h1>
            <Progress actualPage="2" totalPages="10"></Progress>
            <ResponseOptions type="image" quant={[a2, b2, c2, d2]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta3'>
            <h1>¿Cómo te enfrentas a un desafío difícil?</h1>
            <Progress actualPage="3" totalPages="10"></Progress>
            <ResponseOptions type="text" quant={["Con lógica y un plan bien pensado", "Con valentía y determinación", "Pidiendo ayuda a mis amigos, porque juntos somos más fuertes"]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta4'>
            <h1>¿Cuál es tu forma favorita de expresarte?</h1>
            <Progress actualPage="4" totalPages="10"></Progress>
            <ResponseOptions type="text" quant={["A través de la moda y el diseño", "Organizando eventos divertidos y memorables", "Cuidando de otros, mostrando compasión y amabilidad"]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta5'>
            <h1>Elige la imagen que mejor representa tu estilo ideal</h1>
            <Progress actualPage="5" totalPages="10"></Progress>
            <ResponseOptions type="image" quant={[a2, b2, c2, d2]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta6'>
            <h1>¿Cómo manejas el estrés?</h1>
            <Progress actualPage="6" totalPages="10"></Progress>
            <ResponseOptions type="text" quant={["Me organizo y hago una lista de tareas para mantener el control", "Me distraigo con una actividad divertida o creativa", "Me tomo un tiempo para relajarme en la naturaleza"]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta7'>
            <h1>¿Cuál de estas imágenes te inspira más?</h1>
            <Progress actualPage="7" totalPages="10"></Progress>
            <ResponseOptions type="image" quant={[a7, b7, c7, d7]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta8'>
            <h1>Elige la imagen que te haga sonreír</h1>
            <Progress actualPage="8" totalPages="10"></Progress>
            <ResponseOptions type="image" quant={[a8, b8, c8, d8]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta9'>
            <h1>¿Qué harías si un amigo necesita ayuda urgente?</h1>
            <Progress actualPage="9" totalPages="10"></Progress>
            <ResponseOptions type="text" quant={["Iría a ayudarlo, nada es más importante que estar ahí para un amigo", "Le ofrecería un hombro en el que apoyarse y palabras de consuelo", "Buscaría la forma más práctica y rápida de resolver su problema"]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

        {/* <div className='page' id='pregunta10'>
            <h1>¿Qué valoras más en una amistad?</h1>
            <Progress actualPage="10" totalPages="10"></Progress>
            <ResponseOptions type="text" quant={["Iría a ayudarlo, nada es más importante que estar ahí para un amigo", "Le ofrecería un hombro en el que apoyarse y palabras de consuelo", "Buscaría la forma más práctica y rápida de resolver su problema"]}></ResponseOptions>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}
    </>
}