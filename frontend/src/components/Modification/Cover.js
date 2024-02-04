import React from 'react'

export default function Cover(props) {
  const {service_name, modificationbg} = props;
  return (
    <div>
      <div className='bg-modificationbg bg-cover p-8 sm:p-16  h-full text-white text-center text-4xl font-bold'>
        {props.service_name}
      </div>
    </div>
  )
}
