import styles from './About.module.scss'

const About = () => {
    return(
        <div className={styles.contentContainer}>
            <div className={styles.titleWrapper}>
                <div className={styles.titleNum}>11</div>
                <div className={styles.title}>
                    <div>PERSONAL BEST</div>
                    <div>MANGA</div>
                    <div>PANEL</div>
                </div>
            </div>

            <div className={styles.myEx}>
                <div className={styles.circle}></div>
                <div className={styles.myExTitle}>MY PERSONAL EXPERIENCE</div>
            </div>

            <div className={styles.Explenetion}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et interdum neque. Praesent id 
                </div>
                <div>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                </div>
            </div>
        </div>
    );
}

export default About;