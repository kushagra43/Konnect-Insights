import TagManager from "@/components/TagManager/TagManager";
import Alternative from "@/components/Alternative/Alternative";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Integrations from "@/components/Integrations/Integrations";
import NavBar from "@/components/NavBar/NavBar";
import Tabs from "@/components/Tabs/Tabs";
import Teams from "@/components/Teams/Teams";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import BlueBackground from "@/components/UI/BlueBackground";
import Experience from "@/components/Experience/Experience";

const HeroText = () => {
  return (
    <div className="sm:w-4/5 lg:max-w-[540px] w-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold mb-5 lg:mb-10">
        <span className="blue-gradient">#1 Alternative</span> Platform{" "}
        for Social Listening & Community Engagement.
      </h1>
      <p className="text-[#A6B6C4] text-lg md:text-xl lg:text-2xl text-center lg:text-left leading-normal">
        <span className="font-semibold">Introducing Konnect Insights</span>, an{" "}
        <span className="font-semibold">omnichannel platform</span> that unifies{" "}
        <span className="font-semibold">
          Social Listening, Community Engagement, Market Intelligence, Powerful
          Analytics,
        </span>{" "}
        and <span className="font-semibold">much more.</span>
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <BlueBackground>
        <NavBar />
        <Hero>
          <HeroText />
        </Hero>
        <TrustedBy />
      </BlueBackground>
      <Alternative />
      <Integrations />
      <Tabs />
      <Experience />
      <BlueBackground>
        <Teams />
      </BlueBackground>
      <Testimonials />
      <Footer className="mt-16" />
    </>
  );
}


