import { gallaeryData } from "@/utils/galleryData";
import ImgGallery from "./ImgGallery/ImgGalleryContainer.jsx"

const Gallery = () => {
    return(
        <div className='h-screen w-3/5 bg-color-primary'>
            {gallaeryData.map(({ img, description, title, imgHeigth }) => (
                <ImgGallery img={img} description={description} title={title} imgHeigth={imgHeigth}/>
            ))}
        </div>
    );
}

export default Gallery;