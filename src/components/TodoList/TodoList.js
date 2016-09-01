import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import styles from './TodoList.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteConfirm: false,
      currentDeleteId: -1,
    };
  }

  componentDidMount() {
    this.props.connectToFirebase();
  }

  render() {

    const {
      todos,
      onTodoDoneClick,
      onTodoDeleteClick,
    } = this.props;

    const deleteActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => {
          this.setState({
            showDeleteConfirm: false,
            currentDeleteId: -1,
          });
        } }
        />,
      <FlatButton
        label="Delete"
        primary={true}
        onTouchTap={() => {
          console.log('delete click');
          this.props.onTodoDeleteClick(this.state.currentDeleteId);
          this.setState({
            showDeleteConfirm: false,
            currentDeleteId: -1,
          });
        } }
        />,
    ];

    return (
      <div>
        <Dialog
          title="Are you sure?"
          actions={deleteActions}
          modal={false}
          open={this.state.showDeleteConfirm}
          onRequestClose={() => {
            this.setState({
              showDeleteConfirm: false,
              currentDeleteId: -1,
            });
          } }
          contentStyle={{
            maxWidth: 400
          }}
          >
          Are you sure you want to delete the To Do item?
        </Dialog>
        <List>
          {
            todos.map((item) => {
              let checkBox = <Checkbox checked={item.completed} onCheck={(event, isChecked) => {
                onTodoDoneClick(item.id, !item.completed);
              } }/>;
              let deleteButton = (
                <IconButton onClick={() => {
                  this.setState({
                    currentDeleteId: item.id,
                    showDeleteConfirm: true
                  });
                  // onTodoDeleteClick(item.id);
                } }>
                  <IconDelete />
                </IconButton>
              );

              return <ListItem
                key={item.id}
                primaryText={item.text}
                leftCheckbox={checkBox}
                rightIconButton={deleteButton}
                innerDivStyle={{
                  textDecoration: item.completed ? 'line-through' : 'none'
                }}
                />;
            })
          }
        </List>
      </div >
    );
  }
}

export default TodoList;