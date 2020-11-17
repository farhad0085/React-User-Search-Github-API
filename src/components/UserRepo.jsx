import React from 'react'
import { connect } from 'react-redux'


const SingleRepo = ({ repo }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
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