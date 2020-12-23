import React, { useEffect, useState } from 'react';
import Header from './Header';
import { API_URL } from '../../config/config';
import { withRouter } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import WidthBlock from '../common/WidthBlock';
import ConinInfo from './CoinInfo';
import PriceCalc from './PriceCalc';
import CoinDesc from './CoinDesc';

function CoinDetail({ match }) {
  const {
    params: { id },
  } = match;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currency, setCurrency] = useState('KRW');

  useEffect(() => {
    const getCoinListReq = async () => {
      setLoading(true);

      try {
        const list = JSON.parse(localStorage.getItem('bookmark'));

        if (list) {
          const res = await fetch(
            `${API_URL}/coins/${id}?tickers=false&community_data=false&developer_data=false`
          );
          const result = await res.json();

          setData(result);
        }
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    getCoinListReq();
  }, [id]);

  if (loading)
    return (
      <WidthBlock>
        <Loading />
      </WidthBlock>
    );

  return (
    data && (
      <WidthBlock>
        <Header data={data} setCurrency={setCurrency} />
        <ConinInfo data={data} currency={currency} />
        <PriceCalc data={data} currency={currency} />
        <CoinDesc desc={data.description} />
      </WidthBlock>
    )
  );
}

export default withRouter(CoinDetail);
