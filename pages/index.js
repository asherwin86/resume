import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import About from '../pages/about'
import Experience from '../pages/experience'
import Education from '../pages/education'
import Skills from '../pages/skills'
import Interests from '../pages/interests'
import Awards from '../pages/awards'
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { Scrollspy } from 'reactstrap-scrollspy'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"

const Home = () => (
  <div id="page-top">
    <Head>
      <title>Anthony Sherwin Resume</title>
      <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet"/>
    </Head>

    <Scrollspy
      names={['navbar', 'about', null, 'experience', null, 'education', null, 'skills', null, 'interests', null, 'awards']}
      homeIndex={1}
    >
      <Navigation />
      <About />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Skills />
      <hr className="m-0" />
      <Interests />
      <hr className="m-0" />
      <Awards />
    </Scrollspy>
  </div>
)

export default Home
