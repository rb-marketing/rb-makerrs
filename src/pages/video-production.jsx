
import styles from '@/styles/services.module.scss'
import {
  LineHeading,
  TrustedBrandsSection,
  RollupNumber,
  ServiceHeroSection,
  ExploreMoreSection,
  ServiceCardSection
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

const VideosServices = () => {
  const _posts = similarPosts.map(postsMapper)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const router = useRouter()

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
        'How agile and scalable are your international video production services?',
      content:
        'From a skeleton crew for a single testimonial video shoot to a full-fledged team of Directors, Producers, Cinematographers, Sound Technicians, and Spot-Editors required to capture a large-scale event, we offer scalable video production services for your business. Craft global communications worry-free with Makerrs.',
    },
    {
      key: 1,
      title: 'Do you support multi-location shoots?',
      content:
        'Be it a 3-location shoot in 1 city for one commercial video or film, or a 10-city production for a documentary film or series—talk to us for every film and video production requirement you have. No matter where you need a shoot done, our experienced producers custom-curate and brief local crews, and manage the production end-to-end for you.',
    },
    {
      key: 2,
      title: 'Is the video production managed in-house at Makerrs?',
      content:
        'Yes, the video production process is managed end-to-end by an experienced team of internationally qualified producers at Makerrs. Our producers have worked with crews across continents and on a wide range of film and video requirements. They are pros at curating crews, detailing shoot briefs, and running shoots on time and on budget.',
    },
    {
      key: 3,
      title: 'Which countries do you have video crews in?',
      content:
        'From the USA, UK and Europe to Japan, Indonesia, Thailand, Singapore, Australia, China, South Africa, Kenya, and India–we provide professional video crews across 100+ countries. Our services cover all the major cities and business hubs in the world. We are here to support the communication needs of your borderless brand.',
    },
    {
      key: 4,
      title:
        'How do you ensure quality consistency in the case of a multi-country production?',
      content: (
        <>
          <div>
            There are several ways in which we ensure quality consistency across locations. These include:
          </div>
          <div className="mt-5">
            <ol className="list-disc space-y-4 ml-8">
              <li>Curating the right on-ground crews</li>
              <li>
                Detailed shoot briefing documents that define everything from cameras, lights and frames to sound, local weather information, shoot-day schedule, footage upload guidelines and more
              </li>
              <li>
                Active remote Producer involvement in real time to ensure location access and the right video framing and lighting
              </li>
              <li>
                A virtual Film Director for the whole project, if required, to ensure quality consistency across crews, locations and footage
              </li>
              <li>
                And, on more complex projects, a film Director, Assistant Director or Producer on location or on set to guide every crew.
              </li>
            </ol>
          </div>
        </>
      ),
    },
    {
      key: 5,
      title: 'What is your typical international videography workflow?',
      content: (
        <>
          <div>
          Our on-demand video crew services typically have the following workflow:
          </div>
          <ol className="list-decimal pl-[25px] py-3">
            <li>Project Briefing</li>
            <li>Crew Curation</li>
            <li>Estimate &amp; Proposal</li>
            <li>Shoot Detailing</li>
            <li>Shoot Guidelines Document</li>
            <li>Crew Briefing</li>
            <li>Payment & Shoot Confirmation</li>
            <li>Scheduling &amp; Coordination</li>
            <li>Production / Shoot</li>
            <li>Footage Upload to Cloud</li>
            <li>Quality Checks of the Footage</li>
            <li>Footage Transfer</li>
          </ol>
        </>
      ),
    },
    {
      key: 6,
      title: 'How do you deliver the footage after the shoot?',
      content:
        'All the captured footage is uploaded to the cloud and delivered via Dropbox, Google Drive or our Creative Cloud platform. Alternatively, we could upload the footage to a cloud platform of your choice that you provide us access to, or on a hard disk.',
    },
    {
      key: 7,
      title: 'Do you also offer video post-production services?',
      content: (
        <>
          Yes, often clients require video post-production services once a shoot
          is done. Just{' '}
          <a
            onClick={handleClick}
            className="underline cursor-pointer hover:text-rb-link-green"
          >
            send us a brief
          </a>{' '}
          and we’ll be happy to undertake custom video editing for you. We will also be able to support any additional requirements you may have, such as voice over, music from stock, addition of stock or archival footage, graphic design, motion graphics, colour grading, etc. 
        </>
      ),
    },
    {
      key: 8,
      title:
        'What happens if I cannot be at the shoot location? How can I still see or track what’s happening on-ground?',
      content: (
        <>
         We’ll be happy to organise a live-stream feed of the shoot for you. You won’t miss a thing.<br/>
          <a
            onClick={handleClick}
            className="underline cursor-pointer hover:text-rb-link-green"
          >
            Book a video crew
          </a>{' '}
          with Makerrs today!
        </>
      ),
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
      key: 3,
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
      key: 4,
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
      key: 5,
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

  const ourOfferings = [
    {
      title: (
        <>
          Single-camera&nbsp;
        </>
      ),
      description:
        'Get a single-camera video crew to shoot interview, testimonial and leadership videos wherever you need. Book a curated video crew today.',
      content: [
        'Experienced Cinematographer',
        'Camera, Sound & Lights',
        'Local Booking & Permissions',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/crew/single-camera-shoot.jpg',
    },
    {
      title: (
        <>
          Multi-camera&nbsp;
        </>
      ),
      description:
        'From a 3-camera video crew to capture a podcast interview to a 6-camera crew to film an event—get professional video crews that scale with your brief.',
      content: [
        'Experienced Producers',
        'Hand-picked Video Crews',
        'Directors and Assistant Directors',
        'Complete Equipment Support',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/crew/multi-camera-shoot.webp',
    },
    {
      title: (
        <>
          Multi-location&nbsp;
        </>
      ),
      description:
        'When you need a single-camera shoot in multiple cities or a multi-camera shoot in multiple countries. Video production that scales with your business.',
      content: [
        'Experienced Producers',
        'Hand-picked Video Crews',
        'Directors and Assistant Directors',
        'Complete Equipment Support',
        'Local Booking & Permissions',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/crew/multi-location-shoot.webp',
    },
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
      serviceTitle: 'GET VIDEO',
      serviceDescription:
        'We plan, conceptualise, produce and scale video content – be it for your next product or your YouTube channel. We also offer on-demand video production services for customer testimonial videos, recruitment videos, corporate videos and more. Explore our video production services.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/video-production',
    },
    {
      id: 2,
      serviceTitle: 'GET PODCAST',
      serviceDescription:
        'Looking to lead industry conversations, build community and drive ROI? Go from content research, podcast concept and positioning, to podcast branding, production, distribution and amplification with one agency. Make a successful podcast today.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/podcast-production-services',
    },
    {
      id: 3,
      serviceTitle: 'GET CAMPAIGN',
      serviceDescription:
        'From digital campaigns and integrated campaigns, to outdoor and print campaigns – our creative strategy is rooted in a simple yet powerful human insight unique to your brand and product or service. Send us a campaign brief today.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/advertising-agency',
    }
  ]

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
            <h1 className="inline">Be it your next big product launch video or YouTube channel growth, be it on-demand video production or a branded video series - we strategise, script and produce videos across formats, genres and locations. On-brand and on-time, every time.</h1>
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

      <section className="bg-rb-service-grey md:py-30 py-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-center md:flex-row flex-col gap-8 md:gap-0">
            <div className="w-full md:w-2/5 px-4">
              <h2 className="text-title md:text-title-md mb-4 font-medium font-everett">
                Video production across 100+ Countries
              </h2>
              <p>
                From London to Tokyo, from San Francisco to Bangalore - we offer end to end video production services across locations. Just send us a brief, and we&apos;ll take care of the concepts, scripts, design, production, post production and more. On time, every time. No matter how many videos.
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

      <section className="md:pt-30 md:pb-15 py-7.5">
        <div className="container">
          <h2 className="text-center text-title md:text-title-md mb-10 md:mb-18 font-everett">
            Your international video crew booking agency
          </h2>
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Borderless Production
                </div>
                <p className="text-16">
                  From Paris to Singapore and New York to New Delhi–get professional video crews for hire anywhere you need them. Send us a production brief today.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/services/crew/video-shoot-service-2.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Curated Crews
                </div>
                <p className="text-16">
                  Get hand-picked professional video crews, custom creative and technical briefs, and hands-on quality control on every shoot. Get professional video production services with Makerrs.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/services/crew/video-shoot-service-1.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/services/crew/video-shoot-service-3.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-10 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Scalable Services
                </div>
                <p className="text-16">
                  Be it a single-camera testimonial shoot or a multi-camera event shoot, our managed video crew services scale with your brief—no matter how many shoots you need in one week or how many crews you need on one day.
                </p>
              </div>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/services/crew/video-shoot-service-4.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-0 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Quality & Ownership
                </div>
                <p className="text-16">
                  Our curated film and video crews and tried and tested cloud-based processes drive complete execution ownership at our end. You won’t have to worry about creative quality and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pb-15 md:pt-30 py-7.5">
        <div className="container">
          <div>
            <div className="uppercase text-rb-black text-sm md:text-xl font-semibold flex items-center">
              <span
                className={`h-px w-7.5 md:w-headingLine block mr-3 bg-rb-black`}
              ></span>
              <span>Book a Video Shoot</span>
            </div>
            <h3 className="text-title md:text-title-md mb-10 md:mb-18 md:mt-8 mt-6 font-everett max-w-[718px]">
              Book a video crew anywhere, anytime
            </h3>
          </div>
          <div className="md:mt-18">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {ourOfferings.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`bg-rb-service-grey  md:p-8 px-4 py-6 ${styles.offeringcard}`}
                  >
                    <div className="flex flex-col justify-between min-h-full">
                      <div>
                        <div className="flex gap-[10px]">
                          <h3
                            className={`md:text-[36px] text-xl md:mb-3 mb-2 font-medium font-everett md:leading-[39px] leading-6 tracking-[-1.44px] `}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p className="md:text-base text-sm">
                          {item.description}
                        </p>
                        <hr className="my-6" />
                        <div className="gap-[14px] flex flex-col">
                          {item.content.map((data, index) => {
                            return (
                              <div className="flex md:gap-3 gap-2" key={index}>
                                <div className={`${styles.successcheck}`}></div>
                                <p className="font-semibold text-sm md:text-base">
                                  {data}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="mt-8">
                          <img src={item.img} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
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
