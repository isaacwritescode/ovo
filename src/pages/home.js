import { Helmet } from "react-helmet-async";
import { FAQ } from "../sections/FAQ";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { StatBlock } from "../sections/StatBlock";
import { Work } from "../sections/Work";
import { Testimonials } from "../sections/Testimonials";
import { Footer } from "../sections/Footer";
import { Features } from "../sections/Features";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>OVO | Web Design & Development Agency</title>
      </Helmet>
      <Hero />
      <StatBlock />
      <Services />
      <Features />
      <Work />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
