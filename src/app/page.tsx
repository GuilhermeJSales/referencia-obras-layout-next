import About from './_components/about';
import Clients from './_components/clients';
import { Contact } from './_components/contact';
import Hero from './_components/hero';
import Portfolio from './_components/portfolio';
import Services from './_components/services';
import Testimonials from './_components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
