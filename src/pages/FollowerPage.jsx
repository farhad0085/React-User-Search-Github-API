import React from 'react'
import UserFollowers from '../components/UserFollowers'
import { connect } from 'react-redux'


const FollowerPage = ({followers, history}) => {

    return <UserFollowers users={followers} history={history} />

}

const mapStateToProps = state => {
   return state
}

export default connect(mapStateToProps)(FollowerPage)