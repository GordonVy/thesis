import React, { Component } from "react";
import { Form, Divider, Input } from "semantic-ui-react";
// import Slider from "react-rangeslider";


class Category extends Component {
	// constructor(props, context) {
	//     super(props, context)
	//     this.state = {
	//       volume: 0
	//     }
	// }

	state = {
		volume: 0
	}

	 handleOnChange = (value) => {
	    this.setState({
	      volume: value
	    })
	}
	render() {
		return (
			<Form size="big" style={{ fontSize: 1.2 + "em" }}>
				<Input icon="search" fluid placeholder="Search..." />
				<Divider />
				<Form.Group grouped>
			      <label>Court</label>
			      <Form.Field label="Quán cơm tấm" control="input" type="checkbox" />
			      <Form.Field label="Quán sushi" control="input" type="checkbox" />
			    </Form.Group>
			    <Divider />
			    {/*<Form.Group grouped>
			      <label>Cost</label>
			      <Form.Field label="0 - 20000" control="input" type='radio' name='htmlRadios'/>
			      <Form.Field label="20000 - 30000" control="input" type='radio' name='htmlRadios'/>
			      <Form.Field label="30000 - 40000" control="input" type='radio' name='htmlRadios'/>
			    </Form.Group>*/}
			</Form>
		);
	}
}

export default Category