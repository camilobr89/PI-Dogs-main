import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import CreateDog from './components/CreateDog'
import Detail from './components/Detail'


function App(){
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route exact path = '/' component= {LandingPage}/>
                    <Route exact path = '/dogs' component= {Home}/>
                    <Route exact path = '/dogs/create' component={CreateDog}/>
                    <Route path = '/dogs/:id' component={Detail}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;