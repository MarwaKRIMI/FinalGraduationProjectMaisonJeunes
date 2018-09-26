import React from "react";
//import {connect} from 'react-redux'
import "./club-item.css";
import {Link} from 'react-router-dom'

const ClubCard = props => {
  const { club = {} } = props;
  const {
    id,
    title = "Club Musique",
    description = "dddddddddddddddd",
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATgt7B-DwxBf62uaZwh-AUpTc7_rJUwSodT4ndXaGFfnc6VJbKA",
  link=''
  } = club;
  console.log(props)
  
  return (
    <div className="club-card-container">
      <div className="club-title">
        <h2>{title}</h2>
      </div>
      <div className="club-card">
        <div
          className="club-image"
          style={{
            backgroundImage: `url('${image}')`
          }}
        ></div>

        <div className="club-description"><p>{description}</p></div>
        <div>
        <Link to={`/club-${link}`}>
        <input class="explore-btn" type="button" value="Explorer" />
        </Link>
        </div>
        </div>
        
    </div>
  );
}

export default ClubCard
