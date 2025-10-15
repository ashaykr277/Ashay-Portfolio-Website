import React from 'react'
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate   = useNavigate();

  function goToContact() {
    navigate("/contact");
  }

  function downloadPDF() {
    const link = document.createElement("a");
    link.href = "/ASHAY_KUMAR_RESUME.pdf"; // Path from public folder
    link.download = "Ashay_resume.pdf"; // Suggested file name
    link.click();
  }
  return (
    <><div className="profession-card card1"><span><i class='bx bx-code-alt'></i></span> Web Developer</div>
      <div className="profession-card card2"><span><i class='bx bx-code-block' ></i></span> Java Backend Dev </div>
      <div className="profession-card card4"><span><i class='bx bx-data'></i></span> SQL Developer</div>
      <section className='home-section'>
        <div className="left">
          <p className='profession'>Software Engineer </p>
          <h1>Hello, I'm <span>Ashay Kumar</span> </h1>
          <p>A passionate software engineer and full stack developer crafting impactful, user-focused digital solutions.</p>
          <div className="btns">
            <button className="btn1" onClick={goToContact}>Contact <i class='bx bx-mail-send' ></i></button>
            <button className="btn2" onClick={downloadPDF}>Resume <span><i class='bx bx-download'></i></span></button>
          </div>
        </div>
        <div className="right">
          <div className='image'>
            <img className="curve" src="curve.png" alt="" width="400px" />
            <img className="shreya" src="ashay-profile.png" alt=""/>
            {/* <img className="shreya" src="shreya-profile.png" alt="" width="500px" /> */}
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero