import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const SingleFollowing = ({ following }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <div className="d-flex">
                <img
                    className="follow-profile-pic mr-3"
                    src={following.avatar_url}
                    alt={following.login}
                />
                <h4 className="d-flex align-items-center">{following.login}</h4>
                <Link
                    to={`/user/${following.login}`}
                    className="ml-auto card-link d-flex align-items-center btn btn-primary view-on-github"
                >
                    View Profile
                </Link>
            </div>
        </div>
    )
}


const UserFollowings = ({ followings }) => {

    return (
        <>
            {followings.map(following => {
                return <SingleFollowing key={following.login} following={following} />
            })}
        </>
    )

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(UserFollowings)