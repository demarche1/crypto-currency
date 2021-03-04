import styles from './CryptoSelect.module.css'
import {useState, useEffect} from 'react';
import { fetchCryptoName, fecthCryptoFromSelected } from '../../api';

const CryptoSelect = ({setCryptoList}) => {
    const [ coins, setCoins ] = useState([]);


    useEffect(() => {
        const setCoinsNames = async() => {
            setCoins(await fetchCryptoName())
        }
        setCoinsNames()
        fecthCryptoFromSelected('bitcoin')
    }, [setCoins])


    const setListDataFromSelectList = async(coin) => {
        setCryptoList(await fecthCryptoFromSelected(coin))
    }

    return (
        <select className={styles.select} onChange={(e) => {setListDataFromSelectList(e.target.value)}}>
            {coins.map((coin, index) => {
                return (
                    <option key={index} value={coin.id}>{coin.name}</option>
                )
            })}
        </select>
    )
};

export default CryptoSelect