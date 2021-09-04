import { useEffect } from 'react'
import { Ticker } from '../../components/Ticker/Ticker'
import styles from './Home.module.scss'
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../redux/actions/tickersActionCreator';
import { getTickers } from '../../redux/selectors/tickersSelector';

const PORT = 4000;

export const Home = () => {
    const dispatch = useDispatch()
    const tickers = useSelector(state => getTickers(state))
    
    useEffect(() => {
        const socket = io.connect(`http://localhost:${PORT}`)
        socket.emit('start')
        socket.on('ticker', data => {
            dispatch(setItems(data))
        })
        return () => {
            socket.disconnect()
        }
        //eslint-disable-next-line
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.list}>
                {
                    tickers.map((item, index) => (
                        <Ticker {...item} key={`${item.ticker}_${index}`} />
                    ))
                }
            </div>
        </div>
    )
}