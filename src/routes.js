import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Site from './Site.js'
import Home from './Home.js'
import Projects from './Projects.js'
import Team from './Team.js'
import About from  './About.js'

const routes = (
  <Route path="/" component={Site}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="projects" component={Projects}></Route>
    <Route path="team" component={Team}></Route>
    <Route path="about" component={About}></Route>
  </Route>
)

export default routes
