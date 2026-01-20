import { aboutSchema } from '@/components/schema/about-schema'
import {
  LineHeading,
  VideoModal,
  RedbangleWaySection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import Script from 'next/script'
import { useEffect, useState, useRef } from 'react'
import styles from '@/styles/home.module.scss'
import { gsap } from 'gsap'
import 'swiper/css'
import 'swiper/css/navigation'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useLenis } from '@studio-freight/react-lenis'
import React from 'react'

const AISolutions = () => {
  const heroSection = useRef()
  const containerRef = useRef()
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)

  const insetRef = useRef()

 const sliderCards = [
    {
      key: 1,
      imgurl: '/ai_native.svg',
      alt: 'We are AI Natives',
      title: 'We are AI Natives',
      desc: 'We aren’t a creative shop that’s just riding the AI hype, we’re a true tech-first agency with an in-house AI team. We ideate, design and build AI solutions for function, integration and scale.',
    },
    {
      key: 2,
      imgurl: '/tech_powered_experiences.svg',
      alt: 'Multidisciplinary',
      title: 'We are Multidisciplinary',
      desc: 'Get strategy, design, data and engineering with us. Our multidisciplinary approach lets us shape AI-driven solutions for brand communications that are bold and implementable.',
    },
    {
      key: 3,
      imgurl: '/ai_strategy.svg',
      alt: 'AI Strategy',
      title: 'AI Strategy to Implementation',
      desc: 'We don’t stop at a great idea. From breakthrough concepts to real-world execution. With consulting rigor and full-service capability, we close the gap between vision and deployment.',
    },
    {
      key: 4,
      imgurl: '/platform_content.svg',
      alt: 'AI at Scale',
      title: 'AI at Scale',
      desc: 'We conceptualise, design, develop and implement AI solutions for scale and long-term value. We help you leverage AI to truly engage consumers in an AI-first era.',
    }
  ]

  const redbanglewayThink = [
  {
    key: '0',
    heading: 'Define & Synthesize',
    content: "We begin by understanding your brand goals. Through structured diagnosis, we identify core challenges, refine problem statements, and translate data, trends, and consumer journeys into structured, actionable insights.",
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Conceptualize & Curate',
    content: 'Grounded in insights–we ideate and curate AI-led brand interventions. We then design, prototype, simulate and test our concepts - ensuring they align with brand strategy and consumer expectations as well as behaviour.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Develop & Deploy',
    content: 'We develop the market-ready solution and integrate it seamlessly across brand touchpoints - be it an app, the brand website, campaign or content - to deliver consistent and measurable impact.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Evaluate & Evolve',
    content: 'Post go-live, we measure outcomes, optimize in real time, and scale the solution to deliver sustained brand advantage in the age of AI.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]

 gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let cardContainer = document.querySelector('.feature-slider')
    let lineProgress = document.querySelector('.progress-slider')
    const mm = gsap.matchMedia()

    const width = cardContainer.scrollWidth - cardContainer.offsetWidth
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.featured-section',
        start: '20% 30%',
        end: '70% 5%',
        scrub: true,
      },
    })

    tl.fromTo(cardContainer, { x: 0 }, { x: -width })
    tl.fromTo(lineProgress, { xPercent: -100 }, { xPercent: 0 }, 0)

    return () => tl.kill()
  })

    useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(max-width:768px)', () => {
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
      ).fromTo('.play-circle, .play-icon', { opacity: 0.5 }, { opacity: 1 })

      return () => {
        tl.kill()
      }
    })
    mm.add('(min-width:768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '27.9% 35%',
          end: '55% 27%',
          trigger: heroSection.current,
          // markers: true,
        },
      })

      const getY = () => {
        const mEl = document
          .querySelector(`.heroMarquee`)
          .getBoundingClientRect().height
        //   +
        // 32 + //padding
        // 80 + // marquee margin
        // 108 // content height
        const titleElm = document
          .querySelector(`.hero-text`)
          .getBoundingClientRect().height

        const y = mEl + titleElm - 50

        return y
      }

      tl.fromTo(
        insetRef.current,
        {
          width: () => {
            const cistyles = containerRef.current?.getBoundingClientRect()
            return cistyles.width
          },

          y: () => -1 * getY(),
        },
        {
          width: '100%',

          y: 0,

          duration: 0.8,
        }
      )
        .fromTo(
          '.web-vid',
          {
        x: () => {
          const istyles = containerRef.current?.getBoundingClientRect()
          const nstyles = insetRef.current?.getBoundingClientRect()
          const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
          const baseDiff = Math.max(istyles.left - nstyles.left, 0)
          const diffContainer = baseDiff + 1.5 * rootFont // move an additional 9rem right (9 * root font size in px)
          return diffContainer
        },
        borderRadius: '70px',
          },
          { x: 0, borderRadius: '0' },
          0
        )

        .fromTo(
          '.content-showreel',
          { opacity: 1 },
          { opacity: 0, y: () => getY(), duration: 0.01 },
          0
        )

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

  const heroHeightRef = useRef(0)

  useEffect(() => {
    const heightDiv = document.querySelector('.height-div').offsetHeight

    if (heroHeightRef.current === 0) {
      heroHeightRef.current = heroSection.current.offsetHeight
    }

    const heroHeightFunc = () => {
      if (window.innerWidth > 767) {
        heroSection.current.style.minHeight =
          heroHeightRef.current + heightDiv - 120 + 'px'
        ScrollTrigger.refresh()
      } else {
        // do nothing
      }
    }
    heroHeightFunc()
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


  return (
    <>
      <SEO
        title="Makerrs | Unlock the AI Advantage for Your Brand"
        description="We harness creativity, artificial intelligence and technology to help B2B and B2C brands differentiate, connect, endure in a world that’s rapidly evolving."
        url="https://www.makerrs.com/ai-labs/ai-solutions"
      />
      
      <section
        className="pt-15 md:pt-24 relative bg-rb-mercury text-rb-black "
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <h1 className="hero-text md:text-[112px] md:leading-[1.01] font-everett font-medium md:tracking-[-2.24px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px]">
             <p>UNLOCK THE <span className="text-[#FF1A40]">AI</span> {' '}</p>
             <div>
              <span className="hidden md:inline-block"> ADVANTAGE </span>
              <div className={`content aspect-[1920/1080] origin-top ${styles.content} hidden md:inline-block`} ref={containerRef}></div>
              {/* <span className="hidden md:inline-block md:ml-[2.8rem]"> FOR </span> */}
             </div>
            <span className="block md:hidden">ADVANTAGE</span>
            {/* <span className='block md:hidden'>FOR YOUR</span> */}
            {/* <span className='block md:hidden'>BRAND</span> */}
            {/* <span className="md:translate-x-[20px] inline-block relative md:right-[18px] md:top-[28px] md:block hidden">YOUR BRAND</span> */}
          
          </h1>
           <div className="heroMarquee flex md:flex-row flex-col items-start justify-between border-t border-t-rb-davy-grey/50 pt-6 md:pt-8 mt-6 md:mt-20 md:pb-24 gap-4 md:gap-0">
            <div className="w-full md:w-1/2 text-[16px] leading-[1.25] tracking-[-0.64px] font-everett md:text-[22px] md:leading-[1.45] md:tracking-[-0.88px] font-medium">
              Harness AI’s potential for brand communications.
            </div>
            <div className="w-full md:w-1/2 text-[16px] leading-[1.5] md:text-[28px] md:leading-[1.28] tracking-[-0.64px] md:tracking-[-1.12px] font-semibold">
              Across industries, we help businesses strategically identify and embrace AI to connect with audiences more effectively in an AI-first world.
            </div>
          </div>
        </div>

        <div
          className="w-full  bottom-0 left-0 select-none md:aspect-[1920/1080] relative  md:origin-top mx-auto"
          onClick={onModalOpen}
          data-rb-cursor
          data-rb-cursor-type="play"
          ref={insetRef}
        >
        <div className="relative w-full aspect-[1920/1080] hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/ai-solutions/ai_solutions_headers.mp4"
            poster="/img/who-we-are/ai_solution_video_poster.png"
            className="absolute inset-0 w-full  web-vid h-full object-cover"
          ></video>
        </div>

        <div className="relative w-full aspect-[1920/1080] md:hidden block">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/ai-solutions/ai_solutions_headers.mp4"
            poster="/img/who-we-are/ai_solution_video_poster.png"
            className="absolute inset-0 w-full mt-8 web-vid h-full object-cover"
          ></video>
        </div>

          <div className="absolute -bottom-4 right-4 z-10 backdrop-blur-2xl bg-rb-black/50 rounded-[32px] py-[17px] px-4.5 pl-[20px] overflow-hidden md:hidden block">
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
        </div>
      </section>

      <section className="pb-15 pt-[90px] md:py-30 bg-white h-[300vh] featured-section">
        <div className="sticky top-[10%] md:top-5">
          <div className="overflow-hidden">
            <div className="container">
              <LineHeading className="mb-6 md:mb-7.5">
                AI Consulting for Brands
              </LineHeading>
              <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
                Your Strategic Partner in the AI Era
              </div>

              <div className="flex gap-8 feature-slider">
                {sliderCards.map(({ key, imgurl, alt, title, desc }) => (
                  <div
                    key={key}
                    className="bg-rb-service-grey py-6 md:py-8 px-5 md:px-6 rounded-md md:rounded-lg min-w-full md:min-w-[33.33%] "
                  >
                    <div className=" text-black">
                      <img src={`/img/services/approach${imgurl}`} alt={alt} width={60} height={60} />
                      <div className="mt-4 mb-2 md:mb-[6px] text-[16px] leading-[1.1] font-medium font-everett md:text-input-large">
                        {title}
                      </div>
                      <div className="text-sm md:text-[16px] md:leading-[1.5] opacity-80">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-2 bg-rb-black/10 w-full relative overflow-hidden mt-16">
                <div className="progress-slider absolute inset-0 w-full h-full bg-rb-red"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <RedbangleWaySection
        data={redbanglewayThink}
        image={{
          src: '/img/services/adobe_express.gif',
          alt:'think process',
          width: '500',
          height: '500',
        }}
        sectionBG='!pt-0 !pb-15 md:!pb-30'
        title='Our AI Solutions Methodology'
        flexValue='md:flex-row'
      />

      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="1084150253"
        videopath="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/ai-solutions/ai_solutions_headers.mp4"
      >
        <div className="relative max-w-[80%] w-full">
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
            src="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/ai-solutions/ai_solutions_headers.mp4"
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

export default AISolutions
