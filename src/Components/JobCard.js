import React, { useState } from 'react'
import { IoLocationOutline, IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const JobCard = ({jobTitle, icon, location, isRemote, isFullTime}) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className='job-card'>
        <div className="job-card-top">
            <img src={icon} alt="" />
            <div className="job-card-top-middle">
                <h3>{jobTitle}</h3>
                <div>
                    <IoLocationOutline />
                    <p className='job-location'>{location}</p>
                </div>
                <button className='job-card-bookmark' onClick={()=> setIsBookmarked(!isBookmarked)}>
                {isBookmarked? <IoBookmark/> : <IoBookmarkOutline/>}
                </button>
            </div>
        </div>
        <div className="job-card-bottom">
            <div className={ isFullTime ? `is-full-time full-time` : 'is-full-time part-time'}>
                <p>{isFullTime ? "Full Time" : "Part Time"}</p>
            </div>
            <p className="is-remote">{isRemote? "Remote" : "On Site"}</p>
        </div>
    </div>
  )
}

export default JobCard
