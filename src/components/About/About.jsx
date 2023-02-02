import myPhoto from '../../assets/photo.jpg'
import styles from './About.module.scss'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript } from 'react-icons/si'
import { FaReact, FaBootstrap, FaSass, FaNpm } from 'react-icons/fa'
import { DiGit } from 'react-icons/di'

const About = () => {
  return (
    <div id='sobre mi' className={styles.container__about}>
      <h2>Sobre mi</h2>
      <div className={styles.container__info}>
        <div className={styles.container__photo}>
          <img src={myPhoto} alt="Picture-User" />
        </div>
        <div className={styles.aside}>
          <p>Hola! Me llamo Leonardo Antezana, soy estudiante de Ingenieria en informática en la Universidad Nacional
          Arturo Jauretche. A mediados de 2022, comencé la carrera de Front End Developer en Coderhouse y finalice la misma 
          a finales del mismo año. Aun asi, sigo practicando y aprendiendo de forma autodidacta para aumentar mis conocimientos. 
          Mi objetivo actual es obtener mi primer empleo como programador, ganar experiencia y seguir por el lado del backend.  
          </p>
          <div className={styles.container__skills}>
            <h3>Skills</h3>
            <div className={styles.container__logos}>
                <AiFillHtml5 size={30} color='#D59113'/>
                <IoLogoCss3 size={30} color='#57BBB4'/>
                <SiJavascript size={30} color='#D4DE34'/>
                <FaReact size={30} color='#4F9A98'/>
                <FaBootstrap size={30} color='#7d11f8'/>
                <FaSass size={30} color='#cf649a'/>
                <DiGit size={30} color='#f44d27'/>
                <FaNpm size={30}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;