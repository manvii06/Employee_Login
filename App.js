import React, { useState} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Cards from './components/cards' ;
import Welcome from './components/Welcome';

function App() {
  const adminUser= {
    email: 'admin@gmail.com',
    password: 'admin123'
  }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if( details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in");

      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      console.log("details do not match");

      setError("details do not match");
      }
  }

  const Logout = () => {
    setUser({name: '', email: '' });
    
  }

  return (
    <div className="container">
      {(user.email != '') ? (
        < Welcome />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}
 
export default App;

