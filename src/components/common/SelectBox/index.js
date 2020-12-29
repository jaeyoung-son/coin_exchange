import React from 'react';

function SelectBox({ optionList, ...rest }) {
  return (
    <select {...rest}>
      {optionList.map((el) => (
        <option key={el.label} value={el.value}>
          {el.label}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
