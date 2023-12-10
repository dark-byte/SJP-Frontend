import React from 'react'
import jobs from './FeaturedJobData'
import JobCard from './JobCard'

const FeaturedJobList = () => {
  return (

    <div className="featured-job-list-container">
        <div className='featured-job-list'>
        {jobs.map((job)=>{
            return <JobCard {...job}/>
        })}
        </div>
    </div>
  )
}

export default FeaturedJobList
