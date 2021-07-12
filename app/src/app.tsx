import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import LoginPage from './pages/LoginPage';
// import { Layout } from 'antd';
// import { Header, Content, Footer } from 'antd/lib/layout/layout';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import RegisterUser from './components/RegisterUser';
import UserPage from './pages/UserPage';

interface AppProps {
    firebase: any;
    database: any;
    user: IUserModel;
}

function App(props: AppProps) {

    const [user, setUser] = useState({});
    const value = { user, setUser };

    return (
        <>
            <ErrorBoundary
                // @ts-ignore
                fallbackRender={({ error, resetErrorBoundary, componentStack }) => (
                    <div>
                        <h1>An error occurred: {error.message}</h1>
                        <button onClick={resetErrorBoundary}>Try again</button>
                    </div>
                )}
            >

                <UserContext.Provider value={value}>
                    <Router>
                        <Route exact path="/" component={LoginPage} />
                        <Route exact path="/registeruser" component={RegisterUser} />
                        <Route exact path="/userpage" component={UserPage} />
                    </Router>
                </UserContext.Provider>

            </ErrorBoundary>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const user = state.user;
    return { user };
};


export default connect(mapStateToProps, null)(App);