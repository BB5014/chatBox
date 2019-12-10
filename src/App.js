import React, { Component, createRef } from "react";
import "./App.css";

import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

// Firebase
import base from "./components/base";

class App extends Component {
	state = {
		messages: {},
		pseudo: this.props.match.params.pseudo
	};

	// CreateRef for scroll in DOM
	messagesRef = createRef();

	// Use componentDidMount to see when there are messages in Rebase and load it == synchronisation
	componentDidMount() {
		base.syncState("/", {
			context: this,
			state: "messages"
		});
	}

	// We have need to scroll when state updated, so it's necessary use componentDidMount
  // Use current who do reference at div with ref={this.messagesRef} to recover
  componentDidUpdate() {
    const ref = this.messagesRef.current;
    // Now is possible use ref in Js
		ref.scrollTop = ref.scrollHeight;
	}

	addMessage = message => {
		// copy state
		const messages = { ...this.state.messages };
		// add message with key only (Date.now)
		messages[`message-${Date.now()}`] = message;
		// update state
		this.setState({ messages });
	};

	render() {
		// Display messages(state)

		const displayMessages = Object.keys(this.state.messages).map(key => (
			<Message
				key={key}
				message={this.state.messages[key].message}
				pseudo={this.state.messages[key].pseudo}
			></Message>
		));
		return (
			<div className="box">
				<div>
					{/* I want scroll in bottom  in all the messages in this div so i put ref here */}
					<div className="messages" ref={this.messagesRef}>
						<div className="message">{displayMessages}</div>
					</div>
				</div>
				<Formulaire
					// number characters management (length)
					length={140}
					pseudo={this.state.pseudo}
					addMessage={this.addMessage}
				/>
			</div>
		);
	}
}

export default App;
