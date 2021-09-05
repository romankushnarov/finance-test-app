import styles from './Ticker.module.scss'
import {usePrevious} from '../../hooks/usePreviousHook'

export const Ticker = ({ticker, price, change, change_percent}) => {
    const prevAmount = usePrevious({price, change, change_percent})

    const oldChange = typeof prevAmount === 'undefined' ? change : prevAmount.change
    const oldChangePercent = typeof prevAmount === 'undefined' ? change_percent : prevAmount.change_percent
    const oldPrice = typeof prevAmount === 'undefined' ? price : prevAmount.price

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
    } else if (oldChangePercent < change_percent) {
        oldChangePercentClass = styles.green
        changePercentSign = '+'
    }

    let rotateDeg = 270
    let fillColor = 'black'
    let bgColor = '#f8f9fa'
    if(oldPrice < price) {
        rotateDeg = 180
        fillColor = 'green'
        bgColor = '#e6f4ea'
    } else if (oldPrice > price) {
        rotateDeg = 0
        fillColor = 'red'
        bgColor = '#fce8e6'
    }

    return (
        <div className={styles.ticker}>
            <div className={styles['ticker_arrow']} style={{background: `${bgColor}`}}>
                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" fill={fillColor} style={{transform: `rotate(${rotateDeg}deg)`}}>
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