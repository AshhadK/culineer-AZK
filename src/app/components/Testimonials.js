"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialsCards";
import { allTestimonials } from "../data/data";


// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TestimonialSlider() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10px",
        arrows: false, // Disable default arrows
        dots: false, // Disable dots
        responsive: [
            {
                breakpoint: 768, // Mobile view
                settings: {
                    slidesToShow: 1, // Show one card
                    centerMode: true, // Enable centering
                    centerPadding: "0px", // Remove extra padding for full alignment
                },
            },
        ],
    };

    return (
        <div className="w-full lg:w-[130vw]">
            {/* Slider */}
            <Slider ref={sliderRef} {...settings}>
                {allTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className="px-4 flex justify-center">
                        <TestimonialCard
                            image={testimonial.image}
                            text={testimonial.text}
                            name={testimonial.name}
                            role={testimonial.role}
                            profileImage={testimonial.profileImage}
                        />
                    </div>
                ))}
            </Slider>

            {/* Custom Arrows Below */}
            <div className="flex justify-center space-x-4 mt-12 pb-28">
                <button
                    className="bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:text-gray-800 transition focus:outline-none"
                    onClick={() => sliderRef.current?.slickPrev()} // Trigger the previous slide
                >
                    <FaArrowLeft />
                </button>
                <button
                    className="bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:text-gray-800 transition focus:outline-none"
                    onClick={() => sliderRef.current?.slickNext()} // Trigger the next slide
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
