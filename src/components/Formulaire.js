import React, { Component } from "react";

class Formulaire extends Component {
	// Initialisation of state
	state = {
		message: "",
		length: this.props.length
	};

	// create message and record in the state
	createMessage = () => {
		const { addMessage, pseudo, length } = this.props;
		// Store properties
		const message = {
			pseudo,
			message: this.state.message
		}
		// Pass message
		addMessage(message);

		// Reset formulary  and length after write a message but messages stay in the state
		
		this.setState({ message: "", length });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.createMessage();
	};

	handleChange = event => {
		const message = event.target.value;
		const length = this.props.length - message.length;
		this.setState({ message, length});
	};


// For use touch Enter
	handleKeyUp = event => {
		if (event.key === "Enter") {
			this.createMessage()
		}
	};

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<textarea
					value={this.state.message}
					required
					maxLength={this.props.length}
					onChange={this.handleChange}
					onKeyUp={this.handleKeyUp}
				/>
				<div className="info">{this.state.length}</div>
				<button type="submit">Envoyer !</button>
			</form>
		);
	}
}

export default Formulaire;
