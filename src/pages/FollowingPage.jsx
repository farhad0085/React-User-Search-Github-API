import React from 'react'
import UserFollowers from '../components/UserFollowers'
import { connect } from 'react-redux'



const FollowingPage = ({followings}) => {

    return <UserFollowers users={followings} />

}

const mapStateToProps = state => {
    return state
 }

export default connect(mapStateToProps)(FollowingPage)