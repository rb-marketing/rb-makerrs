
import styles from '@/styles/services.module.scss'
import {
  LineHeading,
  TrustedBrandsSection,
  RollupNumber,
  ServiceHeroSection,
  ExploreMoreSection,
  ServiceCardSection,
  VideoMetaModal,
  PlayCard
} from '@/components/shared'
import { VideoModal } from '@/components/shared'
import { LineArrow } from '@/components/icons'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'

import { similarPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { Accordion } from '@/components/ui'
import { Testimonials, WorkListHeroSection } from '@/components/shared'
import { useState } from 'react'
import { getPlayWorks } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  serviceVideos,
  videosCards
} from '@/content/services'
import statsStyles from '@/styles/sections/StatsSection.module.scss'

const INIT_MODAL = {
  open: false,
  video: null,
  loading: false,
  title: null
}

const VideosServices = () => {
  const _posts = similarPosts.map(postsMapper)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const router = useRouter()
  const [modal, setModal] = useState(INIT_MODAL)

  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  const handleClick = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { type: 'send-us-a-brief' },
      },
      undefined,
      { shallow: true }
    )
  }

  const stats = [
  {
    id: 0,
    countUpProps: {
      value: 60,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <span className="md:max-w-[188px]">
        global <br />
        clients
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 3,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: (
      <>
      videos <br/>produced
      </>
    ),
  },
  {
    id: 2,
    countUpProps: {
      value: 1,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text:
      <>
       global <br />
       filmmakers
      </>,
  },
  {
    id: 3,
    countUpProps: {
      value: 600,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <>
        international <br />
        shoots
      </>
    ),
  },
  ]

  const TNC = [
    {
      key: 0,
      title:
        'What types of videos do you create?',
      content:
        'We offer a wide range of video content services for brand growth. Whether it is commercial videos, social media videos, case study videos, thought leadership videos, product explainer videos, recruitment videos, documentary films of other formats – we create content that connects with your audiences.',
    },
    {
      key: 1,
      title: 'Which industries do you specialise in?',
      content:
        'We’ve worked across technology, F&B, travel, aerospace, manufacturing, engineering, hiring, fashion, hospitality and more. So, we are a bit diverse with our industry focus. Which means, we are great at cross-pollinating our learnings. And we approach every brief with an intent to learn, explore and make something new.',
    },
    {
      key: 2,
      title: 'Which locations can you produce videos in?',
      content:
        'As a global creative agency and collaborative, we can produce films and videos for you across 100 countries. Here’s how we do this: our in-house times strategise, conceptualise, script and storyboard your videos. Our producers match the creative brief to a curated crew in the location we need to film in. We brief, creatively supervise and manage the entire production. The footage comes back to our in-house post production team for the rest of the magic.',
    },
    {
      key: 3,
      title: 'Which platforms do you create videos for?',
      content:
        'As a creative agency and collaborative, we conceptualize and produce videos for digital, offline and events. Our goal is to ensure every piece of content you commission connects with your audience, and drives engagement, no matter where it’s seen - LinkedIn, YouTube, event, website or Whatsapp.',
    },
    {
      key: 4,
      title:
        'Do you create branded content?',
      content: 'Yes, we can strategise and create branded content IPs. This could be specific to one platform or adaptable across platforms. From a limited video series to an ongoing branded IP - we strategise, plan, conceptualise, produce and help amplify branded video content.'
    },
    {
      key: 5,
      title: 'Do you create illustrated and animated content?',
      content: 'Our in-house illustrators, designers and animators collaborate closely with each other – and, sometimes also with specialised collaborators – to craft stunning illustrated and animated videos for your brand.'
    },
    {
      key: 6,
      title: 'How do you handle copyright and ownership of the content?',
      content:
        'With the majority of our work, as per pre-agreed contracts, the copyright for creative assets transfer to the client upon receipt of final payment. In some cases though, the copyright is not assigned or transferred for perpetuity. Examples of short-term rights assignment include custom-composed music, celebrity cast, etc. Rights with these creators and artists are agreed to on a case-to-case basis, and usually are for a year or three to begin with for specific mediums. The client may extend such rights for additional years and mediums via Makerrs, at a future date and at an additional cost.',
    },
    {
      key: 7,
      title: 'What is your video production process? ',
      content: (
        <>
         <p>Over the years, we’ve crafted and shaped thousands of videos. We have a tried-and-tested process that enables our clients to grow their brands and us to keep delivering on-point and on-time. Here’s a look at our cloud-based workflow for on-demand video services. (Note: our process for strategic, long-term video engagements are slightly different to this.)</p>
         <h3 className="mt-4 font-semibold">1. Project Briefing</h3>
         <p>We start by understanding your business objectives, target audience, and key messages. Our Client Servicing team collaborates closely with you to outline project goals, ensuring a clear and actionable direction from the start.</p>

                  <h3 className="mt-4 font-semibold">1. Project Briefing</h3>
         <p>We start by understanding your business objectives, target audience, and key messages. Our Client Servicing team collaborates closely with you to outline project goals, ensuring a clear and actionable direction from the start.</p>


         <h3 className="mt-4 font-semibold">2. Research & Insights</h3>
         <p>Before diving into the creative process, we do our own research and understand the brief as well as the context. This ensures that our solutions align with your business goals and resonate with your target audience.</p>


         <h3 className="mt-4 font-semibold">3. Concepts & Estimates</h3>
         <p>We develop and present a couple of creative concepts and estimate options for your brief, to help you choose the most suitable way forward.</p>


         <h3 className="mt-4 font-semibold">4. Copy & Design</h3>
         <p>Our creative team works on copy and design to bring our unique concept to life. For videos, this includes scripting, visualisation, graphic design, music research, mood boards, location scouting, curated crews, styling and more.</p>

         <h3 className="mt-4 font-semibold">5.  Execution / Production</h3>
         <p>From one-camera testimonial videos at an office to a series of videos produced across 5 countries - we support videos across formats, locations and at any scales. For projects that don’t require a live shoot, we go from design to post production, and deliver the initial draft. We then refine the draft video based on your feedback, delivering a final product that aligns perfectly with the business intent and brand aesthetics.</p>

         <h3 className="mt-4 font-semibold">6.  Video Post-Production & Versioning</h3>
         <p>We manage the entire post production process — from editing, animation, sound design to audio mixing and mastering and colour grading – ensuring quality consistency across all creative assets.
We also handle video versioning supporting custom adaptations requirements so that your content is tailored to engage your audience across mediums.</p>

         <h3 className="mt-4 font-semibold">7.  Asset Delivery</h3>
         <p>All final creative assets are uploaded to our technology platform, ensuring easy access, downloads and repurposing for your brand.</p>

        </>
      ),
    },
    {
      key: 8,
      title:
        'How do you ensure that the videos you create are right for my brand and audience?',
      content: 'We begin our engagement with you by understanding your product/service, brand and audience. Our work begins here. And everything we do for you is influenced by our knowledge of creative innovations happening around us, and industry and audience trends.',
    }
  ]

  const testimonialData = [
    {
      key: 0,
      quote:
        'We are delighted to team up with Makerrs to promote the fight against childhood cancer in Romania! The video showcases the ability of the creatives and product managers at Makerrs to deliver a very compelling case for our innovative work, and to capture the hearts and minds of the audience.',
      name: 'ALINA PATRAHAU',
      designation: 'FOUNDER',
      company: 'DARUIESTE ARIPI',
      image: {
        srcSet:
          `/img/testimonials/alina-patrahau.jpg 533w, /img/testimonials/alina-patrahau.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 1,
      quote:
        'The Makerrs team is fantastic to work with. They add value not just from a creative standpoint but also in terms of communication strategy.',
      name: 'ROSHAN CARIAPPA',
      designation: 'VICE-PRESIDENT MARKETING',
      company: 'VYMO',
      image: {
        srcSet:
          `/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
      quote:
        'We partnered with Makerrs to create internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends, are always experimental and open to feedback. They are amazing to work with!',

      designation: 'VP INTERNAL COMMUNICATIONS',
      company: 'FORTUNE 100 ITES ENTERPRISE',
      image: {
        srcSet:
          `/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 3,
      quote:
        'It’s never easy creating great videos for a fast-growing business like ours. We struggled, till we came across Makerrs.',
      name: 'SUNIL SURESH',
      designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
      company: 'CAPILLARY TECHNOLOGIES',
      image: {
        srcSet:
          `/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    }
  ]

  const explorecards = [
    {
      id: 0,
      serviceTitle: 'GET DESIGN',
      serviceDescription:
        'Get brand identity systems, event branding, editorial design, illustrations, and motion graphics. Build brand differentiation and human connect with Makerrs. Explore our branding and design services.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/brand-design-agency',
    },
    {
      id: 1,
      serviceTitle: 'GET PODCAST',
      serviceDescription:
        'Looking to lead industry conversations, build community and drive ROI? Go from content research, podcast concept and positioning, to podcast branding, production, distribution and amplification with one agency. Make a successful podcast today.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/podcast-production-services',
    },
    {
      id: 2,
      serviceTitle: 'GET CAMPAIGN',
      serviceDescription:
        'From digital campaigns and integrated campaigns, to outdoor and print campaigns – our creative strategy is rooted in a simple yet powerful human insight unique to your brand and product or service. Send us a campaign brief today.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/advertising-agency',
    },
    {
      id: 3,
      serviceTitle: 'BOOK A CREW',
      serviceDescription:
        'Get on-demand professional video crews anywhere in the world. Be it a one-camera shoot or a multi-camera multi-location production–we curate and manage the production, and quality-check the footage for you. Hire a professional video crew today!',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/professional-video-crews',
    },
  ]

  const workData = [
    {
      slug: 'SLB interactive explainers',
      featuredImage: {
        src: '/img/explainer-video/SLB.png',
      },

      title: 'Commercial Video',
      company: {
        name: 'Xiaomi',
      },
      video: {
        workDetails: {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
        },
        content:
          'SLB was digitizing its sales, manufacturing, and product engineering workflows. And this interactive explainer helped their IT team launch and drive adoption across the organisation.',
      },
      popUpTitle:
        'Animated Explainer on Sales Digitization for ~30,000 employees',
      popUpPoints: [
        '01. Data sorting',
        '02. Creative Consulting',
        '03. Concept',
        '04. Script',
        '05. Storyboard',
        '06. Animation',
        '07. Interactivity',
        '08. Hosting',
      ],
      redText: 'Premium Interactive Explainer',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
      ],
    },
    {
      slug: 'Adobe eDam',
      featuredImage: {
        src: '/img/explainer-video/adobe.png',
      },
      title: 'Whiteboard Explainer Video on DAM',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092040991?share=copy',
        },
        content:
          'How do you pitch a great Digital Asset Management to busy marketers? By telling them an engaging persona-driven story (made using custom whiteboard illustration) that hits the mark.',
      },
      popUpTitle: 'Whiteboard Explainer Video on Digital Asset Management',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Illustrations',
        '04. Storyboard',
        '05. Animation',
        '06. Voice over',
        '07. Music & SFX',
        '08. Project Management',
      ],
      redText: 'Premium Whiteboard Animation',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
      ],
    },
    {
      slug: 'Hansel / Superbeard',
      featuredImage: {
        src: '/img/explainer-video/Hansel.png',
      },
      title: 'Live Action Explainer for SAAS product',
      company: {
        name: 'Hansel.io',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/867141400?share=copy',
        },
        content:
          'How we communicated complex information using a simple, human-centric story. Here’s our live action explainer for Hansel - a SAAS product for context aware A/B testing.',
      },
      popUpTitle:
        'Live Action Explainer on user drop-off management product - Hansel',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Custom UI Graphics',
        '04. Fictitious brand ',
        '05. Casting & Styling',
        '06. Production',
        '07. Post Production',
        '08. Versioning',
      ],
      redText: 'Live Action Explainer',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
      ],
    },
    {
      slug: 'DCMO',
      featuredImage: {
        src: '/img/explainer-video/DCMO.png',
      },
      title: 'Animated Explainer for DCMO Services',
      company: {
        name: 'Infosys Equinox',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092042256?share=copy',
        },
        content:
          'An exciting explainer video to help increase awareness for Digital Commerce Marketing Offerings from Infosys Equinox. The target audience: CXOs at E-Commerce businesses.',
      },
      popUpTitle: 'Animated Explainer for Digital Commerce Marketing  Services',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Graphic Design',
        '04. Storyboard',
        '05. Animation',
        '06. Voice Over',
        '07. Music',
        '08. Teaser Video',
      ],

      redText: 'Custom 2D Animation',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
      ],
    },

    {
      slug: 'Wipro Animated Case Study',
      featuredImage: {
        src: '/img/explainer-video/wipro.png',
      },
      title: 'Motion Graphics Case Study for HIMSS',
      company: {
        name: 'Wipro',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092041941?share=copy',
        },
        content:
          'IT giant Wipro had a challenging task for us: 24 case study videos in 90 days. We made them and delivered them on time! Check out one of the sophisticated videos from the project.',
      },
      popUpTitle: 'Motion Graphics Case Study for Wipro’s booth at HIMSS event',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Design & Storyboard',
        '04. Motion Graphics',
        '05. Voice over',
        '06. Music & SFX',
        '07. Project Management',
        '08. Asset Management',
      ],

      redText: 'Sophisticated Motion Graphics',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
      ],
    },
    {
      slug: 'Vymo SMB Explainer',
      featuredImage: {
        src: '/img/explainer-video/vymo_sme.png',
      },
      title: 'Live action explainer with Motion Graphics',
      company: {
        name: 'Vymo',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092039633?share=copy',
        },
        content:
          'When Vymo wanted a great explainer to target North American regional banks - we created a studio-shot live-action film with a fun set, actors and custom motion graphics.',
      },
      popUpTitle: 'Live action explainer with Motion Graphics for SAAS Brand',
      popUpPoints: [
        '01. Concept',
        '02. Script Customisation',
        '03. Graphic design',
        '04. Casting & Styling',
        '05. Set Design',
        '06. Production',
        '07. Editing & Animation',
        '08. Music, SFX & more',
      ],

      redText: 'Studio-Shot Explainer Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
      ],
    },
    {
      slug: 'Collage style explainer - Univ Upskilling (Infosys)',
      featuredImage: {
        src: '/img/explainer-video/ai_first_employees.png',
      },
      title: 'Mixed Media Explainer Video Case Study',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1042874327',
        },
        content:
          'We flipped the script of typical case study videos by placing our client’s employees at the center of the story—giving them the spotlight as enablers of AI-first software solutions.',
      },
      popUpTitle: 'Mixed Media Explainer Video Case Studies for Social Media',
      popUpPoints: [
        '01. Script',
        '02. Graphic design',
        '03. Motion Graphics',
        '04. Voice Over',
        '05. Music & SFX',
        '06. Video Thumbnail',
      ],
      redText: 'Mixed Media Explainer Video Case Study',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
      ],
    },
    {
      slug: 'Introducing Multiplier',
      featuredImage: {
        src: '/img/explainer-video/Multiplier.png',
      },
      title: 'SAAS Marketing Explainer',
      company: {
        name: 'Multiplier',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1030707001',
        },
        content:
          'Multiplier - a SAAS solution that simplifies the complexities of global employee onboarding - needed a video for its global launch. Here’s the on-brand custom 2D explainer we created.',
      },
      popUpTitle: 'SAAS Marketing Explainer for Multiplier',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Graphic Design',
        '04. Stock image curation',
        '05. Storyboard',
        '06. Animation',
        '07. Voice Over',
        '08. Music',
      ],

      redText: 'SAAS Marketing Explainer',
      relatedVideos: [
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
      ],
    },
  ]

  const gridData = [
    {
      icon: '/img/services/videos/grid-icon1.svg',
      need: 'Strategic Video Solutions',
      others: 'Creative video solutions',
      redBangle: 'Video strategy, SEO and more',
    },
    {
      icon: '/img/services/videos/grid-icon2.svg',
      need: 'End to end services',
      others: 'Limited services',
      redBangle: 'Research, concept, production, post production & versioning!',
    },
    {
      icon: '/img/services/videos/grid-icon3.svg',
      need: 'Video Quality',
      others: 'Hit or miss',
      redBangle: 'Consistent, premium quality',
    },
    {
      icon: '/img/services/videos/grid-icon4.svg',
      need: 'Industry Knowledge',
      others: 'Limited industry exposure',
      redBangle: 'We research, immerse and then craft',
    },
    {
      icon: '/img/services/videos/grid-icon5.svg',
      need: 'Video Genres',
      others: 'Limited genres',
      redBangle: 'Any genre video',
    },
    {
      icon: '/img/services/videos/grid-icon6.svg',
      need: 'Video Formats',
      others: 'Limited formats',
      redBangle: 'Unlimited formats',
    },
    {
      icon: '/img/services/videos/grid-icon7.svg',
      need: 'Video Feedback',
      others: 'Emails back and forth',
      redBangle: 'Easy, cloud-based interactive reviews',
    },
    {
      icon: '/img/services/videos/grid-icon8.svg',
      need: 'Turnaround Times',
      others: 'They work at their speed',
      redBangle: 'We work at your need',
    },
    {
      icon: '/img/services/videos/grid-icon9.svg',
      need: 'Deadlines',
      others: 'You follow up with them',
      redBangle: 'We proactively plan, follow up',
    },
    {
      icon: '/img/services/videos/grid-icon10.svg',
      need: 'Versioning',
      others: 'Limited Versioning Support',
      redBangle: 'Scalable Versioning Services',
    },
    {
      icon: '/img/services/videos/grid-icon11.svg',
      need: 'Language Adapts',
      others: 'Mostly English only',
      redBangle: 'Any language Adapt',
    },
     {
      icon: '/img/services/videos/grid-icon12.svg',
      need: 'Project Management',
      others: 'Emails, spreadsheets',
      redBangle: 'Cloud-based workflows',
    },
  ]

  const handleRelatedVideoClick = (videolink) => {
    const clickedVideoData = workData.find(
      (item) => item.video.workDetails.videolink === videolink
    )

    if (clickedVideoData) {
      setModal({
        open: true,
        loading: false,
        video: clickedVideoData.video,
        title: clickedVideoData.popUpTitle,
        points: clickedVideoData.popUpPoints,
        redText: clickedVideoData.redText,
        relatedVideos: clickedVideoData.relatedVideos,
      })
    }
  }

  useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current) {
      const swiperInstance = document.querySelector('.servicesSlider')?.swiper

      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevButtonRef.current
        swiperInstance.params.navigation.nextEl = nextButtonRef.current
        swiperInstance.navigation.init()
        swiperInstance.navigation.update()
      }
    }
  }, [])

  return (
    <>
      <SEO
        title="Video Production Company for Brands | Makerrs"
        description="Video production services for borderless brands. Get commercial video production, corporate video production, non profit videos and more in 100 countries."
        keywords="content creation, Event Photographer, Professional Photographers, Photographers, Photography Director, Video Director, Action Camera, Drone With Camera, Photography Crew, Video Crew, Company Headshots, Hire Drone Videographer, Event Photographer, Commercial Photographer, Corporate Professional Headshots, Professional Photo Shoot, Video Film Company, Videographer For Rent, Video Shoot, Cinematographer, Videography, Real Estate Photography, Product Photography, Aerial Photography, Professional Photographer, Headshot Photography, Drone Photography, Business Headshots, Local Photographers, Best Drone Photography, Corporate Videographer, Hire A Photographer, Jewelry Photography, Best Photographer For Wedding, Camera Crew, Digital Filmmaking, Drone Photo, Commercial Headshot, Contemporary Corporate Headshots, video production services, video production company, professional video crews for hire, video crew agency, video crew, video production team"
        url="https://www.b2b.redbangle.com/b2b-international-video-crew-agency"
      />


      <ServiceHeroSection
        className=""
        type="GET VIDEO"
        video={serviceVideos.get_videos.video}
        fullVideo={serviceVideos.get_videos.fullVideo}
        ctaText="Video with us"
        ctaLink="/contact"
        textColor='#000000'
        content={
          <>
            <h1 className="inline">Be it your next big product launch video or YouTube channel growth, be it on-demand video production or a branded video series - we strategise, script and produce videos across formats, genres and locations. On-brand and on-time, <br />every time.</h1>
          </>
        }
      />


     <section className={`bg-white overflow-hidden pb-7.5 md:pb-15 pt-15 md:pt-30 `}> 
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">Why Makerrs</LineHeading>
          <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none ml-5 transform -translate-x-5 sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-12">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statsStyles.statline}`}
                key={s.id}
              >
                <div className={`${i == 2 && 'lg:ml-[20%]'} ${s.id === 3 ? 'ipad-mini-ml':''}`}>
                  <div className='lg:w-fit lg:mx-auto'>
                    <div className={`${s.id === 1 ? '!-ml-[4px] md:!-ml-[8px]':''} ${s.id === 0 ? '!-ml-[4px] md:!-ml-[7px]':''} ${s.id === 2 ? '!-ml-[2px] md:!-ml-[3px]':''} ${s.id === 3 ? '!-ml-[3px] md:!-ml-[5px]':''}`}>
                        <RollupNumber {...s.countUpProps} />
                      </div>
                    <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett">
                      {s.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>

    <ServiceCardSection
        tag="How we work"
        title={
          <div className="md:max-w-[620px]">
            Our Scalable Video Content Services
          </div>
        }
        iconClassName="w-15 h-15"
        cards={videosCards}
      />

      <section className={`overflow-hidden pb-18 pt-18 md:pb-18`}>
        <div className="container">
          <LineHeading className="mb-6 md:mb-9"> Get great videos</LineHeading>
          <h3 className="text-title md:text-title-md mb-12 md:mb-14 font-everett max-w-[911px]">
            Explore Our Video Portfolio
          </h3>
          <div className="grid gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-10">
            {workData.slice(0, 8).map((v) => (
              <PlayCard
                onClick={() => {
                  setModal({
                    open: true,
                    loading: false,
                    video: v.video,
                    title: v.popUpTitle,
                    points: v.popUpPoints,
                    redText: v.redText,
                    relatedVideos: v.relatedVideos,
                  })
                }}
                src={v?.featuredImage?.src}
                name={v?.title}
                company={v?.company?.name}
                key={v.slug}
              />
            ))}
          </div>

          <VideoMetaModal
            showContent={true}
            loading={modal.loading}
            open={modal.open}
            video={modal.video}
            title={modal.title}
            points={modal.points}
            redText={modal.redText}
            relatedVideos={modal.relatedVideos}
            setOpen={(v) => {
              setModal((m) => ({ ...m, open: v }))
            }}
            onRelatedVideoClick={handleRelatedVideoClick}
          />
        </div>
      </section>

      <section className={`overflow-hidden bg-white py-18 md:py-30`}>
        <div className="container text-center">
          <h3 className="text-title md:text-title-md mb-8 md:mb-14 font-everett">
            Why choose Makerrs <br /> over other agencies?
          </h3>
          <div className="w-full overflow-x-auto md:p-0">
            <div className="max-w-full">
              <table className="w-full max-w-full md:w-[940px] mx-auto text-sm border-collapse border-spacing-0 text-left font-everett leading-[24px]">
                <thead>
                  <tr className="h-[50px] border-b border-[#D4D4D4]">
                    <th className="md:!w-[313px] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-[#030104] md:whitespace-nowrap text-left">
                      What You Need
                    </th>
                    <th className="md:!w-[313px] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-[#030104] md:whitespace-nowrap text-left">
                      What Others Offer
                    </th>
                    <th className="md:!w-[313px] max-w-[30%] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-rb-link-green md:whitespace-nowrap text-left">
                      What you get with us
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gridData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="odd:bg-[#F1F1F1] border-t border-[#eee]"
                    >
                      <td className="md:!w-[313px] px-4 py-3 font-medium md:text-[18px] tracking-[-0.32px] font-everett text-[#030104]">
                        <div className="flex items-center">
                          <img
                            src={row.icon}
                            alt=""
                            className="w-5 h-5 mr-5 hidden md:inline"
                          />
                          <span>{row.need}</span>
                        </div>
                      </td>
                      <td className="md:!w-[313px] px-4 py-3 font-normal md:text-[18px] leading-[24px] text-rb-dune tracking-[-0.02em] font-opensans">
                        {row.others}
                      </td>
                      <td className="md:!w-[313px] px-4 py-3 font-semibold md:text-[18px] leading-[24px] tracking-[-0.02em] text-rb-dune/90 font-opensans">
                        {row.redBangle}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rb-service-grey md:py-30 py-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-center md:flex-row flex-col gap-8 md:gap-0">
            <div className="w-full md:w-2/5 px-4">
              <h2 className="text-title md:text-title-md mb-4 font-medium font-everett">
                Video production across 100+ Countries
              </h2>
              <p>
                From London to Tokyo, from San Francisco to Bangalore - we offer end to end video production services across locations. Just send us a brief, and we'll take care of the concepts, scripts, design, production, post production and more. On time, every time. No matter how many videos.
              </p>
              <div className="md:mt-10 mt-6">
                <Button
                  onClick={handleClick}
                  className="font-bold  w-full md:w-auto !inline-flex"
                  suffix={<LineArrow hover />}
                >
                  Make a video
                </Button>
              </div>
            </div>
            <div className="w-full md:w-3/5 px-4">
              <video
                src="/img/services/crew/worldmap.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        title={'WHAT CLIENTS SAY'}
        className="pt-18 pb-7.5 md:pt-30 md:pb-15"
        testimonialData={testimonialData}
        type="semi"
      />

      <TrustedBrandsSection className="bg-white py-7.5 md:py-15" />

      <ExploreMoreSection
        type="think"
        className="pt-7.5 md:pt-15 pb-15 md:pb-30"
        cards={explorecards}
      />

      <section className="md:pt-12 pt-6 md:pb-24 pb-12">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <Accordion
                data={TNC?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="891125698"
      >
        <div className="relative max-w-[90%] md:max-w-[80%] w-full">
          {/* <iframe
            src="https://player.vimeo.com/video/891125698?h=1383313c75&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/crews_page_banner_video.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video>
        </div>
      </VideoModal>
      {/* <Script id="schema" type="application/ld+json">
        {JSON.stringify(brandCrewsSchema)}
      </Script> */}
    </>
  )
}
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)

  return {
    props: {
      works
    },
  }
}
export default VideosServices
