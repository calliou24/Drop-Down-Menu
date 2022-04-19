import {useState} from 'react'
import styles from './hamburger.module.css'

function Hamburger() {
  
  const [open, setOpen] = useState(false)
  const handdleOpen = () =>{
    setOpen(!open)
  }

  return (
    <div onClick={()=> handdleOpen()} className={styles.hamburger}>
      <div id={open ? styles.bar1 : undefined} className={styles.bar}></div>
      <div id={open ? styles.bar2 : undefined} className={styles.bar}></div>
      <div id={open ? styles.bar3 : undefined} className={styles.bar}></div>
    </div>
  )
}

export default Hamburger