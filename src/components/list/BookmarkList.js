import React, { useEffect, useState } from 'react';
import Header from './Header';
import Table from './Table';
import WidthBlock from '../common/WidthBlock';
import { API_URL } from '../../config/config';

const currency = 'krw';

function BookmarkList() {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCoinListReq = async () => {
      setLoading(true);

      try {
        const list = JSON.parse(localStorage.getItem('bookmark'));

        if (list) {
          const res = await fetch(
            `${API_URL}/coins/markets?vs_currency=${currency}&ids=${list.join()}&order=market_cap_desc&price_change_percentage=1h,24h,7d`
          );
          const result = await res.json();

          setCoinList(result);
        }
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    getCoinListReq();
  }, []);

  return (
    <WidthBlock>
      <Header />
      <Table loading={loading} coinList={coinList} setCoinList={setCoinList} />
    </WidthBlock>
  );
}

export default BookmarkList;
