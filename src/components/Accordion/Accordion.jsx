import styles from './Accordion.module.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = () => {


    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <div className={styles.container}>
            <button onClick={handleClick}>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <motion.span 
                    className={styles.arrow}
                    animate={isOpen ? {rotate: -135} : {rotate: 45}}
                    transition={{duration: 0.5, ease: 'linear', delay: 0}}    
                >
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.p 
                        initial={{
                            height: 0,
                            opacity: 0
                        }}
                        animate={{
                            height: 'auto',
                            opacity: 1
                        }}
                        exit={{
                            height: 0,
                            opacity: 0
                        }}
                        style={{overflow: 'hidden'}}
                        transition={{duration: 0.5}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus fugiat laboriosam cum sit officia vel rerum doloremque, 
                        facilis excepturi optio dolore obcaecati fugit corporis sunt adipisci ratione nobis aut ut.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Pariatur consequuntur, ipsam a odit ad quibusdam repellendus corrupti explicabo suscipit? Saepe?
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion


// <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>