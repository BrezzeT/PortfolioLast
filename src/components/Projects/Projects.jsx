import { useState } from 'react';
import styles from './Projects.module.css'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Chat Application",
            description: "Real-time chat application built with modern technologies. Features include instant messaging, user authentication, and responsive design.",
            tech: ["JavaScript", "React", "Node.js", "WebSocket"],
            github: "https://github.com/BrezzeT/chat-app",
            live: null,
            type: "Featured Project",
            longDescription: "Detailed description of the Chat Application, including the challenges faced, solutions implemented, and the impact of the project..."
        },
        {
            title: "Anime Site",
            description: "A modern anime streaming platform with features like filtering by genre, year, and status. Clean and intuitive user interface for browsing anime content.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/BrezzeT/AnimeSite.github.io",
            live: "https://brezzet.github.io/AnimeSite.github.io/main.html",
            type: "Web Application",
            longDescription: "Detailed description of the Anime Site, including the challenges faced, solutions implemented, and the impact of the project..."
        },
        {
            title: "Register Form",
            description: "Clean and modern registration form with social login options. Features smooth animations and responsive design.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/BrezzeT/Register-form",
            live: "https://brezzet.github.io/Register-form/",
            type: "Component",
            longDescription: "Detailed description of the Register Form, including the challenges faced, solutions implemented, and the impact of the project..."
        },
        {
            title: "Calculator",
            description: "Interactive calculator application with a sleek design and full arithmetic functionality.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/BrezzeT/calculator",
            live: "https://brezzet.github.io/calculator/",
            type: "Tool",
            longDescription: "Detailed description of the Calculator, including the challenges faced, solutions implemented, and the impact of the project..."
        },
        {
            title: "Weather App",
            description: "Weather application showing current conditions and forecasts for cities. Features include city search and detailed weather information.",
            tech: ["HTML", "CSS", "JavaScript", "Weather API"],
            github: "https://github.com/BrezzeT/Wetaher-app",
            live: "https://brezzet.github.io/Wetaher-app/",
            type: "Web Application",
            longDescription: "Detailed description of the Weather App, including the challenges faced, solutions implemented, and the impact of the project..."
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const handleScrollToContacts = () => {
        const contactsSection = document.getElementById('contact');
        contactsSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <h2>My Projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.projectContent}>
                                <div className={styles.projectHeader}>
                                    <span className={styles.projectType}>{project.type}</span>
                                    <h3>{project.title}</h3>
                                </div>
                                <p>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.techItem}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.projectActions}>
                                    <button 
                                        className={styles.viewDetailsBtn}
                                        onClick={() => openModal(project)}
                                    >
                                        View Details
                                    </button>
                                    <div className={styles.projectLinks}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.scrollToContacts} onClick={handleScrollToContacts}>
                    <span className={styles.scrollText}>Contact Me</span>
                    <div className={styles.scrollIcon}>
                        <span></span>
                    </div>
                </div>
            </div>

            {selectedProject && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeModal} onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <div className={styles.modalContent}>
                            <span className={styles.projectType}>{selectedProject.type}</span>
                            <h3>{selectedProject.title}</h3>
                            <p>{selectedProject.longDescription}</p>
                            <div className={styles.techStack}>
                                {selectedProject.tech.map((tech, index) => (
                                    <span key={index} className={styles.techItem}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.modalLinks}>
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> View on GitHub
                                </a>
                                {selectedProject.live && (
                                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects 