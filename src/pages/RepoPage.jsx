import React from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import UserRepo from '../components/UserRepo'


const RepoPage = (props) => {

    return (
        <>
            {!props.loading && !Object.keys(props.errors).length && Object.keys(props.user).length ? (
                <UserRepo />
            ) : (
                    <>
                        {props.loading && <Loading size="80px" />}
                        {Object.keys(props.errors).length !== 0 && (
                            <div>
                                Error Occured: {props.errors.message}
                            </div>
                        )}
                    </>
                )}

        </>
    )

}

const mapStateToProps = state => {
    console.log("RepoPage state", state);
    return state
}

export default connect(mapStateToProps)(RepoPage)