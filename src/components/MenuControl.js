import React from 'react';
import NewTicketForm from './NewTicketForm';
// import MarketList from './MarketList';
import { Button } from 'semantic-ui-react';

class MenuControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to ticket list";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button content={buttonText} onClick={this.handleClick} />
      </React.Fragment>
    );
  }

}

export default MenuControl;