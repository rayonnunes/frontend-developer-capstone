import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

import './featured-restaurant.css'
import { Badge } from '../Badge'
import { Button } from '../Button'

export function FeaturedRestaurant({ restaurant }) {
    const { id, name, description, image, badges } = restaurant
    return (
        <div className="featured-restaurant">
            <div className="restaurant-img">
                <img src={image} alt={`Restaurant ${name} image`} />
            </div>
            <div className="restaurant">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="badges">
                    {badges.map(badge => (
                        <Badge key={badge.value} variant={badge.type}>{badge.value}</Badge>
                    ))}
                </div>
                <div className="restaurant-bottom-button">
                    <Link to={`/restaurants/${id}`}>
                        <Button>View</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

FeaturedRestaurant.propTypes = {
    restaurant: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        badges: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
}