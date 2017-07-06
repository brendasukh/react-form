import React, { Component } from 'react';

class NewAnimalForm extends Component {
  render() {
    return (
      <div>
        <h2>Submit A Cute Animal:</h2>
        <form>
          <input className="field mb1" type="text" name="name" placeholder="Name" />
          <input className="field ml1 mb1" type="text" name="imageUrl" placeholder="Image Url" /><br />
          <input className="field" type="radio" name="type" value="kitten" /> Kitten
          <input className="field ml1" type="radio" name="type" value="puppy" /> Puppy<br />
          <button className="btn btn-primary mt1" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewAnimalForm;