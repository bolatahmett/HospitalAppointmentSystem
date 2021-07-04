import React from 'react';
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
    user: UserModel;
}

function App(props: AppProps) {

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

                <Router>
                        <Route exact path="/" component={LoginPage} />
                        <Route exact path="/registeruser" component={RegisterUser} />
                        <Route exact path="/userpage" component={UserPage} />
                </Router>
                {props.user &&
                    <UserContext.Provider value={{ user: props.user }}>
                        Test
                    </UserContext.Provider>
                }
            </ErrorBoundary>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const user = state.user;
    return { user };
};


export default connect(mapStateToProps, null)(App);