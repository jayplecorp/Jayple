export const companyData = {
  name: 'Jayple Private Limited',
  brandName: 'Jayple',
  launchDate: '06 July 2026',
  foundingYear: '2026',
  operatingMarket: 'Trichy, Tamil Nadu, India',
  liveCity: 'Trichy',
  paymentProcessor: 'Razorpay',

  // Verified Stats
  stats: {
    salonPartners: '25+',
    servicesAvailable: '1,500+',
    avgRating: '4.9★', // Keep if needed, but note Module 0 flags this as unverified
  },

  // App Links
  apps: {
    customer: {
      android: 'https://play.google.com/store/apps/details?id=com.jayple.app',
      ios: 'https://apps.apple.com/in/app/jayple/id6779542812',
    },
    partner: {
      android: 'https://play.google.com/store/apps/details?id=com.jayple.vendor',
      ios: 'https://apps.apple.com/in/app/jayple-partner/id6779543060',
    },
  },

  // Social Links
  socials: {
    instagram: 'https://www.instagram.com/jayple.in/',
  },

  // Internship application form
  internshipFormUrl: 'https://forms.gle/SekG7jywvxUsfwgF7',

  // Corporate Info - updated from owner-confirmed data
  cin: '',
  incorporationDate: '',
  registeredOffice: '6/18, Pandamangalam, Woraiyur, Trichy',
  operatingOffice: 'Operating Office: Trichy, Tamil Nadu, India',
  officialEmail: 'support.jayple@gmail.com',
  businessEmail: 'jayple.appointments@gmail.com',
  officialPhone: '+91 9080971093',
  grievanceOfficerName: 'Jayaprakash',
  grievanceOfficerDesignation: 'Founder & Grievance Officer',
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string | null
  initials: string
  linkedin?: string
}

