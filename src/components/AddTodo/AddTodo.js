import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import styles from './AddTodo.css';

const AddTodo = () => (
  <div className={styles.container}>
    <TextField
      hintText="type your todo"
      floatingLabelText="Todo"
      className={styles.input}
    />
  <RaisedButton label="Add" primary={true}/>
  </div>
);

export default AddTodo;