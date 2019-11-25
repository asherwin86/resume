import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';

const About = () => (

  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div className="w-100">
      <Row>
        <Col>
          <h1 className="mb-0">Anthony
            <span className="text-primary">Sherwin</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="subheading mb-5">70A Shady Grove, Forest Hill, 3131
            <a href="mailto:anthony.j.sherwin@gmail.com"> anthony.j.sherwin@gmail.com</a>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        </Col>
      </Row>
      <Row>
      <div className="social-icons">
        <Col>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        </Col>
        <Col>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        </Col>
        <Col>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        </Col>
        <Col>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        </Col>
      </div>
      </Row>
    </div>
  </section>
)

export default About