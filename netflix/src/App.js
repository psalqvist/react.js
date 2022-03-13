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

function App() {
  const user = null;

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // Logged in
        console.log(userAuth)
      } else {
        // Logged out
      }
    });

    // run cleanup-function
    return unsubscribe;
  }, [])

  return (
    <div className="app">
        {!user ? <LoginScreen /> :
          <Router>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        }
    </div>
  );
}

export default App;
