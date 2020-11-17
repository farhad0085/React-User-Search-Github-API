import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loadUserProfileData } from '../store/actions/userActions'


const UserSearchForm = props => {

    const [username, setUsername] = useState('')

    const submitHandler = event => {
       event.preventDefault()
       setUsername('')
       props.loadUserProfileData(username)
    }

    return (
        <form className="mb-4" onSubmit={submitHandler}>
            <input
                type="search"
                name="username"
                id="username"
                className="form-control form-control-lg"
                placeholder="Enter username and smash enter key"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
        </form>
    )
}


export default connect(null, { loadUserProfileData })(UserSearchForm)