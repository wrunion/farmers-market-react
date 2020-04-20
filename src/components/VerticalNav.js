import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class VerticalMenu extends Component {
  state = { activeItem : 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    let { activeItem } = this.state;
  
    return (
      <Menu pointing vertical>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick=(this.handleItemClick) />
          
      </Menu>
    )


}

export default VerticalMenu;