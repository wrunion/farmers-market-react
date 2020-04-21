import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { SegmentHome } from './SegmentHome';

class VerticalMenu extends Component {
  state = { activeItem : 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    let { activeItem } = this.state;
  
    return (
      <Menu pointing vertical position="right"           content="SegmentHome">
        <Menu.Item header 
          color='violet'
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />
                  <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />

      </Menu>
    );
    }
}

export default VerticalMenu;