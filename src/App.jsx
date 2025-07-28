import { Suspense, lazy } from "react";

import Navbar from "./components/NavBar";

const Hero = lazy(() => import("./sections/Hero"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Work = lazy(() => import("./sections/Work"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const Loader = () => (
  <div className="min-h-screen flex-center text-white text-xl">Loading...</div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Hero />
        <FeatureCards />
        <Work />
        <Experience />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
