import {
  HeaderStyle,
  HeaderBody,
  Body,
  ActiveButton,
  AllButton,
  CompletedButton,
} from './StylingComponents';

import React, { Component } from 'react'

class AddList extends Component {
    render() {
    
            
                 
  return (
    <div>
      <HeaderBody>
        <HeaderStyle>TO DO List</HeaderStyle>
      </HeaderBody>
      <Body>
        <input type="text" placeholder="Add your event here......" />
        <button value="submit">Add</button>

        <br />
        <br />
        <br />
        <br />
        <input type="checkbox" />

        <br />
      </Body>
      <AllButton>View All</AllButton>
      <ActiveButton>Active</ActiveButton>
      <CompletedButton>Completed</CompletedButton>
    </div>
  );
      
    }
}

export default AddList


