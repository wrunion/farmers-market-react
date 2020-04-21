import React from 'react';
import SiteTitle from './UI/SiteTitle';
import Logo from './UI/Logo';
import TopNav from './UI/TopNav';

function App(){
  return (
    <React.Fragment>
        <Logo />
        <SiteTitle />
        <TopNav />
    </React.Fragment>
  );
}

export default App;