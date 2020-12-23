import React, { useEffect, useState } from 'react';
import './BookmarkStar.css';

function BookmarkStar({ id, setCoinList, coinList, trigger, setTrigger }) {
  const [selected, setSelected] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('bookmark'));

    if (list?.includes(id)) {
      setSelected(true);
    }
  }, [id]);

  const handleBookMark = (id) => {
    const list = JSON.parse(localStorage.getItem('bookmark'));

    if (!list) {
      localStorage.setItem('bookmark', JSON.stringify([id]));
    } else {
      if (list.includes(id)) {
        localStorage.setItem(
          'bookmark',
          JSON.stringify(list.filter((el) => el !== id))
        );
      } else {
        localStorage.setItem('bookmark', JSON.stringify([...list, id]));
      }
    }
  };

  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);

      if (setTrigger) {
        setTrigger(!trigger);
      }

      if (setCoinList) {
        setCoinList(coinList.filter((el) => el.id !== id));
      }
    }, 1000);
    setSelected(!selected);
  };

  return (
    <div
      onClick={() => {
        handleToast();
        handleBookMark(id);
      }}
      className={`bookmark_star${selected ? ' bookmark_star_selected' : ''}`}
    >
      {showToast && (
        <div className="bookmark_toast_container">
          {selected ? '북마크가 추가되었습니다.' : '북마크가 해제되었습니다.'}
        </div>
      )}
    </div>
  );
}

export default BookmarkStar;
