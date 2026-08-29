'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'
import { teamData } from '@/lib/companyData'

export default function ExecutiveAndTeam() {
  const cto = teamData.leadership.find(m => m.role.includes('Technology')) || {
    name: 'Janarthanan A',
    role: 'Chief Technology Officer (CTO)',
    bio: "Leading Jayple's technology direction and helping shape the systems and products behind the platform.",
    photo: '/images/team/janarthanan.webp',
    initials: 'JA',
    linkedin: 'https://www.linkedin.com/in/janarthanan-a-3552b22a3?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  }

  const cfo = teamData.leadership.find(m => m.role.includes('Finance')) || {
    name: 'Dharsan Thangarasu',
    role: 'Chief Finance Officer (CFO)',
    bio: "Supporting Jayple's financial direction and helping the company build towards responsible and sustainable growth.",
    photo: '/images/team/dharsan.webp',
    initials: 'DT',
    linkedin: 'https://www.linkedin.com/in/dharsan-thangarasu-3162b32a3?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  }

  const hr = teamData.leadership.find(m => m.role.includes('HR')) || {
    name: 'Vidyasri R',
    role: 'HR and Customer Support Head',
    bio: "Directing human resources, customer support operations, and nurturing Jayple's workplace culture and partner experience.",
    photo: '/images/team/vidyasri.webp',
    initials: 'VR',
    linkedin: 'https://www.linkedin.com/in/vidyasriravikumar06?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  }

  const marketingHead = teamData.leadership.find(m => m.role.includes('Marketing')) || {
    name: 'Gouthem R S',
    role: 'Marketing Head',
    bio: "Helping Jayple communicate, connect, and build meaningful audience relationships.",
    photo: '/images/team/gouthem.webp',
    initials: 'GS'
  }

  // Get active department groups, filtering out founders and CTO/CFO from the general list
  const softwareDev = teamData.engineering || []
  const marketingCreative = teamData.marketing || []
  const partnerSuccess = teamData.partnerSuccess || []
  
  // Find telecalling members (e.g. Vidyasri R is in leadership array in companyData with 'Telecalling' role)
  const telecalling = teamData.leadership.filter(m => m.role.includes('Telecalling')) || []

  const departments = [
    {
      id: 'software',
      name: 'Software Development',
      description: 'Developing and scaling the digital product platforms, merchant integrations, and underlying backend services.',
      members: softwareDev,
    },
    {
      id: 'marketing',
      name: 'Marketing & Creative',
      description: 'Coordinating local brand communication campaigns, videography/photography assets, and merchant success promotion.',
      members: marketingCreative,
    },
    {
      id: 'success',
      name: 'Partner Success',
      description: 'Engaging, validating, and onboarding salon businesses into the ecosystem, supporting regional salon growth.',
      members: partnerSuccess,
    },
    {
      id: 'telecalling',
      name: 'Telecalling',
      description: 'Managing merchant outreach, inbound partner communications, and support coordination across local markets.',
      members: telecalling,
    },
  ].filter(d => d.members.length > 0)

  return (
    <>
      {/* 07, 08, 09 — Executive Leadership */}
      <section className="section-padding bg-surface-off border-t border-surface-border text-text" aria-labelledby="exec-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Executive Leadership Header */}
          <div className="max-w-3xl mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Executive Leadership
              </span>
              <h2 id="exec-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
                Leadership across technology, finance, human resources, and marketing.
              </h2>
              <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                As Jayple develops, operational responsibilities are coordinated through dedicated functions. Technology design, financial modeling, and people operations are directed by officers and leads focused on building scalable, responsible company foundations.
              </p>
            </motion.div>
          </div>

          {/* Executive Leadership Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            
            {/* CTO Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col items-start group"
            >
              {/* Photo or Premium Initials Avatar Fallback */}
              {cto.photo ? (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0">
                  <Image
                    src={cto.photo}
                    alt={`${cto.name}`}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-mid border border-surface-border flex items-center justify-center mb-6 shrink-0">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime select-none">
                    {cto.initials}
                  </span>
                </div>
              )}
              <span className="text-[10px] font-bold text-lime-dark uppercase tracking-widest block mb-1">
                Chief Technology Officer · CTO
              </span>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {cto.name}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1 mb-6">
                {cto.bio}
              </p>
              {cto.linkedin && (
                <a
                  href={cto.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-surface-border bg-white rounded-xl text-xs font-semibold text-navy hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-surface-off shadow-sm hover:shadow transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  View LinkedIn
                </a>
              )}
            </motion.div>

            {/* CFO Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col items-start group"
            >
              {/* Photo or Premium Initials Avatar Fallback */}
              {cfo.photo ? (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0">
                  <Image
                    src={cfo.photo}
                    alt={`${cfo.name}`}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-mid border border-surface-border flex items-center justify-center mb-6 shrink-0">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime select-none">
                    {cfo.initials}
                  </span>
                </div>
              )}
              <span className="text-[10px] font-bold text-lime-dark uppercase tracking-widest block mb-1">
                Chief Finance Officer · CFO
              </span>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {cfo.name}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1 mb-6">
                {cfo.bio}
              </p>
              {cfo.linkedin && (
                <a
                  href={cfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-surface-border bg-white rounded-xl text-xs font-semibold text-navy hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-surface-off shadow-sm hover:shadow transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  View LinkedIn
                </a>
              )}
            </motion.div>

            {/* HR Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col items-start group"
            >
              {/* Photo or Premium Initials Avatar Fallback */}
              {hr.photo ? (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0">
                  <Image
                    src={hr.photo}
                    alt={`${hr.name}`}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-mid border border-surface-border flex items-center justify-center mb-6 shrink-0">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime select-none">
                    {hr.initials}
                  </span>
                </div>
              )}
              <span className="text-[10px] font-bold text-lime-dark uppercase tracking-widest block mb-1">
                HR & Customer Support Head
              </span>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {hr.name}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1 mb-6">
                {hr.bio}
              </p>
              {hr.linkedin && (
                <a
                  href={hr.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-surface-border bg-white rounded-xl text-xs font-semibold text-navy hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-surface-off shadow-sm hover:shadow transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  View LinkedIn
                </a>
              )}
            </motion.div>

            {/* Marketing Head Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.35 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col items-start group"
            >
              {/* Photo or Premium Initials Avatar Fallback */}
              {marketingHead.photo ? (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0">
                  <Image
                    src={marketingHead.photo}
                    alt={`${marketingHead.name}`}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-mid border border-surface-border flex items-center justify-center mb-6 shrink-0">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime select-none">
                    {marketingHead.initials}
                  </span>
                </div>
              )}
              <span className="text-[10px] font-bold text-lime-dark uppercase tracking-widest block mb-1">
                Marketing Head
              </span>
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {marketingHead.name}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1 mb-6">
                {marketingHead.bio}
              </p>
              {marketingHead.linkedin && (
                <a
                  href={marketingHead.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-surface-border bg-white rounded-xl text-xs font-semibold text-navy hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-surface-off shadow-sm hover:shadow transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  View LinkedIn
                </a>
              )}
            </motion.div>

          </div>

        </div>
      </section>

      {/* 10, 11, 12 — Current Team By Verified Work Area */}
      <section className="section-padding bg-white border-t border-surface-border text-text" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Team Header */}
          <div className="max-w-3xl mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                The Current Team
              </span>
              <h2 id="team-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
                Operational focus and core responsibilities.
              </h2>
              <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                Beyond central leadership, the daily development of Jayple is carried forward by team members structured around key work areas. Our teams collaborate closely to build services, connect with merchants, and coordinate active operations.
              </p>
            </motion.div>
          </div>

          {/* Department Loop */}
          <div className="space-y-16">
            {departments.map((dept, deptIdx) => (
              <div key={dept.id} className="border-t border-surface-border pt-12 first:border-0 first:pt-0">
                <div className="space-y-8">
                  
                  {/* Department Info */}
                  <div className="max-w-3xl">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={fadeUp}
                      transition={TRANSITION_DEFAULT}
                    >
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-navy">
                        {dept.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-soft mt-2 leading-relaxed">
                        {dept.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Department Grid of Members */}
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  >
                    {dept.members.map((member, memberIdx) => {
                      // Derive initials correctly from public name
                      const derivedInitials = member.initials || member.name.split(' ').map(n => n[0]).join('')
                      
                      return (
                        <motion.li
                          key={member.name}
                          variants={fadeUp}
                          transition={TRANSITION_DEFAULT}
                          className="bg-surface-off border border-surface-border rounded-2xl p-5 flex flex-col items-center text-center hover:border-lime/40 transition-colors group relative"
                        >
                          {/* Photo or Initials Fallback Avatar */}
                          {member.photo ? (
                            <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-4 bg-surface-warm border border-surface-border shrink-0 mx-auto">
                              <Image
                                src={member.photo}
                                alt={member.name}
                                fill
                                sizes="(max-width: 640px) 100vw, 200px"
                                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${member.name.includes('Kishore') ? 'object-[50%_20%]' : 'object-center'}`}
                              />
                            </div>
                          ) : (
                            <div className="relative w-3/4 aspect-square rounded-xl bg-navy/5 border border-surface-border flex items-center justify-center font-display font-extrabold text-3xl text-navy shrink-0 mb-4 mx-auto select-none">
                              {derivedInitials}
                            </div>
                          )}
                          <div className="min-w-0 flex flex-col items-center">
                            <h4 className="font-bold text-[15px] sm:text-[16px] text-navy">
                              {member.name}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-text-soft mt-1">
                              {member.role}
                            </p>
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-semibold text-navy hover:text-[#0077b5] transition-colors border border-surface-border bg-white px-2.5 py-1 rounded-md shadow-sm hover:shadow"
                              >
                                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </motion.li>
                      )
                    })}
                  </motion.ul>

                </div>
              </div>
            ))}
          </div>

          {/* 13 — Team-to-Working-Philosophy Transition */}
          <div className="border-t border-surface-border pt-16 mt-20 lg:mt-28">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  transition={TRANSITION_DEFAULT}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                    Working Philosophy
                  </span>
                  <h3 className="font-display font-extrabold text-[24px] sm:text-[30px] text-navy leading-tight tracking-tight">
                    Different responsibilities come together through shared work.
                  </h3>
                </motion.div>
              </div>
              
              <div className="lg:col-span-7">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
                >
                  <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                    The structure of our team details who holds specific responsibilities. The way we execute tasks together describes how we continue developing our platform. In the next chapter, we share the core principles that shape our daily working culture and how we build.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
