import { useState, useEffect } from "react";

function CoinTrackerApp() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState(0);
    const onAmountChange = event => {
        setAmount(event.target.value);
    };
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then(json => {
                setCoins(json);
                setLoading(false);
            });
        console.log(coins);
    }, []);
    const onSelect = event => {
        setValue(event.target.value);
        setAmount(0);
    };
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            <div>
                {loading ? (
                    <strong>Loading...</strong>
                ) : (
                    <div>
                        <div>
                            <select value={value} onChange={onSelect}>
                                <option>Select Coin!</option>
                                {coins.map((coin, index) => (
                                    <option key={index} value={coin.quotes.USD.price}>
                                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input type="number" value={amount} placeholder="현재 소지금 입력" onChange={onAmountChange}></input>
                        <span>
                            ${amount} = {amount / value}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CoinTrackerApp;
