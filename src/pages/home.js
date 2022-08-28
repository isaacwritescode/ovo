import { Helmet } from "react-helmet-async";
import { FAQ } from "../sections/FAQ";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { StatBlock } from "../sections/StatBlock";
import { Work } from "../sections/Work";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <StatBlock />
      <Services />
      <Work />
      <FAQ />
    </>
  );
}
