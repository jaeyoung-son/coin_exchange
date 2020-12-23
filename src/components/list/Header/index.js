import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Filter from './Filter';
import './Header.css';

function Header(props) {
  const { filter, setFilter, viewFilter, setViewFilter } = props;

  const { pathname } = useLocation();

  return (
    <>
      <nav className="header_container">
        <Link
          to="/"
          className={`header_button ${
            pathname === '/' ? 'header_button_current' : ''
          }`}
        >
          <span>가상자산 시세 목록</span>
        </Link>
        <Link
          className={`header_button ${
            pathname === '/bookmark' ? 'header_button_current' : ''
          }`}
          to="/bookmark"
        >
          <span>북마크 목록</span>
        </Link>
      </nav>
      {pathname === '/' ? (
        <Filter
          viewFilter={viewFilter}
          setViewFilter={setViewFilter}
          filter={filter}
          setFilter={setFilter}
        />
      ) : (
        <div className="header_blank"></div>
      )}
    </>
  );
}

export default React.memo(Header);
