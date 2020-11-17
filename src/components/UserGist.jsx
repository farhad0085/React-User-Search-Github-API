import React from 'react'
import { connect } from 'react-redux'


const SingleGist = ({gist}) => {
    return (
        <div className="card">
            <h3>{Object.keys(gist.files)[0]}</h3>
            <p>{gist.description}</p>
        </div>
    )
}


const UserGist = ({ gists }) => {

    return (
        <>
            <div className="card">
               {gists.map(gist => {
                   return <SingleGist key={Object.keys(gist.files)[0]} gist={gist} />
               })}
            </div>
        </>
    )

}

const mapStateToProps = state => {
    console.log("UserGist state", state);
    return state
}

export default connect(mapStateToProps)(UserGist)