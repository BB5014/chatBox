import React, { Component } from "react";

class Formulaire extends Component {
	state = {
		message: ""
	};

	// create message and record in the state
	createMessage = () => {
		const { addMessage, pseudo } = this.props;
		// Store properties
		const message = {
			pseudo,
			message: this.state.message
		}
		// Pass message
		addMessage(message);

		// Reset formulary after write a message but messages stay in the state
		this.setState({ message: "" });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.createMessage();
	};

	handleChange = event => {
		const message = event.target.value;
		this.setState({ message });
	};

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<textarea
					value={this.state.message}
					required
					maxLength="140"
					onChange={this.handleChange}
				/>
				<div className="info">140</div>
				<button type="submit">Envoyer !</button>
			</form>
		);
	}
}

export default Formulaire;
