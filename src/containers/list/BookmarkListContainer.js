import React, { useEffect, useState } from 'react';
import { getBookmarkList } from '../../utils/api';
import BookmarkList from '../../components/list/BookmarkList';

const currency = 'krw';

function BookmarkListContainer() {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCoinListReq = async () => {
      setLoading(true);

      try {
        const list = JSON.parse(localStorage.getItem('bookmark'));

        if (list && list.length) {
          const result = await getBookmarkList(currency, list);

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
    <BookmarkList
      coinList={coinList}
      setCoinList={setCoinList}
      loading={loading}
    />
  );
}

export default BookmarkListContainer;
