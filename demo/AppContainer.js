import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Kittens from './Kittens';
import Puppies from './Puppies';
import GreetingForm from './GreetingForm';
import NewAnimalFormContainer from './NewAnimalFormContainer';

const animals = [
	{
		name: 'Lavender',
		imageUrl: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-9-57b30aa5797eb__605.jpg',
    type: 'kitten'
	},
	{
		name: 'Eclipse',
		imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/8f/e1/50/8fe150622f5f9ac9814f72c32f1e817e.jpg',
    type: 'kitten'
	},
	{
		name: 'Dickens',
		imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/77/40/e5/7740e5d0745f9661170ca81620bd548e--adorable-kittens-adorable-animals.jpg',
    type: 'kitten'
	},
  {
    name: 'Barnabas',
    imageUrl: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-5.jpg',
    type: 'puppy'
  },
  {
    name: 'Klaus',
    imageUrl: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-10.jpg',
    type: 'puppy'
  },
  {
    name: 'Sebastian',
    imageUrl: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-6.jpg',
    type: 'puppy'
  }
];

class AppContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			animals: [],
      visitor: ''
		}

    this.addVisitor = this.addVisitor.bind(this);
    this.addAnimal = this.addAnimal.bind(this);
	}

  componentDidMount() {
    Promise.resolve()
    .then(() => this.setState({ animals }))
    .catch(console.error.bind(console));
  }

  addVisitor(visitor) {
    this.setState({
      visitor
    });
  }

  addAnimal(animalObj) {
    this.setState({
      animals: [...this.state.animals, animalObj]
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className="container">
        <h1><Link to="/kittens">Kittens</Link> or <Link to="/puppies">Puppies</Link>?</h1>
        { !this.state.visitor.length ? <GreetingForm addVisitor={this.addVisitor} /> : <h4>Hey there, {this.state.visitor}!</h4>}
        {/* <h4><Link to="/newAnimal">Add a new cutie</Link></h4> */}

        <Switch>
          <Route exact path="/newAnimal" render={() => <NewAnimalFormContainer addAnimal={this.addAnimal} />} />
          <Route exact path="/kittens" render={() => <Kittens kittens={this.state.animals.filter(a => a.type === 'kitten')} />} />
          <Route exact path="/puppies" render={() => <Puppies puppies={this.state.animals.filter(a => a.type === 'puppy')} />} />
        </Switch>
      </div>
    )
  }
}

export default AppContainer;
