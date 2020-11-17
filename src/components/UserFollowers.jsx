import React from 'react'
import { Link } from 'react-router-dom'


const SingleFollower = ({ user }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <div className="d-flex">
                <img
                    className="follow-profile-pic mr-3"
                    src={user.avatar_url}
                    alt={user.login}
                />
                <h4 className="d-flex align-items-center">{user.login}</h4>
                <Link
                    to={`/user/${user.login}`}
                    className="ml-auto card-link d-flex align-items-center btn btn-primary view-on-github"
                >
                    View Profile
                </Link>
            </div>
        </div>
    )
}


const UserFollowers = ({ users }) => {

    return (
        <>
            {users.map(user => {
                return <SingleFollower key={user.login} user={user} />
            })}
        </>
    )

}


export default UserFollowers