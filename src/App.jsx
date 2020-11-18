import React from 'react'
import TopNavbar from './components/navigations/TopNavbar';
import { BrowserRouter } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <TopNavbar />
                <div className="container-fluid mb-5">
                    <UserRoutes />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
