import Navbar from "./components/NavBar/Navbar"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import styles from './App.module.scss'
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Form from "./components/Form/Form"
import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const stateMode = useSelector((state) => state.toggleMod.value)
  return (
    <div style={{backgroundColor: `${stateMode ? 'rgb(36,37,38, 0.9)': '#fff'}`, color: `${stateMode ? '#fff': 'black'}`}} className={styles.App}>
      <div className={styles.container}>
        <Navbar/>
        <Hero/>
        <Projects/>
        <About/>
        <Form/>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}
export default App
