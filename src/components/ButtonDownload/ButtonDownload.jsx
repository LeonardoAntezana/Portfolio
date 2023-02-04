import React from 'react'
import { BsDownload } from 'react-icons/bs'
import styles from './ButtonDownload.module.scss'

function ButtonDownload({ text, archivo }) {
  return (
    <a href={archivo} target='_blank' className={styles.buttonDownload}>{text}<span><BsDownload/></span></a>
  )
}

export default ButtonDownload