import React from 'react';
import Header from './Header';
import Table from './Table';
import WidthBlock from '../common/WidthBlock';
import ViewMoreButton from './ViewMoreButton';
import Loading from '../common/Loading';

function AssetsPriceList(props) {
  const {
    viewFilter,
    setViewFilter,
    loading,
    filter,
    coinList,
    setFilter,
    trigger,
    setTrigger,
    handleViewMore,
  } = props;

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
            trigger={trigger}
            setTrigger={setTrigger}
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
