import React, { useState, useRef } from 'react';

// {/* i had totaly change the career page i used object array and designed a box so that it can be pointed and designed some elements */}


export default function Career() {
  const positions = ['Full Stack Developer', 'Graphic Designer', 'Video Editor', 'HR'];
  const [selectedPosition, setSelectedPosition] = useState(null);
  const applyNowRef = useRef(null);

  const jobDescriptions = {
    'Full Stack Developer': `
      Hiring a Full Stack Developer to maintain and develop web applications. Requires proven experience,
      proficiency in front-end and back-end technologies,
      and strong problem-solving skills. Competitive salary,
      dynamic work environment, and growth opportunities offered.
      Apply at infomechbuddy@gmail.com.
    `,
    'Graphic Designer': `
      Join us as a Graphic Designer! Create visually stunning designs
      aligned with our brand.
      Proven experience with Adobe Creative Suite is a must.
      Competitive salary and dynamic work environment offered.
      Send resume and portfolio to infomechbuddy@gmail.com.
    `,
    'Video Editor': `
      We're hiring a Video Editor to create compelling content aligned with our objectives. Proven experience with Adobe Premiere Pro or similar tools is essential. Competitive salary, dynamic work environment, and professional development opportunities offered.
      Send your resume, portfolio, and a brief cover letter to infomechbuddy@gmail.com.
    `,
    'HR': `
      Now hiring an HR professional! Manage recruitment, onboarding, and employee relations. Proven experience required. Competitive salary and growth opportunities offered.
      Send resume to infomechbuddy@gmail.com.
    `,
  };

  const handlePositionClick = (position) => {
    setSelectedPosition(position === selectedPosition ? null : position);

    // Scroll to the Apply Now button
    const applyNowButton = applyNowRef.current;

    if (applyNowButton) {
      applyNowButton.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  
      // Adjust the offset to fine-tune the final position
      const offset = -30; // Change this value as needed
      window.scrollBy(0, offset);
    }
  };
  const handleApplyNowClick = () => {
    // Add logic to handle the "Apply Now" button click
    alert('Apply Now clicked!');
  };

  return (
    <div className='container mx-auto p-8 mt-6'>
      <div className='flex flex-col items-center mb-8'>
        <h1 className='text-4xl font-bold text-red-600 mb-2'>Join Our Team</h1>
        <p className='text-white font-semibold text-center max-w-2xl'>
          MechBuddy is actively hiring individuals with a passion for technology.
          If you have a keen interest in the technical realm and are ready to contribute your skills,
          explore our job opportunities and submit your application today.
        </p>
        <div className='bg-blue-200/5 text-white p-4 rounded-md text-center my-4'>
          <p className='font-semibold'>
            Click on either position to view details, and then click "Apply Now" to submit your application.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {positions.map((position, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r from-black via-gray-900 to-black bg-cover text-white p-8 rounded-lg ${
              selectedPosition === position ? 'h-auto' : 'h-24'
            } overflow-hidden shadow-lg transition-all duration-300 cursor-pointer`}
            onClick={() => handlePositionClick(position)}
          >
            <h2 className='text-xl font-semibold mb-4'>{position}</h2>
            {selectedPosition === position && (
              <p className='text-white'>
                {jobDescriptions[position]}
              </p>
            )}
          </div>
        ))}
      </div>
      {selectedPosition && (
        <a
          ref={applyNowRef}
          href='mailto:infomechbuddy@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 bg-red-500 text-white px-4 py-2 rounded text-center inline-block'
          onClick={handleApplyNowClick}
        >
          Apply Now
        </a>
      )}
    </div>
  );
}
