import { CryptoList, CryptoSelect } from './components'
import {fetchCryptoList} from './api'
import {useState,useEffect} from 'react'
import styles from './App.module.css'

const App = () => {

    const [cryptoList, setCryptoList] = useState([])

    useEffect(() => {
       const getCryptoList = async() => {
            setCryptoList(await fetchCryptoList())
       }
       getCryptoList()
    }, [setCryptoList])

    console.log(cryptoList);

    return (
        <div className={styles.container}>
            <CryptoSelect setCryptoList={setCryptoList}/>
            <CryptoList cryptoList={cryptoList}/>
        </div>
    );
}

export default App;