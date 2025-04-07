import styles from './Contact.module.css';
import { FaGithub, FaTelegram, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <h2>Get In Touch</h2>
                
                <div className={styles.contactContent}>
                    <div className={styles.contactText}>
                        <p>
                            I'm currently looking for new opportunities. Whether you have a question
                            or just want to say hi, feel free to contact me!
                        </p>
                    </div>

                    <div className={styles.contactLinks}>
                        <a href="mailto:veteroktm809@gmail.com" className={styles.contactLink}>
                            <div className={styles.iconWrapper}>
                                <FaEnvelope />
                            </div>
                            <div className={styles.linkContent}>
                                <span className={styles.linkLabel}>Email</span>
                                <span className={styles.linkValue}>veteroktm809@gmail.com</span>
                            </div>
                        </a>

                        <a href="tel:380687763512" className={styles.contactLink}>
                            <div className={styles.iconWrapper}>
                                <FaPhone />
                            </div>
                            <div className={styles.linkContent}>
                                <span className={styles.linkLabel}>Phone</span>
                                <span className={styles.linkValue}>+380 68 776 3512</span>
                            </div>
                        </a>

                        <a href="https://t.me/brezzeyt" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <div className={styles.iconWrapper}>
                                <FaTelegram />
                            </div>
                            <div className={styles.linkContent}>
                                <span className={styles.linkLabel}>Telegram</span>
                                <span className={styles.linkValue}>@brezzeyt</span>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/evgeshka_is/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <div className={styles.iconWrapper}>
                                <FaInstagram />
                            </div>
                            <div className={styles.linkContent}>
                                <span className={styles.linkLabel}>Instagram</span>
                                <span className={styles.linkValue}>@evgeshka_is</span>
                            </div>
                        </a>

                        <a href="https://github.com/BrezzeT" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <div className={styles.iconWrapper}>
                                <FaGithub />
                            </div>
                            <div className={styles.linkContent}>
                                <span className={styles.linkLabel}>GitHub</span>
                                <span className={styles.linkValue}>BrezzeT</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact; 