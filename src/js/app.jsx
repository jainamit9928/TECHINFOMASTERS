import "../css/bootstrap.css"
import "../css/app.less"
import React from 'react'
import ReactDOM from 'react-dom'
import RouterComponent from './components/router.component'
import  NavBar from "./components/navbar.component"
import { BrowserRouter as Router,browserHistory } from 'react-router-dom'


const App = () => (
  <div>
        <nav>
          <NavBar />
        </nav>
     
    <div className="row">
      <div className="col-md-12">
        <main>
          <RouterComponent />
        </main>
      </div>
   </div>
   </div>


    )

ReactDOM.render(
  <Router forceRefresh={true}  history={browserHistory}>
      <App />
    </Router>,
  document.getElementById('container')
);
