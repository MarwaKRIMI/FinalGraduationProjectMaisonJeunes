import React from 'react'
import {connect} from 'react-redux'
import "./club-list.css"

import ClubCard from '../club-item/club-item'


const ClubList = (props) => {
  return   <div className="club-list">
        {
            props.clubs.map(el => <ClubCard key={el.id} club={el} />)
        }
        
      </div>
}

const mapStateToProps = state => {
    return {
        clubs: state.clubsReducer
    }
}


const ClubListContainer =
    connect(mapStateToProps)(ClubList)

export default ClubListContainer