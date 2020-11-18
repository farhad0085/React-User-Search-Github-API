import React from 'react'
import { connect } from 'react-redux'
import CopyToClipboard from './CopyToClipboard'


const SingleRepo = ({ repo }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3>{repo.name}</h3>
                    <p className="description">{repo.description}</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <input type="text" disabled value={repo.clone_url} className="clone-repo" />
                    <CopyToClipboard value={repo.clone_url} />
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ float: 'right' }}
                        className="btn btn-primary view-on-github">
                        View on Github
                    </a>
                </div>
            </div>
        </div>
    )
}


const UserRepo = ({ repos }) => {

    return (
        <>
            {repos.map(repo => {
                return <SingleRepo key={repo.name} repo={repo} />
            })}
        </>
    )

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(UserRepo)