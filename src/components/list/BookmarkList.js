import React from 'react';
import Header from './Header';
import Table from './Table';
import WidthBlock from '../common/WidthBlock';
import Loading from '../common/Loading';

function BookmarkList(props) {
  const { coinList, setCoinList, loading } = props;

  return (
    <WidthBlock>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Table coinList={coinList} setCoinList={setCoinList} />
      )}
    </WidthBlock>
  );
}

export default BookmarkList;
