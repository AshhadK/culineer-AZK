"use client";
import { useState } from "react";

const MultiTab = () => {
    const [activeTab, setActiveTab] = useState("Producer");

    const tabs = ["Producer", "Farmer", "Home Cook"];

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Tab Header */}
            <div className="relative w-full">
                {/* Gray Underline */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-4 border-gray-300 rounded-lg"></div>

                <div className="flex justify-center space-x-8 relative">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`relative text-lg pb-4 w-1/6 ${activeTab === tab
                                ? "text-greenPrimary font-bold"
                                : "text-black"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                            {/* Green Underline */}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full border-b-4 border-greenPrimary rounded-lg"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>



            {/* Tab Content */}
            <div className="w-[150vw] lg:w-full">
                {activeTab === "Producer" && (
                    <div className="relative">
                        <img
                            src="assets/images/producer-with-border.png"
                            alt="Border"
                            className="w-full h-auto "
                        />

                        <img
                            src="assets/images/producer-card.png"
                            alt="Border"
                            className="w-72 h-auto absolute top-60 -left-16 hidden lg:block md:block"
                        />


                    </div>
                )}
                {activeTab === "Farmer" && (
                    <div className="relative">
                        <img
                            src="assets/images/farmer-with-border.png"
                            alt="Border"
                            className="w-full h-auto "
                        />
                        <img
                            src="assets/images/farmer-card.png"
                            alt="Border"
                            className="h-auto absolute top-60 -left-16 w-56 hidden lg:block md:block"
                        />

                    </div>
                )}
                {activeTab === "Home Cook" && (
                    <div className="relative">

                        <img
                            src="assets/images/home-cook-with-border.png"
                            alt="Border"
                            className="w-full h-auto "
                        />
                        <img
                            src="assets/images/home-cook-card-1.png"
                            alt="Border"
                            className="h-auto absolute top-64 -left-16 w-56 hidden lg:block md:block"
                        />
                        <img
                            src="assets/images/home-cook-card-2.png"
                            alt="Border"
                            className="h-auto absolute top-10 -right-16 w-56 hidden lg:block md:block"
                        />

                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiTab;
