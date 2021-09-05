import { useEffect } from 'react'
import { Ticker } from '../../components/Ticker/Ticker'
import styles from './Home.module.scss'
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { disconnect, loadItems } from '../../redux/actions/tickersActionCreator';
import { getTickers, getIsLoaded } from '../../redux/selectors/tickersSelector';
import { Loader } from '../../components/Loader.js/Loader';

const PORT = 4000;

export const Home = () => {
    const dispatch = useDispatch()
    const isLoaded = useSelector(state => getIsLoaded(state))
    const tickers = useSelector(state => getTickers(state))
    
    useEffect(() => {
        const socket = io.connect(`http://localhost:${PORT}`)
        dispatch(loadItems(socket))
        return () => {
            dispatch(disconnect(socket))
        }
        //eslint-disable-next-line
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.list}>
                { isLoaded ?
                    tickers.map((item, index) => (
                        <Ticker {...item} key={`${item.ticker}_${index}`} />
                    )) :
                    <Loader />
                }
            </div>
        </div>
    )
}