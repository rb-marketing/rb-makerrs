import { SEO } from '@/components/shared/SEO'
import { SolutionsSection, Marquee, VideoModal, RollupNumber, Testimonials } from '@/components/shared'
import { Button, Accordion } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { LineHeading, RevealText } from '@/components/shared'
import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import statsStyles from '@/styles/sections/StatsSection.module.scss'
import styles from '@/styles/home.module.scss'
import Link from 'next/link'
const LandPage = () => {
  const groupIcons = [
    {
      id: 0,
      name: 'cain.webp',
      width: '100px',
      height: '34px',
      alt: 'cain',
    },
    {
      id: 1,
      name: 'infosys-logo.jpg',
      width: '90',
      height: '30',
      alt: 'infosis',
    },
    {
      id: 2,
      name: 'indeed.webp',
      width: '132',
      height: '36',
      alt: 'indeed',
      className: '',
    },
     {
      id: 3,
      name: 'pudingding.png',
      width: '100',
      height: '30',
      alt: 'pudingding',
      className: '',
    },
    {
      id: 4,
      name: 'taneria.png',
      width: '132',
      height: '36',
      alt: 'taneria',
      className: '',
    },
    {
      id: 5,
      name: 'general-electric.png',
      width: '200',
      height: '150',
      alt: 'general-electric',
    },
    {
      id: 6,
      name: 'darwinbox.webp',
      width: '132',
      height: '36',
      alt: 'darwinbox',
      className: '',
    },
     {
      id: 7,
      name: 'itc.png',
      width: '60px',
      // height: '30px',
      alt: 'itc',
    },
    {
      id: 8,
      name: 'wipro.svg',
      width: '83',
      height: '66',
      alt: 'Wipro',
    },
    {
      id: 9,
      name: 'mumbai-indians.png',
      width: '100px',
      // height: '40px',
      alt: 'mumbai-indians',
    },
    {
      id: 10,
      name: 'sequoia.png',
      width: '167',
      height: '52',
      alt: 'sequoia',
    },
    {
      id: 11,
      name: 'swiggy.svg',
      width: '157',
      height: '39',
      alt: 'swiggy',
    },
    {
      id: 12,
      name: 'Tanishq.png',
      width: '80',
      height: '67',
      alt: 'Tanishq',
    },
    {
      id: 13,
      name: 'bosch.webp',
      width: '151',
      height: '33',
      alt: 'bosch',
    },
    {
      id: 14,
      name: 'slb.webp',
      width: '113',
      height: '52',
      alt: 'slb',
    },
     {
      id: 15,
      name: 'dara.png',
      width: '200',
      height: '150',
      alt: 'dara',
    },
    {
      id: 16,
      name: 'vymo-logo.webp',
      width: '127',
      height: '52',
      alt: 'vymo-logo',
    },
    {
      id: 17,
      name: 'exicom.png',
      width: '163',
      height: '44',
      alt: 'exicom',
    },
    {
      id: 18,
      name: 'treebo.png',
      width: '163',
      height: '44',
      alt: 'treebo',
    },
    {
      id: 19,
      name: 'virtusa.png',
      width: '120',
      height: '44',
      alt: 'virtusa',
    },
    {
      id: 20,
      name: 'bagmane.png',
      width: '140',
      height: '44',
      alt: 'bagmane',
    },
    {
      id: 21,
      name: 'komatsu.png',
      width: '140',
      height: '44',
      alt: 'komatsu',
    },
    {
      id: 22,
      name: 'aarki.png',
      width: '140',
      height: '44',
      alt: 'aarki',
    },
  ]
 
  const stats = [
  {
    id: 0,
    countUpProps: {
      value: 60,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <span className="md:max-w-[188px]">
        Change count <br />
        of brands
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 4,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: (
      <>
      Change video <br/>numbers
      </>
    ),
  },
  {
    id: 2,
    countUpProps: {
      value: 40,
      suffix: (
        <span className="inline-flex">
          <span className="text-rb-red">+</span>
        </span>
      ),
    },
    text:
      <>
       thinkers <br />
       and creators
      </>,
  },
  {
    id: 3,
    countUpProps: {
      value: 90,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <>
        country production network
      </>
    ),
  },
]
  const createTestimonialData = [
    {
    key: 0,
    quote:
      'We are delighted to team up with Red Bangle to promote the fight against childhood cancer in Romania! The video showcases the ability of the creatives and product managers at Red Bangle to deliver a very compelling case for our innovative work, and to capture the hearts and minds of the audience.',
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
        Red Bangle was especially impressive with their creative strategy, design, and copy. They took the quirk and the energy of local markets and their iconic signs and transformed them into a fresh, modern expression for our brand. Our customers are drawn to the unique identity, and it has translated into a love for the product itself.
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
      'We partnered with Red Bangle to create internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends, are always experimental and open to feedback. They are amazing to work with!',

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
      'The Red Bangle team is fantastic to work with. They add value not just from a creative standpoint but also in terms of communication strategy.',
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
      'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Red Bangle supported us on the ground and even helped us manage our golfing ambassador. Thanks team!',
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
      <>Red Bangle brought a unique blend of clarity and creativity—translating complex healthcare concepts into a simple brand identity system that was &apos;full of heart&apos;. They also created a cohesive website experience within incredibly tight deadlines. Their efficiency and understanding of our needs were pivotal in successfully launching our brand.
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
      'From hand-drawn mascots to quirky doodles, and delicious copy that weaves in witty puns from popular song lyrics—every element of our new brand feels fun, indulgent, and effortlessly us. Red Bangle has given us a brand bursting with character and joy!',
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
      'It’s never easy creating great videos for a fast-growing business like ours. We struggled, till we came across Red Bangle.',
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
const TNC = [
  {
    key: 0,
    title: 'What services does your global creative agency offer?',
    content: (
      <>
        <div>
          Makkers offers strategic creative services that help you launch and scale brands across markets. 
        </div>
        <h3 className="mt-5 font-semibold  text-base">1. Strategy:</h3>
        <div>
          We offer a range of strategy services &ndash; including brand environment analysis, brand communication strategy, and video content strategy. We blend data, insights and marketing expertise to craft strategies that drive growth for your business.
        </div>
        <h3 className="mt-5 font-semibold  text-base">2. Design:</h3>
        <div>
          We offer a range of design services - from brand identity and event branding, to brand mascots and avatars, print and editorial design, and environmental graphics for corporate offices. We help you build brand differentiation, credibility and human connect through our future&ndash;forward design solutions.
        </div>
        <h3 className="mt-5 font-semibold  text-base">3. Videos:</h3>
        <div>
         We offer strategic and creative video content production services for brand growth. Whether it is driving your YouTube strategy and delivering SEO&ndash;first content all year round, crafting your product communications and scaling content for the next 18 months, or creating on&ndash;demand case study videos, thought leadership content, product explainer videos, hiring and culture videos, or videos for corporate communications and public relations &ndash; our end to end video production services include research, conceptualisation, anywhere production, and endless versioning.
        </div>
        <h3 className="mt-5 font-semibold  text-base">4. Podcast:</h3>
        <div>
          Our beginnings lay in an award&ndash;winning YouTube show. With years of experience running our own show and now having produced several successful podcasts for clients, we have a strong framework for creating your next IP: be it a podcast for your brand or a podcast for you as a business leader. Our end&ndash;to&ndash;end solutions include research, concept, design, podcast production, publishing, distribution and amplification. And we use modern tools and processes to scale production and publishing as required.
        </div>
        <h3 className="mt-5 font-semibold  text-base">5. Campaign:</h3>
        <div>
          From insightful communication strategies to exciting campaign plans, big campaign ideas, inspiring creatives, and flawless execution across formats and locations &ndash; we provide comprehensive creative campaign solutions. Whether it&apos;s for brand marketing campaigns, product and solution marketing campaigns, employer branding campaigns, localisation campaigns or ESG campaigns &ndash; we support every phase of your brand growth.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          6. On&ndash;demand Video Crews or &apos;Book a Crew&apos;:
        </h3>
        <div>
          We have a strong, curated collaborative of professional video crews available on&ndash;demand in 100 countries. Be it a single&ndash;camera testimonial shoot or a multi&ndash;camera event shoot &ndash; our curated video crew services scale to your brief, no matter how many cities and continents. We work closely with your in&ndash;house creative teams to help them scale content. Our managed services include crew curation as per your shoot requirement, location booking, artist booking, in&ndash;person or remote shoot management, and footage quality checks. 
        </div>
      </>
    ),
  },
  {
    key: 1,
    title: 'How experienced is your team?',
    content:
      'We’ve been fuelling brand communications with great creativity and technology for nearly a decade now. We’ve worked with dozens of brands in technology, FMCG, F&B, Aerospace, Manufacturing, Engineering, Energy, Quick-commerce and more to help craft unique brands, deliver sticky campaigns and scale brand content across regions.',
  },
  {
    key: 2,
    title: 'Where can I view your portfolio?',
    content: (
      <>
        All of our work is available on{' '}
        <Link
          href="http://www.makerrs.com/work"
          className="underline !text-rb-black hover:!text-[#07ef5a]"
        >
          www.makerrs.com/work
        </Link>
        {''}, Visit the link to explore our best work.
      </>
    ),
  },
  {
    key: 3,
    title: 'Which business verticals do you work with?',
    content:
      'We work with brand and marketing, corporate communications, employer branding and internal marketing, human resources and recruitment, and with CSR and ESG teams. And, we work with both for-profit and non-profit organizations.',
  },
  {
    key: 5,
    title: 'What are your typical project turnaround times?',
    content: (
      <>
        <div>
          Project turnaround times vary based on the brief. For strategic long-term result-oriented engagements, it takes a couple of months to workshop requirements, research and arrive at a project gameplan and metrics to measure. And the project itself may range from 6 to 18 months, or longer. For ongoing and on-demand services, the turnaround times vary from a couple of weeks to a couple of months depending on the scale of the requirement. 
          When it comes to our book-a-crew service however, we can work with as little as 2 to 3 working days to get you the right crew.
        </div>
      </>
    ),
  },
  {
    key: 6,
    title:
      'What are your policies around intellectual property rights and business data confidentiality?',
    content:
      'We take data security, privacy, confidentiality, and intellectual property rights very seriously. Our practices adhere to global standards. We license every single software and creative asset required, and ensure that necessary media release documents and service contracts are in place to explicitly call out the intellectual property rights assigned to the client.',
  },
  {
    key: 10,
    title: 'Which time zone does your company operate in?',
    content: (
      <>
        Our borderless agency supports clients across time zones. So, {' '}
        <Link href="https://www.b2b.redbangle.com/contact" className="underline !text-rb-black hover:!text-[#07ef5a]">
          send us a brief
        </Link>{' '}
        and we&apos;ll set up a meeting at a mutually convenient time.
      </>
    ),
  },
]
  const heroSection = useRef()
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(max-width:768px)', () => {
      // const istyles = containerMbRef.current?.getBoundingClientRect()
      // const nstyles = insetRef.current?.getBoundingClientRect()

      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '50% 40%',
          end: '80% 20%',
          trigger: heroSection.current,

          // markers: true,
        },
      })
      const getY = () => {
        const mEl = 72 + 50 + 72
        const titleElm = containerMbRef.current.getBoundingClientRect().height

        const y = mEl + titleElm
        return y
      }
      tl.fromTo(
        '.content-showreel',
        { opacity: 1, y: 0, duration: 0.05 },
        { opacity: 0, y: () => getY() },
        0
      ).fromTo(' .play-icon', { opacity: 0.5 }, { opacity: 1 })

      return () => {
        tl.kill()
      }
    })

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
  const videoRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasReachedTop, setHasReachedTop] = useState(false)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const elementHeight = document.querySelector('#hero-section').offsetHeight
      const scrollPosition = window.scrollY

      if (window.innerWidth > 768) {
        if (elementHeight + scrollPosition >= windowHeight + 600) {
          setHasReachedTop(true)
        } else {
          setHasReachedTop(false)
        }
      } else {
        if (elementHeight + scrollPosition >= windowHeight + 500) {
          setHasReachedTop(true)
        } else {
          setHasReachedTop(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <SEO
        title="AI-First Creative Agency for Global Brands - Red Bangle"
        description="We craft brand solutions, creative campaigns, AI products, interactive brand experiences, AI avatars and sticky original content IPs for over 60 brands globally."
        url="https://www.redbangle.com"
      />

      <section
        className="bg-white md:-mb-[3px] md:pt-9  relative overflow-hidden "
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <div>
            <div className={` ${styles.title}`}>
              <span className={`${styles.ltor}`}>
                <span className="hidden md:inline"> BORDERLESS AGENCY,</span>
              </span>
            </div>

            <div className={` ${styles.title} block md:hidden mt-[-28px]`}>
              <span className={`${styles.ltor} `}> BORDERLESS</span>
              <span className="text-[40px] tracking-[-1.4px]"> AGENCY,</span>
            </div>

            <div className="banner relative h-[50%] w-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                src="/creative_agency_banner.mp4"
                poster="/img/home/creative_agency_banner.webp"
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></video>
              <div className={` ${styles.title}`}>
                <div className={` ${styles.textblend} md:whitespace-nowrap`}>
                  SCALABLE CREATIVITY
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            id="hero-section"
            className="flex items-center justify-center text-center md:mt-10 mt-5"
          >
            <div>
              <div className="text-rb-black text-[16px] md:text-[24px] leading-[1.5] md:leading-[1.33] tracking-[-0.64px] md:tracking-[-0.96px] font-semibold max-w-[900px]">
                We are a tech-powered borderless agency helping fast-growing businesses build engaging brands and narratives through videos, podcasts, campaigns and design.
              </div>
              <div className="flex items-center justify-center md:flex-row flex-col md:mt-10 mt-9 md:gap-5 gap-4">
                <Button
                  href="/contact?type=client"
                  className="font-bold !bg-[#07ef5a] !text-rb-black w-full md:w-auto !inline-flex "
                  suffix={<LineArrow hover />}
                >
                  Send us a Brief
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 ">
          <Marquee duration={50}>
            <div className="flex items-center h-[80px] md:h-[70px]">
              {groupIcons.map(({ name, id, ...rest }) => (
                <div key={id} className="mx-6 md:mx-12 filter grayscale">
                  <img
                    src={`/img/logos/${name}`}
                    loading="lazy"
                    alt=""
                    {...rest}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* <div
        ref={videoRef}
        className={`mt-12 md:mt-8 md:mb-[-2px] video-scroll duration-500 ease-out !overflow-visible lg:h-[200vh] md:h-[150vh] ${
          hasReachedTop ? 'active' : ''
        }`}
        onClick={onModalOpen}
        data-rb-cursor
        data-rb-cursor-type="play"
      >
        <div className="absolute bottom-4 right-4 z-10 backdrop-blur-2xl bg-rb-black/50 rounded-[32px] py-[17px] px-4.5 pl-[20px] overflow-hidden md:hidden block">
          <div className="flex items-center gap-2 justify-center text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
            >
              <path
                fill="#fff"
                d="M.043 1.124c0-.442.489-.71.86-.47L9.09 5.916c.342.22.342.72 0 .94L.903 12.117a.559.559 0 0 1-.86-.47V1.125Z"
              />
            </svg>
          </div>
        </div>
        <div className="md:sticky top-1/4 lg:top-0 overflow-hidden hidden md:block lg:h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/why-not-video.mp4"
            poster="/img/home/why_not_banner.webp"
            className="web-vid w-full h-full object-cover relative"
          ></video>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          src="/img/home/why-not-video.mp4"
          poster="/img/home/why_not_banner.webp"
          className="block md:hidden w-full h-full object-cover"
        ></video>
      </div> */}

      <section className="bg-white pt-18 md:pt-30 pb-18 md:pb-30">
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5 !text-rb-black" lineStyles="!bg-rb-black">WHY TRY MAKERRS</LineHeading>
          <div className="max-w-[1090px]">
            <RevealText text="We know what it takes to craft unique brands and engagement in the age of the borderless customer. Our strategic approach, human insights, core creative teams combined with an ever-expanding global collaborative of creative folks, and cloud-based workflows make us the right agency to craft and scale your global brand." />
          </div>
          <Button
            href="/about/who-we-are"
            className="font-bold mt-11 md:mt-16 w-full md:w-auto !bg-[#07ef5a] !text-rb-black !inline-flex"
            suffix={<LineArrow hover />}
          >
            See manifesto
          </Button>
        </div>
      </section>

      <div>
        <SolutionsSection />
      </div>

    <section className={`bg-white overflow-hidden py-18 md:pt-30 md:pb-0`}> 
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5 !text-rb-black" lineStyles="!bg-rb-black">Grow your brand with us</LineHeading>
          <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none ml-5 transform transform -translate-x-5 sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-12">
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

    <Testimonials
      title={'WHAT OUR COLLABORATORS SAY'}
      className="pt-18 pb-7.5 md:pt-30 md:pb-15"
      testimonialData={createTestimonialData}
      type="semi"
    />

    <section className=" py-12 md:py-24">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
                {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80 mb-10 md:mb-0">
                  For any queries please contact us at{' '}
                  <a className="text-rb-red" href="mailto:hello@redbangle.com">
                    hello@redbangle.com
                  </a>
                </div> */}
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
        // vimeoId="1084150253"
        videopath="/img/home/why-not-video.mp4"
      >
        <div className="relative max-w-[90%] md:max-w-[80%] w-full">
          {/* <iframe
            src="https://player.vimeo.com/video/1084150253?h=dff56feeb5&autoplay=1&title=0&byline=0&portrait=0"
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
            src="/img/home/why-not-video.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video>
        </div>
      </VideoModal>
    </>
  )
}
export default LandPage
