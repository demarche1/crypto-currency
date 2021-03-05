import styles from './CryptoList.module.css';
import { useState } from 'react';

const CryptoList = ({cryptoList, searchbarValue}) => {

    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(true)

    const showAndHide = (index) => {
        setShow(index) 
        setHide(!hide)
        if(hide){
            setShow(false)
        }
    }

    if(!cryptoList.length){
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            {/* wrapper */}
            <div>
                {cryptoList.filter((coin) => {
                    if(searchbarValue === ''){
                        return coin;
                    }
                    else if(coin.name.toLowerCase().includes(searchbarValue.toLowerCase())){
                        return coin;
                    }
                }).map((coin, index) => {
                    return (
                        // card
                        <div onClick={() => {showAndHide(index)}} key={index} className={styles.card}>
                            <img className={styles.coinLogo} src={coin.image} alt="coin-logo"/>
                            <p className={styles.name}>{coin.name}</p>
                            <p className={styles.price}>{coin.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                            <p className={coin.priceChangePercent < 0 ? styles.negative : styles.positive}>{coin.priceChangePercent.toFixed(3)}%</p>
                            <i className={show === index ? 'fas fa-arrow-up' : 'fas fa-arrow-down'}></i>
                            <div className={show === index && hide ? styles.showMore : styles.hide}>
                                <div className={styles.moreInformation}>
                                    <p>Market cap: <span className={styles.cap}>{coin.marketCap.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span></p>
                                    <p>High: <span className={styles.high}>{coin.high.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span></p>
                                    <p>Low: <span className={styles.low}>{coin.low.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span></p>
                                    <p>Circulation: <span className={styles.circulation}>{coin.circulation.toLocaleString('en-US')}</span></p>
                                </div>                               
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CryptoList;