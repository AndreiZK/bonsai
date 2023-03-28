import styles from './Button.module.scss'

const Button = (props) => {
    console.log(props)
    return (
        <button className={`${styles.button} ${props.empty && styles.empty} ${props.big && styles.big} ${props.medium && styles.medium}`}>{props.children}</button>
    )
}

export default Button