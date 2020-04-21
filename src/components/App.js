import React from 'react';
import SiteTitle from './SiteTitle';
import Logo from './Logo';
// import VerticalMenu from './VerticalNav';
// import SegmentHome from './SegmentHome';
import WeeklyNav from './WeeklyNav';

function App(){
  return (
    <React.Fragment>
        <Logo />
        <SiteTitle />
        <WeeklyNav />
    </React.Fragment>
  );
}

export default App;