import React from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import UserProfile from '../components/UserProfile'

const ResultPage = (props) => {

    return (
        <div className="container-fluid">
            {!props.loading && !Object.keys(props.errors).length && Object.keys(props.user).length ? (
                <UserProfile />
            ) : (
                    <>
                        {props.loading && <Loading size="80px" /> }
                        {Object.keys(props.errors).length !== 0 && (
                            <div>
                            Error Occured: {props.errors.message}
                            </div>
                        )}
                    </>
                )}

        </div>
    )

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ResultPage)