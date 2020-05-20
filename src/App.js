import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';
import { auth } from './firebase/firebase.utils';
import { saveUser } from './firebase/user-repo';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuthFunction = null;
  unsubscribeFromSnapshotFunction = null;

  componentDidMount() {
    this.unsubscribeFromAuthFunction = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await saveUser(userAuth);
        this.unsubscribeFromSnapshotFunction = userRef.onSnapshot(this.setUserFromSnapshot);
      } else {
        this.clearUser();
      }
    });
  }

  clearUser = () => {
    this.setState({ currentUser: null });
  }

  setUserFromSnapshot = (userSnapshot) => {
    this.setState({
      currentUser: {
        id: userSnapshot.id,
        ...userSnapshot.data()
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot()
  }

  unsubscribeFromSnapshot = () => {
    if (this.unsubscribeFromSnapshotFunction) {
      this.unsubscribeFromSnapshotFunction();
      this.unsubscribeFromSnapshotFunction = null;
    }
  }

  unsubscribeFromAuth = () => {
    if (this.unsubscribeFromAuthFunction) {
      this.unsubscribeFromAuthFunction();
      this.unsubscribeFromAuthFunction = null;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={ true } path="/" component={ HomePage } />
          <Route exact={ true } path="/shop" component={ ShopPage } />
          <Route exact={ true } path="/sign-in" component={ SignInSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
