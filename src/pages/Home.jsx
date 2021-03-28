import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadReviews, addReview, removeReview } from '../store/actions/reviewActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { Link } from 'react-router-dom'

class _Home extends Component {
  state = {
    reviewToEdit: {
      txt: '',
      aboutUserId: ''
    }
  }
  componentDidMount() {
    this.props.loadReviews()
    this.props.loadUsers()
  }

  handleChange = ev => {
    const { name, value } = ev.target
    this.setState(prevState => ({
      reviewToEdit: {
        ...prevState.reviewToEdit,
        [name]: value
      }
    }))
  }

  addReview = async ev => {
    ev.preventDefault()
    const { reviewToEdit } = this.state
    if (!reviewToEdit.txt || !reviewToEdit.aboutUserId) return alert('All fields are required')
    await this.props.addReview(this.state.reviewToEdit)
    this.setState({ reviewToEdit: { txt: '', aboutUserId: '' } })
  }

  onRemove = async reviewId => {
    await this.props.removeReview(reviewId)
    // this.props.history.push('/login')
  }

  canRemove = review =>
    (review.byUser._id === this.props.loggedInUser?._id || this.props.loggedInUser?.isAdmin)

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
