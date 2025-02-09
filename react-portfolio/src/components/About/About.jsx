import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end</h3>
              <p>
              I specialize in building responsive, user-friendly interfaces using React.js, HTML5, CSS3, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend and Databases</h3>
              <p>
              I have expertise in creating efficient and scalable back-end systems with Node.js and Express.js. I also manage databases effectively using MongoDB, ensuring performance and security.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Structures and Algorithms</h3>
              <p>
              I’ve solved over 100 problems on LeetCode, strengthening my skills in algorithms and data structures. This enables me to write clean, efficient, and reliable code for challenging tasks.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};