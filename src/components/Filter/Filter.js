import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import styles from './Filter.css';

const Filter = () => (
  <Tabs>
    <Tab label="All" />
    <Tab label="Active" />
    <Tab label="Completed" />
  </Tabs>
);

export default Filter;