import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './nav.module.css';
import logo from './../../assets/images/logo.svg';
import arrow from '../../assets/images/icon-arrow-down.svg'
import Hamburger from './Hamburger/hamburger';

import todo from '../../assets/images/icon-todo.svg'
import calendar from '../../assets/images/icon-calendar.svg'
import reminders from '../../assets/images/icon-reminders.svg'
import planning from '../../assets/images/icon-planning.svg'


function Nav() {
  const [openMenu, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState({ features: false, company: false })

  const { features, company } = dropOpen

  useEffect(() => {
    const app = document.getElementsByClassName('App')
    if (openMenu) {
      return app[0].classList.add('overflowH')
    }
    return app[0].classList.remove('overflowH')
  }, [openMenu])

  const handdleCahngeDrop = (menu) => {
    if (menu === 'features') {
      setDropOpen({ features: !features, company: company })
    }
    else if (menu === 'company') {
      setDropOpen({ features: features, company: !company })
    }
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoCont}>
          <img src={logo} alt="logo" />
        </div>
        <div id={openMenu ? styles.menuOpen : null} className={styles.listCont}>
          <ul className={styles.list}>
            <li onClick={() => handdleCahngeDrop('features')} id={styles.specialItem} className={styles.item}>
              <div className={styles.itemTitle}>
                <p>Features</p><img className={features ? styles.arrowChange : null} src={arrow} alt='icon arrow' />
              </div>
              <AnimatePresence exitBeforeEnter>
                {
                  features
                  &&
                  <motion.div initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1, originY : 0 }} className={styles.dropedMenu}>
                    <ul className={styles.listDroped}>
                      <li className={styles.itemDroped}>
                        <img src={todo} alt="" /> Todo List
                      </li>
                      <li className={styles.itemDroped}>
                        <img src={calendar} alt="" /> Calendar
                      </li>
                      <li className={styles.itemDroped}>
                        <img src={reminders} alt="" /> Reminders
                      </li>
                      <li className={styles.itemDroped}>
                        <img src={planning} alt="" /> Planning
                      </li>
                    </ul>
                  </motion.div>
                }
              </AnimatePresence>
            </li>
            <li onClick={() => handdleCahngeDrop('company')} id={styles.specialItem} className={styles.item}>
              <div className={styles.itemTitle}>
                <p>Company</p><img className={company ? styles.arrowChange : null} src={arrow} alt='icon arrow' />
              </div>

              <AnimatePresence exitBeforeEnter>
                {
                  company
                  &&
                  <motion.div initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1, originY : 0 }} className={styles.dropedMenu}>
                    <ul className={styles.listDroped}>
                      <li className={styles.itemDroped}>
                        History
                      </li>
                      <li className={styles.itemDroped}>
                        Our Team
                      </li>
                      <li className={styles.itemDroped}>
                        Blog
                      </li>
                    </ul>
                  </motion.div>
                }
              </AnimatePresence>
            </li>
            <li className={styles.item}>
              Careers
            </li>
            <li className={styles.item}>
              About
            </li>
          </ul>
        </div>
        <div onClick={() => setMenuOpen(!openMenu)}>
          <Hamburger />
        </div>
        <div className={styles.btnCont}>
          <button className={`${styles.btn} ${styles.login}`} >Login</button>
          <button className={`${styles.btn} ${styles.register}`}>Regsiter</button>
        </div>
      </nav>
      {openMenu && <div className={styles.lightBox} />}
    </>
  );
}

export default Nav;
