import React, { useState } from 'react'
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";


const JobCard = ({jobTitle, icon, location, isRemote, isFullTime, company}) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className='job-card'>
        <div className="job-card-top">
            <div className="job-card-img">
                <img src={icon} alt="" />
            </div>
            <div className="job-card-top-middle">
                <h3>{jobTitle}</h3>
                <div>
                    <IoLocationSharp />
                    <p className='job-location'>{location}</p>
                </div>
            </div>
            <button className='job-card-bookmark' onClick={()=> setIsBookmarked(!isBookmarked)}>
                {isBookmarked? <IoBookmark /> : <IoBookmarkOutline />}
            </button>
        </div>
        <div className="job-card-bottom">
            <p className="job-company">{company}</p>
            <div className='job-card-bottom-right'>
                <p className="is-remote"><TbWorldCode style={{transform: 'translateY(-1px)', fontSize: '22px', marginRight: '5px'}}/> {isRemote? "Remote" : "On Site"}</p>
                <div className={ isFullTime ? `is-full-time full-time` : 'is-full-time part-time'}>
                    <p>{isFullTime ? "Full Time" : "Part Time"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobCard
