import React from 'react';
import Row from './Row';
import Loading from '../../common/Loading';
import './Table.css';

function Table(props) {
  const {
    coinList,
    filter = { currency: 'KRW', count: '50' },
    loading = {},
    setCoinList,
    trigger,
    setTrigger,
  } = props;

  if (!coinList) return null;

  return (
    <div>
      <div className="table_header_container">
        <div className="table_star"></div>
        <div className="table_assets">자산</div>
        <div className="table_price">Price</div>
        <div className="table_date">1H</div>
        <div className="table_date">24H</div>
        <div className="table_date">7D</div>
        <div className="table_volume">24H Volume</div>
      </div>
      <ul>
        {coinList.length ? (
          coinList.map((el) => (
            <Row
              setTrigger={setTrigger}
              setCoinList={setCoinList}
              trigger={trigger}
              coinList={coinList}
              filter={filter}
              key={el.id}
              data={el}
            />
          ))
        ) : (
          <div className="table_no_data">
            <p>데이터가 없습니다.</p>
          </div>
        )}
        {loading.moreButton && <Loading />}
      </ul>
    </div>
  );
}

export default Table;
