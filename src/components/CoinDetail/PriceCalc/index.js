import React from 'react';
import './PriceCalc.css';
import useCalcInput from '../../../hooks/useCalcInput';

function PriceCalc({ data, currency }) {
  const {
    value,
    type,
    calcValue,
    handleChangeAtCrypto,
    handleChangeAtCurrency,
    handleType,
  } = useCalcInput(data, currency);

  const { symbol } = data;

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
