import React from 'react';
import './ViewMoreButton.css';

function ViewMoreButton({ handleViewMore }) {
  return (
    <div className="view_more_button_container" onClick={handleViewMore}>
      <button>+ 더보기</button>
    </div>
  );
}

export default ViewMoreButton;
