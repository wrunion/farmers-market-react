import React from 'react';
import SiteTitle from './SiteTitle';
import Logo from './Logo';
import TopNav from './TopNav';

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