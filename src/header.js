import React , { Component } from 'react' 


class Header extends Component {
    render(){
      return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <img className="navbar-brand logo" src="http://webneel.com/sites/default/files/images/manual/logo-all/14-animal-logo-design.gif"/> 
            <a className="navbar-brand slog" href="/">Find Your Way Again, Kanguro</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li><a href="/Recipee">Recipee</a></li>          
            </ul>
          </div>
        </div>
      </nav>  
      );
    }
  }

  export default Header;