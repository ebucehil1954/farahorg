import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { Portfolio } from '@/components/portfolio'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { Testimonial } from '@/components/testimonial'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Categories />
        <Portfolio />
        <About />
        <Testimonial />
        <Process />
      </main>
      <ContactFooter />
    </>
  )
}
