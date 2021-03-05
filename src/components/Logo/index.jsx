import styles from './Logo.module.css';
import SVG from '../../assets/undraw_bitcoin2_ave7.svg'



const Logo = () => {

    const reaload = () => {
        window.location.reload();
    }



    return (
        <div className={styles.container}>
            <div className={styles.logo} onClick={()=>{reaload()}}>
                <h1 className={styles.logoText} >CryptoTracker</h1>
                <img className={styles.logoIcon} src={SVG} alt='CryptoTracker-Logo'></img>
            </div>
        </div>
    )
}

export default Logo;