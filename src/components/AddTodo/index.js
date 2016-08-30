import { connect } from 'react-redux';
import { addTodo } from '../../actions';

import ViewAddTodo from './AddTodo';


let mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (text) => {
      dispatch(addTodo(text));
    }
  };
};

let AddTodo = connect(
  null,
  mapDispatchToProps
)(ViewAddTodo);

export default AddTodo;