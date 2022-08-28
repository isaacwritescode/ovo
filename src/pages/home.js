import { Helmet } from "react-helmet-async";
import { Hero } from "../sections/Hero";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
    </>
  );
}
