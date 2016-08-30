import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import styles from './Filter.css';

const Filter = ({
  currentFilter,
  onFilterChanged
}) => (
    <Tabs value={currentFilter}>
      <Tab value="SHOW_ALL" label="All" onActive={() => {
        onFilterChanged('SHOW_ALL');
      } }/>
      <Tab value="SHOW_ACTIVE" label="Active" onActive={() => {
        onFilterChanged('SHOW_ACTIVE');
      } } />
      <Tab value="SHOW_COMPLETED" label="Completed" onActive={() => {
        onFilterChanged('SHOW_COMPLETED');
      } } />
    </Tabs>
  );

export default Filter;