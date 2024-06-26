import { Helmet } from "react-helmet-async";
import { FAQ } from "../sections/FAQ";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { Work } from "../sections/Work";
import { Testimonials } from "../sections/Testimonials";
import { Integrations } from "../sections/Integrations";
import { Mission } from "../sections/Mission";

export default function Home({ scrollAmt }) {
  return (
    <>
      <Helmet>
        <title>Dev Geeks | Web Design & Development Agency</title>
      </Helmet>
      <Hero />
      <Services />
      <Work />
      <Integrations scrollAmt={scrollAmt} />
      <FAQ />
      <Mission />
      <Testimonials />
    </>
  );
}
