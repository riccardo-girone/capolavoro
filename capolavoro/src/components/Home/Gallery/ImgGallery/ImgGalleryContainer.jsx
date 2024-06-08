import styles from './ImgGalleryContainer.module.scss'

const ImgGalleryContainer = ({ imgData }) => {

    let { img, description, title, imgHeigth, scrollSpeed, className} = imgData

    if (!className) {
       className = "" 
    }

    console.log(className, "🤠")

    return (
        <div className={`${styles.card} ${className}`} data-scroll data-scroll-speed={scrollSpeed}>
            <div className={styles.imgContainer} style={{height: imgHeigth}}>
                <img src={imgData.img} alt="img"/>
            </div>

            <div className={styles.description}>{description}</div>

            <div className={styles.title}>{title}</div>
        </div>
    );
}

export default ImgGalleryContainer;