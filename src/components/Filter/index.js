import ViewFilter from './Filter';

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions';


const mapStateToProps = (state) => {
  return {
    currentFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChanged: (filter) => {
      dispatch(setVisibilityFilter(filter));
    }
  };
};


let Fitler = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewFilter);

export default Fitler;