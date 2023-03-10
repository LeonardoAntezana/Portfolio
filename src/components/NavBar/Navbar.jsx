import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { changeMode } from '../../redux/states/state_toggle_button'
import ButtonDownload from '../ButtonDownload/ButtonDownload'
import { RiMenuFill } from 'react-icons/ri'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import cv from '../../assets/_Curriculum-AntezanaLeonardo.pdf'

import styles from './Navbar.module.scss'

const Navbar = () => {
  const [menuState, setMenuState] = useState(false)
  const list = ['Home', 'Sobre mi', 'Proyectos', 'Contacto']
  const stateMode = useSelector((state) => state.toggleMod.value)
  const dispatch = useDispatch()
  return (
    <nav className={stateMode ? styles.navbar__night : styles.navbar}>
      <div className={styles.container}>
        <span className={styles.logo}>LA</span>
        <ul className={styles.list__container}>
          {list.map((elem, index) => <li className={styles.item__list} key={index}><a href={`#${elem.toLowerCase()}`}>{elem}</a></li>)}
        </ul>
        <div className={styles.containerNavbar__right}>
          <ButtonDownload text='Descargar CV' archivo={cv}/>
          <span className={styles.toggleButton} onClick={()=> dispatch(changeMode())}>
            {stateMode 
            ? <BsFillMoonStarsFill color='#171839' size={20}/> 
            : <BsFillSunFill color='yellow' size={20}/>}
          </span>
        </div>
        <div className={styles.hamburguer__menu}>
          <div className={styles.menu}>
            <RiMenuFill color='#fff' cursor='pointer' onClick={() => setMenuState(state => !state)} size={28}/>
          </div>
          <ul style={{transform: `${menuState ? 'translateX(0%)': 'translateX(100%)'}`}} className={stateMode ? styles.list__hamburguer__night : styles.list__hamburguer}>
            {list.map((elem, index) => <li key={index}><a href={`#${elem.toLowerCase().trim()}`} onClick={() => setMenuState(false)}>{elem}</a></li>)}
            <ButtonDownload text='Descargar CV' archivo={cv} width='max-content' margin='0px 0px 16px 0px'/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;