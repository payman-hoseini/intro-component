
import desktop_bg from '@/style/img/bg-intro-desktop.png'
import Form from './components/form';


export default function Home() {
  return (
    <>
        <div className="w-screen h-screen md:desktop_img mobile_img bg-red ">
            <div className='max-w-[1500px] w-[90vw] flex-col md:flex-row mx-auto flex items-center md:justify-center h-screen font-Poppins py-28 md:py-0'>
              <div className='md:mr-24 mr-0 basis-1/2 text-center md:text-start'>
                  <h2 className='text-white font-bold md:text-6xl text-3xl'>Learn to code by watching others</h2>
                  <p className='md:mt-10 mt-5 mb-12 md:mb-0 text-white md:text-[20px] text-base'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                  but understanding how developers think is invaluable.</p>
              </div>
              <div className='basis-1/2'>
                  <div className='bg-blue text-center py-4 rounded-lg mb-8 flex-col flex md:flex-row justify-center items-center relative shadow-lg'>
                    <span className='text-white font-semibold '>Try it free 7 days</span> <span className='text-white text-sm ml-1'>then $20/mo. thereafter</span>
                    {/* <div className='bg-gray-400 text-center py-4 rounded-lg mb-8 absolute top-15 w-full h-full '></div> */}
                  </div>
                  <div className='bg-white p-12 rounded-lg shadow-lg'>
                    <Form />
                  </div>
              </div>
            </div>
        </div>
        {/* <p style="color : red">payman</p> */}
    </>
  );
}
