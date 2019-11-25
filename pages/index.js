import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import About from '../pages/about'
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"

const Home = () => (
  <div id="page-top">
    <Head>
      <title>Anthony Sherwin Resume</title>
    </Head>

    <Navigation />
    <Container fluid>
      <About/>
    </Container>
  </div>
)

export default Home
