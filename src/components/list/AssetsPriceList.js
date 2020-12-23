import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from './Header';
import Table from './Table';
import WidthBlock from '../common/WidthBlock';
import ViewMoreButton from './ViewMoreButton';
import { API_URL } from '../../config/config';
import Loading from '../common/Loading';

function AssetsPriceList() {
  const [viewFilter, setViewFilter] = useState('all');
  const [filter, setFilter] = useState({
    currency: 'KRW',
    count: '50',
  });
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState({
    filter: false,
    moreButton: false,
  });
  const listOffset = useRef(1);

  useEffect(() => {
    listOffset.current = 1;

    const getCoinListReq = async () => {
      setLoading({
        moreButton: false,
        filter: true,
      });

      try {
        const res = await fetch(
          `${API_URL}/coins/markets?vs_currency=${filter.currency}&order=market_cap_desc&per_page=${filter.count}&page=${listOffset.current}&price_change_percentage=1h,24h,7d`
        );
        const result = await res.json();

        setCoinList(result);
      } catch (e) {
        console.log(e);
      }

      setLoading({
        moreButton: false,
        filter: false,
      });
    };

    getCoinListReq();
  }, [filter]);

  const handleViewMore = useCallback(async () => {
    listOffset.current += 1;

    setLoading({
      moreButton: true,
      filter: false,
    });

    try {
      const res = await fetch(
        `${API_URL}/coins/markets?vs_currency=${filter.currency}&order=market_cap_desc&per_page=${filter.count}&page=${listOffset.current}&price_change_percentage=1h,24h,7d`
      );
      const result = await res.json();

      setCoinList([...coinList, ...result]);
    } catch (e) {
      console.log(e);
    }
    setLoading({
      moreButton: false,
      filter: false,
    });
  }, [coinList, filter]);

  return (
    <WidthBlock>
      <Header
        viewFilter={viewFilter}
        setViewFilter={setViewFilter}
        loading={loading}
        filter={filter}
        setFilter={setFilter}
      />
      {loading.filter ? (
        <Loading />
      ) : (
        <>
          <Table
            viewFilter={viewFilter}
            loading={loading}
            coinList={coinList}
            filter={filter}
          />
          <ViewMoreButton handleViewMore={handleViewMore} />
        </>
      )}
    </WidthBlock>
  );
}

export default AssetsPriceList;
