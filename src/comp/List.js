import React from 'react'
import book from '../assets/book.png'
import clok from '../assets/clok.png'
import live from '../assets/live.png'
import sch from '../assets/sch.png'
import ads from '../assets/ads.png'
const List = () => {
  return (
    <div>
         <p className='heading'>Access curated courses worth</p>
        <p className='heading'><span className='money'> <div className='red-rect'></div>₹ 18,500</span> at just<span style={{color: "#0096FF"}}> ₹ 99 </span>per year!</p>
        <div>
            <div className="inner-div">
                <span><img src={book} height="30px" alt="" /></span>
                <p className='items'> <span style={{color: "#0096FF"}}>100+</span> Job relevant courses </p>
            </div>

            <div className="inner-div">
                <span><img src={clok} height="30px" alt="" /></span>
                <p className='items'> <span style={{color: "#0096FF"}}>20,000+</span> Hours of Content </p>
            </div>

            <div className="inner-div">
                <span><img src={live} height="30px" alt="" /></span>
                <p className='items'> <span style={{color: "#0096FF"}}>Exculisve</span> Webinar Access </p>
            </div>

            <div className="inner-div">
                <span><img src={sch} height="30px" alt="" /></span>
                <p className='items'> Scholarship worth <span style={{color: "#0096FF"}}>₹94,500</span>  </p>
            </div>

            <div className="inner-div">
                <span><img src={ads} height="30px" alt="" /></span>
                <p className='items'> <span style={{color: "#0096FF"}}> Ad Free</span> learning experience </p>
            </div>
        </div>
    </div>
  )
}

export default List