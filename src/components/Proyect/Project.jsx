import styles from './Project.module.scss'
import { useSelector } from 'react-redux'
import { BsGithub } from 'react-icons/bs'
import { MdComputer } from 'react-icons/md'

const Project = ({proj}) => {
  const {name, deploy, image, tecs, repo} = proj
  const stateMode = useSelector((state) => state.toggleMod.value)
  return (
    <div style={{backgroundColor: `${stateMode ? 'rgb(36,76,64, 0.9)': 'rgb(236, 207, 169)'}`}} className={styles.project}>
      <h3>{name}</h3>
      <div className={styles.container__image}>
        <img src={image} alt={`image-${name}`} />
      </div>
      <div className={styles.tecs}>
        {tecs.map((tec, index) => <span key={index}>{tec}</span>)}
      </div>
      <span className={styles.links}>
        <a href={repo} target="_blank" rel="noopener noreferrer"><BsGithub size={28}/></a>
        <a href={deploy} target="_blank" rel="noopener noreferrer"><MdComputer size={28}/></a>
      </span>
    </div>
  )
}

export default Project;