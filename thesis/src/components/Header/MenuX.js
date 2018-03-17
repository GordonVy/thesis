import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
var createReactClass = require('create-react-class');

const MenuX = createReactClass({
  
	getInitialState: function () {
  	return { open: false };
  },
  
  toggleMenu: function () {
  	this.setState({ open: !this.state.open });
  },
  
  render() {
  	const linksArray = [
    	{ name: "home", url: "#" },
      { name: "log in", url: "#" },
      { name: "restaurants", url: "#" }
    ];
    const socialArray = [
    	{
        icon: "fa fa-github-square", 
        url: "https://github.com/matthewvincent"
      },{
        icon: "fa fa-instagram", 
        url: "https://www.instagram.com/middlestates/"
      },{
        icon: "fa fa-tumblr-square", 
        url: "http://matthewvincentphotography.com/"
      }
    ];
    
  	return (
      <div>
       	<Panel 
          open={this.state.open} 
          links={linksArray} 
          socialLinks={socialArray}
        />
        <ButtonX 
          toggle={this.toggleMenu} 
          open={this.state.open} 
        />
      </div>
    );
  }
});

const ButtonX = createReactClass({
	render: function () {
  	return (
    	<button 
        className={this.props.open 
          ? "menu-toggle close-button" 
          : "menu-toggle "}
        onClick={this.props.toggle}
      > <i className="fa fa-plus"></i>
      </button>
    );
  }
});

const Panel = createReactClass({
	render: function () {
  	return (
    	 <div 
         className={this.props.open 
           ? "menu-wrapper menu-open" 
           : "menu-wrapper"}
       >
         <Links 
           links={this.props.links} 
           open={this.props.open} 
         />
         <Social 
           socialLinks={this.props.socialLinks} 
           open={this.props.open}
         />
       </div>
    );
  }
});

const Links = createReactClass({
	render: function () {
  	const linkList = this.props.links.map((link) => (
      <li className="link">
        <a href={link.url}>{link.name}</a>
      </li>
    ));
   
    return (
   	  <div 
        className={this.props.open 
          ? "links-wrapper"
          : "links-wrapper links-wrapper-closed"}
      > <ul className="link-list">
    		  {linkList}
        </ul>
      </div>
    );
  }
});

const Social = createReactClass({
	render: function () {
  	const socialLinks = this.props.socialLinks.map((link) => (
      <a href={link.url}>
        <i className= {link.icon} />
      </a>
    ));
    
  	return (
    	<div 
        className={this.props.open 
          ? "social-wrapper social-open"
          : "social-wrapper social-closed"}
      > {socialLinks}
      </div>
    );
  }
});

export default MenuX;
