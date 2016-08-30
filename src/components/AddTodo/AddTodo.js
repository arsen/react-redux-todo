import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <TextField
          hintText="type your todo"
          floatingLabelText="Todo"
          className={styles.input}
          value={this.state.value}
          onChange={(event) => {
            this.setState({
              value: event.target.value,
            });
          } }
          />
        <RaisedButton
          label="Add"
          primary={true}
          onClick={() => {
            this.props.onAddClick(this.state.value);
            this.setState({
              value: ''
            });
          } }
          />
      </div>
    );
  }
}

AddTodo.defaultProps = {
  onAddClick: () => {}
};



export default AddTodo;