import styles from './Searchbar.module.css'


const Searchbar = ({setsearchbarValue}) => {
    return (
        <input className={styles.searchbar} onChange={e => {setsearchbarValue(e.target.value)}} type='text' placeholder='Search...'></input>
    )
}

export default Searchbar