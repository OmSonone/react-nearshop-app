import React,{Component} from 'react';
import Navbar from './components/homepage/navbar.js';
import {Route,Redirect,Switch} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Shopview from './components/shop/shopview'
import Signin from './components/signinup/signin.js';
import Signup from './components/signinup/signup.js'
import Home from './components/homepage/homepage.js'
import {connect} from 'react-redux'
import {auth,createUserProfileDocument} from './firebase/firebase.js'
import { setCurrentUser } from './redux/user.actions';
import { selectCurrentUser } from './redux/user.selectors';
//import { getCurrentUser } from './redux/user.selectors';

class App extends  Component {
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // userAuth returns null when auth.signOut() is called
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }

      setCurrentUser(userAuth);
    });
  };

  componentWillUnmount = async () => {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shopview} />
          
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Signin/>
              )
            }
          />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);















// const mapStateToProps =user=>({
// 	currentuser:user.currentuser
// });
// const mapDispatchtoProps=dispatch=>({

// 	 setCurrentUser:user=>dispatch(setCurrentUser(user))


// });
// export default connect(mapStateToProps,mapDispatchtoProps)(App);
//  