import { SEO } from '@/components/shared/SEO'
import { SolutionsSection, Marquee, VideoModal } from '@/components/shared'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { LineHeading, RevealText } from '@/components/shared'
import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'

import styles from '@/styles/home.module.scss'
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
      name: 'taneria.png',
      width: '132',
      height: '36',
      alt: 'taneria',
      className: '',
    },
    {
      id: 4,
      name: 'swiggy.svg',
      width: '157',
      height: '39',
      alt: 'swiggy',
    },
    {
      id: 5,
      name: 'bosch.webp',
      width: '151',
      height: '33',
      alt: 'bosch',
    },
    {
      id: 6,
      name: 'general-electric.png',
      width: '200',
      height: '150',
      alt: 'general-electric',
    },
    {
      id: 7,
      name: 'Tanishq.png',
      width: '80',
      height: '67',
      alt: 'Tanishq',
    },
    {
      id: 8,
      name: 'vivo.png',
      width: '127',
      height: '52',
      alt: 'vivo',
    },
    {
      id: 9,
      name: 'l74-logo.png',
      width: '60px',
      // height: '67px',
      alt: 'l74-logo',
    },
    {
      id: 10,
      name: 'itc.png',
      width: '60px',
      // height: '30px',
      alt: 'itc',
    },
    {
      id: 11,
      name: 'wipro.svg',
      width: '83',
      height: '66',
      alt: 'Wipro',
    },
    {
      id: 12,
      name: 'mumbai-indians.png',
      width: '100px',
      // height: '40px',
      alt: 'mumbai-indians',
    },
    {
      id: 13,
      name: 'sequoia.png',
      width: '167',
      height: '52',
      alt: 'sequoia',
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
      name: 'my-11-circle.webp',
      width: '154',
      height: '42',
      alt: 'my-11-circle',
    },
    {
      id: 16,
      name: 'dara.png',
      width: '200',
      height: '150',
      alt: 'dara',
    },
    {
      id: 17,
      name: 'vymo-logo.webp',
      width: '127',
      height: '52',
      alt: 'vymo-logo',
    },
    {
      id: 18,
      name: 'exicom.png',
      width: '163',
      height: '44',
      alt: 'exicom',
    },
    {
      id: 19,
      name: 'treebo.png',
      width: '163',
      height: '44',
      alt: 'treebo',
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
                The
                <span className="hidden md:inline"> AI-First</span>
              </span>
            </div>

            <div className={` ${styles.title} block md:hidden mt-[-28px]`}>
              <span className={`${styles.ltor} `}> AI-First</span>
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
                  CREATIVE AGENCY
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
                We are a technology-first independent creative agency. We ask
                the questions that fuel growth for over 60 brands globally.
              </div>
              <div className="flex items-center justify-center md:flex-row flex-col md:mt-10 mt-9 md:gap-5 gap-4">
                <Button
                  href="/contact?type=client"
                  className="font-bold  w-full md:w-auto !inline-flex"
                  suffix={<LineArrow hover />}
                >
                  Get creative solutions
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

      <div
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

        {/* <svg
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
        </svg> */}
      </div>

      <section className="bg-white pt-18 md:pt-30 pb-18 md:pb-30">
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">Our Manifesto</LineHeading>
          <div className="max-w-[1046px]">
            <RevealText text="We ask the questions that matter the most. Every question is our spark—the thing that flips conventions, fuels fresh ideas and finds answers no one else saw coming. It’s not just how we work; it’s what drives us." />
          </div>
          <Button
            href="/about/who-we-are"
            className="font-bold mt-11 md:mt-16 w-full md:w-auto !inline-flex"
            suffix={<LineArrow hover />}
          >
            See manifesto
          </Button>
        </div>
      </section>

      <div>
        <SolutionsSection />
      </div>

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
