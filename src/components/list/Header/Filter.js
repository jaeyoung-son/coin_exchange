import React from 'react';
import './Filter.css';

function Filter({ filter, setFilter, viewFilter, setViewFilter }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <div className="filter_container">
      <select
        onChange={(e) => {
          setViewFilter(e.target.value);
        }}
        value={viewFilter}
        className="filter_box"
      >
        <option value="all">전체보기</option>
        <option value="bookmark">북마크보기</option>
      </select>
      <select
        onChange={handleChange}
        name="currency"
        value={filter.currency}
        className="filter_box"
      >
        <option value="KRW">KRW 보기</option>
        <option value="USD">USD 보기</option>
      </select>
      <select
        onChange={handleChange}
        name="count"
        value={filter.count}
        className="filter_box"
      >
        <option value="10">10개 보기</option>
        <option value="30">30개 보기</option>
        <option value="50">50개 보기</option>
      </select>
    </div>
  );
}

export default Filter;
