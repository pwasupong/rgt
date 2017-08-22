import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class App extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementRight={<FlatButton label="Sign Out" href="/signout" />}
        />
      </div>
    );
  }
}
