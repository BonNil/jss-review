import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Login from '../LoginForm';

const loginClasses = {
  container: 'container-class',
  input: 'input-class'
}

const NewComponent = (props) => (
  <div>
    <p>NewComponent Component</p>
    <Text field={props.fields.heading} />
    <Login classes={loginClasses} />
  </div>
);

export default NewComponent;
