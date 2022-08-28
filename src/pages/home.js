import { Helmet } from "react-helmet-async";
import { Hero } from "../sections/Hero";
import { StatBlock } from "../sections/StatBlock";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <StatBlock />
    </>
  );
}
