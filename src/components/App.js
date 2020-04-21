import React from 'react';
import SiteTitle from './UI/SiteTitle';
import Logo from './UI/Logo';
import TopNav from './UI/TopNav';
import MarketList from './MarketList';

function App(){
  return (
    <React.Fragment>
        <Logo />
        <SiteTitle />
        <TopNav />
        <MarketList />
    </React.Fragment>
  );
}

export default App;