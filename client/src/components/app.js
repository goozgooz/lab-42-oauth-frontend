import '../style/main.scss';

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Chat from './chat'
import Login from './login'
import Profile from './profile'

import * as authActions from '../app/actions/auth';
import * as routeActions from '../app/actions/routes';

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        // TODO: this is a good time to validate the user
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Chat App" />

                <Navbar auth={this.props.auth} switchRoute={this.props.switchRoute} /> 

                <main>
                    <Switch location={{pathname:this.props.route}}>
                        <Route exact path='/chat' component={Chat} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </main>

                <Footer>
                    <p>&copy;2017 401n4</p>
                </Footer>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    route: state.route,
});

const mapDispatchToProps = (dispatch, getState) => ({
    validate: () => dispatch(authActions.validate()),
    logout: () => dispatch(authActions.logout()),
    switch: (route) => dispatch(authActions.switchRoute(route)),
})

export default App;