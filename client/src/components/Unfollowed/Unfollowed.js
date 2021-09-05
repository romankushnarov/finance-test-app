import React from 'react'
import styles from './Unfollowed.module.scss'

export const Unfollowed = React.memo(({name, clickHandler}) => {
    return (
        <div className={styles.unfollowed}>
            <p>{name}</p>
            <button
                onClick={() => clickHandler(name)}
            >return</button>
        </div>
    )
})