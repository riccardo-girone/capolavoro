import styles from './About.module.scss'

const About = () => {
    return(
        <div className={styles.contentWrapper}>
            <div className={styles.contentContainer}>
                <div className={styles.titleWrapper}>
                    <div className={styles.titleNum}>11</div>
                    <div className={styles.title}>
                        <div>BEST</div>
                        <div>MANGA</div>
                        <div>PANEL</div>
                    </div>
                </div>

                <div className={styles.autor}>
                    <div>Akira Toriyama, Eiichiro Oda, Kentarō Miura</div>
                    <div>Go Nagai, Taiyō Matsumoto, Makoto Yukimora</div>
                    <div>Yoshihiro Togashi, Naoki Urasawa</div>
                </div>

                <div className={styles.myEx}>
                    <div className={styles.circle}></div>
                    <div>MY PERSONAL EXPERIENCE</div>
                </div>

                <div className={styles.Explenetion}>
                    <div className={styles.ExParagraf}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et interdum neque. Praesent id 
                    </div>
                    <div>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;