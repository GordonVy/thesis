import React, { Component } from 'react';
import { Input, Popup } from "semantic-ui-react";

class Counter extends Component {

	render() {
		return (
			<Popup trigger={
				<Input icon="pencil" iconPosition="left" transparent style={{ width: 60 }} placeholder="1" />
			} content='Click to edit quantity'/>
		)
	}
}

export default Counter;