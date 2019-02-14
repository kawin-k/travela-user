import React from 'react'

import './index.scss'

const TripDescription = ({description = 'trip description'}) => {
  return (
    <div className="trip-description-wrapper">
      {description}
    </div>
  )
}

export default TripDescription
