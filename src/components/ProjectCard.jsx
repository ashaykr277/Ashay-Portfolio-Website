import React from 'react'

const ProjectCard = (props) => {
  return (
    <>

      <div className='prj-container'>
        <div className='prj-img'>

          <div className='link-icons'>
            <a href="">
            <i class='bx bx-link-alt' ></i>
            </a>
            <a href={props.gitlink} target='_blank'>
            <i class='bx bxl-github' ></i>
            </a>
          </div>
          <div className='tech'>
            <span>{props.tech}</span>
          </div>

          <div className='top-img'>
            <img src={props.img} alt="" />
          </div>


        </div>

        <div className='texts'>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard