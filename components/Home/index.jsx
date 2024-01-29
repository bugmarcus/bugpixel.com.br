import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home} id="home">
            <div className={styles.intro}>
                <h1>Welcome to My Photography Portfolio</h1>
                <p>Capturing moments from today… Creating memories for a lifetime.</p>
                <div className={styles.ctaButtons}>
                    <a href="#gallery" className={styles.ctaButton}>View Gallery</a>
                </div>
            </div>
            <div className={styles.featuredImage}>
                {/* Replace with your featured image or slideshow component */}
                <img src="path-to-your-featured-image.jpg" alt="Featured Work" />
            </div>
        </div>
    );
};

export default Home;
