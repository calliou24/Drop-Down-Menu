import React from 'react'

import styles from './section.module.css'

import client1 from '../../assets/images/client-audiophile.svg'
import client2 from '../../assets/images/client-databiz.svg'
import client3 from '../../assets/images/client-maker.svg'
import client4 from '../../assets/images/client-meet.svg'

const clients = [
  {
    id : '0',
    img : client1
  },
  {
    id : '1',
    img : client2
  },
  {
    id : '2',
    img : client3
  },
  {
    id : '3',
    img : client4
  },

]

function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.imgCont}>
      </div>
      <article className={styles.info}>
        <h1 className={styles.title}>Make remote work</h1>
        <p className={styles.text}>
          Get your team in sync, no matter your location. 
          Streamline processes, create team rituals, and watch productivity soar
        </p>
        <button className={styles.btnLearnMore}>Learn More</button>
        <div className={styles.clientsImgCont}>
          {clients.map(({id, img}) => 
            <img className={styles.img} key={id} src={img} alt='image client'/>
          )}
        </div>
      </article>
    </section>
  )
}

export default Section