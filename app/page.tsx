import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { MultiStepQuoteForm } from '@/components/multi-step-quote-form'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { Portfolio } from '@/components/portfolio'
import { SocialProofTestimonials } from '@/components/social-proof-testimonials'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { ContactFooter } from '@/components/contact-footer'
import { FloatingActionBar } from '@/components/floating-action-bar'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Categories />
        <MultiStepQuoteForm />
        <BeforeAfterSlider />
        <Portfolio />
        <SocialProofTestimonials />
        <About />
        <Process />
      </main>
      <ContactFooter />
      <FloatingActionBar />
    </>
  )
}
