import React from 'react'
import { Link } from 'react-router'
import styles from './homebutton.module.css'

type Props = {}

export const HomeButton = (props: Props) => {

    return (
        <>
            <Link to="/" className={styles.homeButton}>
                🏠 Home
            </Link>
        </>
    )
}