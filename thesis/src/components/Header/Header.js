import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Button } from "semantic-ui-react";
import Cart from "../../containers/Cart";
import Account from "./Account";
import { signin } from "../Action/Auth";

class Header extends Component {

  state = { activeItem: "inbox" }

  constructor(props){
    super(props);
    this.state = {
        showCart: false,
        showAccount: false,
        cart: this.props.cartItems,
        mobileSearch: false
    };
  }
  handleCart(e){
    e.preventDefault();
    this.setState({
        showCart: !this.state.showCart
    })
  }
  handleAccount(e){
    e.preventDefault();
    this.setState({
      showAccount: !this.state.showAccount
    })
  }
  submit = data => 
    this.props.signin(data).then(() => this.props.history.push("/"));

  render() {
    const style = {
      background: "rgba(0, 0, 0, 0)"
    };

    const { activeItem } = this.state;

    return (
        <div>
            <Menu size="massive" style={style}>
              <Menu.Item name="browse" active={activeItem === "browse"} ref="cartButton">
                <Button icon="cart" style={style} onClick={this.handleCart.bind(this)}/>
                <div className={this.state.showCart ? "cart-preview active" : "cart-preview"}>
                    <Cart />
                </div>
              </Menu.Item>

              {/*<Menu.Item name="submit" active={activeItem === "submit"}>
                <Icon name="content" />
              </Menu.Item>*/}

              <Menu.Menu position="right">
                <Menu.Item icon name="signup" active={activeItem === "signup"}>
                  <Button icon="user" style={style} onClick={this.handleAccount.bind(this)}/>
                  <div className={this.state.showAccount ? "account-preview active" : "account-preview"}>
                    <Account submit={this.submit}/>
                  </div>
                </Menu.Item>

                {/*<Menu.Item name="contact" active={activeItem === "contact"}>
                 <Icon name="call" />
                </Menu.Item>*/}

              </Menu.Menu>
            </Menu>
        </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signin: PropTypes.func.isRequired
};

export default connect(null, { signin })(Header);
