import Nav from './Nav/Nav.jsx'
import Section1 from './Section1/Section1.jsx'

const Content = () => {
    return(
        <div className='bg-color-white-2 py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Nav/>
            <Section1/>
        </div>
    )
}

export default Content;