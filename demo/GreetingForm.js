import React, { Component } from 'react';

class GreetingForm extends Component {
  render() {
    return (
    <div>
      <h4>Hey there! What's your name?</h4>
      <form>
        <input name="visitor" placeholder="Your name here" type="text" className="field mr1" />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
    )
  }
}

export default GreetingForm;