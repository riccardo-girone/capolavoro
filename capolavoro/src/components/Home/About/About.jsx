const About = () => {
    return(
        <div className='h-screen w-2/5 bg-color-primary flex items-center justify-center flex-col pl-72 pr-72'>
            <div className='gap-10 mb-44'>
                <div className='text-number-fontsize text-color-white font-black'>11</div>
                <div className='flex items-start flex-col'>
                    <div className='text-color-white'>PERSONAL BEST</div>
                    <div className='text-color-white'>MANGA</div>
                    <div className='text-color-white'>PANEL</div>
                </div>
            </div>

            <div className='flex items-center justify-center gap-3 mb-24'>
                <div className="h-2.5 w-2.5 bg-color-white rounded-full">
                </div>
                <div className='text-color-white'>MY PERSONAL EXPERIENCE</div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='text-color-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et interdum neque. Praesent id 
                </div>
                <div className='text-color-white'>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                </div>
            </div>
        </div>
    );
}

export default About;