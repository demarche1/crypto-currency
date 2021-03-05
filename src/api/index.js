import axios from 'axios';

export const fetchCryptoList = async() => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    return data.map((coin) => (
        {   
            id: coin.id,
            name: coin.name,
            priceChangePercent: coin.price_change_percentage_24h,
            image: coin.image,
            price: coin.current_price,
            marketCap: coin.market_cap,
            high: coin.high_24h,
            low: coin.low_24h,
            circulation: coin.circulating_supply
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
    const { data: {name, image:{ small }, market_data:{current_price: { usd }}, market_data:{price_change_percentage_24h}, market_data:{market_cap}, market_data:{high_24h}, market_data:{low_24h}, market_data:{circulating_supply}, id }  } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
    `) 
    return [{
        id: id,
        name: name,
        image: small,
        price: usd,
        priceChangePercent: price_change_percentage_24h,
        marketCap: market_cap.usd,
        high: high_24h.usd,
        low: low_24h.usd,
        circulation: circulating_supply
    }]
}