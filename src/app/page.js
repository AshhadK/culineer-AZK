import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import BusinessSection from './sections/BusinessSection';
import ConsumerSection from './sections/ConsumerSection';
import MissionSection from './sections/MissionSection';
import Footer from './sections/Footer';
import MarketCommunity from './sections/MarketCommunity';
import ClientFeedback from './sections/ClientsFeedback';
import ResourcesSection from './sections/ResourcesSection';
import Cliental from './sections/Cliental';
import Products from './sections/Products';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <BusinessSection />
            <ConsumerSection />
            <MissionSection />
            <MarketCommunity />
            <ClientFeedback />
            <ResourcesSection />
            <Cliental />
            <Products />

            <Footer />

        </div>
    );
}
