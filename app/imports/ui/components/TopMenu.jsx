import React from 'react';
import { Menu, Image } from 'semantic-ui-react';


export default class TopMenu extends React.Component {

  render() {
    const whiteItem = { color: 'white' };
    return (
        <div className="background-pic">
          <Menu borderless className="topMenu" >
            <Menu.Item><Image src="https://cdn.freebiesupply.com/logos/thumbs/2x/etq-amsterdam-logo.png" alt="logo"
                              height="100px"/></Menu.Item>
            <Menu.Item style={whiteItem}>Men</Menu.Item>
            <Menu.Item style={whiteItem}>Woman</Menu.Item>
            <Menu.Item style={whiteItem}>Permanent collection</Menu.Item>
            <Menu.Item style={whiteItem} position="right">Search</Menu.Item>
            <Menu.Item style={whiteItem}>Help</Menu.Item>
            <Menu.Item style={whiteItem}>My Account</Menu.Item>
            <Menu.Item style={whiteItem}>0</Menu.Item>
          </Menu>
        </div>
    );
  }
}
