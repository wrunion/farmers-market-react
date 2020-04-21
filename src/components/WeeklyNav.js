import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class WeeklyNav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({activeItem: name});

  render() {
    const { activeItem } = this.state;
  
  return (
    <Menu fluid widths={4}>
      <Menu.Item header>Home</Menu.Item>
      <Menu.Item
        name='about us'
        active={activeItem === 'aboutUs'}
        onClick={this.handleItemClick} />
        <Menu.Item
        name='weekly schedule'
        active={activeItem === 'weeklySchedule'}
        onClick={this.handleItemClick} />
        <Menu.Item
        name='monthly schedule'
        active={activeItem === 'monthlySchedule'}
        onClick={this.handleItemClick} />
    </Menu>
  );
  }
}

export default WeeklyNav;