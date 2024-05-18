import React from 'react'
import Slider from 'react-slick'
import '../../styles/testimonial.css';

import ava1 from '../../assets/images/ava-1.jpg'
import ava2 from '../../assets/images/ava-2.jpg'
import ava3 from '../../assets/images/ava-3.jpg'
import ava4 from '../../assets/images/ava-4.jpg'

const Testimonial = () => {
    const settings = {
        dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    }

  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava1} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className='mb-0 mt-3'>Juliano Cassassola</h6>
                    <p className='section__description'>Cliente</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava2} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className='mb-0 mt-3'>Fagner Wolfmaan</h6>
                    <p className='section__description'>Cliente</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava3} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className='mb-0 mt-3'>Diego Nolberg</h6>
                    <p className='section__description'>Cliente</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava4} alt="" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className='mb-0 mt-3'>Larrisa Santos</h6>
                    <p className='section__description'>Cliente</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial