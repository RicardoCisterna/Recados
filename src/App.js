
import React from 'react';
import NavBar from './components/NavBar'
import Container from './components/Container'
import AudioMap from './containers/AudioMap'
import {createBrowserHistory} from 'history'
import {Route} from 'react-router'



class App extends React.Component {
  render(){
  return (
    <div>
        <Route component={NavBar} path="/" exact={false} />
        <Route component={AudioMap} path="/" exact={true} />
    </div>
  );
  }
}

export default App;