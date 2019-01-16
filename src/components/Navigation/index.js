import React from 'react';
import { Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const Navigation = (props) => {
  console.log(props);
  return (
  <nav>
  </nav>
  )
};

export default withSitecoreContext()(Navigation);
