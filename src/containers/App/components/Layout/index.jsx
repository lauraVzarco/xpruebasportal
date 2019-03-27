import React from 'react';
import './styles.css';

const Layout = () => (
  <div className="app_layout">
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <p className="navbar-brand">The Dark Side</p>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><p>Home</p></li>
            <li><p>Events</p></li>
            <li><p>Jedis Murdered</p></li>
            <li><p>Our History</p></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><p><span className="glyphicon glyphicon-log-in"></span>Login</p></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid text-center">    
      <div className="row content">
        <div className="col-sm-2 sidenav">
          <p>Darth Maul</p>
          <p>Darth Sidious</p>
          <p>Darth Maul</p>
        </div>
      <div className="col-lg-8 text-left"> 
        <h1>Welcome back to the Dark Side</h1>
        <p>Did you ever hear the tragedy of Darth Plagueis "the wise"? I thought not.</p>
        <p>It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying.
          The dark side of the Force is a pathway to many abilities some consider to be unnatural.
          He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.</p>
        <h3>Darth Vader says...</h3>
        <p>This will be a day long remembered. It has seen the end of Kenobi; it will soon see the end of the Rebellion.</p>
      </div>
      <div className="col-sm-2 sidenav">
        <div className="well">
        <p>50% off Red Light saber</p>
      </div>
      <div className="well">
          <p>Jedi Council in Alderaan!</p>
        </div>
      </div>
      </div>
    </div>
    <footer className="container-fluid text-center footer">
      <p>The dark Side has cookies, the light side has lettuce!</p>
    </footer>
  </div>
);

export default Layout;