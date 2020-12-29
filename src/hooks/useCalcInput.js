import { useState, useCallback, useEffect } from 'react';
import toLocaleFunc from '../utils/toLocaleFunc';
import { currencyObj } from '../config/config';
import { checkFirstNum, checkMaxLength } from '../utils/validation';

function useCalcInput(data, currency) {
  const [value, setValue] = useState('');
  const [type, setType] = useState('CryptoCurrency');
  const [calcValue, setCalcValue] = useState('');

  const { market_data } = data;
  const { current_price } = market_data;

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

      const calcValue = value / toLocaleFunc(current_price[toLowerCurrency]);

      setCalcValue(calcValue.toFixed(8).replace(/\.?0+$/, ''));
    }
  };

  return {
    value,
    calcValue,
    type,
    handleChangeAtCrypto,
    handleChangeAtCurrency,
    handleType,
  };
}

export default useCalcInput;
