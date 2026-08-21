import { useState } from "react";
import "./App.css";
import profilePhoto from "./assets/profile.jpg";

import deansListImg from "./assets/achievements/deans-list.jpg";
import kabaddiImg from "./assets/achievements/kabaddi.jpg";
import mascarImg from "./assets/achievements/mascar.png";

function App() {
  const [selectedProof, setSelectedProof] = useState(null);

  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================== */}
      <nav className="navbar">
        <div className="logo">
          Ain<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* =========================
          HERO
      ========================== */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hello">Hello, I'm</p>

          <h1>
            Nur'Ain <span>Farisya</span>
          </h1>

          <h2>
            Final-Year IT Student | Data Analytics Major | Financial Management Minor | SAP Experience
          </h2>

          <p className="hero-description">
            Final-year Bachelor of Information Technology (Hons.) student at
            Universiti Teknologi PETRONAS, majoring in Data Analytics with a
            minor in Financial Management.
          </p>

          <p className="hero-description">
            Experienced in SAP functional support, data analytics, full-stack
            development, databases and machine learning through industry
            exposure and academic projects.
          </p>

          <div className="availability-badge">
            🎓 Expected Graduation: December 2026
          </div>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a
              href="https://github.com/AinFarisya"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ainfarisya0328"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>

            <a
              href="/Nur_Ain_Farisya_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn resume-btn"
            >
              Resume
            </a>

          </div>

        </div>


        <div className="hero-visual">

          <div className="profile-circle">
            <img
              src={profilePhoto}
              alt="Nur'Ain Farisya"
              className="profile-photo"
            />
          </div>

          <div className="floating-card card-one">
            <span>📊</span>
            Data Analytics
          </div>

          <div className="floating-card card-two">
            <span>📈</span>
            Financial Management
          </div>

          <div className="floating-card card-three">
            <span>⚙️</span>
            SAP
          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section className="section" id="about">

        <div className="section-heading">
          <p>Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am a final-year Bachelor of Information Technology (Hons.)
              student at Universiti Teknologi PETRONAS with a current
              <strong> CGPA of 3.67</strong>.
            </p>

            <p>
              My academic interests include data analytics, machine learning,
              database management and system development. I enjoy applying
              technology to practical problems and transforming information
              into solutions that support better decision-making.
            </p>

            <p>
              During my internship at Celestica GBS Penang, I gained practical
              industry exposure as part of the SAP COE Functional Team,
              supporting real business users and working with enterprise
              processes involving SAP MM/WM and SD.
            </p>

            <p>
              I am currently preparing for graduate opportunities in Data
              Analytics, SAP, Business Systems, IT and related technology roles.
            </p>

          </div>


          <div className="about-stats">

            <div className="stat-card">
              <h3>3.67</h3>
              <p>Current CGPA</p>
            </div>

            <div className="stat-card">
              <h3>8</h3>
              <p>Dean's List Semesters</p>
            </div>

            <div className="stat-card">
              <h3>2026</h3>
              <p>Expected Graduation</p>
            </div>

            <div className="stat-card">
              <h3>SAP</h3>
              <p>Industry Experience</p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          EDUCATION
      ========================== */}
      <section className="section soft-section" id="education">

        <div className="section-heading">
          <p>Academic background</p>
          <h2>Education</h2>
        </div>

        <div className="education-list">

          {/* UTP */}
          <div className="education-card">

            <p className="education-year">
              September 2023 – December 2026
            </p>

            <h3>Universiti Teknologi PETRONAS</h3>

            <h4>
              Bachelor of Information Technology (Hons.)
            </h4>

            <p>
              Major in Data Analytics | Minor in Financial Management
            </p>

            <div className="education-highlight">
              CGPA: 3.67
            </div>

          </div>


          {/* MATRICULATION */}
          <div className="education-card">

            <p className="education-year">
              May 2021 – May 2023
            </p>

            <h3>
              Pulau Pinang Matriculation College
            </h3>

            <h4>
              Matriculation in Physical Science
            </h4>

            <p>Physics Stream</p>

            <div className="education-highlight">
              CGPA: 3.48
            </div>

          </div>


          {/* HIGH SCHOOL */}
          <div className="education-card">

            <p className="education-year">
              2016 – 2021
            </p>

            <h3>
              SMA Daeratul Maarifil Wataniah 1
            </h3>

            <h4>Secondary Education</h4>

            <p>Science Stream</p>

          </div>

        </div>


        {/* =========================
            ACHIEVEMENTS
        ========================== */}
        <div className="subsection-heading achievement-heading">
          <p>Recognition</p>
          <h2>Achievements</h2>
        </div>

        <div className="achievement-grid">

          {/* DEAN'S LIST */}
          <div className="achievement-item">

            <span>🏆</span>

            <div className="achievement-content">

              <h3>Dean's List</h3>

              <p className="achievement-result">
                Semester 1 to Semester 8
              </p>

              <p className="achievement-description">
                Recognised for consistent academic excellence throughout eight
                semesters.
              </p>

              <button
                type="button"
                className="proof-btn"
                onClick={() =>
                  setSelectedProof({
                    image: deansListImg,
                    title: "Dean's List",
                    subtitle: "Semester 1 to Semester 8",
                  })
                }
              >
                View Proof
              </button>

            </div>

          </div>


          {/* KABADDI */}
          <div className="achievement-item">

            <span>🥉</span>

            <div className="achievement-content">

              <h3>
                National-Level Kabaddi Competition
              </h3>

              <p className="achievement-result">
                Bronze Medal
              </p>

              <p className="achievement-description">
                Awarded Bronze Medal in recognition of competitive achievement
                at the national level.
              </p>

              <button
                type="button"
                className="proof-btn"
                onClick={() =>
                  setSelectedProof({
                    image: kabaddiImg,
                    title: "National-Level Kabaddi Competition",
                    subtitle: "Bronze Medal",
                  })
                }
              >
                View Proof
              </button>

            </div>

          </div>


          {/* MASCAR */}
          <div className="achievement-item">

            <span>🥉</span>

            <div className="achievement-content">

              <h3>
                MASCAR — Matriculation STEM Carnival
              </h3>

              <p className="achievement-result">
                Bronze Award
              </p>

              <p className="achievement-description">
                Received a Bronze Award for achievement in the Matriculation
                STEM Carnival.
              </p>

              <button
                type="button"
                className="proof-btn"
                onClick={() =>
                  setSelectedProof({
                    image: mascarImg,
                    title: "MASCAR — Matriculation STEM Carnival",
                    subtitle: "Bronze Award",
                  })
                }
              >
                View Proof
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          ACHIEVEMENT PROOF MODAL
      ========================== */}
      {selectedProof && (
        <div
          className="proof-modal"
          onClick={() => setSelectedProof(null)}
        >

          <div
            className="proof-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="proof-close"
              onClick={() => setSelectedProof(null)}
              aria-label="Close proof"
            >
              ×
            </button>

            <div className="proof-modal-heading">
              <h3>{selectedProof.title}</h3>
              <p>{selectedProof.subtitle}</p>
            </div>

            <img
              src={selectedProof.image}
              alt={`${selectedProof.title} proof`}
              className="proof-image"
            />

          </div>

        </div>
      )}


      {/* =========================
          EXPERIENCE
      ========================== */}
      <section className="section" id="experience">

        <div className="section-heading">
          <p>Industry & work exposure</p>
          <h2>Professional Experience</h2>
        </div>


        {/* CELESTICA */}
        <div className="experience-card">

          <div className="experience-top">

            <div>
              <h3>Celestica GBS Penang (M) Sdn. Bhd.</h3>
              <h4>IT Intern — SAP Functional Team, SAP COE</h4>
            </div>

            <span className="date">
              Sep 2025 – Apr 2026
            </span>

          </div>

          <ul>

            <li>
              Managed and supported daily SAP functional requests through
              ServiceNow, mainly involving SAP MM/WM and SD processes, helping
              business users resolve operational issues and maintain smooth
              system usage.
            </li>

            <li>
              Performed functional support activities including service
              requests, cost roll processes, system enhancements and requirement
              clarification with business users, ensuring requested changes were
              accurately understood and addressed.
            </li>

            <li>
              Executed functional testing and validation for SAP-related changes
              before completion, helping confirm that enhancements met business
              requirements and reduced the risk of implementation issues.
            </li>

          </ul>

          <div className="tag-row">
            <span>SAP MM/WM</span>
            <span>SAP SD</span>
            <span>ServiceNow</span>
            <span>Functional Testing</span>
            <span>Microsoft Excel</span>
          </div>

        </div>


        {/* TEACHER ASSISTANT */}
        <div className="experience-card second-experience">

          <div className="experience-top">

            <div>
              <h3>Sekolah Kebangsaan Mohd Shah</h3>
              <h4>Preschool Teacher Assistant</h4>
            </div>

            <span className="date">
              Jun 2023 – Aug 2023
            </span>

          </div>

          <ul>

            <li>
              Supported preschool teachers in conducting daily classroom and
              early-learning activities for children aged 4–6, helping maintain
              an organised and engaging learning environment.
            </li>

            <li>
              Guided students through literacy activities including letter
              recognition and basic spelling, supporting the development of
              their foundational reading and language skills.
            </li>

            <li>
              Adapted explanations and classroom support according to different
              student learning needs while assisting with multiple activities,
              strengthening communication, adaptability, multitasking and
              problem-solving skills.
            </li>

          </ul>

          <div className="tag-row">
            <span>Communication</span>
            <span>Problem Solving</span>
            <span>Adaptability</span>
            <span>Multitasking</span>
            <span>Teamwork</span>
          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================== */}
      <section className="section soft-section" id="projects">

        <div className="section-heading">
          <p>What I've built</p>
          <h2>Featured Projects</h2>
        </div>


        <div className="projects-grid">

          {/* =========================
              01 — FYP
          ========================== */}
          <div className="project-card featured-project">

            <div className="project-number">
              01
            </div>

            <p className="project-type">
              Final Year Project • 2026
            </p>

            <h3>
              Lecturer Learning Analytics & Student Risk Prediction System
            </h3>

            <p>
              Developed a full-stack learning analytics platform designed to
              help lecturers transform assessment data into meaningful
              performance insights.
            </p>

            <p>
              The system validates structured Excel assessment files,
              calculates student and class performance, analyses chapter-level
              results and identifies the strongest and weakest learning areas.
            </p>

            <p>
              Machine learning is integrated to classify students into academic
              risk levels, supporting earlier identification of students who
              may require additional attention.
            </p>

            <div className="tag-row">
              <span>Python</span>
              <span>Django</span>
              <span>React</span>
              <span>Pandas</span>
              <span>scikit-learn</span>
              <span>SQLite</span>
            </div>

            <a
              href="https://github.com/AinFarisya/Lecturer-Learning-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </div>


          {/* =========================
              02 — POWER BI DASHBOARD
          ========================== */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <p className="project-type">
              Data Visualisation Project • 2026
            </p>

            <h3>
              Student Performance Analytics Dashboard
            </h3>

            <p>
              Developed an interactive Power BI dashboard to analyse student
              performance data and present key academic indicators through
              clear and meaningful visualisations.
            </p>

            <p>
              Performed data cleaning and transformation using Power Query and
              created calculated measures using DAX to support analysis of
              student performance trends and related metrics.
            </p>

            <p>
              Designed interactive dashboard components to make student
              performance data easier to explore, compare and interpret for
              data-driven analysis.
            </p>

            <div className="tag-row">
              <span>Power BI</span>
              <span>Power Query</span>
              <span>DAX</span>
              <span>Data Visualisation</span>
              <span>Exploratory Data Analysis</span>
              <span>Data Cleaning</span>
            </div>

            <a
              href="https://github.com/AinFarisya/Student-Performance-Analytics-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </div>


          {/* =========================
              03 — INTERNSHIP PROJECT
          ========================== */}
          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <p className="project-type">
              Internship Project • 2025
            </p>

            <h3>
              Project Tracking & Workload Monitoring System
            </h3>

            <p>
              Developed a full-stack web-based system during my internship to
              improve the SAP COE team's existing Excel-based task and project
              management process.
            </p>

            <p>
              Designed separate administrator and user dashboards together
              with project management workflows, workload monitoring, priority
              tracking and task status management.
            </p>

            <p>
              Integrated Kanban-style task views and Gantt chart visualisations
              to provide clearer visibility of project progress,
              responsibilities and workload distribution.
            </p>

            <div className="tag-row">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>PostgreSQL</span>
            </div>

            <a
              href="https://github.com/AinFarisya/Project-Tracking-Workload-Monitoring-System"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </div>

        </div>


        {/* =========================
            OTHER ACADEMIC PROJECTS
        ========================== */}
        <div className="subsection-heading">
          <p>Additional work</p>
          <h2>Other Academic Projects</h2>
        </div>


        <div className="other-projects-grid">

          {/* =========================
              2025 — CAREVO+
          ========================== */}
          <div className="mini-project-card">

            <span className="mini-year">
              2025
            </span>

            <h3>
              AI-Driven Mental Wellness & Assistance System (Carevo+)
            </h3>

            <p>
              Conceptualised an AI-driven mental wellness assistance platform
              designed to provide accessible and personalised emotional support
              through a mobile-based system.
            </p>

            <p>
              The proposed platform explored emotional-state detection through
              text, voice and facial input at prototype level, allowing the
              system to provide relevant self-help tools and guided activities.
            </p>

            <p>
              The concept also considered professional support options and
              offline-friendly features for users with limited connectivity.
              I contributed to UI design, early system planning and feature
              development based on user survey insights.
            </p>

            <div className="tag-row">
              <span>Artificial Intelligence</span>
              <span>UI/UX</span>
              <span>User Research</span>
              <span>System Planning</span>
            </div>

          </div>


          {/* =========================
              2025 — PREGNANCY AWARENESS
          ========================== */}
          <div className="mini-project-card">

            <span className="mini-year">
              2025
            </span>

            <h3>
              Pregnancy Awareness & Support Platform
            </h3>

            <p>
              Designed a pregnancy awareness and support platform using
              Human-Computer Interaction principles with a strong focus on
              usability and user-centred interface design.
            </p>

            <p>
              The interface was structured to provide clear information,
              intuitive navigation and visually accessible content for users
              seeking pregnancy-related awareness and support.
            </p>

            <p>
              Conducted usability evaluation and incorporated user feedback to
              improve information architecture, visual clarity and content
              readability.
            </p>

            <div className="tag-row">
              <span>HCI</span>
              <span>UI/UX</span>
              <span>Usability Testing</span>
              <span>Canva</span>
            </div>

          </div>


          {/* =========================
              2024 — TCP/IP & WIRESHARK
          ========================== */}
          <div className="mini-project-card">

            <span className="mini-year">
              2024
            </span>

            <h3>
              TCP/IP Protocol Suite & Network Traffic Analysis
            </h3>

            <p>
              Explored and configured multiple TCP/IP protocols including HTTP,
              DNS, Telnet, SSH, FTP, TFTP and DHCP through network simulation
              and traffic analysis activities.
            </p>

            <p>
              Used eNSP and Cisco Packet Tracer to configure network devices,
              IP addressing, routing, servers and connectivity between clients
              and servers.
            </p>

            <p>
              Captured and analysed network traffic using Wireshark to examine
              protocol behaviour, packet exchanges, connectivity and security
              differences between protocols such as Telnet and SSH.
            </p>

            <div className="tag-row">
              <span>Wireshark</span>
              <span>eNSP</span>
              <span>TCP/IP</span>
              <span>Network Analysis</span>
            </div>

          </div>


          {/* =========================
              2024 — FLIGHT BOOKING
          ========================== */}
          <div className="mini-project-card">

            <span className="mini-year">
              2024
            </span>

            <h3>
              Flight Booking System
            </h3>

            <p>
              Developed a web-based flight booking system for the Web
              Application and Interactive Programming course.
            </p>

            <p>
              The application allows users to search available flights and
              submit flight bookings through an interactive web interface,
              providing a complete flow from flight selection to reservation.
            </p>

            <p>
              The project used HTML, CSS and JavaScript for the user interface
              and connected the application to a MySQL database, strengthening
              my understanding of frontend, backend and database interaction in
              a web application.
            </p>

            <div className="tag-row">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>

           <a
              href="https://github.com/AinFarisya/Flight-Booking-System"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a> 

          </div>


          {/* =========================
              2024 — THEME PARK
          ========================== */}
          <div className="mini-project-card">

            <span className="mini-year">
              2024
            </span>

            <h3>
              Theme Park Reservation System
            </h3>

            <p>
              Developed a C++ console-based theme park reservation system as
              part of my first-year Structured Programming course.
            </p>

            <p>
              The application allows users to view ticket types, create
              reservations, calculate ticket prices, review saved bookings and
              cancel existing reservations using a Reservation ID.
            </p>

            <p>
              Applied structured programming concepts including functions,
              loops, conditional statements, input validation, file handling
              and formatted data processing.
            </p>

            <div className="tag-row">
              <span>C++</span>
              <span>Structured Programming</span>
              <span>File Handling</span>
              <span>Input Validation</span>
            </div>

            <a
              href="https://github.com/AinFarisya/Theme-Park-Reservation-System"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </div>


          {/* =========================
              2024 — UTP FOOD
          ========================== */}
          <div className="mini-project-card">

            <span className="mini-year">
              2024
            </span>

            <h3>
              UTP Cafe Online Ordering System (UTPFood)
            </h3>

            <p>
              Developed a campus food ordering application as part of the
              Object-Oriented Programming course using Java.
            </p>

            <p>
              The application enables students to browse available campus
              cafes, view menu items and prices, manage their cart and place
              orders for either pickup or delivery.
            </p>

            <p>
              Applied object-oriented programming concepts including classes,
              objects, encapsulation and methods to model practical food-ordering
              workflows.
            </p>

            <div className="tag-row">
              <span>Java</span>
              <span>Object-Oriented Programming</span>
              <span>Java Swing</span>
              <span>File Handling</span>
            </div>

            <a
              href="https://github.com/AinFarisya/UTPFood"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================== */}
      <section className="section" id="skills">

        <div className="section-heading">
          <p>Technical toolkit</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          {/* PROGRAMMING */}
          <div className="skill-card">

            <h3>Programming</h3>

            <div className="skill-item">
              <h4>Python</h4>
              <p>
                Used for data preprocessing, analytics and machine learning
                implementation in my Final Year Project.
              </p>
            </div>

            <div className="skill-item">
              <h4>JavaScript</h4>
              <p>
                Applied in interactive frontend functionality across web-based
                academic and personal projects.
              </p>
            </div>

            <div className="skill-item">
              <h4>Java</h4>
              <p>
                Used to develop the UTP Food Online Ordering System while
                applying Object-Oriented Programming concepts.
              </p>
            </div>

            <div className="skill-item">
              <h4>C++</h4>
              <p>
                Applied structured programming, functions and application logic
                in academic programming projects.
              </p>
            </div>

          </div>


          {/* WEB DEVELOPMENT */}
          <div className="skill-card">

            <h3>Web Development</h3>

            <div className="skill-item">
              <h4>React</h4>
              <p>
                Used to develop responsive frontend interfaces for my Final
                Year Project and personal portfolio.
              </p>
            </div>

            <div className="skill-item">
              <h4>Django</h4>
              <p>
                Used as the backend framework for my Lecturer Learning
                Analytics system, including API and data-processing
                functionality.
              </p>
            </div>

            <div className="skill-item">
              <h4>Node.js</h4>
              <p>
                Applied in the development of the Project Tracking & Workload
                Monitoring System during my internship.
              </p>
            </div>

            <div className="skill-item">
              <h4>Express.js</h4>
              <p>
                Used to develop backend APIs connecting system functionality
                with the PostgreSQL database.
              </p>
            </div>

            <div className="skill-item">
              <h4>HTML & CSS</h4>
              <p>
                Used to create structured, responsive and user-friendly
                interfaces across web development projects.
              </p>
            </div>

          </div>


          {/* DATA ANALYTICS */}
          <div className="skill-card">

            <h3>Data Analytics & Databases</h3>

            <div className="skill-item">
              <h4>Data Analytics</h4>
              <p>
                Applied to analyse assessment data, identify performance
                patterns and support data-driven insights.
              </p>
            </div>

            <div className="skill-item">
              <h4>Machine Learning</h4>
              <p>
                Implemented Logistic Regression, Random Forest and Decision Tree
                models for student academic-risk classification.
              </p>
            </div>

            <div className="skill-item">
              <h4>Pandas</h4>
              <p>
                Used for data validation, cleaning, transformation and analytics
                processing in Python.
              </p>
            </div>

            <div className="skill-item">
              <h4>Power BI</h4>
              <p>
                Used to develop interactive dashboards for analysing and
                presenting student performance data.
              </p>
            </div>

            <div className="skill-item">
              <h4>Power Query</h4>
              <p>
                Used for data cleaning and transformation before dashboard
                analysis in Power BI.
              </p>
            </div>

            <div className="skill-item">
              <h4>DAX</h4>
              <p>
                Applied to create calculated measures and analytical metrics
                for Power BI dashboards.
              </p>
            </div>

            <div className="skill-item">
              <h4>PostgreSQL</h4>
              <p>
                Used as the database for the Project Tracking & Workload
                Monitoring System developed during internship.
              </p>
            </div>

            <div className="skill-item">
              <h4>MySQL</h4>
              <p>
                Applied in the Flight Booking System to store, retrieve and
                manage booking information.
              </p>
            </div>

            <div className="skill-item">
              <h4>SQLite</h4>
              <p>
                Used as a lightweight database during backend development and
                system testing.
              </p>
            </div>

          </div>


          {/* ENTERPRISE & TOOLS */}
          <div className="skill-card">

            <h3>Enterprise & Tools</h3>

            <div className="skill-item">
              <h4>SAP MM/WM</h4>
              <p>
                Supported Materials Management and Warehouse Management
                functional requests during my SAP COE internship.
              </p>
            </div>

            <div className="skill-item">
              <h4>SAP SD</h4>
              <p>
                Gained hands-on exposure to Sales and Distribution processes
                while supporting business-user requests.
              </p>
            </div>

            <div className="skill-item">
              <h4>ServiceNow</h4>
              <p>
                Used to manage, monitor and support SAP-related service requests
                submitted by business users.
              </p>
            </div>

            <div className="skill-item">
              <h4>Wireshark</h4>
              <p>
                Used to capture and analyse network traffic across protocols
                including HTTP, Telnet, SSH, FTP, TFTP and DHCP.
              </p>
            </div>

            <div className="skill-item">
              <h4>GitHub</h4>
              <p>
                Used for version control, repository management and deployment
                of academic and personal projects.
              </p>
            </div>

            <div className="skill-item">
              <h4>Figma</h4>
              <p>
                Used for interface planning, prototyping and organising UI/UX
                concepts before development.
              </p>
            </div>

            <div className="skill-item">
              <h4>VS Code</h4>
              <p>
                Used as my main development environment for web, backend and
                programming projects.
              </p>
            </div>

            <div className="skill-item">
              <h4>Streamlit</h4>
              <p>
                Used to build interactive data applications and dashboard-based
                prototypes.
              </p>
            </div>

            <div className="skill-item">
              <h4>Microsoft Excel</h4>
              <p>
                Used for data handling, assessment templates and workflow-related
                tasks across academic and internship work.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          LEADERSHIP
      ========================== */}
      <section
        className="section soft-section"
        id="leadership"
      >

        <div className="section-heading">
          <p>Beyond academics</p>
          <h2>Leadership & Activities</h2>
        </div>

        <div className="leadership-grid">

          {/* ARMY */}
          <div className="leadership-card">

            <span>
              May 2025 – Aug 2025
            </span>

            <h3>
              Admission Records Marketing Youth (ARMy)
            </h3>

            <h4>
              Assistant Department Head
            </h4>

            <p>
              Supported a student-led organisation focused on university
              admissions and outreach initiatives while assisting in the
              coordination of departmental responsibilities and programme
              activities.
            </p>

            <p>
              Worked with team members to support communication, planning and
              execution of activities designed to engage prospective students
              and strengthen university outreach efforts.
            </p>

          </div>


          {/* CAVE */}
          <div className="leadership-card">

            <span>
              May 2025
            </span>

            <h3>
              Campus Venture Day (CAVE)
            </h3>

            <h4>
              Assistant Project Director
            </h4>

            <p>
              Assisted in coordinating participating organisations and
              facilitating communication between programme teams to support
              successful event implementation.
            </p>

            <p>
              Provided guidance related to booth preparation, promotional
              materials and interactive activities while helping manage
              logistics and maintain smooth programme execution.
            </p>

          </div>


          {/* MPU4 */}
          <div className="leadership-card">

            <span>
              Jan 2025 – May 2025
            </span>

            <h3>
              Engagement Community Project – MPU4
            </h3>

            <h4>
              Assistant Project Director
            </h4>

            <p>
              Helped coordinate a community engagement programme involving
              science experiments, basic robotics and technology-based learning
              activities tailored to students' learning levels.
            </p>

            <p>
              Worked closely with the project team to coordinate activities,
              communication and programme implementation while supporting a
              meaningful and engaging learning experience for participants.
            </p>

          </div>


          {/* CSR */}
          <div className="leadership-card">

            <span>
              Feb 2025
            </span>

            <h3>
              ARMy CSR Donation Drive
            </h3>

            <h4>
              Secretary
            </h4>

            <p>
              Supported a community donation initiative focused on collecting
              unused clothing and essential items for asnaf communities,
              elderly individuals and recipients in need.
            </p>

            <p>
              Assisted with programme documentation, coordination and
              communication to support effective collection and distribution
              activities.
            </p>

          </div>


          {/* NEXAGATE */}
          <div className="leadership-card">

            <span>
              Sep 2024
            </span>

            <h3>
              Industrial Visit — Nexagate / Cyberhax
            </h3>

            <h4>
              Secretary
            </h4>

            <p>
              Supported the organisation and documentation of an industrial
              visit that introduced participants to practical cybersecurity
              operations, professional practices and technology-industry
              environments.
            </p>

            <p>
              Assisted with programme coordination and communication while
              gaining exposure to real-world cybersecurity operations and
              industry expectations.
            </p>

          </div>


          {/* TDU */}
          <div className="leadership-card">

            <span>
              March 2024
            </span>

            <h3>
              Talent Development Unit Program
            </h3>

            <h4>
              Secretary
            </h4>

            <p>
              Managed programme documentation, meeting minutes, schedules and
              administrative records to support effective planning and
              execution of the programme.
            </p>

            <p>
              Coordinated communication with participants, speakers and
              university departments while ensuring important programme
              information was recorded and communicated appropriately.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}
      <section
        className="contact-section"
        id="contact"
      >

        <div>

          <p className="contact-label">
            Let's connect
          </p>

          <h2>
            Interested in working together?
          </h2>

          <p>
            I am currently preparing for graduate opportunities in Data
            Analytics, SAP, Business Systems, IT and related technology roles.
          </p>

          <p>
            📍 Penang, Malaysia
          </p>

        </div>

        <div className="contact-links">

          <a href="mailto:farisyaain.2810@gmail.com">
            farisyaain.2810@gmail.com
          </a>

          <a href="tel:+60192232810">
            +60 19-223 2810
          </a>

          <a
            href="https://linkedin.com/in/ainfarisya0328"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/AinFarisya"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer>
        <p>
          © 2026 Nur'Ain Farisya. Built with React.
        </p>
      </footer>

    </div>
  );
}

export default App;