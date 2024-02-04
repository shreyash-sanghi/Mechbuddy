import React from 'react';
import mission from './assets/mision.png';
import vision from './assets/vision.png';

const Mission = () => {
  return (
    <div className='bg-white flex flex-col sm:flex-row'>
      {renderSection('Mission', mission, 'bg-[#F31D32]')}
      {renderSection('Vision', vision, 'bg-[#000515F0]')}
    </div>
  );
};

const renderSection = (title, image, bgColor) => (
  <div className={`${bgColor} text-white flex p-6 sm:p-9 w-full`}>
    <div className='flex flex-col mr-4'>
      <h3 className='text-center underline text-lg sm:text-2xl font-bold mb-2 sm:mb-4'>{title}</h3>
      <div className='flex sm:hidden my-2'>
        <img className='w-full' src={image} alt={title} />
      </div>
      <p className='text-justify text-sm sm:text-base' style={{ fontFamily: 'AR One Sans, sans-serif' }}>
        {getContent(title)}
      </p>
    </div>
    <div className='hidden sm:flex'>
      <img className='w-full' src={image} alt={title} />
    </div>
  </div>
);

const getContent = (title) => {
  const missionContent = `At Mech Buddy, our mission is crystal clear: to be the ultimate one-stop solution for all your automotive needs. We are on a relentless journey to simplify the lives of automotive owners, making it as effortless as possible to address every automotive concern.`;

  const visionContent = `Our vision is to create a comprehensive platform where automotive enthusiasts can seamlessly tackle a myriad of challenges, be it servicing, maintenance, customization, insurance, or modifications. We're committed to continuously enhancing our platform to empower every automotive owner to solve any automotive-related issue they encounter. At Mech Buddy, we're not just revolutionizing the automotive industry; we're redefining the way you experience it.`;

  return title === 'Mission' ? missionContent : visionContent;
};

export default Mission;
