import * as React from 'react';

import { GlobalStyles } from 'components/app/app-styles';


export class App extends React.Component {

  render() {
    return (
      <>
        <GlobalStyles/>

        <span>Hello World!</span>
      </>
    );
  }
}