import React, { Component } from 'react';

import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <MyName name="리액트" />
    );
  }
}*/

// jsx코딩
/*class App extends Component {
  render() {
    const name = 'react';
    // css는 객체로
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there {name}
      </div>
    );
  }
}
*/
export default App;
