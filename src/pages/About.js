import React from 'react';
import profileImage from '../assets/about-profile.jpg'; // Add your own profile image here

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Me</h1>
        <p>Hi, I'm Cade! I've been passionate about programming since high school, and I absolutely love it.</p>
      </section>
      <section className="about-content">
        <div className="about-image">
          <img className="about-img" src={profileImage} alt="Cade" />
        </div>
        <div className="about-text">
          <h2>My Mission</h2>
          <hr className="section-divider" />
          <p>
            As a sole developer, I am dedicated to delivering exceptional web design and development services that help small businesses thrive online. My mission is to provide tailored solutions that meet the unique needs of each client, ensuring a seamless and impactful digital presence. I believe in the power of quality work and personal connection to bring visions to life.
          </p>
          <h2>About Me</h2>
          <hr className="section-divider" />
          <p>
            With a strong background in computer science and a love for creativity, I enjoy combining technical skills with artistic design to create beautiful, functional websites. Since high school, coding has been more than just a profession—it's been a passion that drives me to continually learn and innovate. I pride myself on being hands-on with every project and ensuring that each client feels heard and valued.
          </p>
        </div>
      </section>
      <section className="values">
        <h2>My Values</h2>
        <hr className="section-divider" />
        <div className="values-container">
          <div className="value-item">
            <div className="value-circle quality">
              <div className="value-number">1</div>
            </div>
            <div className="value-text">
              <h3>Quality</h3>
              <p>I prioritize quality in every project, ensuring that each website is crafted to the highest standards.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-circle communication">
              <div className="value-number">2</div>
            </div>
            <div className="value-text">
              <h3>Communication</h3>
              <p>Open and transparent communication is key to understanding and fulfilling client needs effectively.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-circle innovation">
              <div className="value-number">3</div>
            </div>
            <div className="value-text">
              <h3>Innovation</h3>
              <p>Staying ahead of the curve with the latest web technologies and trends to deliver innovative solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
