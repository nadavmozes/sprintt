import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadReviews, addReview, removeReview } from '../store/actions/reviewActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { Link } from 'react-router-dom'

class _Home extends Component {
  state = {
 
  }
  componentDidMount() {

  }



  render() {
    return (
      <div className="main-playlist">
        <h1>PlayList</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviewModule.reviews,
    users: state.userModule.users,
    loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
  loadReviews,
  loadUsers,
  addReview,
  removeReview
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
