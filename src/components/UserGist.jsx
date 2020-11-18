import React from 'react'
import { connect } from 'react-redux'
import {getFormattedDateTime} from '../utils'


const SingleGist = ({ gist }) => {
    return (
        <div className="card border-round p-3 mb-2">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3>{Object.keys(gist.files)[0]}</h3>
                    <p className="description">{gist.description}</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <span>
                        <span className="description">Created: {getFormattedDateTime(gist.created_at)}</span><br/>
                        <span className="description">Last Updated: {getFormattedDateTime(gist.updated_at)}</span>
                    </span>
                    <a
                        href={gist.html_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{float: 'right'}}
                        className="btn btn-primary view-on-github">
                        View Gist
                    </a>
                </div>
            </div>
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