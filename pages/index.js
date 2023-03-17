import ClientLogos from '@/components/ClientLogos';
import Features from '@/components/Features';
import GetStarted from '@/components/GetStarted';
import Page from '@/components/Page';
import Portfolio from '@/components/Portfolio';
import Slider from '@/components/Slider';
import Testimonial from '@/components/Testimonial';

function HomePage() {
  return (
    <Page title="Home">
      <Slider />
      <ClientLogos />
      <Portfolio />
      <Features />
      <Testimonial />
      <GetStarted />
    </Page>
  );
}
export default HomePage;
