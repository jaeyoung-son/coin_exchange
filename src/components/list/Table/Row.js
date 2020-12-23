import React from 'react';
import BookmarkStar from '../../common/BookmarkStar';
import './Row.css';
import toLocaleFunc from '../../../utils/toLocaleFunc';
import { currencyObj } from '../../../config/config';
import { Link } from 'react-router-dom';

function Row({ data, setCoinList, coinList, filter, trigger, setTrigger }) {
  const {
    name,
    symbol,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    current_price,
    total_volume,
    id,
  } = data;

  const dateClasses = (val) =>
    `table_date ${val > 0 ? 'increase' : 'decrease'}`;

  return (
    <li className="row_container">
      <div className="table_star">
        <BookmarkStar
          trigger={trigger}
          setTrigger={setTrigger}
          coinList={coinList}
          id={id}
          setCoinList={setCoinList}
        />
      </div>
      <div className="table_assets table_name">
        <Link to={`/coin/${id}`} className="table_coin_name">
          <span>{name}</span>
        </Link>
        <span className="table_coin_symbol">{symbol}</span>
      </div>
      <div className="table_price">
        {`${currencyObj[filter.currency]}${toLocaleFunc(current_price)}`}
      </div>
      <div className={dateClasses(price_change_percentage_1h_in_currency)}>
        {toLocaleFunc(price_change_percentage_1h_in_currency, 1)}%
      </div>
      <div className={dateClasses(price_change_percentage_24h_in_currency)}>
        {toLocaleFunc(price_change_percentage_24h_in_currency, 1)}%
      </div>
      <div className={dateClasses(price_change_percentage_7d_in_currency)}>
        {toLocaleFunc(price_change_percentage_7d_in_currency, 1)}%
      </div>
      <div className="table_volume">
        {`${currencyObj[filter.currency]}${toLocaleFunc(total_volume)}`}
      </div>
    </li>
  );
}

export default Row;
