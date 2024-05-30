'use client'
import HomePage from "../components/Home/Home.jsx";
import { useEffect } from "react";

const Home = () => {
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
      }, [])

    return (
        <HomePage/>
    );
}

export default Home;