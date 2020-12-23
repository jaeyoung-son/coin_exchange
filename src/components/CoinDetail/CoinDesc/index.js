import React, { useState } from 'react';
import './CoinDesc.css';

function CoinDesc({ desc }) {
  const [showDesc, setShowDesc] = useState(false);

  const handleClikc = () => {
    setShowDesc(!showDesc);
  };

  if (!(desc.ko && desc.en)) return null;

  return (
    <div className="CoinDesc_container">
      <div className="CoinDesc_header">
        <button onClick={handleClikc} className="CoinDesc_button">
          설명보기
        </button>
      </div>
      {showDesc && (
        <div className="CoinDesc_descbox">
          <pre className="CoinDesc_pre">{desc.ko ? desc.ko : desc.en}</pre>
        </div>
      )}
    </div>
  );
}

export default React.memo(CoinDesc);
