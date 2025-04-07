import React from 'react'
import styles from './Hero.module.css'
import Particles from '../Particle/Particle'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'

const Hero = () => {
    const handleScrollClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.hero} id="hero">
            <Particles />
            <div className={styles.heroContent}>
                <h1>Hello, I'm</h1>
                <h2>Evgeniy</h2>
                <p>Frontend Developer & UI/UX Designer</p>
                <div className={styles.buttons}>
                    <a href="#about" className={styles.button} onClick={(e) => {
                        e.preventDefault();
                        handleScrollClick();
                    }}>About Me</a>
                    <a href="#projects" className={styles.button}>View Projects</a>
                </div>
                <div className={styles.social}>
                    <a href="https://github.com/BrezzeT" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/evgeshka_is/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://t.me/brezzeyt" target="_blank" rel="noopener noreferrer">
                        <FaTelegram />
                    </a>
                </div>
                <div className={styles.scrollDown} onClick={handleScrollClick}>
                    <div className={styles.mouse}>
                        <span className={styles.wheel}></span>
                    </div>
                    <div>Scroll Down</div>
                </div>
            </div>
        </section>
    )
}

export default Hero