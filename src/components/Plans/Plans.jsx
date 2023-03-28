import styles from './Plans.module.scss'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import { useState } from 'react'
import Plan from '../Plan/Plan'

const Plans = () => {

    const [monthly, setMonthly] = useState(true)

    const toggle = () => {
        setMonthly(prevMonthly => !prevMonthly)
    }

    return (
        <div className={styles.container}>
            <header>
                <h2>Plans & Pricing</h2>
                <div>
                    <span className={monthly ? styles.off : ''}>MONTHLY</span>
                    <ToggleSwitch toggle={toggle} monthly={monthly}/>
                    <span className={!monthly ? styles.off : ''}>YEARLY</span>
                </div>
                
            </header>
            <div className={styles.plansContainer}>
                <Plan isPlus={false} isMonthly={monthly}/>
                <Plan isPlus={true} isMonthly={monthly}/>
            </div>
        </div>
    )
}

export default Plans