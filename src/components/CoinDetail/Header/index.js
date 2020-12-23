import React from 'react';
import BookmarkStar from '../../common/BookmarkStar';
import './Header.css';

function Header({ data, setCurrency }) {
  const { id } = data;

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <header className="detail_header_container">
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
        <select onChange={handleChange} className="filter_box">
          <option value="KRW">KRW 보기</option>
          <option value="USD">USD 보기</option>
        </select>
      </div>
    </header>
  );
}

export default React.memo(Header);
