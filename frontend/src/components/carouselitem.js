import React from 'react'

export default function carouselitem({ image }) {
    return (
        <div>
            <div className="shadow slide-item transition-all">
                <img src={image} className='object-cover h-48 rounded' alt="car" srcset="" />
            </div>
        </div>
    )
}
