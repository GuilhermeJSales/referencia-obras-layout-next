import About from './_components/about';
import Avcb from './_components/avbc';
import Clients from './_components/clients';
import { Contact } from './_components/contact';
import Footer from './_components/footer';
import Header from './_components/header';
import Hero from './_components/hero';
import Portfolio from './_components/portfolio';
import Services from './_components/services';
import Testimonials from './_components/testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Avcb />
      <Portfolio />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
