import './page.css'

import { useState } from 'react'

import { Progress } from '../progress/progress'
import { Button } from '../button/button'
import { ResponseCard } from '../responseCard/responseCard'
import { ResponseOptions } from '../responseOptions/responseOptions'
import { ResultCard } from '../resultCard/resultCard'

import imagenPortada from '../../assets/MLP_Friendship_is_Magic_Group_Shot.jpg'

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

//Imagenes Mane Six
import twilightSparkle from '../../assets/Twilight Sparkle.jpg'
import rainbowDash from '../../assets/Rainbow_Dash.jpg'
import applejack from '../../assets/Applejack.jpg'
import rarity from '../../assets/Rarity.jpg'
import fluttershy from '../../assets/Fluttershy.jpg'
import pinkiePie from '../../assets/PinkiePie.jpg'



export function Page() {
    const [page, setPage] = useState(0)

    const [respuestas, setRespuestas] = useState(["", "", "", "", "", "", "", "", "", ""])

    switch (page) {
        case 0:
            return <>
                <div className='page' id='portada'>
                    <h1>¿Qué personaje de My Little Pony eres?</h1>

                    <img src={imagenPortada} alt="Mane Six" id='imagenPortada' />

                    <p>¡Sumérgete en el colorido mundo de Equestria! ¿Alguna vez te has preguntado qué pony de las Mane Six se parece más a ti? Desde la leal Rainbow Dash hasta la generosa Rarity, cada uno tiene algo especial. Responde este divertido test y descubre cuál de estos encantadores personajes refleja tu personalidad. ¡Prepárate para un viaje mágico y personal!</p>

                    <Button text="Comenzar test" action={() => { setPage(1) }}></Button>
                </div>
            </>
        case 1:
            return <>
                <div className='page' id='pregunta1'>
                    <h1>¿Cómo prefieres pasar un día libre?</h1>
                    <Progress actualPage="1" totalPages="10"></Progress>
                    <ResponseOptions type="text" numQ={1} actionRes={respuestas} quant={["Organizando una fiesta para mis amigos", "Perfeccionando un nuevo proyecto creativo", "Leyendo un buen libro en un lugar tranquilo", "Explorando al aire libre, disfrutando de la naturaleza"]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(2) }}></Button>
                </div>
            </>
        case 2:
            return <>
                <div className='page' id='pregunta2'>
                    <h1>¿Cuál de estas imágenes te hace sentir más en paz?</h1>
                    <Progress actualPage="2" totalPages="10"></Progress>
                    <ResponseOptions type="image" quant={[a2, b2, c2, d2]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(3) }}></Button>
                </div>
            </>
        case 3:
            return <>
                <div className='page' id='pregunta3'>
                    <h1>¿Cómo te enfrentas a un desafío difícil?</h1>
                    <Progress actualPage="3" totalPages="10"></Progress>
                    <ResponseOptions type="text" quant={["Con lógica y un plan bien pensado", "Con valentía y determinación", "Pidiendo ayuda a mis amigos, porque juntos somos más fuertes"]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(4) }}></Button>
                </div>
            </>
        case 4:
            return <>
                <div className='page' id='pregunta4'>
                    <h1>¿Cuál es tu forma favorita de expresarte?</h1>
                    <Progress actualPage="4" totalPages="10"></Progress>
                    <ResponseOptions type="text" quant={["A través de la moda y el diseño", "Organizando eventos divertidos y memorables", "Cuidando de otros, mostrando compasión y amabilidad"]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(5) }}></Button>
                </div>
            </>
        case 5:
            return <>
                <div className='page' id='pregunta5'>
                    <h1>Elige la imagen que mejor representa tu estilo ideal</h1>
                    <Progress actualPage="5" totalPages="10"></Progress>
                    <ResponseOptions type="image" quant={[a2, b2, c2, d2]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(6) }}></Button>
                </div>
            </>
        case 6:
            return <>
                <div className='page' id='pregunta6'>
                    <h1>¿Cómo manejas el estrés?</h1>
                    <Progress actualPage="6" totalPages="10"></Progress>
                    <ResponseOptions type="text" quant={["Me organizo y hago una lista de tareas para mantener el control", "Me distraigo con una actividad divertida o creativa", "Me tomo un tiempo para relajarme en la naturaleza"]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(7) }}></Button>
                </div>
            </>
        case 7:
            return <>
                <div className='page' id='pregunta7'>
                    <h1>¿Cuál de estas imágenes te inspira más?</h1>
                    <Progress actualPage="7" totalPages="10"></Progress>
                    <ResponseOptions type="image" quant={[a7, b7, c7, d7]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(8) }}></Button>
                </div>
            </>
        case 8:
            return <>
                <div className='page' id='pregunta8'>
                    <h1>Elige la imagen que te haga sonreír</h1>
                    <Progress actualPage="8" totalPages="10"></Progress>
                    <ResponseOptions type="image" quant={[a8, b8, c8, d8]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(9) }}></Button>
                </div>
            </>
        case 9:
            return <>
                <div className='page' id='pregunta9'>
                    <h1>¿Qué harías si un amigo necesita ayuda urgente?</h1>
                    <Progress actualPage="9" totalPages="10"></Progress>
                    <ResponseOptions type="text" quant={["Iría a ayudarlo, nada es más importante que estar ahí para un amigo", "Le ofrecería un hombro en el que apoyarse y palabras de consuelo", "Buscaría la forma más práctica y rápida de resolver su problema"]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(10) }}></Button>
                </div>
            </>
        case 10:
            return <>
                <div className='page' id='pregunta10'>
                    <h1>¿Qué valoras más en una amistad?</h1>
                    <Progress actualPage="10" totalPages="10"></Progress>
                    <ResponseOptions type="text" quant={["Iría a ayudarlo, nada es más importante que estar ahí para un amigo", "Le ofrecería un hombro en el que apoyarse y palabras de consuelo", "Buscaría la forma más práctica y rápida de resolver su problema"]}></ResponseOptions>
                    <Button text="Siguiente Pregunta" action={() => { setPage(11) }}></Button>
                </div>
            </>
        case 11:
            return <>
                {/* <div className='page' id='resultado'>
            <h1>!¿Y tu eres?¡...</h1>
            <ResultCard image={twilightSparkle} title="Twilight Sparkle" desc="¡Eres Twilight Sparkle! Eres inteligente, curiosa y siempre tienes una solución para cualquier problema. Te encanta aprender cosas nuevas y compartir tu conocimiento con los demás. Aunque a veces puedes obsesionarte con los detalles, siempre encuentras la manera de equilibrar tus responsabilidades con el apoyo de tus amigos. Tu liderazgo y habilidad para resolver problemas te hacen una pieza clave en cualquier equipo."></ResultCard>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

                {/* <div className='page' id='resultado'>
            <h1>!¿Y tu eres?¡...</h1>
            <ResultCard image={rainbowDash} title="Rainbow Dash" desc="¡Eres Rainbow Dash! Tu energía es contagiosa, y nada te detiene cuando te propones algo. Valoras la lealtad por encima de todo, y siempre estás ahí para tus amigos cuando te necesitan. Eres competitiva, valiente y te encanta desafiarte a ti misma para ser la mejor en todo lo que haces. Con tu actitud decidida y tu espíritu audaz, inspiras a otros a ser valientes y a luchar por lo que creen."></ResultCard>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

                {/* <div className='page' id='resultado'>
            <h1>!¿Y tu eres?¡...</h1>
            <ResultCard image={applejack} title="Applejack" desc="¡Eres Applejack! Fuerte, honesta y con los pies en la tierra, eres la amiga en la que todos confían. Tu sentido del deber y tu ética de trabajo son incomparables, y siempre te aseguras de que todo esté en orden. Aunque eres práctica y directa, también tienes un gran corazón y siempre estás dispuesta a ayudar a quien lo necesite. Tu sinceridad y lealtad te hacen alguien en quien todos pueden confiar."></ResultCard>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

                {/* <div className='page' id='resultado'>
            <h1>!¿Y tu eres?¡...</h1>
            <ResultCard image={applejack} title="Applejack" desc="¡Eres Applejack! Fuerte, honesta y con los pies en la tierra, eres la amiga en la que todos confían. Tu sentido del deber y tu ética de trabajo son incomparables, y siempre te aseguras de que todo esté en orden. Aunque eres práctica y directa, también tienes un gran corazón y siempre estás dispuesta a ayudar a quien lo necesite. Tu sinceridad y lealtad te hacen alguien en quien todos pueden confiar."></ResultCard>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

                {/* <div className='page' id='resultado'>
            <h1>!¿Y tu eres?¡...</h1>
            <ResultCard image={rarity} title="Rarity" desc="¡Eres Rarity! Creativa, elegante y con un ojo para el estilo, tienes un talento especial para encontrar belleza en todo lo que te rodea. Te encanta hacer que las personas se sientan especiales, y siempre estás buscando maneras de ayudar a tus amigos a brillar. Aunque te preocupas mucho por los detalles, también tienes un corazón generoso y siempre estás dispuesta a hacer sacrificios por aquellos que amas. Tu encanto y creatividad inspiran a los demás a encontrar su propio brillo."></ResultCard>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

                {/* <div className='page' id='resultado'>
            <h1>!¿Y tu eres?¡...</h1>
            <ResultCard image={fluttershy} title="Fluttershy" desc="¡Eres Fluttershy! Eres amable, compasiva y siempre te preocupas por el bienestar de los demás. Tienes una conexión especial con los animales y un corazón lleno de empatía. Aunque a veces eres tímida, tu dulzura y paciencia te permiten acercarte a las personas de una manera única. Tu disposición para escuchar y tu naturaleza comprensiva hacen que todos a tu alrededor se sientan valorados y queridos."></ResultCard>
            <Button text="Siguiente Pregunta"></Button>
        </div> */}

                <div className='page' id='resultado'>
                    <h1>!¿Y tu eres?¡...</h1>
                    <ResultCard image={pinkiePie} title="Pinkie Pie" desc="¡Eres Pinkie Pie! Eres la vida de la fiesta y siempre sabes cómo hacer que todos sonrían. Con tu energía contagiosa y tu amor por la diversión, traes alegría a cualquier lugar al que vas. Eres espontánea, optimista y siempre ves el lado positivo de las cosas. Aunque a veces puedes ser un poco impredecible, tu corazón está en el lugar correcto, y siempre haces lo posible para asegurarte de que tus amigos sean felices. Tu espíritu libre y alegre hace que la vida sea una celebración constante."></ResultCard>
                    <Button text="Siguiente Pregunta" action={() => { setPage(0) }}></Button>
                </div>
            </>
        default:
            break;
    }

    return <>








    </>
}