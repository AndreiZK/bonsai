import styles from './CTA.module.scss'
import Button from '../Button/Button'

const CTA = () => {
    return (
        <div className={styles.container}>
            <h2>It's <span>your</span> business.<br/>We're here to help it grow</h2>
            <Button medium>START FREE</Button>
        </div>
    )
}

export default CTA