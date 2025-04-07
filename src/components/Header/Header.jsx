import React, { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTo = (sectionId, e) => {
        e.preventDefault();
        if (sectionId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    const handleDownloadCV = () => {
        const resumeUrl = '/resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Evgeniy-Frontend-Developer-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>BR</a>
                
                <div className={`${styles.menuBtn} ${isMenuOpen ? styles.open : ''}`} 
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <a href="#" onClick={(e) => handleScrollTo('top', e)}>Home</a>
                    <a href="#about" onClick={(e) => handleScrollTo('about', e)}>About</a>
                    <a href="#projects" onClick={(e) => handleScrollTo('projects', e)}>Projects</a>
                    <a href="#contact" onClick={(e) => handleScrollTo('contact', e)}>Contact</a>
                    <button className={styles.downloadBtn} onClick={handleDownloadCV}>
                        Download CV
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
