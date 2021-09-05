import { useCallback, useEffect } from 'react'
import { Ticker } from '../../components/Ticker/Ticker'
import styles from './Home.module.scss'
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { disconnect, followTicker, loadItems, unfollowTicker } from '../../redux/actions/tickersActionCreator';
import { getTickers, getIsLoaded, getUnfollowedTickers } from '../../redux/selectors/tickersSelector';
import { Loader } from '../../components/Loader.js/Loader';
import { Unfollowed } from '../../components/Unfollowed/Unfollowed';

const PORT = 4000;

export const Home = () => {
    const dispatch = useDispatch()
    const isLoaded = useSelector(state => getIsLoaded(state))
    const tickers = useSelector(state => getTickers(state))
    const unfollowed = useSelector(state => getUnfollowedTickers(state))

    useEffect(() => {
        const socket = io.connect(`http://localhost:${PORT}`)
        dispatch(loadItems(socket))
        return () => {
            dispatch(disconnect(socket))
        }
        //eslint-disable-next-line
    }, [])

    const unfollowHandler = useCallback((ticker) => {
        dispatch(unfollowTicker(ticker))
        //eslint-disable-next-line
    }, [])

    const followHandler = useCallback((ticker) => {
        dispatch(followTicker(ticker))
        //eslint-disable-next-line
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.list}>
                { isLoaded ?
                    tickers.map((item, index) => (
                        <Ticker 
                            {...item} 
                            clickHandler={unfollowHandler}
                            key={`${item.ticker}_${index}`} 
                        />
                    )) :
                    <Loader />
                }
            </div>
            <br />
            <div className={styles.unfollowed}>
                <h3>Unfollowed</h3>
                <div className={styles.unfollowed_list}>
                    { (unfollowed.length > 0 && isLoaded) ?
                        unfollowed.map((item, index) => (
                            <Unfollowed 
                                name={item}
                                clickHandler={followHandler}
                                key={`${item}_${index}`}
                            />
                        )) : <p>Unfollowed list is empty...</p>
                    }
                </div>
            </div>
        </div>
    )
}