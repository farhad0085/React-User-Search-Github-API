import React from 'react'
import { connect } from 'react-redux'


const SingleGist = ({ gist }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <h3>{Object.keys(gist.files)[0]}</h3>
            <p>{gist.description}</p>
        </div>
    )
}


const UserGist = ({ gists }) => {

    return (
        <>
            {gists.map(gist => {
                return <SingleGist key={Object.keys(gist.files)[0]} gist={gist} />
            })}
        </>
    )

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(UserGist)