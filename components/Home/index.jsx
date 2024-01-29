import React from 'react';
import styles from './Home.module.scss';
import ImageViewer from '../ImageViewer';

const Home = () => {
    return (
        <div className={styles.home} id="home">
            <div className={styles.intro}>
                <h1>Welcome!</h1>
                <p>Capturing moments from today… Creating memories for a lifetime.</p>
            </div>
            <div className={styles.featuredImage}>
                {/* Replace with your featured image or slideshow component */}
                {/* <img src="../../src/assets/images/sample-01.jpg" alt="Featured Work" /> */}
                <ImageViewer />
            </div>
        </div>
    );
};

export default Home;
