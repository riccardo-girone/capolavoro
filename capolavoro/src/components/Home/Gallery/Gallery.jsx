import { gallaeryData } from "@/utils/galleryData";
import ImgGallery from "./ImgGallery/ImgGalleryContainer.jsx"
import styles from "./Gallery.module.scss"

const Gallery = () => {
    return(
        <div className={styles.content}>
            {gallaeryData.map(({ img, description, title, imgHeigth }) => (
                <ImgGallery img={img} description={description} title={title} imgHeigth={imgHeigth}/>
            ))}
        </div>
    );
}

export default Gallery;