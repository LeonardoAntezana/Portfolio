import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify'
import styles from './Form.module.scss'

const Form = () => {
  const [mail, setMail] = useState({content: '', error: false})
  const [asunto, setAsunto] = useState({content: '', error: false})
  const [content, setContent] = useState({content: '', error: false})
  const stateMod = useSelector((state) => state.toggleMod.value)

  let val =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
  let whiteS = /\S/

  const messaje = text => {
    toast(text, {
      autoClose: 2000,
      theme: 'light',
      hideProgressBar: true,
    })
  }

  const handleChange = (e, setFn) => {
    setFn(state => ({...state, content: e.target.value}))
  }

  const handleBlur = (exp, setFn, value) => {
    let err = !exp.test(value)
    setFn(state => ({...state, error: err}))
  }

  const validation = (e) => {
    e.preventDefault()
    if(mail.error === false && mail.content != '' && asunto.error === false && content.error === false){
      messaje('Mensaje enviado!')
      let datos = {name: mail.content, asunto: asunto.content, content:content.content}
      emailjs.send('service_7x7hh0n', 'template_4s76swr', datos)
      setMail({content: '', error: false})
      setAsunto({content: '', error: false})
      setContent({content: '', error: false})
    }
    else{
      messaje('Datos erroneos')
    }
  }

  return (
    <form id="contacto" onSubmit={validation} className={styles.form}>
      <h2>Contacto</h2>
      <div className={styles.conteiner__input}>
        <input className={mail.error ? styles.input__error : undefined} onBlur={() => handleBlur(val, setMail, mail.content)} onChange={(event) => handleChange(event, setMail)} value={mail.content} type="email" placeholder="Correo Electrónico"/>
        {mail.error && <p>Campo erróneo</p>}
      </div>
      <div className={styles.conteiner__input}>
        <input className={asunto.error ? styles.input__error : undefined} onBlur={() => handleBlur(whiteS, setAsunto, asunto.content)} onChange={(event) => handleChange(event, setAsunto)} value={asunto.content} type="text" placeholder="Asunto" maxLength={15}/>
        {asunto.error && <p>Campo erróneo</p>}
      </div>
      <div className={styles.conteiner__input}>
        <textarea className={content.error ? styles.input__error : undefined} onBlur={() => handleBlur(whiteS, setContent, content.content)} onChange={(event) => handleChange(event, setContent)} value={content.content} placeholder="Mensaje" rows={8}></textarea>
        {content.error && <p>Campo erróneo</p>}
      </div>
      <span>
        <button className={stateMod ? styles.button__night : styles.button__light}>Enviar</button>
      </span>
    </form>
  )
}

export default Form;