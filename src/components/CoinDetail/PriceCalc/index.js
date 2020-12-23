import React, { useCallback, useEffect, useState } from 'react';
import './PriceCalc.css';
import { checkMaxLength, checkFirstNum } from '../../../utils/validation';
import toLocaleFunc from '../../../utils/toLocaleFunc';
import { currencyObj } from '../../../config/config';

function PriceCalc({ data, currency }) {
  const [value, setValue] = useState('');
  const [type, setType] = useState('CryptoCurrency');
  const [calcValue, setCalcValue] = useState('');

  useEffect(() => {
    setValue('');
    setCalcValue('');
  }, [currency]);

  const handleType = useCallback(() => {
    setCalcValue('');
    setValue('');
    setType(type === 'CryptoCurrency' ? 'currency' : 'CryptoCurrency');
  }, [type]);

  const toLowerCurrency = currency.toLowerCase();

  const { market_data, symbol } = data;
  const { current_price } = market_data;

  const handleChangeAtCrypto = (e) => {
    const {
      target: { value },
    } = e;

    if (checkMaxLength(value)) {
      setValue(value);

      const calcValue = toLocaleFunc(value * current_price[toLowerCurrency], 2);
      setCalcValue(currencyObj[currency] + calcValue);
    }
  };

  const handleChangeAtCurrency = (e) => {
    const {
      target: { value },
    } = e;

    if (currency === 'KRW' && checkFirstNum(value)) {
      setValue(value);

      const calcValue = value / current_price[toLowerCurrency];

      setCalcValue(calcValue.toFixed(8).replace(/\.?0+$/, ''));
    }

    if (currency !== 'KRW') {
      setValue(value);

      const calcValue = value / current_price[toLowerCurrency];

      setCalcValue(calcValue.toFixed(8).replace(/\.?0+$/, ''));
    }
  };

  return (
    <div className="price_calc_container">
      <div className="price_calc_title">
        <p>가격 계산</p>
      </div>
      <div className="price_calc_form">
        <div className="price_currency_container">
          <div className="price_currency_name">
            <span>
              {type === 'CryptoCurrency' ? symbol.toUpperCase() : currency}
            </span>
          </div>
          <input
            step="0.01"
            type="number"
            value={value}
            onChange={
              type === 'CryptoCurrency'
                ? handleChangeAtCrypto
                : handleChangeAtCurrency
            }
            className="price_currency_input"
          />
        </div>
        <button className="price_calc_arrowbox" onClick={handleType}>
          <p>{'<-'}</p>
          <p>{'->'}</p>
        </button>
        <div className="price_currency_container">
          <div className="price_currency_name">
            <span>
              {type === 'CryptoCurrency' ? currency : symbol.toUpperCase()}
            </span>
          </div>
          <input value={calcValue} readOnly className="price_currency_input" />
        </div>
      </div>
    </div>
  );
}

export default PriceCalc;
