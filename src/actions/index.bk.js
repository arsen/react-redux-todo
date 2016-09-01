import fetch from 'isomorphic-fetch';

import firebaseDb from './firebase';

const todosUpdated = (data) => {
  return {
    type: 'TODOS_UPDATED',
    todos: data
  };
};


let nextTodoId = 0;

const todosFetchStart = () => {
  return {
    type: 'TODOS_FETCH_START',
    time: new Date().getTime()
  };
};

const todosFetchDone = (data) => {
  return {
    type: 'TODOS_FETCH_DONE',
    todos: data,
    time: new Date().getTime()
  };
};

export const getTodos = () => {
  return (dispatch) => {
    dispatch(todosFetchStart());
    return fetch('/data.json')
      .then(response => response.json())
      .then(json => dispatch(todosFetchDone(json)))
      .catch(err => dispatch(todosFetchDone([])));
  };
};

export const addTodo = (text) => {
  let item = {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
  firebaseDb.push(item);
  return item;
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};