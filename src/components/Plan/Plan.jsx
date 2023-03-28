import styles from './Plan.module.scss'
import Button from '../Button/Button'

const Plan = (props) => {

    const checkIcon = <i className="fa-solid fa-check"></i>
    const descListItem = <li>{checkIcon}Lorem ipsum dolor sit amet something{props.isPlus && '+'}</li>
    let descListItemsArr = new Array(8).fill(descListItem)


    return (
        <div className={styles.container}>
            <h3>{props.isPlus ? 'Workflow plus' : 'Workflow'}</h3>
            <h2 className={styles.price}>{props.isMonthly ? 
                                            props.isPlus ? '29' : '19' :
                                            props.isPlus ? '26' : '16' 
            }<span> /MONTH</span></h2>
            <ul>
                {descListItemsArr}
            </ul>
            <Button big={true}>START FREE</Button>
        </div>
    )
}

export default Plan