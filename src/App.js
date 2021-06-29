import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/navbar/NavBar';
import post from './components/posts/DisplayDeletePost';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
 
import { Provider } from 'react-redux';
import store from './store/store';
import editpost from './components/posts/EditPost';


function App() {
  return (
    <Provider store={store} >
      <Router>
      <div className="App">
         <Navbar />
       
         
        <Switch>
           <div className="container">
              <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2 mt-4">
                  <Route exact path="/" component={post} />
              </div>
              </div>
               <div className="row">
              <div className="col-md-8 offset-md-2  col-sm-8 offset-sm-2 mt-4">
                   <Route exact path="/edit/:id" component={editpost}  />
              </div>
              </div>
           </div>
         
         
        </Switch> 
         
         
      </div>
      </Router>
    </Provider>
  );
}

export default App;
