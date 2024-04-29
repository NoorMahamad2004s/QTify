
import React from 'react'
import styles from "./Buttons.module.css"

export const Buttons = ({children}) => {
  return (
    // <div className={styles.btn} >{children}</div>
    <button className={styles.btn}>{children}</button>
  )
}