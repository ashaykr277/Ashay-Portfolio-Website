import ProjectCard from './ProjectCard'
import './Project.css'

const Projects = () => {
  return (
    <>
      <div className='about-section'>
        <div>
          <h1>My Projects </h1>
          <div className="project-container">
            <ProjectCard
              gitlink="https://github.com/shreya276/AI-Proctored-Examination-System" target='_blank'
              img="./assets/proctor-img2.png"
              title="AI Proctored Examination System"
              desc="it  is an advanced online testing platform designed to ensure the integrity and fairness of remote examinations through real-time AI monitoring. with face recognition, object detection, to prevent cheating and maintain exam security without human invigilators."
              tech="Python" />

            <ProjectCard img="./assets/face-recog.avif"
            gitlink="https://github.com/shreya276/Face-Recognition-System" target='_blank'
              title="Face Recognition System"
              desc="it is an AI-powered application designed to identify and verify individuals based on their facial features. It uses computer vision and deep learning techniques to accurately detect, recognize, and match faces from live camera feeds or stored images.."
              tech="Open CV" />

            <ProjectCard img="./assets/portfolio-site.jpg"
            gitlink="https://github.com/shreya276/" target='_blank'
              title="Portfolio Website"
              desc="it is is a responsive and interactive personal website built with React.js to showcase professional skills, and projects. Designed with modern UI/UX approach, serving as a digital identity for personal branding and career opportunities."
              tech="React JS" />

            
          </div>


        </div>
      </div>
    </>
  )
}

export default Projects