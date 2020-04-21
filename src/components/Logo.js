import React from 'react';
import { Image } from 'semantic-ui-react';

function Logo() {
  return (
  <React.Fragment>
    <Image circular src="https://cdn.pixabay.com/photo/2015/05/07/12/17/pear-756388_1280.jpg" alt="" size="medium" centered />
  </React.Fragment>
  );
}

export default Logo;

{/* <Header as="h2" textAlign="center">
<Image circular src="https://cdn.pixabay.com/photo/2015/05/07/12/17/pear-756388_1280.jpg" /> Text Here
</Header> */}