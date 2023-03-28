import styles from './Addon.module.scss'
const Addon = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                {props.hasAdditionalInfo && <a href='/'>LEARN MORE <i class="fa-solid fa-angle-right"></i></a>}
            </div>
            {props.isFree ? <p className={styles.free}>Free</p> : <h3>${props.price}</h3>}
        </div>
    )
}

export default Addon