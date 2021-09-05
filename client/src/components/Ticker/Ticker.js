import styles from './Ticker.module.scss'
import {usePrevious} from '../../hooks/usePreviousHook'

export const Ticker = ({ticker, price, change, change_percent}) => {
    const prevAmount = usePrevious({change, change_percent})

    const oldChange = typeof prevAmount === 'undefined' ? change : prevAmount.change
    const oldChangePercent = typeof prevAmount === 'undefined' ? change_percent : prevAmount.change_percent

    let oldChangeClass = ''
    let changeSign = ''
    if(oldChange > change) {
        oldChangeClass = styles.red
        changeSign = '-'
    } else if (oldChange < change) {
        oldChangeClass = styles.green
        changeSign = '+'
    }

    let oldChangePercentClass = ''
    let changePercentSign = ''
    if(oldChangePercent > change_percent) {
        oldChangePercentClass = styles.red
        changePercentSign = '-'
    } else if (oldChange < change) {
        oldChangePercentClass = styles.green
        changePercentSign = '+'
    }

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
                    <p className={`${styles['ticker_data']} ${oldChangePercentClass}`}>{`${changePercentSign}${change_percent}`} %</p>
                </div>
                <div className={styles['ticker_row']}>
                    <p className={styles['ticker_price']}>{price}</p>
                    <p className={`${styles['ticker_data']} ${oldChangeClass}`}>{`${changeSign}${change}`}</p>
                </div>
            </div>
        </div>
    )
}