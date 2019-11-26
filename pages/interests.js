import React from 'react'
import { Row, Col } from 'reactstrap'

const Interests = () => (
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
    <div className="w-100">
      <Row>
        <Col>
          <h2 className="mb-5">Interests</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </Col>
      </Row>
    </div>
  </section>
)

export default Interests