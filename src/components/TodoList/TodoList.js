import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

import styles from './TodoList.css';

const DeleteIcon = (
  <IconButton>
    <IconDelete />
  </IconButton>
);

const TodoList = () => (
  <List>
    <ListItem primaryText="Inbox" leftCheckbox={<Checkbox />} rightIconButton={DeleteIcon}/>
    <ListItem primaryText="Starred" leftCheckbox={<Checkbox />} rightIconButton={DeleteIcon}/>
    <ListItem primaryText="Sent mail" leftCheckbox={<Checkbox />} rightIconButton={DeleteIcon}/>
    <ListItem primaryText="Drafts" leftCheckbox={<Checkbox />} rightIconButton={DeleteIcon}/>
    <ListItem primaryText="Inbox" leftCheckbox={<Checkbox />} rightIconButton={DeleteIcon}/>
    <ListItem primaryText="Inbox" leftCheckbox={<Checkbox />} rightIconButton={DeleteIcon}/>
    <ListItem primaryText="Starred" leftCheckbox={<Checkbox />} rightIconButton={DeleteIcon}/>
  </List>
);


export default TodoList;