export const teamData: {
  founders: TeamMember[]
  leadership: TeamMember[]
  engineering: TeamMember[]
  marketing: TeamMember[]
  partnerSuccess: TeamMember[]
} = {
  founders: [
    {
      name: 'Jayaprakash Thangavel',
      role: 'Founder & CEO',
      bio: "Leading Jayple's vision and shaping ideas into meaningful digital experiences.",
      photo: '/images/team/jayaprakash.webp',
      initials: 'JP',
      linkedin: 'https://www.linkedin.com/in/jayaprakashthangavel?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Allwin E',
      role: 'Co-Founder & COO',
      bio: "Supporting Jayple's direction through collaboration, strategy, and a shared vision for growth.",
      photo: '/images/team/allwin.webp',
      initials: 'AW',
      linkedin: 'https://www.linkedin.com/in/allwinedwin?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  ],
  leadership: [
    {
      name: 'Janarthanan A',
      role: 'Chief Technology Officer (CTO)',
      bio: "Leading Jayple's technology direction and helping shape the systems and products behind the platform.",
      photo: '/images/team/janarthanan.webp',
      initials: 'JA',
      linkedin: 'https://www.linkedin.com/in/janarthanan-a-3552b22a3?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Dharsan Thangarasu',
      role: 'Chief Finance Officer (CFO)',
      bio: "Supporting Jayple's financial direction and helping the company build towards responsible and sustainable growth.",
      photo: '/images/team/dharsan.webp',
      initials: 'DT',
      linkedin: 'https://www.linkedin.com/in/dharsan-thangarasu-3162b32a3?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Vidyasri R',
      role: 'HR and Customer Support Head',
      bio: "Directing human resources, customer support operations, and nurturing Jayple's workplace culture and partner experience.",
      photo: '/images/team/vidyasri.webp',
      initials: 'VR',
      linkedin: 'https://www.linkedin.com/in/vidyasriravikumar06?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Gouthem R S',
      role: 'Marketing Head',
      bio: "Helping Jayple communicate, connect, and build meaningful audience relationships.",
      photo: '/images/team/gouthem.webp',
      initials: 'GS',
      linkedin: 'https://www.linkedin.com/in/rs-gouthem-a683422a4?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  ],
  engineering: [
    {
      name: 'John Adan J R',
      role: 'Software Developer',
      bio: "Building and improving digital experiences across Jayple's technology platforms.",
      photo: '/images/team/john adan.webp',
      initials: 'JR',
      linkedin: 'https://www.linkedin.com/in/johnadan25?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Abivarthan A',
      role: 'Software Developer',
      bio: "Turning requirements and ideas into functional solutions for the Jayple ecosystem.",
      photo: '/images/team/abivarthan.webp',
      initials: 'AA',
      linkedin: 'https://www.linkedin.com/in/abivarthan-a-8503422a4?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Abdul Ajees M',
      role: 'Software Developer',
      bio: "Developing and improving the technology behind Jayple's digital products.",
      photo: '/images/team/abdul ajees.webp',
      initials: 'AM',
      linkedin: 'https://www.linkedin.com/in/abdul-ajees-m?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Ashwin S',
      role: 'Software Developer',
      bio: "Contributing to the development and continuous improvement of Jayple's technology platforms.",
      photo: '/images/team/ashwin.webp',
      initials: 'AS',
      linkedin: 'https://www.linkedin.com/in/ashwin-s-4759942a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    },
  ],
  marketing: [
    {
      name: 'Karuppasami S',
      role: 'Marketing Team',
      bio: "Contributing creative and market-focused ideas to strengthen Jayple's presence.",
      photo: '/images/team/karuppasami.webp',
      initials: 'KS',
      linkedin: 'https://www.linkedin.com/in/karuppasami-s-9963412a4?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  ],
  partnerSuccess: [
    {
      name: 'Sanjai S',
      role: 'Partner Success',
      bio: "Connecting with salon businesses and supporting valuable partnerships within the Jayple network.",
      photo: '/images/team/sanjai.webp',
      initials: 'SS',
      linkedin: 'https://www.linkedin.com/in/sanjai252289?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Kishore Kannan B',
      role: 'Partner Success',
      bio: "Supporting salon partners and helping build strong relationships across the Jayple ecosystem.",
      photo: '/images/team/kishore kannan.webp',
      initials: 'KK',
      linkedin: 'https://www.linkedin.com/in/kishorekannanb?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  ],
}

export interface NavigationLink {
  label: string
  href: string
  description?: string
}

export interface NavigationGroup {
  label: string
  items: NavigationLink[]
}

export const navigationData: NavigationGroup[] = [
  {
    label: 'Company',
    items: [
      { label: 'About Jayple', href: '/about', description: 'The story, purpose, and journey behind Jayple.' },
      { label: 'Leadership & Team', href: '/team', description: 'Meet the founders, leadership, and people building Jayple.' },
      { label: 'Company Information', href: '/company', description: 'Access official company identity and corporate information.' },
    ],
  },
  {
    label: 'Platform',
    items: [
      { label: 'For Customers', href: '/customer', description: 'Understand the Jayple customer experience.' },
      { label: 'For Salon Partners', href: '/partner', description: 'Understand the salon partner ecosystem and how businesses grow.' },
      { label: 'How Jayple Works', href: '/how-it-works', description: 'Understand the digital salon discovery and booking journey.' },
    ],
  },
  {
    label: 'Careers',
    items: [
      { label: 'Careers at Jayple', href: '/careers', description: "Understand Jayple's work culture and opportunities." },
      { label: 'Internships', href: '/internships', description: 'Explore current remote project-based internship opportunities.' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Journal', href: '/blog', description: 'Insights, guides, and updates from the Jayple team.' },
      { label: 'Security & Trust', href: '/security-trust', description: "Understand Jayple's approach to platform trust." },
      { label: 'Press & Media', href: '/press-media', description: 'Access official company news and media resources.' },
      { label: 'Contact', href: '/contact', description: 'Clear contact paths for customers, businesses, and queries.' },
    ],
  },
]

export const footerLegalLinks: NavigationLink[] = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cancellation & Refund', href: '/refund-policy' },
  { label: 'Payment Policy', href: '/payment-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Vendor Terms & Conditions', href: '/vendor-terms' },
  { label: 'Vendor Privacy Policy', href: '/vendor-privacy' },
  { label: 'Partner Policy', href: '/vendor-policy' },
]

/** Helper function to verify if a placeholder value is verified/supplied */
export function isVerifiedValue(value: string | undefined): boolean {
  if (!value) return false
  return !value.startsWith('[') && value.trim().length > 0
}
