import { gallaeryData } from "@/utils/galleryData";
import ImgGallery from "./ImgGallery/ImgGalleryContainer.jsx"
import styles from "./Gallery.module.scss"

const Gallery = () => {
    return(
        <div className={styles.content}>
            <div className={styles.img}>
                {gallaeryData.map((data, index) => (
                    <ImgGallery key={index} imgData={data}/>
                ))}
            </div>
        </div>
    );
}

export default Gallery;