import React from 'react'
import UserSearchForm from '../forms/UserSearchForm'
import ResultPage from './ResultPage'


const HomePage = ({history}) => {
    return (
        <>
            <UserSearchForm history={history} />            
            <ResultPage />
        </>
    )

}


export default HomePage