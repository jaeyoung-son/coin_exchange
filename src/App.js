import AssetsPriceListPage from './pages/AssetsPriceListPage';
import BookmarkListPage from './pages/BookmarkListPage';
import CoinDetailPage from './pages/CoinDetailPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route component={AssetsPriceListPage} exact path={'/'} />
      <Route component={BookmarkListPage} path={'/bookmark'} />
      <Route component={CoinDetailPage} path={'/coin/:id'} />
    </>
  );
}

export default App;
