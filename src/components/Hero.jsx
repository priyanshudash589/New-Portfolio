import React from 'react'
import Typewriter from 'typewriter-effect';
import avatar from '../images/priyanshu-avatar.svg'


const Hero = () => {
  return (
    <>
      <div class="relative isolate px-6 -top-32 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
        </div>
        <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div class="text-center font-orbi flex flex-col items-center justify-center">
            <img src={avatar} height={200} width={220} alt="" /> <br />
            <h3 class="text-4xl lg:text-5xl tracking-wider w-full text-gray-900 sm:text-6xl mb-6">Hi there, Priyanshu Here! </h3>
            <div className='text-xl flex justify-center items-center shadow-xl text-slate-500 w-[18rem] h-[2.5rem] rounded-full border-[2px] border-solid border-black '>
              <Typewriter
                options={{
                  strings: ['Frontend', 'Blockchain', 'Public-Speaker'],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                }}
              /></div>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Experienced Full Stack Developer proficient in designing, developing, and deploying robust web applications. Skilled in JavaScript, HTML, CSS, React.js, Node.js, and Express.js. Passionate about problem-solving, user experience, and collaborating with teams to deliver innovative solutions.</p>
          </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>




    </>
  )
}

export default Hero