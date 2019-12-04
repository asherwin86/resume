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
          <p>Apart from being a web developer, I enjoy playing computer games when possible and watching/playing cricket.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>I also enjoy cooking and am always on the lookout for new receipes to try them out. One of my favourites is making pizzas from sctach.</p>
        </Col>
      </Row>
    </div>
  </section>
)

export default Interests