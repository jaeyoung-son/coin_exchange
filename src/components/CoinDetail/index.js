import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import WidthBlock from '../common/WidthBlock';
import ConinInfo from './CoinInfo';
import PriceCalc from './PriceCalc';
import CoinDesc from './CoinDesc';

function CoinDetail(props) {
  const { loading, setCurrency, currency, data } = props;

  if (loading)
    return (
      <WidthBlock>
        <Loading />
      </WidthBlock>
    );

  return (
    data && (
      <WidthBlock>
        <Header data={data} setCurrency={setCurrency} />
        <ConinInfo data={data} currency={currency} />
        <PriceCalc data={data} currency={currency} />
        <CoinDesc desc={data.description} />
      </WidthBlock>
    )
  );
}

export default withRouter(CoinDetail);
