import React, { Component } from 'react';

class App extends Component {
  render() {

  const time = new Date();
  const topicList = ['html', 'javascript', 'react'];

    return (
      <div>
        <h1>Hello World</h1>
        <h3>Current time: {time.toTimeString()}</h3>
        <ul>
            { topicList.map((topic) => <li>{topic}</li> )}
        </ul>
      </div>
    );
  }
}

export default App;
