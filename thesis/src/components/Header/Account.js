import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../Messages/InlineError";

class Account extends Component {

    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    }

    onChange = e => 
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            console.log("this.state.data");
            console.log(this.props.submit(this.state.data));
            this.props
                .submit(this.state.data)
                .catch(err =>
                  this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    render() {

        const { data, errors, loading } = this.state;

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                { errors.global && <Message negative>
                    <Message.Header>Something went wrong!</Message.Header>
                    <p>{ errors.global }</p>
                    </Message>}
                <Form.Field size="big" error={!!errors.email}>
                    <label htmlFor="email" style={{ fontSize: 1.5 + 'em' }}>Email</label>
                    <Input
                        type="email" 
                        id="email" 
                        name="email"
                        size="big"
                        placeholder="example@email.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field size="big" error={!!errors.password}>
                    <label htmlFor="password" style={{ fontSize: 1.5 + 'em' }}>Password</label>
                    <Input
                        type="password" 
                        id="password" 
                        name="password"
                        size="big"
                        placeholder="behappy"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button.Group fluid size="big">
                    <Button>SIGN IN</Button>
                    <Button.Or />
                    <Button color="linkedin" as={Link} to="/signup">SIGN UP</Button>
                </Button.Group>
            </Form>
        );
    }
}

Account.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Account;
