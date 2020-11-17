import React from 'react'
import * as actions from '../store/actions/userActions'
import { connect } from 'react-redux'


const SingleFollower = ({ user, loadUserProfileData, history }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <div className="d-flex">
                <img
                    className="follow-profile-pic mr-3"
                    src={user.avatar_url}
                    alt={user.login}
                />
                <h4 className="d-flex align-items-center">{user.login}</h4>
                <button
                    onClick={() => loadUserProfileData(user.login, history)}
                    className="ml-auto d-flex align-items-center btn btn-primary view-on-github"
                >
                    View Profile
                </button>
            </div>
        </div>
    )
}


const UserFollowers = ({ users, loadUserProfileData, history }) => {

    return (
        <>
            {users.map(user => {
                return (
                    <SingleFollower
                        key={user.login}
                        loadUserProfileData={loadUserProfileData}
                        user={user}
                        history={history}
                    />
                )
            })}
        </>
    )

}


export default connect(null, { loadUserProfileData: actions.loadUserProfileData })(UserFollowers)