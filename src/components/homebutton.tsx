import { Link } from 'react-router'
import styles from './homebutton.module.css'



export const HomeButton = () => {

    return (
        <>
            <Link to="/" className={styles.homeButton}>
                🏠 Home
            </Link>
        </>
    )
}