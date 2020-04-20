import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class WeeklyNav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({activeItem: name});

  render() {
    const { activeItem } = this.state;
  
  return (
    <Menu>
      <Menu.Item header>Avery Organics</Menu.Item>
      <Menu.Item
        name='about us'
        active={activeItem === 'aboutUs'}
        onClick={this.handleItemClick} />
    </Menu>
  );
  }
}

export default WeeklyNav;