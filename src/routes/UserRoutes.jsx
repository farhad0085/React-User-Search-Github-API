import React from 'react'
import { Route } from 'react-router-dom';
import RepoPage from '../pages/RepoPage'
import GistPage from '../pages/GistPage';
import FollowerPage from '../pages/FollowerPage';
import FollowingPage from '../pages/FollowingPage';
import HomePage from '../pages/HomePage';


const UserRoutes = () => {

    return (
        <>
            <Route path="/" component={HomePage} />
            <Route path="/repositories" component={RepoPage} />
            <Route path="/gists" component={GistPage} />
            <Route path="/followers" component={FollowerPage} />
            <Route path="/followings" component={FollowingPage} />
        </>
    )

}


export default UserRoutes