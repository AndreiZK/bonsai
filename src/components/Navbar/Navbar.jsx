import styles from'./Navbar.module.scss'
import logo from '../../assets/bonsai-logo.png'
import Button from '../Button/Button'
import NavItem from '../NavItem/NavItem'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="" />
            <div className={styles.nestedContainer}>
                <ul>
                    <NavItem 
                        name='Products'
                        hasDropDown
                        dropDownContent={['this', 'that', 'something else']}
                    />
                    <NavItem 
                        name='Templates'
                        hasDropDown
                        dropDownContent={['this', 'that', 'something else']}
                    />
                    <NavItem name='Pricing'/>
                    <NavItem name='Reviews'/>
                </ul>
                <div className={styles.buttonsContainer}>
                    <Button empty={true}>LOG IN</Button>
                    <Button>START FREE</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar