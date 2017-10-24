import React, { Component } from 'react';
import PortFolioFixed from './portfoliofixed.js'
import PortFolioContent from './portfoliocontent.js'

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortFolioFixed />
        <PortFolioContent />
      </div>
    );
  }
}

export default App;
