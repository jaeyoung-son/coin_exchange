import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getCoinList } from '../../utils/api';
import AssetsPriceList from '../../components/list/AssetsPriceList';

function AssetsPriceListContainer() {
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
  const [trigger, setTrigger] = useState(false);
  const listOffset = useRef(1);

  useEffect(() => {
    listOffset.current = 1;

    const getCoinListReq = async () => {
      setLoading({
        moreButton: false,
        filter: true,
      });

      try {
        const result = await getCoinList(filter, listOffset.current);

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
      const result = await getCoinList(filter, listOffset.current);

      setCoinList([...coinList, ...result]);
    } catch (e) {
      console.log(e);
    }
    setLoading({
      moreButton: false,
      filter: false,
    });
  }, [coinList, filter]);

  const filterList = () => {
    if (viewFilter === 'all') {
      return coinList;
    }

    if (viewFilter === 'bookmark') {
      const bookmarkList = JSON.parse(localStorage.getItem('bookmark'));

      return coinList.filter((el) => bookmarkList.includes(el.id));
    }
  };

  return (
    <AssetsPriceList
      viewFilter={viewFilter}
      setViewFilter={setViewFilter}
      loading={loading}
      coinList={filterList()}
      setFilter={setFilter}
      trigger={trigger}
      setTrigger={setTrigger}
      handleViewMore={handleViewMore}
      filter={filter}
    />
  );
}

export default AssetsPriceListContainer;
