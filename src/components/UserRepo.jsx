import React from 'react'
import { connect } from 'react-redux'


const SingleRepo = ({repo}) => {
    return (
        <div className="card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
        </div>
    )
}


const UserRepo = ({ user, repos }) => {

    return (
        <>
            <div className="card">
               {repos.map(repo => {
                   return <SingleRepo key={repo.name} repo={repo} />
               })}
            </div>
        </>
    )

}

const mapStateToProps = state => {
    console.log("UserRepo state", state);
    return state
}

export default connect(mapStateToProps)(UserRepo)