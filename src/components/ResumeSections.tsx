import React, { useState } from 'react';
import '../styles/ResumeSections.css';

interface Section {
  title: string;
  content: React.ReactNode;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  content: React.ReactNode;
}

interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
}

const ResumeSections: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'Self Introduction': true,
    'Skills': false,
    'Experience': false,
    'Education': false
  });
  const [openExperiences, setOpenExperiences] = useState<{ [key: string]: boolean }>({});
  const [openEducation, setOpenEducation] = useState<{ [key: string]: boolean }>({
    'New York University, Courant Institute of Mathematical Sciences': true,
    'National Taipei University': true
  });

  const toggleSection = (title: string) => {
    setOpenSections(prev => {
      const newState = { ...prev };
      // Close all sections except the one being toggled
      Object.keys(newState).forEach(key => {
        if (key !== title) {
          newState[key] = false;
        }
      });
      // Toggle the clicked section
      newState[title] = !prev[title];
      return newState;
    });

    // If Experience section is being closed, close all experience items
    if (title === 'Experience' && openSections['Experience']) {
      setOpenExperiences({});
    }
  };

  const toggleExperience = (title: string) => {
    setOpenExperiences(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleEducation = (title: string) => {
    setOpenEducation(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const sections: Section[] = [
    {
      title: 'Self Introduction',
      content: (
        <div className="left-align">
          <br/>
          Results-driven Software Engineer with 4 years of experience building scalable backend services, distributed systems, and automated CI/CD pipelines. With hands-on expertise in microservice architecture, cloud infrastructure (AWS), and data-intensive applications. Strong background in both startup and enterprise environments, with a proven ability to quickly learn new technologies and deliver reliable, production-ready solutions in fast-paced, agile teams.
        </div>
      )
    },
    {
      title: 'Skills',
      content: (
        <div className="left-align">
          <strong>Coding Languages:</strong> Proficient in Java 8/11+/21, Python3.5+, C++; Solid in Scala, C#, JavaScript, TypeScript, C, Rust<br/>
          <strong>Tools:</strong> Git, Shell Script, Docker, Kubernetes, Makefile, Jenkins, RestAPI, MySQL, MongoDB, Spark, Kafka, RabbitMQ, Redis, CI/CD, Agile, DevOps, Microservices, SpringBoot, Spring Security, React, Hibernate, CSS, HTML, C# .NET, Android, gRCP
        </div>
      )
    }
  ];

  const experiences: Experience[] = [
    {
      title: 'Software Developer IV',
      company: 'Charter Communications (Spectrum)',
      period: 'Dec 2024 - May 2025',
      content: (
        <div className="left-align">
          <div><strong>New York, NY</strong></div>
          <div><strong>Trunk Automation Platform</strong></div>
          <ul>
            <li>Engineered and deployed RESTful APIs for core platform operations, leveraging Java, Spring Boot, and the Seygen framework. Seamlessly integrated gRCP, Hibernate, Oracle, MongoDB, Redis (AWS ElastiCache), and JWT to ensure secure and efficient provisioning and request handling.</li>
            <li>Architected and built scalable backend microservices using Groovy and Grails, incorporating Kafka and multithreading for asynchronous message processing. Deployed and orchestrated these services using Kubernetes and Docker on AWS with Terraform for serverless, event-driven operations, boosting system responsiveness and data throughput by 40%.</li>
            <li>Developed dynamic front-end interfaces with HTML and React, ensuring seamless integration with JWT-secured backend APIs to elevate user experience and fortify access control mechanisms.</li>
            <li>Established and optimized resilient CI/CD pipelines using GitLab and JFrog Artifactory, fully automating testing, building, and deployment processes to achieve rapid, reliable, and consistent software delivery.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Software Development and Artificial Intelligence Engineer',
      company: 'CoolSo Inc.',
      period: 'Jun 2020 – July 2022',
      content: (
        <div className="left-align">
          <div><strong>Taipei, Taiwan</strong></div>
          <div><strong>Desktop and Mobile Application for Data Collections and Beta Testing</strong></div>
          <ul>
            <li>Developed supporting backend services using Java and Spring Boot, providing RESTful APIs for device management, session tracking, and secure data ingestion into cloud storage.</li>
            <li>Built a non-blocking, event-driven backend to support high-concurrency API interactions, while offloading I/O-intensive and CPU-bound operations to asynchronous workers, ensuring responsiveness under load. Integrated Redis Pub/Sub and RabbitMQ for distributed task coordination and real-time event handling.</li>
            <li>Consolidated four legacy data collection tools and beta testing interfaces using Python (Tkinter) and C++, and successfully deployed them as a unified React web application.</li>
          </ul>
          <div><strong>Multi-Gestures Recognition System</strong></div>
          <ul>
            <li>Pioneered development of advanced, lightweight models using PyTorch, Hugging Face, Python, CUDA, and Cython, reducing model size by 90% and enhancing inference speed by 3x. Expanded gesture recognition capabilities from 3 to 12 distinct gestures across both hands.</li>
            <li>Architected and implemented robust CI/CD pipelines for data processing and machine learning development, establishing a comprehensive data pipeline that streamlined the entire MLOps lifecycle.</li>
            <li>Optimized data processing efficiency, achieving a 4x increase in speed through automated updating, processing, and validation, modularizing complex data processing workflows for agile experimentation.</li>
            <li>Streamlined the development-to-deployment process by eliminating manual operations for setup, testing, and delivery, facilitating large-scale model testing and rapid deployment.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Full-Time Research Assistant in Computer Science and Creative Media Department',
      company: 'City University of Hong Kong',
      period: 'Oct 2019 - May 2020',
      content: (
        <div className="left-align">
          <div><strong>Hong Kong</strong></div>
          <ul>
            <li>Achieved 92% correctness rate in challenging, noisy environments (e.g., buses, walking, running) using Java, Android Studio, Python, and TensorFlow, demonstrating robust sensor-based activity detection.</li>
            <li>Developed engaging mobile application games for user data recording and labeling with Java, Android Studio, SQLite, and Firebase, efficiently facilitating the collection of essential training and testing data.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Software Engineer Intern',
      company: 'TaoMauo Automatic Technology',
      period: 'Nov 2015 - Aug 2017',
      content: (
        <div className="left-align">
          <div><strong>Taoyuan, Taiwan</strong></div>
          <ul>
            <li>Designed and implemented a robust warehousing system, encompassing C#.NET desktop and Android mobile applications, backed by MySQL and SQLite databases.</li>
            <li>Offered critical customer support and crafted customized software solutions to meet diverse client requirements, enhancing system adaptability and user satisfaction.</li>
          </ul>
        </div>
      )
    }
  ];

  const education: Education[] = [
    {
      school: 'New York University, Courant Institute of Mathematical Sciences',
      degree: 'Master of Science, Computer Science',
      location: 'New York, NY',
      period: 'May 2024',
      gpa: 'GPA: 3.57'
    },
    {
      school: 'National Taipei University',
      degree: 'Bachelor of Science in Electrical Engineering',
      location: 'Taipei, Taiwan',
      period: 'Jun 2019',
      gpa: ''
    }
  ];

  return (
    <div className="resume-sections">
      {sections.map((section, index) => (
        <div key={index} className="section">
          <div 
            className={`section-header ${openSections[section.title] ? 'open' : ''}`} 
            onClick={() => toggleSection(section.title)}
          >
            <h2>{section.title}</h2>
            <span className="toggle-icon">{openSections[section.title] ? '−' : '+'}</span>
          </div>
          {openSections[section.title] && (
            <div className="section-content">
              {section.content}
            </div>
          )}
        </div>
      ))}

      <div className="section">
        <div 
          className={`section-header ${openSections['Experience'] ? 'open' : ''}`}
          onClick={() => toggleSection('Experience')}
        >
          <h2>Experience</h2>
          <span className="toggle-icon">{openSections['Experience'] ? '−' : '+'}</span>
        </div>
        {openSections['Experience'] && (
          <div className="section-content">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div 
                  className={`experience-header ${openExperiences[exp.title] ? 'open' : ''}`}
                  onClick={() => toggleExperience(exp.title)}
                >
                  <h3>{exp.title} - {exp.company}</h3>
                  <span className="toggle-icon">{openExperiences[exp.title] ? '−' : '+'}</span>
                </div>
                <div className="experience-period">{exp.period}</div>
                {openExperiences[exp.title] && (
                  <div className="experience-content">
                    {exp.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <div 
          className={`section-header ${openSections['Education'] ? 'open' : ''}`}
          onClick={() => toggleSection('Education')}
        >
          <h2>Education</h2>
          <span className="toggle-icon">{openSections['Education'] ? '−' : '+'}</span>
        </div>
        {openSections['Education'] && (
          <div className="section-content">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div 
                  className={`education-header ${openEducation[edu.school] ? 'open' : ''}`}
                  onClick={() => toggleEducation(edu.school)}
                >
                  <h3>{edu.school}</h3>
                  <span className="toggle-icon">{openEducation[edu.school] ? '−' : '+'}</span>
                </div>
                {openEducation[edu.school] && (
                  <div className="education-content">
                    <p className="left-align">{edu.degree}</p>
                    <p className="left-align">{edu.location}</p>
                    <p className="left-align">{edu.period}</p>
                    {edu.gpa && <p className="left-align">{edu.gpa}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeSections; 