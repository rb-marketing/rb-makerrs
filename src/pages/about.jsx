import { aboutSchema } from '@/components/schema/about-schema'
import {
  LineHeading,
  RedbangleWaySection,
  TrustedBrandsSection,
  VideoModal,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import Script from 'next/script'
import { useEffect, useState, useRef } from 'react'
import styles from '@/styles/home.module.scss'
import { gsap } from 'gsap'
import { aboutServices, redbanglewayCreateAbout } from '@/content/services'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const WhoWeAre = () => {
  const heroSection = useRef()
  const containerRef = useRef()
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const insetRef = useRef()
  useEffect(() => {
    const mm = gsap.matchMedia()
    // mm.add('(max-width:768px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       scrub: 0.2,
    //       start: '50% 40%',
    //       end: '80% 20%',
    //       trigger: heroSection.current,

    //       // markers: true,
    //     },
    //   })
    //   const getY = () => {
    //     const mEl = 72 + 50 + 72
    //     const titleElm = containerMbRef.current.getBoundingClientRect().height

    //     const y = mEl + titleElm
    //     return y
    //   }
    //   tl.fromTo(
    //     '.content-showreel',
    //     { opacity: 1, y: 0, duration: 0.05 },
    //     { opacity: 0, y: () => getY() },
    //     0
    //   ).fromTo('.play-circle, .play-icon', { opacity: 0.5 }, { opacity: 1 })

    //   return () => {
    //     tl.kill()
    //   }
    // })
    // mm.add('(min-width:768px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       scrub: 0.2,
    //       start: '35% 40%',
    //       end: '60% 32%',
    //       trigger: heroSection.current,
    //       // markers: true,
    //     },
    //   })

    //   const getY = () => {
    //     const mEl = document
    //       .querySelector(`.heroMarquee`)
    //       .getBoundingClientRect().height
    //     //   +
    //     // 32 + //padding
    //     // 80 + // marquee margin
    //     // 108 // content height
    //     const titleElm = document
    //       .querySelector(`.hero-text`)
    //       .getBoundingClientRect().height

    //     const y = mEl + titleElm - 50

    //     return y
    //   }

    //   tl.fromTo(
    //     insetRef.current,
    //     {
    //       width: () => {
    //         const cistyles = containerRef.current?.getBoundingClientRect()
    //         return cistyles.width
    //       },

    //       y: () => -1 * getY(),
    //     },
    //     {
    //       width: '100%',

    //       y: 0,

    //       duration: 0.8,
    //     }
    //   )
    //     .fromTo(
    //       '.web-vid',
    //       {
    //         x: () => {
    //           const istyles = containerRef.current?.getBoundingClientRect()
    //           const nstyles = insetRef.current?.getBoundingClientRect()
    //           const diffContainer = Math.min(istyles.left - nstyles.left, 0)
    //           return diffContainer
    //         },
    //         borderRadius: '70px',
    //       },
    //       { x: 0, borderRadius: '0' },
    //       0
    //     )

    //     .fromTo(
    //       '.content-showreel',
    //       { opacity: 1 },
    //       { opacity: 0, y: () => getY(), duration: 0.01 },
    //       0
    //     )

    //   return () => {
    //     tl.kill()
    //   }
    // })
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
  return (
    <>
      <SEO
        title="Red Bangle: The Brand Solutions Agency for your B2C Business"
        description="Discover Red Bangle–a brand solutions agency offering brand strategy, brand design, creative ad campaigns, best branded content and technology solutions for B2C brand growth in India."
        url="https://www.redbangle.com/brand-content-production-agency"
      />

      {/* <section className="py-14 md:py-23  overflow-hidden bg-rb-mercury text-rb-black ">
        <Marquee duration={20}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            WHO WE ARE
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/who-we-are/about-pill.webp"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            WHO WE ARE
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/who-we-are/about-pill-2.webp"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
        </Marquee>
        <div className="container">
          <div className="max-w-[1100px] w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 text-rb-black">
            We are a brand solutions agency with zero chill for the ordinary. We drive 
            brand growth armed with the power of an important question: <br/>WHY NOT? 
          </div>
        </div>
      </section> */}

      <section
        className="pt-10 pb-10 md:pb-24 md:pt-24 relative bg-rb-mercury text-rb-black "
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <h1 className="hero-text md:text-[112px] md:leading-[1.01] font-everett font-medium md:tracking-[-2.24px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px]">
            We are an <span className="text-[#FF1A40]">AI-first</span>
            <br />
            creative{' '}
            <div
              className={`content aspect-[1920/1080] origin-top ${styles.content} hidden md:inline-block`}
              ref={containerRef}
            >
              <div
                className="w-full  bottom-0 left-0 select-none md:aspect-[1920/1080] relative mx-auto translate-y-4"
                onClick={onModalOpen}
                data-rb-cursor
                data-rb-cursor-type="play"
                ref={insetRef}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/creative_agency.mp4"
                  poster="/img/home/hero-poster.webp"
                  className="w-full md:block translate-x-[-0.225px] translate-y-0 rotate-0 scale-100 rounded-[70px]"
                  width="1920"
                  height="1080"
                ></video>
              </div>
            </div>
            <span className="md:translate-x-[20px] inline-block">company</span>
          </h1>
          <div className="heroMarquee flex md:flex-row flex-col items-start justify-between border-t border-t-rb-davy-grey/50 pt-6 md:pt-8 mt-6 md:mt-20 gap-4 md:gap-0">
            <div className="w-full md:w-1/2 text-[16px] leading-[1.25] tracking-[-0.64px] font-everett md:text-[22px] md:leading-[1.45] md:tracking-[-0.88px] font-medium">
              We are a disruptive AI- and tech-first creative business.
            </div>
            <div className="w-full md:w-1/2 text-[16px] leading-[1.5] md:text-[28px] md:leading-[1.28] tracking-[-0.64px] md:tracking-[-1.12px] font-semibold">
              We offer creative solutions, AI products for marketers, and we
              craft sticky original content IPs. We work with over 60 brands
              globally.
            </div>
          </div>
        </div>
        <div
          className="w-full  bottom-0 left-0 select-none md:aspect-[1920/1080] relative block md:hidden  md:origin-top mx-auto"
          onClick={onModalOpen}
          data-rb-cursor
          data-rb-cursor-type="play"
          ref={insetRef}
        >
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            src="/creative_agency.mp4"
            poster="/img/home/hero-poster.webp"
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
            poster="/img/home/hero-poster.webp"
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

      <section className="pt-10 pb-6 md:py-30">
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
                Every question is our spark - the thing that flips conventions,
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
                {/* <span className="font-semibold">
                  Explore our services:{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/strategy"
                  >
                    Strategy
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/design"
                  >
                    Design
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/campaign"
                  >
                    Campaign
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/content"
                  >
                    Content
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/technology"
                  >
                    Technology
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/production"
                  >
                    Production
                  </Link>
                  .
                </span> */}
              </p>
            </div>

            <div className="w-full relative md:w-[40%] flex items-center justify-center min-h-[250px] right-5">
              <div className="relative w-40 h-40 md:w-60 md:h-60">
                <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden z-10">
                  <img
                    src="/img/who-we-are/lakshmi-rebecca.png"
                    alt="Lakshmi Rebecca"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full translate-x-[50%] translate-y-[50%] rounded-full overflow-hidden z-20">
                  <img
                    src="/img/who-we-are/sunil-patrapati.png"
                    alt="Sunil Patrapati"
                    className="w-full h-full object-cover object-right"
                  />
                </div>
              </div>
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

      <RedbangleWaySection
        sectionBG="bg-rb-mercury md:py-30 py-10"
        title={
          <div className="md:max-w-[720px]">
            We run on our patented technology
          </div>
        }
        data={redbanglewayCreateAbout}
        image={{
          src: 'img/who-we-are/what-makes-us-unique.webp',
          width: '491',
          height: '562',
        }}
        heading="Our creative cloud platform"
      />

      <section className="pb-7.5 pt-10 md:pb-15 md:pt-30">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">Explore Verticals</LineHeading>
          <div className="text-title md:text-title-md-tight max-w-[930px]">
            Explore our global businesses
          </div>
          <div className="hidden md:block mt-12 md:mt-18">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current
                swiper.params.navigation.nextEl = nextButtonRef.current
              }}
              modules={[Navigation]}
              className="aboutServicesSlider"
            >
              {aboutServices.map(
                ({ id, title, desc, img, imgmweb, alt, href }) => (
                  <SwiperSlide key={id}>
                    <a
                      href={href}
                      className="text-rb-black"
                      data-rb-cursor
                      data-rb-cursor-type="startnow"
                    >
                      <picture>
                        <source
                          media="(min-width:768px)"
                          srcSet={img}
                          width="606"
                          height="681"
                        />
                        <img
                          src={imgmweb}
                          alt={alt}
                          width="515"
                          height="468"
                          className="h-[454px]"
                        />
                      </picture>
                      <div className="my-3 text-accordion font-everett font-medium md:text-accordion-large">
                        {title}
                      </div>
                      <div className="text-[16px] leading-[1.5] md:text-acc-large md:opacity-80 opacity-90">
                        {desc}
                      </div>
                    </a>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
          <div className="block md:hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mt-12 md:mt-18">
              {aboutServices.map(
                ({ id, title, desc, img, imgmweb, alt, href }) => (
                  <a
                    href={href}
                    key={id}
                    className="text-rb-black"
                    data-rb-cursor
                    data-rb-cursor-type="startnow"
                  >
                    <picture>
                      <source
                        media="(min-width:768px)"
                        srcSet={img}
                        width="606"
                        height="681"
                      />
                      <img
                        src={imgmweb}
                        alt={alt}
                        width="515"
                        height="468"
                        className=""
                      />
                    </picture>
                    <div className="my-3 text-accordion font-everett font-medium md:text-accordion-large">
                      {title}
                    </div>
                    <div className="text-[16px] leading-[1.5] md:text-acc-large md:opacity-80 opacity-90">
                      {desc}
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustedBrandsSection
        className="bg-white py-7.5 md:py-15"
        heading="Trusted by global brands"
      />

      {/* <section className="py-30">
        <div className="container">
          <div className="border border-rb-stroke-dark rounded-3xl p-4 lg:p-10 flex flex-col-reverse lg:flex-row flex-wrap items-center">
            <div className="w-full lg:w-3/5 p-0 lg:pr-5 xl:px-10">
              <h2 className="text-2xl md:text-[52px] leading-[100%] font-semibold mb-8">
                {' '}
                Meet our team and partners
              </h2>
              <p className="text-sm md:text-lg mb-10 opacity-80">
                With a sharp eye on the market and collaborative creativity
                lighting the way, we don&apos;t just think outside the box - we
                crush it. Powered by a bold team and rock-solid partners, we
                craft game-changing solutions that deliver results, shatter
                expectations, and put our clients in the fast lane to growth.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Button
                  href="/team"
                  className="w-full md:w-auto"
                  suffix={<LineArrow hover />}
                >
                  MEET OUR LEADERS
                </Button>
                <Button
                  intent="p-secondary"
                  onClick={loadMore}
                  className="w-full md:w-auto"
                  suffix={<LineArrow hover />}
                  href="/partners"
                >
                  VIEW OUR PARTNERS
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-2/5 mb-10 lg:mb-0">
              <img
                src="/img/who-we-are/who-we-are.jpg"
                alt="discover partner"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="pb-30">
        <ArticleSection
          hideSubscribe
          lineheading="NEWSROOM"
          heading="Media highlights and press roundup"
        />
      </div> */}
      {/* <div className="pb-30">
        <AboutNewsRoom
        hideSubscribe
        lineheading="NEWSROOM"
        heading="Media highlights and press roundup"
        />
      </div> */}
      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="1084150253"
        videopath="/creative_agency.mp4"
      >
        <div className="relative max-w-[80%] w-full">
          <iframe
            src="https://player.vimeo.com/video/1084150253?h=dff56feeb5&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </VideoModal>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default WhoWeAre
