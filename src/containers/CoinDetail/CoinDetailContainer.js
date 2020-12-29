import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getCoin } from '../../utils/api';
import CoinDetail from '../../components/CoinDetail';

function CoinDetailContainer({ match }) {
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
          const result = await getCoin(id);

          setData(result);
        }
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    getCoinListReq();
  }, [id]);

  return (
    <CoinDetail
      loading={loading}
      currency={currency}
      setCurrency={setCurrency}
      data={data}
    />
  );
}

export default withRouter(CoinDetailContainer);
