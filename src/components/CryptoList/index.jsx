import styles from './CryptoList.module.css';

const CryptoList = ({cryptoList}) => {

    if(!cryptoList.length){
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            {/* wrapper */}
            <div>
                {cryptoList.map((coin, index) => {
                    return (
                        // card
                        <div key={index} className={styles.card}>
                            <img className={styles.coinLogo} src={coin.image} alt="coin-logo"/>
                            <p className={styles.name}>{coin.name}</p>
                            <p className={styles.price}>{coin.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                            <p className={coin.priceChangePercent < 0 ? styles.negative : styles.positive}><i className={`fas fa-chart-line ${styles.chartIcon}`}></i>{coin.priceChangePercent.toFixed(3)}%</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CryptoList;