import React from 'react'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

const About = () => (

  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div className="w-100">
      <Row>
        <Col>
          <h1 className="mb-0">Anthony
            <span className="text-primary"> Sherwin</span>
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
      <Row className="social-icons">
        <Col xs="1" className="mr-3">
        <a href="#">
          <FontAwesomeIcon icon={['fab', 'linkedin']} inverse className="w-50" />
        </a>
        </Col>
        <Col xs="1" className="mr-3">
        <a href="#">
          <FontAwesomeIcon icon={['fab', 'github']} className="w-50" />
        </a>
        </Col>
      </Row>
    </div>
  </section>
)

export default About