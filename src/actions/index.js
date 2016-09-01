import firebase from '../firebase';

export const connectToFirebase = () => {
  return (dispatch) => {
    firebase.ref('/public').on('child_added', (data) => {
      // console.log('child_added', data.val(), data.key);
      let item = {
        id: data.key,
        text: data.val().text,
        completed: data.val().completed
      };
      dispatch({
        type: 'ADD_TODO',
        data: item
      });
    });

    firebase.ref('/public').on('child_changed', (data) => {
      // console.log('child_changed', data.val());
      dispatch({
        type: 'TOGGLE_TODO',
        id: data.key
      });
    });

    firebase.ref('/public').on('child_removed', (data) => {
      // console.log('child_removed', data.val());
      dispatch({
        type: 'DELETE_TODO',
        id: data.key
      });
    });

  };
};

export const addTodo = (text) => {
  return (dispatch) => {
    let item = {
      text,
      completed: false,
    };
    firebase.ref('/public').push(item).key;
  };
};


export const deleteTodo = (id) => {
  return (dispatch) => {
    firebase.ref('/public/'+id).remove();
  };
};

export const toggleTodo = (id, value) => {
  return (dispatch) => {
    let updates = {};
    updates[id + '/completed'] = value;
    firebase.ref('/public').update(updates);
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};