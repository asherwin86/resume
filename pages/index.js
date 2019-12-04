import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import About from '../components/about'
import Experience from '../components/experience'
import Education from '../components/education'
import Skills from '../components/skills'
import Interests from '../components/interests'
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { Scrollspy } from 'reactstrap-scrollspy'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"

class Home extends React.Component {
  static getInitialProps(ctx) {
    return {};
  }

  render() {
    return (
      <div id="page-top">
        <Head>
          <title>Anthony Sherwin Resume</title>
          <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet"/>
        </Head>

        <Scrollspy
          names={['navbar', 'about', null, 'experience', null, 'education', null, 'skills', null, 'interests']}
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
        </Scrollspy>
      </div>
    )
  }
}

export default Home
