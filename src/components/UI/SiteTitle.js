import React from "react";
import { Header } from 'semantic-ui-react';

function SiteTitle() {
  return (
      <div id="site-title">
        <Header as="h2" textAlign="center">
    Avery Organics
        </Header>
        {/* <p>Click on a day to see where we'll be! Or click "Seasonal Produce" to see what we offer every month!</p> */}
      </div>
  );
}

export default SiteTitle;