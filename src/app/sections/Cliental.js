"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { allClients } from "../data/data";


// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Cliental() {
    const settings = {
        infinite: true,
        speed: 800, // Adjust speed for smoother transition
        slidesToShow: 6, // Default for larger screens
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Delay between slides (in milliseconds)
        arrows: false, // No arrows
        dots: false, // No dots
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024, // Tablets and smaller screens
                settings: {
                    slidesToShow: 3, // Show 4 slides on medium screens
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2, // Show 3 slides on mobile
                    centerMode: true, // Center the images on mobile
                    centerPadding: "10px", // Add a little padding to the sides for mobile
                },
            },
        ],
    };

    return (
        <div className="w-full my-16 lg:my-40">
            <Slider {...settings}>
                {allClients.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto object-cover" // Object cover ensures image maintains its aspect ratio
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
