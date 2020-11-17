import React from 'react'
import UserFollowers from '../components/UserFollowers'
import { connect } from 'react-redux'



const FollowingPage = ({followings, history}) => {

    return <UserFollowers users={followings} history={history} />

}

const mapStateToProps = state => {
    return state
 }

export default connect(mapStateToProps)(FollowingPage)