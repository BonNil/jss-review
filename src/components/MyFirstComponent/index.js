import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyFirstComponent = (props) => {
  console.log(props)
  return (
  <div>
    <p>MyFirstComponent Component</p>
    <Text field={props.fields.Title} />
  </div>
  )
};

export default MyFirstComponent;
