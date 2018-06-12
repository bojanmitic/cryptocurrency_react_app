import React from 'react';
import './cryptocurrency.css';

const Cryptocurrency = (props) => {
    const {
        name,
        symbol,
        price_usd,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        rank
    } = props.data;
    return(
        <li className="cryptocurrency">
            <h3>{name} {(symbol)} {price_usd}$</h3>
            <p>Rank: {rank}</p>
            <p>Percent change 1h: {percent_change_1h}</p>
            <p>Percent change 24h: {percent_change_24h}</p>
            <p> Percent change 7d: {percent_change_7d}</p>
        </li>
    )
}
export default Cryptocurrency;
 