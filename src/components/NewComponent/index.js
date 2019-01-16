import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const NewComponent = (props) => (
  <div>
    <p>NewComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default NewComponent;
