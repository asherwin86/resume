import React from 'react'

const Experience = () => (
  <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Web Technical Lead</h3>
          <div className="subheading mb-3">Make It Mine Pty Ltd</div>
          <ul>
            <li>Ensuring code quality</li>
            <li>Introduced CI/CD for the web team projects.</li>
            <li>Moved the website onto Docker and AWS Infrastructure.</li>
            <li>Created .NET core middleware to interface between interanlly created CRM and the website.</li>
            <li>Used middleware to provide an OAuth implementation to the website.</li>
          </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">September 2017 - July 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">PHP Software Engineer</h3>
          <div className="subheading mb-3">Make It Mine Pty Ltd</div>
          <ul>
            <li>Created new microservices using Lumen(Laravel) that retrieved customers’ bank account statements through Proviso.</li>
            <li>Introduced new payment services to the business to increase market share and increase sales.</li>
          </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">September 2017 - July 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Software Engineer</h3>
          <div className="subheading mb-3">3 Dimensional Consulting</div>
          <ul>
            <li>Extended and maintained a SaaS Security reporting website written in Python 3 using technologies such as Alembic, SQLAlchemy, Pyramid and jQuery.</li>
            <li>Maintained and improved PHP application used for secure donations through third party frameworks.</li>
            <li>Interfaced with prospective clients to provide possible software solutions</li>
          </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">August 2016 - June 2017</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Web Developer</h3>
          <div className="subheading mb-3">I Need Helpers</div>
          <ul>
            <li>Created time critical application in PHP for the AFL Players Association.</li>
            <li>PHP using the SLIM Framework for a RESTful API and Angular app project.</li>
          </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">July 2016 - August 2016</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Development Projects Co-ordinator</h3>
          <div className="subheading mb-3">Asta Solutions</div>
          <ul>
            <li>Project-managed website creation for large international customers, managing and exceeded their expectations by delivering them within scope, time and budget.</li>
            <li>Developed comprehensive project management plans including internal resource planning for the team of 15 software developers</li>
          </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Feburary 2016 - May 2016</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div className="resume-content">
          <h3 className="mb-0">Software Engineer</h3>
          <div className="subheading mb-3">Dynamic Ratings</div>
          <ul>
            <li>Solely created and maintained a PHP & jQuery website which interfaced with a unique backend.</li>
            <li>Extended website to allow customers to setup and configure the backend.</li>
            <li>Support for legacy products including new Java applets.</li>
          </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">October 2008 - Feburary 2016</span>
        </div>
      </div>

    </div>

  </section>
)

export default Experience