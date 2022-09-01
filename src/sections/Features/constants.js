import { MicroAnims } from "./animations/MicroAnims";
import { Rocket } from "./animations/Rocket";
import { Webpage } from "./animations/Webpage";
import { Responsivity } from "./animations/Responsivity";

export const FEATURES = [
  {
    color: "blue.main",
    title: "Visuals",
    heading: "Say goodbye to antique looking wesbites",
    desc: "We’re always in touch with the current trends in the design space & implement them at the earliest so that your brand can stay relevant",
    anim: <Webpage />,
  },
  {
    color: "purple.main",
    title: "Animations",
    heading: "More attractive websites with cool animations",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    anim: <MicroAnims />,
  },
  {
    color: "turquoise.main",
    title: "Load time",
    heading: "Extra fast loading so that users don’t have to wait",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    anim: <Rocket />,
  },
  {
    color: "red.main",
    title: "Compatibility",
    heading: "Looks great on any kind of device",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    anim: <Responsivity />,
  },
];
