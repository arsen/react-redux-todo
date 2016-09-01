import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, getTodos, connectToFirebase } from '../../actions';

import ViewTodoList from './TodoList';



const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoDoneClick: (id, value) => {
      dispatch(toggleTodo(id, value));
    },
    onTodoDeleteClick: (id) => {
      dispatch(deleteTodo(id));
    },
    connectToFirebase: () => {
      dispatch(connectToFirebase());
    }
  };
};

let TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewTodoList);

export default TodoList;