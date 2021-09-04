import styles from './Ticker.module.scss'

export const Ticker = ({ticker, price, change, change_percent}) => {
    return (
        <div className={styles.ticker}>
            <div className={styles['ticker_arrow']} style={{background: '#fce8e6'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" fill='red'>
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>
            </div>
            <div className={styles['ticker_inner']}>
                <div className={styles['ticker_row']}>
                    <p className={styles['ticker_name']}>{ticker}</p>
                    <p className={styles['ticker_data-red']}>{change_percent} %</p>
                </div>
                <div className={styles['ticker_row']}>
                    <p className={styles['ticker_price']}>{price}</p>
                    <p className={styles['ticker_data-red']}>{change}</p>
                </div>
            </div>
        </div>
    )
}