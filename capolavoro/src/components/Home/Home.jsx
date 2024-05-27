import About from "./About/About";
import Gallery from "./Gallery/Gallery";

const Home = () => {
    return(
        <div className='flex h-screen'>
            <Gallery/>
            <About/>
        </div>
    );
}

export default Home;