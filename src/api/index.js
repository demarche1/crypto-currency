import axios from 'axios';

export const fetchCryptoList = async() => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    return data.map((coin) => (
        {
            name: coin.name,
            priceChangePercent: coin.price_change_percentage_24h,
            image: coin.image,
            price: coin.current_price
        }
    ));
};

export const fetchCryptoName = async() => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    return data.map(coin => (
        {
            name: coin.name,
            id: coin.id
        }
    ))
}

export const fecthCryptoFromSelected = async(coin) => {
    const { data: {name, image:{ small }, market_data:{current_price: { usd }}, market_data:{market_cap_change_percentage_24h} } } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
    `)
    return [{
        name: name,
        image: small,
        price: usd,
        priceChangePercent: market_cap_change_percentage_24h
    }]
}