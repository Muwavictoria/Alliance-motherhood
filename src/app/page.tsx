import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Programs from '@/components/Programs'
import Contact from '@/components/Contact'
import Donation from '@/components/Donation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Services />
      <Programs />
      <Contact />
      <Donation />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
