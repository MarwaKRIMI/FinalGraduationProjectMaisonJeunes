import React from 'react'
import {connect} from 'react-redux'
import './club-filter.css'

const TitleFilter = ({onChange = () => {}}) => {
 return   <div className="name-filter">
        <input
            className="name-filter-text"
            type="text"
            onChange={(event) => {
                onChange(event.target.value)
            }} />
      </div>
}


const mapStateToProps = state => {
    return {
        value: state.titleFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (newTitleFilter) => {
            dispatch({
                type: 'SET_TITLE_FILTER',
                title: newTitleFilter
            })
        }
    }
}

const TitleFilterContainer =
    connect(mapStateToProps, mapDispatchToProps)(TitleFilter)

export default TitleFilterContainer
