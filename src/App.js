import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
var Chance = require('chance');
var faker = require('faker'); 

const App = () =>  {
  return(

<BrowserRouter>
      <div className="App">
     <Navbar />
     <Switch>
       <Route exact path="/" component={PersonList} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
     </Switch>
  
       
      </div>
      </BrowserRouter>




  )
}


const Fakeperson = () => {
  let yui = Math.floor(Math.random()*100)
  let company  = faker.company.companyName();
  let username = faker.internet.userName();
  let password = faker.internet.password();
  const url =`https://randomuser.me/api/portraits/thumb/men/${yui}.jpg`
return(
    <div className="person">
    <img src={url} alt=""/>
      <div>
        <h4>Company: {company}</h4>
        <h4>Username: {username}</h4>
        <h4>Password: {password}</h4>
      </div>
    </div>
)

}

const Navbar = ()=>{
  return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Randows</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/about">About <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/contact">Contact <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a disabled={true} class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Random</a>
          <a class="dropdown-item" href="#">Profile</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Generator</a>
        </div>
      </li>
   
    </ul>
 
  </div>
</nav>
  )
}







const Person = (props) => {





  var chance = new Chance();
  let name= chance.name()
  let addr = chance.address()
  let age = chance.age()
  // console.log(name, addr, age)
  let yui = Math.floor(Math.random()*100)
  console.log(yui)
  const url =`https://randomuser.me/api/portraits/thumb/men/${yui}.jpg`
  return (
 
    <div className="person">
      <img src={url} alt=""/>
      <div>
        <h4>Name: {name}</h4>
        <h4>Address: {addr}</h4>
        <h4>Age: {age}</h4>
      </div>
    </div>
  )
}


const PersonList = () => {

  return(

<div>



  
    <section>
    <Person/>
    <Person />
    <Person />
    <center>
    <h4><u>Using Faker generator</u></h4>
    </center>
    <Fakeperson />
    </section>
    </div>
  )
}


const About = () =>{
  return(
    <div className="container">
      <div className="jumbotron mt-4">
        <center>
        <h4>About the application</h4>
      <p><b>Randows</b> is an application for generating random profiles using <b><u>faker</u></b> package and also <b><u>chance</u></b> pakage and <b><u>random</u> <u>user</u> <u>generator.</u></b>
        This application was built to showcase technical skills to show how to populate application with random data for testing.
        and also can be used as a random profile generator
      </p>
      </center>
      </div>
    </div>
  )
}


const Contact = () =>{
  return(
    <div className="container">
      <div className="jumbotron mt-4">
        <center>
        <h1>Contact</h1>
      <p>appusrn@gmail.com
      </p>
      </center>
      </div>
    </div>
  )
}


export default App;
