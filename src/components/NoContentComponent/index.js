import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const NoContentComponent = (props) => (
  <div>
    <p>NoContentComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default NoContentComponent;
