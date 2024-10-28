import React from 'react'
import './Phone.css'

export default function Phone(props) {
  return (
    <div className="phone">
      {console.log(props)}
      <div className="img">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/218029122.jpg?k=1d8bb278b5451d0bfb00ba8b6b748b7c76fe506d7da9d013f830b99343e9232a&o=&hp=1" />
      </div>
      <div className="content">
        <h2>Staybook Hotel Nitya Maharani</h2>
        <p className="city">Paharganj, New Delhi</p>
        <p>
          Studio with free airport pickup Entire studio • 1 bathroom • 15m² 1
          double bed
        </p>
        <p>₹2,749</p>
        <button>See Availability</button>
      </div>
    </div>
  );
}
