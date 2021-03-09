import { CryptoList, CryptoSelect, Searchbar, Logo } from './components'
import {fetchCryptoList} from './api'
import {useState,useEffect} from 'react'
import styles from './App.module.css'

const App = () => {

    const [cryptoList, setCryptoList] = useState([])
    const [searchbarValue, setsearchbarValue ] = useState('')

    useEffect(() => {
       const getCryptoList = async() => {
            setCryptoList(await fetchCryptoList())
       }
       getCryptoList()

    }, [setCryptoList])

    console.log(searchbarValue);

    return (
        <div className={styles.container}>
            <Logo/>
            <Searchbar setsearchbarValue={setsearchbarValue}/>
            <CryptoSelect setCryptoList={setCryptoList}/>
            <CryptoList searchbarValue={searchbarValue} cryptoList={cryptoList}/>
        </div>
    );
}

export default App;