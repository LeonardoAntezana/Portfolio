import styles from './Footer.module.scss'
import { useSelector } from 'react-redux'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  const stateMode = useSelector((state) => state.toggleMod.value)
  return (
    <footer className={stateMode ? styles.footer__night : styles.footer}>
      <a href="https://www.linkedin.com/in/leonardo-antezana-bba233197/" target="_blank" rel="noopener noreferrer"><BsLinkedin color='#fff' size={18}/></a>
      <a href="https://github.com/LeonardoAntezana" target="_blank" rel="noopener noreferrer"><AiFillGithub color='#fff' size={18}/></a>
    </footer>
  )
}

export default Footer;