import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';



const getVisibleTodos = (
  todos,
  filter
) => {
  console.log('getVisibleTodos', todos);
  
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
};

let nextTodoId = 0;

const TodoApp = ({
  store
}) => (
    <div>
      <AddTodo
        onAddClick={text =>
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
          })
        }
        />
      <TodoList
        todos={getVisibleTodos(store.getState().todos, store.getState().visibilityFilter) }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
        />
      <Footer
        visibilityFilter={store.getState().visibilityFilter}
        onFilterClick={filter =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
        />
    </div>
  );

export default TodoApp;