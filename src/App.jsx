import React from 'react'
import TopNavbar from './components/navigations/TopNavbar';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <TopNavbar />
                <div className="container-fluid">
                    <Route path="/" component={HomePage} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
