import styles from './FAQ.module.scss'
import Accordion from '../Accordion/Accordion'

const FAQ = () => {
    return (
        <div className={styles.container}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.questionsContainer}>
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
            </div>
        </div>
    )
}

export default FAQ