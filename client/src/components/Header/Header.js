import styles from './Header.module.scss'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className={styles.header}>
           <div className={styles.container}>
            <Link to='/' className={styles['header_logo']}>
                    <h3>Finance</h3>
                </Link>
                <ul className={styles['header_list']}>
                    <li className={styles['header_link']}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles['header_link']}>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
           </div>
        </header>
    )
}