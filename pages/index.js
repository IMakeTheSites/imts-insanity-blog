import ClientLogos from '@/components/ClientLogos';
import Page from '@/components/Page';
import Portfolio from '@/components/Portfolio';
import Slider from '@/components/Slider';

function HomePage() {
  return (
    <Page title="Home">
      <Slider />
      <ClientLogos />
      <Portfolio />
    </Page>
  );
}
export default HomePage;
