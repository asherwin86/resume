import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

const brands = [
  'react',
  'npm',
  'node-js',
  'aws',
  'bitbucket',
  'jira',
  'docker',
  'php'
];

const iconStyle = {
  fontSize: '16px'
}

const listItems = brands.map((brand) =>
  <Col key={brand}>
    <FontAwesomeIcon icon={['fab', brand]} />
  </Col>
);

const Skills = () => (
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div className="w-100">
      <h2 className="mb-5">Skills</h2>

      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <Row>
        {listItems}
      </Row>

      <div className="subheading mb-3">Workflow</div>
      <ul>
        <li>Cross Browser Testing &amp; Debugging</li>
        <li>Cross Functional Teams</li>
        <li>Agile Development &amp; Scrum</li>
        <li>CI & CD Deployment Implementation</li>
      </ul>
    </div>
  </section>
)

export default Skills