import Content from './FooterContent/Content.jsx';

export default function Footer() {
  return (
    <div className='relative h-[26vw]' style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        <div className='relative h-[calc(100vh+26vw)] -top-[100vh]'>
            <div className='h-[26vw] sticky top-[calc(100vh-26vw)]'>
                <Content />
            </div>
        </div>
    </div>
  )
}