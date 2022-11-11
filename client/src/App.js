import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import CreateDog from './components/CreateDog'
import Detail from './components/Detail'
import About from './components/About'

function App(){
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route exact path = '/' component= {LandingPage}/>
                    <Route exact path = '/dogs' component= {Home}/>
                    <Route exact path = '/dogs/create' component={CreateDog}/>
                    <Route exact path = '/dogs/about' component={About}/>
                    <Route path = '/dogs/:id' component={Detail}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;