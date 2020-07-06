import React from 'react';
import SiteTitle from './UI/SiteTitle';
import Logo from './UI/Logo';
import TopNav from './UI/TopNav';
import MarketList from './MarketList';
import './../App.css';

function App(){
  return (
    <div className="App">
        <Logo />
        <SiteTitle />
        <TopNav />
        <MarketList />
    </div>
  );
}

export default App;