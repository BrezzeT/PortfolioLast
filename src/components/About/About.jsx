import { useEffect, useRef } from 'react'
import styles from './About.module.css'
import myPhoto from '../../assets/photo.png'

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.style.setProperty('--scroll', '1');
                    const elements = entry.target.querySelectorAll('h2, p');
                    elements.forEach(el => {
                        el.style.animationPlayState = 'running';
                    });
                }
            },
            {
                threshold: 0.2
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    };

    const skills = [
        "Web Developer",
        "JavaScript",
        "React",
        "HTML/CSS",
        "Node.js",
        "Vite",
        "MongoDB",
        "Firebase",
        "Cloudinary",
        "Render",
        "WebSocket"
    ];

    return (
        <section className={styles.about} id="about" ref={sectionRef}>
            <div className={styles.container}>
                <h2>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.photoSection}>
                        <div className={styles.photoFrame}>
                            <div className={styles.photo} style={{
                                backgroundImage: `url(${myPhoto})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoSection}>
                        <div className={styles.bio}>
                            <p>
                                Hello! I'm Yevgeny, a 20-year-old aspiring developer and a 3rd-year Computer Engineering student 
                                at Chernihiv Polytechnic University. My passion lies in programming and website creation, 
                                with a clear goal of becoming a programming guru.
                            </p>
                            <div className={styles.strengths}>
                                <h3>My Strengths:</h3>
                                <ul>
                                    <li>Sociable and team-oriented</li>
                                    <li>Highly responsible</li>
                                    <li>Strong commitment to deadlines</li>
                                    <li>Continuous learner and self-improver</li>
                                    <li>Open to new knowledge and experiences</li>
                                </ul>
                            </div>
                            <div className={styles.languages}>
                                <h3>Languages:</h3>
                                <ul>
                                    <li>Ukrainian (Native)</li>
                                    <li>Russian (Native)</li>
                                    <li>English (Independent)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skillsSection}>
                        <h3>Technical Skills</h3>
                        <div className={styles.skillsGrid}>
                            {skills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.scrollToProjects} onClick={handleScrollToProjects}>
                <span className={styles.scrollText}>View My Projects</span>
                <div className={styles.scrollIcon}>
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default About 