import React from 'react';
import './WidthBlock.css';

function WidthBlock({ children }) {
  return <div className="widthBlock_container">{children}</div>;
}

export default React.memo(WidthBlock);
