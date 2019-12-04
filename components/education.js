import React from 'react'

const Education = () => (
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
    <div className="w-100">
      <h2 className="mb-5">Education</h2>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">RMIT University</h3>
          <div className="subheading mb-3">Bachelor of Computer Science</div>
          <div>Applied Science</div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">2004 - 2008</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div className="resume-content">
          <h3 className="mb-0">Camberwell Boys Grammar</h3>
          <div className="subheading mb-3">Victorian Certificate of Education</div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">2003</span>
        </div>
      </div>

    </div>
  </section>
)

export default Education