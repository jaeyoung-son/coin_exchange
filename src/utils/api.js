import { API_URL } from '../config/config';

export const getCoin = (id) =>
  fetch(
    `${API_URL}/coins/${id}?tickers=false&community_data=false&developer_data=false`
  ).then((res) => res.json());

export const getCoinList = (filter, count) =>
  fetch(
    `${API_URL}/coins/markets?vs_currency=${filter.currency}&order=market_cap_desc&per_page=${filter.count}&page=${count}&price_change_percentage=1h,24h,7d`
  ).then((res) => res.json());

export const getBookmarkList = (currency, list) =>
  fetch(
    `${API_URL}/coins/markets?vs_currency=${currency}&ids=${list.join()}&order=market_cap_desc&price_change_percentage=1h,24h,7d`
  ).then((res) => res.json());
