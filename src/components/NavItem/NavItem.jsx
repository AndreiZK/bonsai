import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './NavItem.module.scss'

const NavItem = (props) => {
    const [isShown, setIsShown] = useState(false)

    const handleHover = () => {
        setIsShown(prevIsShown => !prevIsShown)
    }

    let dropDownContent

    if (props.hasDropDown) {
        dropDownContent = props.dropDownContent.map(item => <p>{item}</p>)
        console.log(dropDownContent)
    }

    return (
        <li
            onMouseLeave={handleHover} 
            onMouseEnter={handleHover}
        >
            <a href="/">
                
                    {props.name} 
                    {props.hasDropDown && <motion.span
                                        animate={isShown ? {rotate: -135} : {rotate: 45}}
                                        transition={{duration: 0.5, ease: 'linear', delay: 0}} 
                                        
                                        ></motion.span>}
            </a>
            <AnimatePresence>
                {
                    isShown && (
                        <motion.div className={styles.dropdown}
                            initial={{rotateX: 90}}
                            exit={{rotateX: 90}}
                            animate={{rotateX: 0}}
                            transition={{duration: 0.5}}
                            // onMouseLeave={handleHover}
                        >
                            {dropDownContent}
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </li>
    )
}

export default NavItem