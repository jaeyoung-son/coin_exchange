import React from 'react';
import BookmarkStar from '../../common/BookmarkStar';
import SelectBox from '../../common/SelectBox';
import './Header.css';

function Header({ data, setCurrency }) {
  const { id } = data;

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="detail_header_container">
      <div className="detail_header_left">
        <BookmarkStar id={id} />
        <img
          className="detail_header_logo"
          src={data.image.thumb}
          alt="coin_logo"
        />
        <span className="detail_header_name">{data.localization.ko}</span>
        <span>({data.symbol})</span>
      </div>
      <div>
        <SelectBox
          onChange={handleChange}
          className="filter_box"
          optionList={[
            { label: 'KRW 보기', value: 'KRW' },
            { label: 'USD 보기', value: 'USD' },
          ]}
        />
      </div>
    </div>
  );
}

export default React.memo(Header);
