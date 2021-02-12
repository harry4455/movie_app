import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "pizza",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Pizza_with_tomatoes.jpg/1200px-Pizza_with_tomatoes.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "pasta",
    image: "http://i.ytimg.com/vi/fvTFfHo6YPo/maxresdefault.jpg",
    rating: 4.2
  },
  {
    id: 3,
    name: "mozarella",
    image: "https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/italian%20buffalo%20mozzarella.jpg",
    rating: 4.6
  },
  {
    id: 4,
    name: "lasgna",
    image: "https://i.ytimg.com/vi/BFrkRFgHLVk/hqdefault.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
}

export default App;
