import React, {Component} from 'react';
import Header from './header.js';
import Summary from './summary.js'
import ContactInfo from './contactinfo.js'

class PortFolioContent extends Component {
  render() {
    return (
      <div class="portfolio-content">
        <Header />
        <Summary />
        <ContactInfo />
      </div>
      )
    }
  }

export default PortFolioContent;
