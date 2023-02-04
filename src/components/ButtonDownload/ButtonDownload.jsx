import React from 'react'
import { BsDownload } from 'react-icons/bs'
import styles from './ButtonDownload.module.scss'

function ButtonDownload({ text, archivo, width, margin }) {
  return (
    <a style={{width: `${width}`, margin: `${margin}`}} href={archivo} target='_blank' className={styles.buttonDownload}>{text}<span><BsDownload/></span></a>
  )
}

export default ButtonDownload