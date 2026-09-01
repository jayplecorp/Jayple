import type { Metadata } from 'next'
import Link from 'next/link'
import CorporateHero from '@/components/homepage/CorporateHero'
import CompanyIntro from '@/components/homepage/CompanyIntro'
import EcosystemOverview from '@/components/homepage/EcosystemOverview'
import PeoplePreview from '@/components/homepage/PeoplePreview'
import HomepageConnect from '@/components/homepage/HomepageConnect'
import MobileAppEntryWrapper from '@/components/MobileAppEntryWrapper'
import { companyData, teamData } from '@/lib/companyData'

export const metadata: Metadata = {
  title: 'Jayple | Building a Smarter Salon Discovery & Booking Ecosystem',
  description:
    'Jayple Private Limited is a technology-driven company building digital experiences for salon discovery, appointment booking, and salon business participation, currently live in Trichy.',
  alternates: {
    canonical: 'https://jayple.in/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Mobile visitors see the mobile app entry overlay */}
      <MobileAppEntryWrapper />

      {/* 01 — CORPORATE HERO */}
      <CorporateHero />

      {/* 02 — COMPANY INTRODUCTION / WHO JAYPLE IS */}
      <CompanyIntro />

      {/* 03 — THE PROBLEM THAT STARTED JAYPLE */}
      <section
        className="py-20 lg:py-28 bg-white border-b border-surface-border"
        aria-labelledby="origin-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Column: Origin Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft block">
                Our Origin Story
              </span>

              <h2
                id="origin-heading"
                className="font-display font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] text-navy leading-tight tracking-tight"
              >
                Built from a problem we experienced ourselves.
              </h2>

              <div className="text-base sm:text-lg text-text-soft leading-relaxed space-y-4">
                <p>
                  During college, founders{' '}
                  {teamData.founders.find(
                    (m) => m.role === 'Founder'
                  )?.name}{' '}
                  and{' '}
                  {teamData.founders.find(
                    (m) => m.role === 'Co-Founder'
                  )?.name}{' '}
                  experienced and observed the everyday friction around salon
                  visits.
                </p>

                <p>
                  Understanding service catalogs, comparing stylist pricing,
                  discovering suitable salons, and managing time slots
                  manually was time-consuming and inefficient.
                </p>

                <p>
                  Today, as final-year college students, they continue
                  building and shaping a two-sided digital platform that
                  solves this real-world problem from Trichy, Tamil Nadu.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-mid transition-all shadow-md"
                >
                  Read the Jayple story
                </Link>
              </div>
            </div>

            {/* Right Column: Question Callout block */}
            <div className="lg:col-span-5 bg-surface-off border border-surface-border rounded-2xl p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-5"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'radial-gradient(circle 200px at 100% 0%, var(--accent) 0%, transparent 60%)',
                }}
              />

              <span className="text-lime-dark text-lg font-bold font-display uppercase tracking-widest block mb-4">
                The Question
              </span>

              <blockquote className="font-display text-[20px] sm:text-[24px] font-semibold text-navy leading-snug tracking-tight">
                &ldquo;Can technology make the salon discovery and booking
                experience easier?&rdquo;
              </blockquote>

              <div className="mt-8 pt-6 border-t border-surface-border text-xs text-text-muted">
                Shaping the foundation of Jayple Private Limited since day one.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04 — ONE ECOSYSTEM, TWO SIDES */}
      <EcosystemOverview />

      {/* 05 — CURRENT PROGRESS / JAYPLE TODAY */}
      <section
        className="py-16 bg-navy text-white border-y border-white/05 relative overflow-hidden"
        aria-label="Ecosystem metrics"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">

            {/* Partners */}
            <div className="bg-navy-deep py-8 px-6 text-center">
              <span className="font-display font-extrabold text-[40px] sm:text-[48px] text-lime leading-none block">
                {companyData.stats.salonPartners}
              </span>

              <span className="text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider block mt-2">
                Salon Partners Onboarded
              </span>
            </div>

            {/* Services */}
            <div className="bg-navy-deep py-8 px-6 text-center">
              <span className="font-display font-extrabold text-[40px] sm:text-[48px] text-white leading-none block">
                {companyData.stats.servicesAvailable}
              </span>

              <span className="text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider block mt-2">
                Salon Services Offered
              </span>
            </div>

            {/* Live City */}
            <div className="bg-navy-deep py-8 px-6 text-center">
              <span className="font-display font-extrabold text-[40px] sm:text-[48px] text-lime leading-none block">
                {companyData.liveCity}
              </span>

              <span className="text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider block mt-2">
                Current Operating City
              </span>
            </div>

            {/* Launch Date */}
            <div className="bg-navy-deep py-8 px-6 text-center">
              <span className="font-display font-extrabold text-[40px] sm:text-[48px] text-white leading-none block">
                06 July
              </span>

              <span className="text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider block mt-2">
                Brand Launch Date (2026)
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 06 — PEOPLE BEHIND JAYPLE */}
      <PeoplePreview />

      {/* 07 — JAYPLE PLATFORMS / APP ACCESS */}
      <HomepageConnect />
    </>
  )
}