import React from 'react'
import UserSearchForm from '../forms/UserSearchForm'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import UserProfile from '../components/UserProfile'


const HomePage = (props) => {
    return (
        <>
            <UserSearchForm history={props.history} />
            {/* <ResultPage /> */}

            {!props.loading && !Object.keys(props.errors).length && Object.keys(props.user).length ? (
                <UserProfile />
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
    return state
}

export default connect(mapStateToProps)(HomePage)