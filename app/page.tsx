import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { LeadMagnetModal } from '@/components/lead-magnet-modal'
import { Categories } from '@/components/categories'
import { BudgetCalculator } from '@/components/budget-calculator'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { MultiStepQuoteForm } from '@/components/multi-step-quote-form'
import { Portfolio } from '@/components/portfolio'
import { FilterableCatalog } from '@/components/filterable-catalog'
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
        <LeadMagnetModal />
        <Categories />
        <BudgetCalculator />
        <BeforeAfterSlider />
        <MultiStepQuoteForm />
        <Portfolio />
        <FilterableCatalog />
        <SocialProofTestimonials />
        <About />
        <Process />
      </main>
      <ContactFooter />
      <FloatingActionBar />
    </>
  )
}
