import About from "./About/About";
import Gallery from "./Gallery/Gallery";

const Home = () => {
    return(
        <div className='h-screen flex'>
            <Gallery/>
            <About/>
        </div>
    );
}

export default Home;