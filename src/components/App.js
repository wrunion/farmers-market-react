import React from 'react';
import Header from './Header';
import WeeklyNav from './WeeklyNav';

function App(){
  return (
    <React.Fragment>
      <div class="ui container" id="content-all">
        <Header />
        <WeeklyNav />
      </div>
    </React.Fragment>
  );
}

export default App;