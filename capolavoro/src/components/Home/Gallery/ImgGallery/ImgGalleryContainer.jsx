import styles from './ImgGalleryContainer.module.scss'

const ImgGalleryContainer = ({ img, description, title, imgHeigth, scrollSpeed}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer} style={{height: imgHeigth}}>
                <img src={img} alt="img"/>
            </div>

            <div className={styles.description}>{description}</div>

            <div className={styles.title}>{title}</div>
        </div>
    );
}

export default ImgGalleryContainer;