const About = () => {
    return(
        <div className='h-screen w-2/5 bg-color-primary flex items-start justify-center flex-col pl-72 2xl:pl-44 pr-72 2xl:pr-44'>
            <div className='mb-52'>
                <div className='text-number-fontsize text-color-white font-primary font-black'>11</div>
                <div className='flex items-start flex-col font-primary'>
                    <div className='text-color-white font-extrabold text-sub-titel m-0 leading-7'>PERSONAL BEST</div>
                    <div className='text-color-white font-extrabold text-sub-titel m-0 leading-7'>MANGA</div>
                    <div className='text-color-white font-extrabold text-sub-titel m-0 leading-7'>PANEL</div>
                </div>
            </div>

            <div className='flex items-center justify-center gap-3 mb-32'>
                <div className="h-2.5 w-2.5 bg-color-white rounded-full">
                </div>
                <div className='text-color-white font-secondary font-normal'>MY PERSONAL EXPERIENCE</div>
            </div>

            <div className='flex flex-col gap-4 max-w-80'>
                <div className='text-color-white font-secondary font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et interdum neque. Praesent id 
                </div>
                <div className='text-color-white font-secondary font-light'>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                </div>
            </div>
        </div>
    );
}

export default About;