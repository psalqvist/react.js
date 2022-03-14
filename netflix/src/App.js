import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { 
  Route,
  Routes,
  BrowserRouter as Router 
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // Logged in
        dispatch(login({
          // inject payload into the action
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout())
      }
    }, []);

    // run cleanup-function
    return unsubscribe;
  }, [])

  return (
    <div className="app">
        {!user ? <LoginScreen /> :
          <Router>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />}/>
            </Routes>
          </Router>
        }
    </div>
  );
}

export default App;
