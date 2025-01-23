"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ResourcesCard from "../components/ResourcesCard";
import { allResources } from "../data/data";

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });


export default function ResourcesSection() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default for larger screens
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        arrows: false, // Disable default arrows
        dots: false, // Disable dots
        responsive: [
            {
                breakpoint: 1024, // For tablets and smaller
                settings: {
                    slidesToShow: 3, // Show 3 cards on medium screens
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show only 1 card on mobile devices
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <div className="relative w-full h-auto bg-cover bg-center bg-no-repeat">
            {/* Overlay (Optional) */}
            <div className="absolute inset-0"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-start pt-36 w-full h-full text-white space-y-8 pl-8 pr-4 lg:pl-20 lg:pr-8">
                {/* Main Heading */}
                <div className="flex items-center justify-between w-full">
                    <div className="relative inline-block w-full">
                        <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight text-left">
                            Resources &<br className="sm:hidden block" />
                            <span className="text-greenPrimary"> Education</span>
                        </h1>
                        {/* Subheading */}
                        <p className="text-md md:text-md text-lightGray whitespace-nowrap mt-4 leading-tight text-left">
                            Learn More About Local Recipes,<br className="sm:hidden block" />
                            ingredient guides, certifications.
                        </p>
                    </div>
                    {/* Buttons - Right Aligned for Web View */}
                    <div className="hidden lg:flex space-x-4 ml-auto">
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

                <div className="w-full lg:w-[120vw]">
                    {/* Slider */}
                    <Slider ref={sliderRef} {...settings}>
                        {allResources.map((resource) => (
                            <div key={resource.id} className="">
                                <ResourcesCard
                                    image={resource.image}
                                    date={resource.date}
                                    author={resource.author}
                                    title={resource.title}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Buttons - Bottom Aligned for Mobile View */}
                <div className="flex lg:hidden space-x-4 mt-4 justify-start">
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
        </div>
    );
}