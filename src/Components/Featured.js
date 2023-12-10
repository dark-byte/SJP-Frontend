import React from 'react'
import FeaturedJobList from './FeaturedJobList'

const Featured = () => {
  return (
    <div className='featured'>
        <h1>Featured Jobs</h1>
        <FeaturedJobList/>
        <button className='btn primary-btn'>Load More</button>
    </div>
  )
}

export default Featured
