import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { changeMode } from '../redux/states/state_toggle_button'
import { RiMenuFill } from 'react-icons/ri'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

import styles from './Navbar.module.scss'

const Navbar = () => {
  const [menuState, setMenuState] = useState(false)
  const list = ['Home', 'Sobre mi', 'Proyectos', 'Contacto']
  const stateMode = useSelector((state) => state.toggleMod.value)
  const dispatch = useDispatch()
  return (
    <nav style={{backgroundColor: `${stateMode ? 'rgb(36,37,38, 0.9)': 'rgb(36,76,64, 0.9)'}`}} className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.logo}></span>
        <ul className={styles.list__container}>
          {list.map((elem, index) => <li className={styles.item__list} key={index}><a href={`#${elem.toLowerCase()}`}>{elem}</a></li>)}
        </ul>
        <span className={styles.toggleButton}>
          {stateMode ? <BsFillMoonStarsFill cursor='pointer' color='#171839' size={20} onClick={()=> dispatch(changeMode())}/> : <BsFillSunFill cursor='pointer' color='yellow' size={20} onClick={()=> dispatch(changeMode())}/>}
        </span>
        <div className={styles.hamburguer__menu}>
          <div className={styles.menu}>
            <RiMenuFill color='#fff' cursor='pointer' onClick={() => setMenuState(state => !state)} size={28}/>
          </div>
          {menuState && <ul className={styles.list__hamburguer}>
            {list.map((elem, index) => <li key={index}><a href={`#${elem.toLowerCase().trim()}`}>{elem}</a></li>)}
          </ul>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;