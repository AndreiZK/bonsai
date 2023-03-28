import styles from './Addons.module.scss'
import Addon from '../Addon/Addon'

const Addons = () => {
    return (
        <div className={styles.container}>
            <h2>Super charge your work with addons</h2>
            <div className={styles.addonsContainer}>
                <Addon 
                    title={'Collaborators'}
                    description={'lorem ipsum dolor sit amet'}
                    isFree
                />
                <Addon 
                    title={'Collaborators'}
                    description={'lorem ipsum dolor sit amet'}
                    price='9'
                />
                <Addon 
                    title={'Collaborators'}
                    description={'lorem ipsum dolor sit amet'}
                    price='10'
                />
            </div>
        </div>
    )
}

export default Addons