import { PropTypes } from 'prop-types';

import './menu-item.css';

export function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <div className="menu-item-details">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>

      </div>
      </div>
      <p>{`$ ${item.price.toFixed(2)}`}</p>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};