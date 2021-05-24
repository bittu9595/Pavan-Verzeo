import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ReduxForm from './ReduxForm';
import { Route, withRouter } from 'react-router';
import Dashboard from './Dashboard';
import Login from './Login';

function App(props) {

  const [isSignedIn,setIsSignedIn] = useState(false);
  const [auth2,setAuth2] = useState(null);
  

  useEffect(()=>{

    window.gapi.load('client:auth2', () => {
      window.gapi.auth2.init({
          client_id: '101564240377-ti8fd7pgbgn0gph6j0br1ct4nmn55p1l.apps.googleusercontent.com',
          scope: 'email'
      }).then(() => {
        setAuth2(window.gapi.auth2.getAuthInstance());
      
        OAuthChange(auth2.isSignedIn.get()); 
        auth2.isSignedIn.listen(OAuthChange);
      });

  })


  },[]);

  const OAuthChange = (isSignedIn)=> {
    if(isSignedIn){
      const data = auth2.currentUser().get();
      if(data.getBasicProfile() !== undefined){

        console.log('name--',data.getBasicProfile().getName());
        console.log('email id---',data.getBasicProfile().getEmail());

      }
    } else {
      setIsSignedIn(false);
    }
  }

  const signIn = ()=> {

    if(auth2){
      auth2.signIn({prompt: 'select_account'});
    }

  }

  

  return (
    <div className="App">
      <Route exact path = "/" component= {Login} />
      <Route exact path = "/dashboard" component = {Dashboard} />
    {/* <button onClick = {signIn}>Sign In</button> */}
    </div>
  );
}






export default withRouter(App);


