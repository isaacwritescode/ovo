import { Helmet } from "react-helmet-async";
import { FAQ } from "../sections/FAQ";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { StatBlock } from "../sections/StatBlock";
import { Work } from "../sections/Work";
import { Testimonials } from "../sections/Testimonials";
import { Integrations } from "../sections/Integrations";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>OVO | Web Design & Development Agency</title>
      </Helmet>
      <Hero />
      <Services />
      <Work />
      <Integrations />
      <FAQ />
    </>
  );
}
