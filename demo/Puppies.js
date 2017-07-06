import React from 'react';

class Puppies extends React.Component {
  render() {
    return (
      <div>
        <h3>Puppies</h3>
        <div className="flex flex-wrap">
          {this.props.puppies.map((puppy, i) => (
            <div key={i} className="puppy m1">
              <img src={puppy.imageUrl} />
              <h4>{puppy.name}</h4>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Puppies;
