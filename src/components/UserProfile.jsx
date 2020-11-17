import React from 'react'
import { connect } from 'react-redux'
import UserProfileNavbar from './navigations/UserProfileNavbar';
import { getFormattedDateTime } from '../utils';
import UserRoutes from './routes/UserRoutes'

const UserProfile = ({ user }) => {

    return (
        <>
            <div className="card">
                <div className="row m-2 pt-3">
                    <div className="col-xs-4 col-sm-4 col-md-6 col-lg-2">
                        <img
                            className="profile-pic"
                            style={{ float: 'right' }}
                            src={user.avatar_url}
                            alt={user.name || user.login}
                        />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-6 col-lg-5">
                        <h3 className="profile-name">{user.name || user.login}</h3>
                        <p className="profile-bio">{user.bio || "No bio available for this user"}</p>
                        <p className="profile-location">{user.location || "Location not found for this user"}</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                        <h6 className="most-right-info">Public Repositories: {user.public_repos}</h6>
                        <h6 className="most-right-info">Followers: {user.followers}</h6>
                        <h6 className="most-right-info">Following: {user.following}</h6>
                        <h6 className="most-right-info">Member Since: {getFormattedDateTime(user.created_at)}</h6>
                        <h6 className="most-right-info">Last Activity: {getFormattedDateTime(user.updated_at)}</h6>
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-primary view-on-github">View on Github</a>
                    </div>
                </div>
            </div>

            <UserProfileNavbar />
            <UserRoutes />
        </>
    )

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(UserProfile)