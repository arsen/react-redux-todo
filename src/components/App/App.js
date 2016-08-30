import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import Filter from '../Filter';


import styles from './App.css';

const App = () => (
  <MuiThemeProvider>
    <Paper className={styles.container} zDepth={2}>
      <AddTodo />
      <Filter />
      <TodoList />
    </Paper>
  </MuiThemeProvider >
);


export default App;