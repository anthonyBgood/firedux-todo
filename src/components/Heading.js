import React, {Component} from 'react'
import List from './List'

class Heading extends Component {
render(){
  return (
    
    <div>
      <div class='header'>
        <h1>
          ToDos
        </h1>
        <i>
          A todo is whatever you want it to be
        </i>
      </div>
      <div class="pure-g content">
          <div class="pure-u-1-24"></div>
          <div class="pure-u-22-24">
            <List/>
          </div>
          <div class="pure-u-1-24"></div>
      </div>
      <div class='footer'></div>
    </div>
    
    
  )
}
}

export default Heading;