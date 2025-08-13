import React from 'react'
import './About.css'
import SkillsSet from './SkillsSet'
const About = () => {
  return (
    <>
      <div className='about-section'>
        <h1 className='heading'>About Me</h1>

        <div className='container'>
          <div className="info">
            <h2 className='about-heading'>Personal Details</h2>
            <div className="right-side">
              <h2 className='sub-heading'>A Software Developer Crafting Scalable Solutions for Real-World Problems</h2>
              <p>A passionate coder starting his career as a Software Developer. A quick learner and have a keen interest in web develo   pment. A team player with a good understanding of Full-Stack Development. Always looking for opportunities to work with a team and grow.</p>

              <div className='personal-info'>
                <div className='details details-left'>
                  <div className="name">
                    <i class='bx bx-user' ></i><span>Shreya Mishra</span>
                  </div>
                  <div className="email">
                    <i class='bx bx-envelope' ></i><span>shreyamishratulip@gmail.com</span>
                  </div>
                  <div className="degree">
                    <i class='bx bxs-graduation' ></i><span>B.Tech - Computer Science Engineering</span>
                  </div>
                </div>

                <div className='details details-right'>
                  <div className="call">
                    <i class='bx bx-phone-call' ></i><span>+91 7909007867</span>
                  </div>
                  <div className="age">
                    <i class='bx bx-calendar' ></i><span>22+</span>
                  </div>
                  <div className="location">
                    <i class='bx bx-home' ></i><span>Gurugram, New Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='info img-info'>
            <img src="./assets/personal-info.png" alt="" width="400px" />
          </div>
        </div>


        <div className='container'>
          <div className='info img-info2'>
          <img src="./assets/edu-details.png" alt="" width="700px"/>
        </div>
          <div className="info">
            <h2 className='about-heading'>Qualification</h2>
            <hr />
            <div className="right-side">
              <h2 className='sub-heading'>My Awesome Journey</h2>

              <div className='personal-info'>
                <div className='details details-left'>

                  <div className="edu">
                    <i class='bx bxs-graduation' ></i><span>Education</span>
                  </div>
                  <div className="edu-details">
                    <ul>
                      <li>
                        <p className='institute'>National Institute of Science <br /> and Technology</p>
                        <p className='course'>B.Tech - Computer Science & Engineering</p>
                        <p className='year'>2021 - 2025</p>
                      </li>
                      

                      <br />
                      <li>
                        <p className='institute' >D.A.V Public School</p>
                        <p className='course'>Intermediate</p>
                        <p className='year'>2018 - 2020</p>
                      </li>

                      <br />
                      <li>
                        <p className='institute' >JLN Memorial Secondary School</p>
                        <p className='course'>Matriculation</p>
                        <p className='year'>2018</p>
                      </li>

                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <SkillsSet />
      </div>
    </>
  )
}

export default About