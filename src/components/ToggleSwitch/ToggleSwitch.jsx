import styles from './ToggleSwitch.module.scss'

const ToggleSwitch = (props) => {
    return (
        <label className={styles.switch}>
            <input onChange={props.toggle} checked={props.monthly} type="checkbox"/>
            <span className={`${styles.slider}`}></span>
        </label>
    )
}

export default ToggleSwitch