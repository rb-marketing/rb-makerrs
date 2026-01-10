import { aboutSchema } from '@/components/schema/about-schema'
import {
  LineHeading,
  TrustedBrandsSection,
  VideoModal,
  ExploreMoreSection,
  Testimonials
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import Script from 'next/script'
import { useEffect, useState, useRef } from 'react'
import styles from '@/styles/home.module.scss'
import { gsap } from 'gsap'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useLenis } from '@studio-freight/react-lenis'
import Link from 'next/link'
import React from 'react'


const WhoWeAre = () => {

  const heroSection = useRef()
  const containerRef = useRef()
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const insetRef = useRef()
  useEffect(() => {
    const mm = gsap.matchMedia()
    const resize = () => {
      gsap.matchMediaRefresh()
    }
    window.addEventListener('resize', resize)

    let singleLetterTimeline = gsap.timeline({
      ease: 'power2.out',
      repeat: -1,
    })

    singleLetterTimeline
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
          delay: 2,
        }
      )

      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 100,
        },
        '+=1'
      )
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
        },
        '+=2'
      )

    const letterTimeline = gsap.timeline()
    letterTimeline.to(
      `.${styles.rtol}, .${styles.ltor}`,
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.256,
        },
      },
      0
    )
    return () => {
      window.removeEventListener('resize', resize)
      letterTimeline.kill()
      mm.kill()
    }
  }, [])
  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }
  useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current) {
      const swiperInstance = document.querySelector(
        '.aboutServicesSlider'
      )?.swiper

      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevButtonRef.current
        swiperInstance.params.navigation.nextEl = nextButtonRef.current
        swiperInstance.navigation.init()
        swiperInstance.navigation.update()
      }
    }
  }, [])

  const lenis = useLenis()
  const [bioModal, setBioModal] = useState({
    open: false,
    data: null,
  })
  useEffect(() => {
    if (bioModal.open) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [bioModal.open, lenis])

  const teamData = [
    {
      name: 'Lakshmi Rebecca',
      title: 'CEO, Bangalore & San Francisco',
      img: '/img/our-team/lakshmi-rebecca.webp',
      lgimg: '/img/our-team/lakshmi-rebecca_2x.webp',
      content: (
        <>
          Storyteller, visionary, award-winning YouTuber and ex-model.
          <br />
          <br />
          Lakshmi’s career started as social work in education and transitioned
          to social research and investigative journalism for documentary films
          for the BBC and Discovery. After briefly dabbling with modelling, she
          moved into content - anchoring international business events, crafting
          a YouTube series on social enterprises in India and running a
          production house.
          <br />
          <br />
          Drawing upon these experiences in storytelling and content across the
          United Kingdom, India and Sri Lanka - Lakshmi founded Red Bangle. Her
          vision is for Red Bangle to grow into a global tech-enabled creative
          enterprise.
          <br />
          <br />
          Lakshmi is a strong believer in individual potential, collaboration
          and customer-centric solutioning.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/lakshmirebecca/',
    },
    {
      name: 'Sunil Patrapati',
      title: 'CTO, Bangalore & Chennai',
      img: '/img/our-team/sunil-patrapati.webp',
      lgimg: '/img/our-team/sunil-patrapati_2x.webp',
      content: (
        <>
          22 years of building technology innovations across gaming, content
          production and more. A sharp mind with the need for deep enquiry and
          context-driven problem-solving through technology.
          <br />
          <br />
          Sunil’s past successes include developing games, and building
          technology solutions for multinational pharma and manufacturing
          companies as well as a nation-wide technology-driven solution for
          adult literacy amongst several other achievements. He’s an avid
          researcher on many things tech, a passionate biker and foodie, and a
          great people and programme manager.
          <br />
          <br />
          Sunil has a keen eye on the future, and takes a holistic approach to
          growth. He believes in risk-taking - all while adopting a frugal
          approach to business growth. His vision is to create the CISCO of
          brand content - global, agile and bold.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/sunil-patrapati-020023a/',
    },
    // {
    //   name: 'Ankur Bora',
    //   title: 'Senior Vice President - Client Services',
    //   img: '/img/our-team/ankur-bora.webp',
    //   alt: 'Ankur Bora',
    //   lgimg: '/img/our-team/ankur-bora_2x.webp',
    //   content: (
    //     <>
    //       Full of warmth and ambition. A dedicated and intuitive leader, and a
    //       great conflict manager.
    //       <br />
    //       <br />
    //       Ankur has a wealth of experience in marketing communications. He has
    //       helped solution for clients ranging from Coca-Cola and Samsung
    //       Electronics to Yamaha, Maruti Suzuki, Uber, Airtel and more. He
    //       thrives on the dynamic landscape of consumer and tech trends.
    //       <br />
    //       <br />
    //       He grew up living all over the world, and is passionate about keeping
    //       the narrative relevant.
    //       <br />
    //       <br />
    //       He loves client servicing because he loves meeting new people,
    //       building new relationships and creating breakthrough solutions.
    //     </>
    //   ),
    //   linkedIn: 'https://www.linkedin.com/in/ankur-bora-73bb4515/',
    // },

    {
      name: 'Raj Dutta',
      title: 'Consulting Creative Director, Bangalore',
      img: '/img/our-team/raj_dutta.jpg',
      lgimg: '/img/our-team/raj_dutta.jpg',
      content: (
        <>
          A creative leader and writer with 23 years in the business, Raj has
          spent long stints with agencies like Ogilvy, Leo Burnett, McCann
          Erickson and Rediffusion in India and Hong Kong.
          <br />
          <br />
          Over a long and layered career, he has crafted several notable
          campaigns for brands like Airtel, Vodafone, Ajio, TVS Motors, IBM,
          Levi&apos;s, American Express and Unilever, winning awards at Cannes,
          New York Festivals, Spikes Asia, Abbys, and other advertising
          festivals.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/rajdutta/',
    },
    {
      name: 'Mandira Naidoo',
      title: 'Head of Design, Bangalore',
      img: '/img/our-team/mandira-naidoo.webp',
      lgimg: '/img/our-team/mandira-naidoo_2x.webp',
      content: (
        <>
          The force behind continuous creative quality improvement. She’s always
          absorbing new content and trends, and nudging everyone else to up
          their game.
          <br />
          <br />
          Mandy’s got 20 years of experience in visual communication, branding,
          and design education. She started out as an amazing artist - who won
          early accolades and international showcases. She then switched over to
          advertising - working with agencies like MAA and JWT. She’s tried her
          hand at running her own boutique practice too.
          <br />
          <br />
          Today, Mandy heads up design at Red Bangle. In fact, she’s been doing
          this since 2017 and is now a custodian for our Brand and part of a
          core team that drives our culture. Mandy’s passionate about Indian
          philosophy, travel and cats. She’s super work proud and so is her
          entire team.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/mandiranaidoo/',
    },

    {
      name: 'Ayesha Mir',
      title: 'Group Account Director, Bangalore',
      img: '/img/our-team/mandira-naidoo.webp',
      lgimg: '/img/our-team/mandira-naidoo_2x.webp',
      content: (
        <>
          The quiet one who is always observant and insightful. Jaya asks all
          the good questions that drive technology development at Red Bangle.
          <br />
          <br />
          She’s excited about tackling complex human challenges through
          technology and building innovative solutions.
          <br />
          <br />
          Jaya has worked in software solutioning with Tech Mahindra, Symantec
          and HCL. She joined Red Bangle in the first few months of our own
          beginning when she was nursing her new baby. Today, he’s 7 and so is
          Jaya’s relationship with Red Bangle.
          <br />
          <br />
          Jaya works closely with Sunil, and heads our dynamic technology team.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/jayaloganathan/',
    },

    {
      name: 'Tejasvi Mani',
      title: 'Partner - Post Production, Bangalore',
      img: '/img/our-team/tejasvi-mani.webp',
      lgimg: '/img/our-team/tejasvi-mani_2x.webp',
      content: (
        <>
          A problem-solver, a quiet and confident leader, and always a learner.
          <br />
          <br />
          Tejas has been at the forefront of creative innovation in
          post-production for over a decade. He’s mostly self-taught and how!
          His reputation is built on his extraordinary attention to detail
          across Computer Animation, VFX, CGI, Motion Graphics and Video
          Editing.
          <br />
          <br />
          Tejas was our first employee in Post Production. Today, he has
          recruited a dedicated team - which he heads and mentors. He’s one of
          our most dependable young leaders, and he’s high on EQ.
          <br />
          <br />
          When he’s not busy crafting a film or managing his team, he’s busy in
          gaming tournaments and motorsports entertainment.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/tejasvi-mani-84b53177/',
    },
    {
      name: 'Debarti Banerjee',
      title: 'VP Production & Operations, Mumbai',
      img: '/img/our-team/debarti-banerjee.webp',
      lgimg: '/img/our-team/debarti-banerjee_2x.webp',
      content: (
        <>
          Deeply passionate about organisational culture, processes and animal
          welfare.
          <br />
          <br />
          Debarti started out as a recruiter and moved into operations to
          support the creation of IP in content and events. She was on the core
          team that developed Royal Stag’s Large Short Films.
          <br />
          <br />
          Today, Debarti heads Red Bangle&apos;s recruitment and project
          management, and takes a keen interest in building new processes. She
          also rescues and feeds nearly 700 stray dogs and cats in the city of
          Mumbai.
          <br />
          <br />
          Clarity of intent, the right people for the right job, and the right
          processes everytime are things she’s always got an eye on.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/debarti-banerjee-2899b7249/',
    },
  ]

  const cards = [
     {
      id: 0,
      serviceTitle: 'GET DESIGN',
      serviceDescription:
        'From brand identity to experiential design - we help you break through the clutter, and build credibility and human connect. We don\'t just design; we sculpt masterpieces that defy convention and elevate your brand into a unique entity that amazes in every touch point.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/brand-design-agency',
    },
    {
      id: 0,
      serviceTitle: 'GET VIDEO',
      serviceDescription:
        'Get marketing explainer videos, video case studies, corporate videos, hiring and culture videos and more. Red Bangle offers end to end video production services across locations and formats. Get scalable video production services for your B2B brand.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/video-production',
    },
    {
      id: 1,
      serviceTitle: 'GET PODCAST',
      serviceDescription:
        'Bowl your audience over with our AI-first campaigns, content, experiences and more. Take your brand into the future with our end-to-end AI solutions: concept, design, curation, development, AI training and more.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/podcast-production-services',
    },
    {
      id: 2,
      serviceTitle: 'GET CAMPAIGN',
      serviceDescription:
        'We take our cues from people and culture, turning creative insights into campaigns that cut through the noise. From bold ideas to flawless execution, we create work that gets your brand noticed, talked about, and loved.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/advertising-agency',
    },
    {
      id: 3,
      serviceTitle: 'BOOK A CREW',
      serviceDescription:
        'Book professional video crews on-demand in 100 countries. Our team of experienced producers curate video crews for every brief and location, manage the shoots and quality-check the footage for you. Shoot video testimonials, events, drone footage, and more wherever you need them!',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/professional-video-crews',
    },
  ]

  const createTestimonialData = [
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
        <>
         Makerrs was especially impressive with their creative strategy, design and copy. They took the colors, the quirky and iconic signages, and the energy of the local markets and transformed them into a fresh, modern expression for our brand. Our customers are drawn to the unique identity, and it&apos;s translated into a love for the food itself.
        </>,
    name: 'KUNCHERIA MARATTUKALAM',
    designation: 'FOUNDER & DIRECTOR',
    company: 'Maratt Group',
    image: {
        srcSet:

            `/img/testimonials/kuncheria_marattukalam.jpg 533w, /img/testimonials/kuncheria_marattukalam.jpg 1066w`,
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
    key: 4,
    quote:
      'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Makerrs supported us on the ground and even helped us manage our golfing ambassador. Thanks, team!',
    name: 'MATT WALKINGTON',
    designation: 'Account Director',
    company: 'BRIGHT PARTNERSHIPS',
    image: {
      srcSet:
        `/img/testimonials/matt-walkington.webp 533w, /img/testimonials/matt-walkington.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 5,
    quote:
      <>Makerrs brought a unique blend of clarity and creativity—translating complex healthcare concepts into a simple brand identity system that was &apos;full of heart&apos;. They also created a cohesive website experience within incredibly tight deadlines. Their efficiency and understanding of our needs were pivotal in successfully launching our brand.
      </>,
    name: 'Rinku Agarwal Basu',
    designation: 'COO',
    company: 'Lillia Care',
    image: {
      srcSet:

        `/img/testimonials/rinku-agarwal.png 533w, /img/testimonials/rinku-agarwal.png 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
{
    key: 6,
    quote:
      'From hand-drawn mascots to quirky doodles, and delicious copy that weaves in witty puns from popular song lyrics—every element of our new brand feels fun, indulgent, and effortlessly us. Makerrs has given us a brand bursting with character and joy! Seeing customers connect with it at our dessert cafe feels incredible.',
    name: 'NAKUL KULKARNI',
    designation: ' CO-FOUNDER',
    company: 'P.U. DINGDING',
    image: {
      srcSet:
        `/img/testimonials/nakul_1.jpg 533w, /img/testimonials/nakul_1.jpg 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 7,
    quote:
      'Despite difficulties faced in shooting in 2 countries, we created these awesome videos, while keeping everyone safe during Covid-19.',
    name: 'MARC IRAWAN',
    designation: 'Founder',
    company: 'COLEARN',
    image: {
      srcSet:
        `/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 8,
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
  },
]

  return (
    <>
      <SEO
        title="Tech-Enabled Creative Agency & Collaborative | Makerrs"
        description="We are a tech-powered global creative agency and collaborative. We’ve crafted branding, videos, podcast IPs, campaigns and more for over 60 brands."
        url="https://www.redbangle.com/about/who-we-are"
      />

      <section
        className="pt-15 md:pb-24 md:pt-24 relative bg-rb-mercury text-rb-black "
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <h1 className="hero-text md:text-[112px] md:leading-[1.01] font-everett font-medium md:tracking-[-2.24px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px]">
            The tech-enabled
            <br />
            <span className="text-[#FF1A40] block md:hidden">AI-first</span>
            creative{' '}
            <div
              className={`content aspect-[1920/1080] origin-top ${styles.content} hidden md:inline-block`}
              ref={containerRef}
            >
              <div
                className="w-full  bottom-0 left-0 select-none md:aspect-[1920/1080] relative mx-auto translate-y-4"
                ref={insetRef}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/creative_agency.mp4"
                  poster="/img/who-we-are/creative_agency_thumbnail.webp"
                  className="w-full md:block translate-x-[-0.225px] translate-y-0 rotate-0 scale-100 rounded-[70px]"
                  width="1920"
                  height="1080"
                ></video>
              </div>
            </div>
            <span className="md:translate-x-[20px] inline-block">Agency </span>
          </h1>
          <div className="heroMarquee flex md:flex-row flex-col items-start justify-between border-t border-t-rb-davy-grey/50 pt-6 md:pt-8 mt-6 md:mt-20 gap-4 md:gap-0">
            <div className="w-full md:w-1/2 text-[16px] leading-[1.25] tracking-[-0.64px] font-everett md:text-[22px] md:leading-[1.45] md:tracking-[-0.88px] font-medium">
              For brands that cater to the borderless customer.
            </div>
            <div className="w-full md:w-1/2 text-[16px] leading-[1.5] md:text-[28px] md:leading-[1.28] tracking-[-0.64px] md:tracking-[-1.12px] font-semibold">
              We are a tech-powered global creative agency and collaborative. We’ve crafted brand design systems, video content, podcast IPs and creative campaigns for over 60 borderless brands.
            </div>
          </div>
        </div>
        <div
          className="w-full  bottom-0 left-0 select-none md:aspect-[1920/1080] relative block md:hidden  md:origin-top mx-auto"
          // onClick={onModalOpen}
          // data-rb-cursor
          // data-rb-cursor-type="play"
          ref={insetRef}
        >
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            src="/creative_agency.mp4"
            poster="/img/who-we-are/creative_agency_thumbnail.webp"
            className="w-full hidden md:block web-vid "
            width="1920"
            height="1080"
          ></video> */}

          <video
            autoPlay
            muted
            loop
            playsInline
            src="/creative_agency.mp4"
            poster="/img/who-we-are/creative_agency_thumbnail.webp"
            className="w-[100%] max-w-[100%] mt-8 block md:hidden"
            width="1920"
            height="1080"
          ></video>

          <div className=" absolute play-circle md:hidden opacity-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-rb-black/50 rounded-full w-13 h-13">
            <svg
              className="block play-icon absolute md:hidden opacity-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.570972 0.669922L8.07097 5.00005L0.570971 9.33018L0.570972 0.669922Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-15 md:py-30">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-[60%]">
              <h1 className="text-title md:text-title-md font-everett mb-6 md:mb-12">
                Our Manifesto
              </h1>

              <p className="text-xl md:text-2xl mb-0 text-rb-black/80 opacity-90 md:leading-[33px]">
                We ask the questions that matter the most.
                <br />
                <br />
                <span className="font-bold">“Why not?”</span> when everyone else
                says “Impossible.” <br />
                <span className="font-bold">“What’s next?”</span> when everyone
                else says “We’re done.” <br />
                <span className="font-bold">“What’s missing?”</span> when
                everyone else says “It’s good enough.”
                <br />
                <br />
                Every question is our spark—the thing that flips conventions,
                fuels fresh ideas and finds answers no one else saw coming. It’s
                not just how we work; it’s what drives us. <br />
                <br />
                We’re all about helping brands differentiate, connect, endure in
                a world that’s witnessing a dozen new brands and a hundred new
                app launches every day. We thrive on keeping brands relevant
                today, and ready for tomorrow.
                <br />
                <br />
                To us, every challenge is a chance to craft ideas that stick,
                solve, and resonate. We go deeper, finding the insights that
                fuel real growth – not just for brands, but for everyone we work
                with.
                <br />
                <br />
                We are Red Bangle. The Why Nots in a world of Same Olds.
              </p>
            </div>

            <div className="w-full md:w-[40%] pt-8 md:pt-0 md:pl-10 self-center">
              {/* <img src="/img/who-we-are/manifesto.jpg" alt="Our Manifesto" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/img/who-we-are/our_manifesto.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: 'none' }}>
        <h2>Brand content production agency</h2>
        <h2>Integrated marketing agency</h2>
        <h2>Holistic marketing agency</h2>
        <h2>Brand strategy</h2>
        <h2>Content production agency</h2>
        <h2>Integrated agency</h2>
        <h2>Creative agency</h2>
        <h2>Digital marketing company</h2>
        <h2>Advertising agency</h2>
        <h2>Global team</h2>
        <h2>Brand content</h2>
      </div>

      {/* <section className="py-15 md:py-30 bg-rb-mercury">
        <div className="container">
          <h2 className="font-everett text-2xl md:text-7xl mb-6 md:mb-18">
            Why choose us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-18">
            {[
              {
                id: 0,
                title: 'Fueling Client Growth',
                description:
                  'Our aim is impact. Every move we make is crafted to help clients differentiate, connect, and reach their biggest goals.',
              },
              {
                id: 1,
                title: 'Building Lasting Bonds',
                description:
                  'Whether it’s 5 months or 5 years, we keep relationships fresh. Every project is an opportunity to succeed - together.',
              },
              {
                id: 2,
                title: 'Collaboration Meets Accountability',
                description:
                  'Inspired by collaboration, powered by ownership. We take every idea further because the buck stops with us.',
              },
              {
                id: 3,
                title: 'Relentless Curiosity',
                description:
                  'Curiosity is our obsession. We dive deep into every project, asking questions that others overlook to uncover real opportunities.',
              },
              {
                id: 4,
                title: 'Solutions, Not Shortcuts',
                description:
                  'For us, excellence is about real solutions, not quick fixes. We invest the time to ensure the results are built to last.',
              },
              {
                id: 5,
                title: 'A Shared Journey',
                description:
                  'For us, growth is a collective journey. Every project is a chance to enhance your brand, refine our craft, and empower our team.',
              },
            ].map(({ id, title, description }) => (
              <div key={id}>
                <h4 className="font-everett mb-1 text-7xl md:text-[86px]">
                  0{id + 1}
                  <span className="text-rb-red">.</span>
                </h4>
                <p className="text-lg font-semibold mb-2">{title}</p>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <RedbangleWaySection
        sectionBG="bg-rb-mercury md:!py-30 !py-15"
        title={
          <div className="md:max-w-[720px]">
            We run on our patented technology
          </div>
        }
        data={redbanglewayCreateAbout}
        // image={{
        //   src: 'img/who-we-are/our_cloud_platform.jpg',
        //   width: '491',
        //   height: '562',
        // }}
        video={{
          src: '/img/who-we-are/about-rb-cloud-video.mp4',
          width: '491',
          height: '562',
        }}
        heading="Our creative cloud platform"
      /> */}

      <section className="pb-5 md:pb-6 bg-white">
        <div className="container">
          <h1 className="text-title md:text-title-md font-everett mb-6 md:mb-8 md:!tracking-[-2.08px] !tracking-[-.52px] ">
            Meet the Makerrs
          </h1>
          <p className="text-xl md:text-2xl text-rb-black/80 opacity-90 md:leading-[33px] mb-6 md:mb-12">
            We are a bunch of good people who enjoy working with each other and love creative work. We are curious. We like challenges. We hate bullshit. And we take pride in creating solutions that actually matter.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-4">
            {teamData.map((d) => (
              <div
                className="w-full flex flex-col gap-3 md:gap-5 md:mb-24 mb-10"
                key={d.name}
              >
                <button
                  data-rb-cursor
                  data-rb-cursor-type="bio"
                  className="md:max-w-[405px] md:max-h-[454px] max-w-[162px]"
                  onClick={() => setBioModal({ open: true, data: d })}
                >
                  <picture>
                    <source srcSet={d.img} media="(min-width:768px)" />
                    <img
                      className="overflow-hidden object-cover"
                      src={d.img}
                      alt={d.name}
                    />
                  </picture>
                </button>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="md:text-[32px] text-base font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.64px] leading-6">
                    {d.name}
                  </span>
                  <span className="md:text-2xl opacity-60 text-sm font-medium md:leading-7 leading-5 tracking-[-0.56px] md:tracking-[-0.96px]">
                    {d.title}
                  </span>
                </div>
                <button
                  className="flex items-center gap-2 md:hidden"
                  onClick={() => setBioModal({ open: true, data: d })}
                >
                  <span className="font-bold text-rb-red text-xs font-opensans">
                    Read More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3013_987)">
                      <path
                        d="M9.70274 10.703C9.90863 10.4973 9.90876 10.1636 9.70303 9.95772L6.35042 6.60249C6.14469 6.3966 5.811 6.39647 5.6051 6.6022C5.39921 6.80794 5.39908 7.14163 5.60481 7.34752L8.58491 10.3299L5.60249 13.31C5.3966 13.5158 5.39647 13.8495 5.6022 14.0554C5.80794 14.2612 6.14163 14.2614 6.34752 14.0556L9.70274 10.703ZM-0.326678 10.8535L9.33002 10.8572L9.33043 9.80321L-0.326268 9.79946L-0.326678 10.8535Z"
                        fill="#EF001C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3013_987">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-15 md:pb-30">
        <ExploreMoreSection
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={cards}
          title='Explore our services'
        />
      </div>


      {bioModal.open && (
        <div className="fixed cursor-auto left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-[9998]">
          <div
            className="max-h-full w-full max-w-[90%] bg-white h-[85vh] overflow-auto CustomScrollBar"
            data-lenis-prevent
          >
            <div className="w-full relative p-5 md:p-15">
              <button
                className="w-[107px] h-auto py-1.5 px-4 hidden md:block absolute top-4.5 right-[75px] text-white bg-black rounded-full"
                onClick={() =>
                  setBioModal((prev) => ({ ...prev, open: false }))
                }
              >
                Close
              </button>
              <button
                className="w-6 h-6 grid place-items-center md:hidden absolute top-9 right-9 text-white bg-black z-[1] rounded-full"
                onClick={() =>
                  setBioModal((prev) => ({ ...prev, open: false }))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="12" fill="#111010" />
                  <path
                    d="M16 8L8 16"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8L16 16"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row items-center  md:items-stretch gap-4 md:gap-12">
                <div className="w-full md:w-1/3 relative h-auto flex-shrink-0">
                  <picture>
                    <source
                      srcSet={bioModal?.data?.img}
                      media="(min-width:768px)"
                    />
                    <img
                      className="md:absolute w-auto h-full object-cover"
                      src={bioModal?.data?.img}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-2">
                      <h2 className="md:text-[32px] text-lg font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.72px] leading-[22px]">
                        {bioModal?.data?.name}
                      </h2>
                      <span className="md:text-2xl opacity-60 text-sm font-medium md:leading-7 leading-5 tracking-[-0.56px] md:tracking-[-0.96px]">
                        {bioModal?.data?.title}
                      </span>
                    </div>
                    <div className="py-4 md:w-[90%px] md:pt-5 md:mb-12">
                      <p className="md:text-lg w-full md:max-w-[80%] text-sm font-normal opacity-80">
                        {bioModal?.data?.content}
                      </p>
                    </div>
                    <div className="w-full h-px my-4 bg-rb-davy-grey opacity-50"></div>
                    <div className="flex w-full flex-col-reverse md:flex-row md:gap-6">
                      <div className="flex w-full md:w-[40%] flex-col">
                        <span className="md:text-lg text-base font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.64px] leading-4.5">
                          Social Connect
                        </span>
                        <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={bioModal?.data?.linkedIn}
                            className="flex items-center gap-2 py-1.5 md:py-5"
                          >
                            <svg
                              className="text-[#006699] transition-all w-5 h-5 md:w-10 md:h-10"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="20"
                                cy="20"
                                r="19.375"
                                fill="white"
                                stroke="currentColor"
                                strokeWidth="1.25"
                              />
                              <path
                                d="M12 12.8009C12 12.2789 12.1871 11.8482 12.5612 11.5089C12.9353 11.1696 13.4216 11 14.0202 11C14.6081 11 15.0837 11.167 15.4472 11.5011C15.8213 11.8456 16.0083 12.2945 16.0083 12.8478C16.0083 13.349 15.8266 13.7665 15.4632 14.1006C15.0891 14.4451 14.5974 14.6174 13.9881 14.6174H13.9721C13.3842 14.6174 12.9086 14.4451 12.5451 14.1006C12.1817 13.7561 12 13.3229 12 12.8009ZM12.2084 26.5031V16.0424H15.7678V26.5031H12.2084ZM17.7399 26.5031H21.2993V20.662C21.2993 20.2966 21.3421 20.0148 21.4276 19.8164C21.5772 19.4615 21.8044 19.1613 22.109 18.916C22.4136 18.6706 22.7957 18.548 23.2554 18.548C24.4525 18.548 25.0511 19.3362 25.0511 20.9126V26.5031H28.6105V20.5054C28.6105 18.9604 28.2364 17.7885 27.4882 16.9898C26.7399 16.1912 25.7512 15.7919 24.522 15.7919C23.1431 15.7919 22.0689 16.3713 21.2993 17.5301V17.5614H21.2833L21.2993 17.5301V16.0424H17.7399C17.7613 16.3765 17.772 17.4153 17.772 19.1587C17.772 20.9022 17.7613 23.3503 17.7399 26.5031Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="text-[#006699] text-sm md:text-lg">
                              Linkedin
                            </span>
                          </a>
                          <div className="bg-rb-dune opacity-20 w-[5px] h-[5px] md:hidden rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <TrustedBrandsSection
        className="bg-white pb-15 md:pb-15"
        heading="Our clients"
      />

      <Testimonials
        title={'WHAT CLIENTS SAY'}
        className="pt-18 pb-7.5 md:pt-30 md:pb-15"
        testimonialData={createTestimonialData}
        type="semi"
      />

     
      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="1084150253"
        videopath="/creative_agency.mp4"
      >
        <div className="relative max-w-[80%] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/creative_agency.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video>
        </div>
      </VideoModal>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default WhoWeAre
