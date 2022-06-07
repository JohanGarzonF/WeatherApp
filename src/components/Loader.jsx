import React from 'react'

const Loader = ({textLocation}) => {
  return (
    <div className='load_bg'>
      <img src='https://samherbert.net/svg-loaders/svg-loaders/circles.svg' />
      <h2>
        Loading...
      </h2>
      <p>{textLocation}</p>
    </div>
  )
}

export default Loader