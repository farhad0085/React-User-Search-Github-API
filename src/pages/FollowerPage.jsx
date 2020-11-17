import React from 'react'
import UserFollowers from '../components/UserFollowers'
import { connect } from 'react-redux'


const FollowerPage = ({followers}) => {

    return <UserFollowers users={followers} />

}

const mapStateToProps = state => {
   return state
}

export default connect(mapStateToProps)(FollowerPage)