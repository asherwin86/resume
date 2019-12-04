import React from 'react'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

class About extends React.Component {

  constructor(props) {
    super(props);
    library.add(fab);

    this.state = {
      date: this.diff_years(new Date('October 1, 2008 00:00:00'), new Date())
    }
  }

  diff_years(dt2, dt1)
  {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff/365.25));
  }

  render() {
    return (
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
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lead mb-5">A results-driven Software Engineer with over {this.state.date} years' experience in assessing business needs, defining requirements and developing software solutions. Skilled in managing projects, developing new code, software design, building robust and scalable software, working effectively within a close knit team environment and achieving strict deadlines.</p>
            </Col>
          </Row>
          <Row className="social-icons">
            <Col xs="1" className="mr-4">
              <a href="https://www.linkedin.com/in/anthony-sherwin-404a942b">
                <FontAwesomeIcon icon={['fab', 'linkedin']} inverse className="w-50" />
              </a>
            </Col>
            <Col className="mr-4">
              <a href="https://github.com/asherwin86/resume">
                <FontAwesomeIcon icon={['fab', 'github']} className="w-50" />
              </a>
            </Col>
            <Col xs="10"/>
          </Row>
        </div>
      </section>
    );
  }
}

export default About