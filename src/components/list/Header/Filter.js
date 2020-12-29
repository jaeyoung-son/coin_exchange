import React from 'react';
import SelectBox from '../../common/SelectBox';
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
      <SelectBox
        onChange={(e) => {
          setViewFilter(e.target.value);
        }}
        value={viewFilter}
        className="filter_box"
        optionList={[
          { label: '전체보기', value: 'all' },
          { label: '북마크보기', value: 'bookmark' },
        ]}
      />
      <SelectBox
        onChange={handleChange}
        name="currency"
        value={filter.currency}
        className="filter_box"
        optionList={[
          { label: 'KRW 보기', value: 'KRW' },
          { label: 'USD 보기', value: 'USD' },
        ]}
      />
      <SelectBox
        onChange={handleChange}
        name="count"
        value={filter.count}
        className="filter_box"
        optionList={[
          { label: '10개 보기', value: '10' },
          { label: '30개 보기', value: '30' },
          { label: '50개 보기', value: '50' },
        ]}
      />
    </div>
  );
}

export default Filter;
