import imageQuizz from '../../assets/image-quizz.png'
import imageNotes from '../../assets/image-notes.png'
import imageLumus from '../../assets/lumus.png'
import imageCalc from  '../../assets-image-calculator.png'
import Project from '../Proyect/Project'
import styles from './Projects.module.scss'

const Projects = () => {
  const proyectos = [
    {name: 'Quizz App', deploy: 'https://quizz-app-antezana.netlify.app/', image: imageQuizz,
    tecs: ['html','javascript','react','firebase', 'sass'], repo: 'https://github.com/LeonardoAntezana/quizz-app'
    },
    {name: 'Notes App', deploy: 'https://notes-app-antezana.netlify.app/', image: imageNotes,
    tecs: ['html','javascript','react', 'sass'], repo:'https://github.com/LeonardoAntezana/NotesApp-React.git'},
    {name: 'Lumus E-commerce', deploy: 'https://lumus-antezana.netlify.app/', image: imageLumus,
    tecs: ['html','javascript','react', 'bootstrap', 'redux'], repo: 'https://github.com/LeonardoAntezana/E-commerce-React.git'
    },
    {name: 'Calculator App', deploy: 'https://calculator-app-antezana.netlify.app/', image: imageCalc,
    tecs: ['html','javascript','react'], repo: 'https://github.com/LeonardoAntezana/calcultor-app.git'
    }
  ]
  return (
    <div id='proyectos' className={styles.back}>
      <h2>Proyectos</h2>
      <section className={styles.container__projects}>
        {proyectos.map((proyecto, index) => <Project key={index} proj={proyecto}/>)}
      </section>
    </div>
  )
}

export default Projects;