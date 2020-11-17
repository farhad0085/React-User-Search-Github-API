import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const SingleFollower = ({ follower }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <div className="d-flex">
                <img
                    className="follow-profile-pic mr-3"
                    src={follower.avatar_url}
                    alt={follower.login}
                />
                <h4 className="d-flex align-items-center">{follower.login}</h4>
                <Link
                    to={`/user/${follower.login}`}
                    className="ml-auto card-link d-flex align-items-center btn btn-primary view-on-github"
                >
                    View Profile
                </Link>
            </div>
        </div>
    )
}


const UserFollowers = ({ followers }) => {

    return (
        <>
            {followers.map(follower => {
                return <SingleFollower key={follower.login} follower={follower} />
            })}
        </>
    )

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(UserFollowers)