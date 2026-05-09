import React, { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiTerminal, FiMapPin, FiCalendar, FiBriefcase, FiCode, FiLayout, FiDatabase, FiDownload } from 'react-icons/fi';
import './App.css';

function App() {
  useEffect(() => {
    // Simple scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-observe').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="ambient-light"></div>
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo gradient-text">YB.</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content scroll-observe">
          <div className="hero-text">
            <p className="hero-subtitle">Hello, I am</p>
            <h1 className="hero-title gradient-text">Yelleti Bhavani Kumar</h1>
            <p className="hero-desc">
              A motivated and detail-oriented B.Tech Information Technology student from JNTU-GV. 
              Passionate about building scalable and user-focused applications as a Full Stack Web Developer.
            </p>
            <div className="action-buttons" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="/resume.pdf" download className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiDownload size={18} /> Download Resume
              </a>
              <div className="social-links">
                <a href="https://github.com/Bhavanikumar13" target="_blank" rel="noreferrer" className="social-icon"><FiGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/bhavani-kumar-a282832b7" target="_blank" rel="noreferrer" className="social-icon"><FiLinkedin size={20} /></a>
                <a href="mailto:kumarbhavani39@gmail.com" className="social-icon"><FiMail size={20} /></a>
                <a href="https://instagram.com/y_13_kumar" target="_blank" rel="noreferrer" className="social-icon"><FiInstagram size={20} /></a>
              </div>
            </div>
          </div>
          <div className="profile-image-container">
            <img 
              src="/profile.jpg" 
              alt="Yelleti Bhavani Kumar" 
              className="profile-image" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('fallback-avatar');
                e.target.parentElement.innerHTML = '<span class="fallback-initial">YB</span>';
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title scroll-observe">About Me</h2>
        <div className="about-grid">
          <div className="glass-card scroll-observe">
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FiTerminal className="gradient-text" /> Professional
            </h3>
            <div className="info-item">
              <p className="info-label">Objective</p>
              <p className="info-value">Seeking opportunities in Full Stack Web Development, with strong skills in building scalable and user-focused applications.</p>
            </div>
            <div className="info-item">
              <p className="info-label">Location</p>
              <p className="info-value" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiMapPin size={16} className="gradient-text"/> Srikakulam, Andhra Pradesh, India
              </p>
            </div>
          </div>
          <div className="glass-card scroll-observe delay-100">
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FiBriefcase className="gradient-text" /> Personal Details
            </h3>
            <div className="info-item">
              <p className="info-label">Born</p>
              <p className="info-value" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCalendar size={16} className="gradient-text"/> December 2005
              </p>
            </div>
            <div className="info-item">
              <p className="info-label">Interests & Hobbies</p>
              <p className="info-value">Manga, Manhwa, Manhua, Comics, Anime</p>
            </div>
            <div className="info-item">
              <p className="info-label">Areas of Interest</p>
              <div className="skills-list" style={{ marginTop: '0.5rem' }}>
                <span className="skill-tag">Frontend Development</span>
                <span className="skill-tag">Full Stack Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title scroll-observe">Education</h2>
        <div className="glass-card scroll-observe">
          <div className="timeline">
            <div className="timeline-item">
              <p className="timeline-date">2023 – 2027</p>
              <h3 className="timeline-title">JNTU-GV College of Engineering</h3>
              <p className="timeline-subtitle">B.Tech in Information Technology</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <span className="timeline-score" style={{ marginTop: 0 }}>Score: 73%</span>
              </div>
            </div>
            <div className="timeline-item">
              <p className="timeline-date">2021 – 2023</p>
              <h3 className="timeline-title">Narayana Junior College, Srikakulam</h3>
              <p className="timeline-subtitle">Intermediate (MPC)</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <span className="timeline-score" style={{ marginTop: 0 }}>Score: 94.5%</span>
                <a href="/inter_certificate.pdf" download className="download-link"><FiDownload size={14}/> Certificate</a>
              </div>
            </div>
            <div className="timeline-item" style={{ marginBottom: 0 }}>
              <p className="timeline-date">2021</p>
              <h3 className="timeline-title">P S N MPL High School, Srikakulam</h3>
              <p className="timeline-subtitle">SSC</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <span className="timeline-score" style={{ marginTop: 0 }}>Score: 95.6%</span>
                <a href="/10th_certificate.pdf" download className="download-link"><FiDownload size={14}/> Certificate</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title scroll-observe">Technical Skills</h2>
        <div className="skills-grid">
          <div className="glass-card scroll-observe">
            <h3 className="skill-category-title"><FiCode size={20} /> Languages</h3>
            <div className="skills-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>
          <div className="glass-card scroll-observe delay-100">
            <h3 className="skill-category-title"><FiLayout size={20} /> Web Dev</h3>
            <div className="skills-list">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
            </div>
          </div>
          <div className="glass-card scroll-observe delay-200">
            <h3 className="skill-category-title"><FiDatabase size={20} /> Core & Data</h3>
            <div className="skills-list">
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">DBMS</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">SQLite</span>
            </div>
          </div>
          <div className="glass-card scroll-observe delay-300">
            <h3 className="skill-category-title"><FiTerminal size={20} /> Tools</h3>
            <div className="skills-list">
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Canva</span>
              <span className="skill-tag">Overleaf (LaTeX)</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">MS Office</span>
            </div>
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="glass-card scroll-observe" style={{ marginTop: '2rem' }}>
          <h3 className="skill-category-title" style={{ marginBottom: '1.5rem' }}>Soft Skills</h3>
          <div className="skills-list">
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Teamwork</span>
            <span className="skill-tag">Analytical Thinking</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title scroll-observe">Projects</h2>
        <div className="projects-grid">
          
          <div className="glass-card project-card scroll-observe">
            <div className="project-header">
              <h3 className="project-title">Expense Tracker</h3>
              <span className="project-tech">MERN Stack</span>
            </div>
            <p className="project-desc">
              Built a full-stack application using MongoDB, Express, React, and Node.js. 
              Implemented comprehensive REST APIs to handle CRUD operations with real-time UI updates.
            </p>
            <div className="project-links">
              <a href="#" className="project-link"><FiGithub size={16} /> Source</a>
            </div>
          </div>

          <div className="glass-card project-card scroll-observe delay-100">
            <div className="project-header">
              <h3 className="project-title">Drawing App</h3>
              <span className="project-tech">Flutter, Dart</span>
            </div>
            <p className="project-desc">
              Developed a cross-platform drawing application featuring a real-time canvas. 
              Included interactive brush and color tools with a responsive UI ensuring smooth performance.
            </p>
            <div className="project-links">
              <a href="#" className="project-link"><FiGithub size={16} /> Source</a>
            </div>
          </div>

          <div className="glass-card project-card scroll-observe delay-200">
            <div className="project-header">
              <h3 className="project-title">Fake News Detection</h3>
              <span className="project-tech">Python, NLP</span>
            </div>
            <p className="project-desc">
              Developed an NLP-based machine learning model for accurate news classification. 
              Applied preprocessing techniques and rigorously evaluated performance using accuracy metrics.
            </p>
            <div className="project-links">
              <a href="#" className="project-link"><FiGithub size={16} /> Source</a>
            </div>
          </div>

          <div className="glass-card project-card scroll-observe delay-300">
            <div className="project-header">
              <h3 className="project-title">Course Material Repo</h3>
              <span className="project-tech">Django, SQLite</span>
            </div>
            <p className="project-desc">
              Developed an educational platform featuring robust role-based authentication. 
              Implemented file upload capabilities, search functionality, and a structured content delivery system.
            </p>
            <div className="project-links">
              <a href="#" className="project-link"><FiGithub size={16} /> Source</a>
            </div>
          </div>

          <div className="glass-card project-card scroll-observe delay-100">
            <div className="project-header">
              <h3 className="project-title">Text Search & Autocomplete</h3>
              <span className="project-tech">Algorithms</span>
            </div>
            <p className="project-desc">
              Designed a highly scalable search system optimized for fast data retrieval. 
              Engineered algorithms capable of handling large datasets efficiently and providing real-time autocomplete suggestions.
            </p>
            <div className="project-links">
              <a href="#" className="project-link"><FiGithub size={16} /> Source</a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer scroll-observe">
        <p className="footer-text">© {new Date().getFullYear()} Yelleti Bhavani Kumar. All rights reserved.</p>
        <div className="social-links" style={{ justifyContent: 'center', marginTop: '1.5rem', gap: '1rem' }}>
            <a href="https://github.com/Bhavanikumar13" target="_blank" rel="noreferrer" className="social-icon" style={{width: '35px', height: '35px'}}><FiGithub size={16} /></a>
            <a href="mailto:kumarbhavani39@gmail.com" className="social-icon" style={{width: '35px', height: '35px'}}><FiMail size={16} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
