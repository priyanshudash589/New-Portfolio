import React from 'react'
import pdgrp from '../images/pdgrp.svg'

const About = () => {

  return (
    <>
      <div className='bg-green-200 w-full h-fit'>
        <div class="py-16 bg-white">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
                <img src={pdgrp} className='rounded-xl' alt="image" loading="lazy" width="" height="" />
              </div>
              <div class="md:7/12 lg:w-6/12">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                <div className='w-full h-[25rem] mt-8'>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About