import React from 'react';
import './CoinInfo.css';
import { currencyObj } from '../../../config/config';
import toLocaleFunc from '../../../utils/toLocaleFunc';

function CoinInfo({ data, currency }) {
  const { market_cap_rank, links, market_data, symbol } = data;
  const {
    current_price,
    price_change_percentage_24h_in_currency,
    price_change_percentage_24h,
    market_cap,
    total_volume,
  } = market_data;

  const toLowerCurrency = currency.toLowerCase();

  const coinClasses = (val) => `${val > 0 ? 'increase' : 'decrease'}`;

  return (
    <div className="coin_info_container">
      <div className="coin_info_leftbox">
        <div className="coin_info_row">
          <div className="coin_info_graybox">
            <span>시가총액 Rank</span>
          </div>
          <div className="coin_info_row_right">
            <span>Rank #{market_cap_rank}</span>
          </div>
        </div>
        <div className="coin_info_row border_top">
          <div className="coin_info_graybox">
            <span>웹사이트</span>
          </div>
          <div className="coin_info_row_right">
            <span>
              <a target="_blank" rel="noreferrer" href={links.homepage[0]}>
                {links.homepage[0]}
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="coin_info_rightbox">
        <div className="coin_info__pricebox">
          <div className="coin_info_currency_price_box">
            <div>
              <span className="coin_info_currency_price coin_bold">{`${
                currencyObj[currency]
              }${toLocaleFunc(current_price[toLowerCurrency])}`}</span>
            </div>
            <div className="coin_margin_top">
              <span className="coin_info_onecoin">
                1.00000000 {symbol.toUpperCase()}
              </span>
            </div>
          </div>
          <div className="coin_info_onecoin_box ">
            <div className="coin_bold">
              <span
                className={coinClasses(
                  price_change_percentage_24h_in_currency[toLowerCurrency]
                )}
              >
                {toLocaleFunc(
                  price_change_percentage_24h_in_currency[toLowerCurrency],
                  1
                )}
                %
              </span>
            </div>
            <div className="coin_margin_top">
              <span
                className={coinClasses(
                  price_change_percentage_24h_in_currency[toLowerCurrency]
                )}
              >
                {toLocaleFunc(price_change_percentage_24h, 1)}%
              </span>
            </div>
          </div>
        </div>
        <div className="coin_sub_info">
          <div className="coin_sub_inner">
            <p>시가총액</p>
            <p className="coin_margin_top">{`${
              currencyObj[currency]
            }${toLocaleFunc(market_cap[toLowerCurrency])}`}</p>
          </div>
          <div className="coin_sub_inner">
            <p>24시간 거래대금</p>
            <p className="coin_margin_top">{`${
              currencyObj[currency]
            }${toLocaleFunc(total_volume[toLowerCurrency])}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
