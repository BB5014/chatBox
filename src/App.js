import React, { Component } from 'react';
import './App.css';

import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    // copy state
    const messages = { ...this.state.messages };
    // add message with key only (Date.now)
    messages[`message-${Date.now()}`] = message;
    // update state
    this.setState({ messages });
  }

  render () {
    return (
		<div className="box">
			<div>
				<div className="messages">
					<Message />
					<Message />
					<Message />
				</div>
			</div>
        <Formulaire
          // number characters management (length)
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage} />
		</div>
	);
  }
}

export default App
