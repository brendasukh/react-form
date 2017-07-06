import React from 'react';

class Kittens extends React.Component {
  render() {
  return (
    <div>
        <h3>Kittens</h3>
        <div className="flex flex-wrap">
          {this.props.kittens.map((kitten, i) => (
            <div key={i} className="kitten m1">
              <img src={kitten.imageUrl} />
              <h4>{kitten.name}</h4>
            </div>
          ))}
        </div>
    </div>
    )
  }
}

export default Kittens;
