import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Posts'
import Project from './components/Project'
import Resume from './components/Resume'
import NavBar from './components/NavBar'
import LandingNav from './components/LandingPageNav'
import './App.css';

function App() {
  const [navBar, showNavBar] = useState(true)

  const toggleNav = () => {
    showNavBar(!navBar)
  }

  console.log(navBar)

  return (
    <>
      <BrowserRouter>
      {navBar ? <NavBar /> : <LandingNav />}
      {/* <NavBar /> */}
        <Switch>
          <Route component={ Home } path='/' exact/>
          <Route component={ Resume } path='/resume' />
          <Route component={ About } path='/about' />
          <Route component={ SinglePost } path='/post/:slug' />
          <Route component={ Post } path='/post' />
          <Route component={ Project } path='/project' />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
