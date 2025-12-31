import { aboutSchema } from '@/components/schema/about-schema'
import {
  RedbangleWaySection,
  RollupNumber,
  SEO,
  TrustedBrandsSection,
  VideoModal,
  Scrollspy,
} from '@/components/shared'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { redbanglewayCreateAbout } from '@/content/services'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from '@/styles/sections/StatsSection.module.scss'
import Link from 'next/link'
import React from 'react'

export const TechnologyPlatform = () => {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const videoRef = useRef(null)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  const [hasReachedTop, setHasReachedTop] = useState(false)
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
  // const stats = [
  //   {
  //     id: 0,
  //     countUpProps: {
  //       value: 3000,
  //       suffix: <span className="text-rb-red">+</span>,
  //     },
  //     text: (
  //       <span className="md:max-w-[188px]">
  //         Creative Projects Run Seamlessly On the Cloud
  //       </span>
  //     ),
  //   },
  //   {
  //     id: 1,
  //     countUpProps: {
  //       value: 1000,
  //       suffix: (
  //         <div className="inline-flex">
  //           <span className="text-rb-red">+</span>
  //         </div>
  //       ),
  //     },
  //     text: (
  //       <span className="md:max-w-[188px]">
  //         Creative Collaborators in 100+ Countries
  //       </span>
  //     ),
  //   },
  //   {
  //     id: 2,
  //     countUpProps: {
  //       value: 30,
  //       suffix: (
  //         <span className="inline-flex">
  //           <span className="text-rb-red">%</span>
  //         </span>
  //       ),
  //     },
  //     text: (
  //       <span className="md:max-w-[188px]">
  //         Faster Creative Delivery, 0 loss of Creative Assets
  //       </span>
  //     ),
  //   },
  // ]
  const stats = [
    {
      id: 0,
      countUpProps: {
        value: 3,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <span className="">
          Creative Projects
          <br />
          Run On the Cloud
        </span>
      ),
    },
    {
      id: 1,
      countUpProps: {
        value: 1,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <>
          Creative Collaborators <br />
          in 100+ Countries
        </>
      ),
    },
    {
      id: 2,
      countUpProps: {
        value: 30,
        suffix: (
          <div className="inline-flex">
            <span className="text-rb-red">%</span>
          </div>
        ),
      },
      text: (
        <>
          Faster Creative Delivery <br />0 loss of Creative Assets
        </>
      ),
    },
  ]

  const cards = [
    {
      id: 0,
      serviceTitle: 'B2B Global Services',
      serviceDescription:
        'End–to-end creative solutions for global B2B enterprises.',
      serviceAmblem: '/img/who-we-are/b2b_global_full.svg',
      bgColor: 'rgb(147 0 0)',
      textColor: '#ffffff',
      href: process.env.NEXT_PUBLIC_B2B,
    },
    {
      id: 1,
      serviceTitle: 'B2C India Services',
      serviceDescription:
        'Brand Content solutions for consumer brands in India.',
      serviceAmblem: '/img/who-we-are/b2c_india_full.svg',
      bgColor: 'rgb(198, 0, 37)',
      textColor: '#ffffff',
      href: process.env.NEXT_PUBLIC_B2C,
    },

    // {
    //   id: 2,
    //   serviceTitle: 'AI Products',
    //   serviceDescription:
    //     'Artificial intelligence products that amplify brand communications.',
    //   serviceAmblem: '/img/who-we-are/ai_products_full.svg',
    //   bgColor: 'rgb(253, 2, 56)',
    //   textColor: '#ffffff',
    //   href: '',
    // },
  ]

  const tableData = [
    {
      icon: '/img/services/bulb.svg',
      need: 'Built for',
      others: 'Creative agencies',
      redBangle: 'General productivity',
    },
    {
      icon: '/img/services/professional_project_management.svg',
      need: 'Workflow',
      others: 'Brief-to-delivery pipeline',
      redBangle: 'Task-based lists',
    },
    {
      icon: '/img/services/great_storytelling.svg',
      need: 'Role-specific interface',
      others: 'Clients, Teams, Collaborators',
      redBangle: 'Single-user interface',
    },
    {
      icon: '/img/services/collabarator.svg',
      need: 'Collaborator database',
      others: 'Sign-ups, assignments & rating',
      redBangle: 'Absent / Manual',
    },
    {
      icon: '/img/services/industry_knowledge.svg',
      need: 'Client database',
      others: 'Clients, Teams and POs',
      redBangle: 'Absent / Manual',
    },
    {
      icon: '/img/services/personal_dashboard.svg',
      need: 'Personal dashboards',
      others: 'Clients, Us, Collaborators',
      redBangle: 'Not available',
    },
    {
      icon: '/img/services/project_hierarchy.svg',
      need: 'Project hierarchy',
      others: 'Projects and sub-projects',
      redBangle: 'Flat projects only',
    },
    {
      icon: '/img/services/reporting.svg',
      need: 'Reporting',
      others: 'Business-wide analytics',
      redBangle: 'Manual tracking',
    },
    {
      icon: '/img/services/flexible_turnaround_times.svg',
      need: 'Schedules',
      others: 'Project and role-based',
      redBangle: 'Static task dates',
    },
    {
      icon: '/img/services/access_controls.svg',
      need: 'Access controls',
      others: 'Role-based controls',
      redBangle: 'Absent / Manual',
    },
    {
      icon: '/img/services/estimates.svg',
      need: 'Estimates',
      others: 'Rate cards and custom',
      redBangle: 'Manual calculations',
    },
    {
      icon: '/img/services/expense_tracking.svg',
      need: 'Expense tracking',
      others: 'Integrated and itemized',
      redBangle: 'External tools required',
    },
    {
      icon: '/img/services/any_format_video.svg',
      need: 'Asset Library',
      others: 'Searchable and repurposable',
      redBangle: 'Basic file storage',
    },
    {
      icon: '/img/services/easy_feedback.svg',
      need: 'Feedback on Creatives',
      others: 'Timestamped, in-context',
      redBangle: 'General comments only',
    },
  ]

  const services = [
  {
    key: 'clients',
    label: 'For Clients',
    title: 'OUR PLATFORM FOR CLIENTS',
    image: { src: '/img/services/for_clients.png' },
    // video: {
    //   src: '/img/services/design-rect.mp4',
    //   poster: '/img/services/design-rect.png',
    //   width: '1440',
    //   height: '810',
    // },
    content:
      'Manage briefs, projects and assets in one place.',
    steps: [
      '01. Gateway to an agency with an expandable global talent pool ',
      '02. End-to-end cloud based workflows - Briefs, SPOCS, project schedules and files on a unified dashboard',
      '03. Centralized brand assets and aligned creative outputs',
      '04. Real-time tracking and notifications across projects, at scale',
      '05. Interactive video feedback with easy timestamps',
      '06. Asset repurposing in minutes, not days',
    ],
    detail: '',
    work: '',
  },
  {
    key: 'collaborators',
    label: 'For Collaborators',
    title: 'OUR PLATFORM FOR COLLABORATORS',
    image: { src: '/img/services/for_collaborators.png' },
    // video: {
    //   src: '/img/services/campaign-rect.mp4',
    //  poster: '/img/services/campaign-slid-1.webp',
    //   width: '1440',
    //   height: '810',
    // },
    content:
      'Workflows designed for freelancers and specialised studios.',
    steps: [
      '01. Detailed talent profiles with portfolio links',
      '02. Assignments based on style, skill and location',
      '03. Clear briefs, schedules and dedicated SPOCs',
      '04. Anytime access to project assets',
      '05. Interactive video feedback',
      '06. Coming soon: a single dashboard for project queries, bookings and invoicing',
    ],
    detail: '',
    work: '',
  },
  {
    key: 'forUs',
    label: 'For Us',
    title: 'OUR PLATFORM FOR US',
    image: { src: '/img/services/for_us.png' },
    // video: {
    //   src: '/img/services/content-rect-1.mp4',
    //  poster: '/img/services/content-rect-2.webp',
    //   width: '1440',
    //   height: '810',
    // },
    content:
      'A platform for our entire creative business.',
    steps: [
      '01. Clients, agency teams, projects and creative collaborators across 25+ countries on one platform',
      '02. Service delivery management for everything from one-off to multi-region projects',
      '03. A single source of truth across teams on clients, briefs, projects, talent, budgets and assets',
      '04. Schedules, rate cards, and expense tracking to boost productivity and project profitability',
      '05. Unlimited collaborator onboarding, curation, assignments and more',
      '06. Searchable and repurposable data on clients, collaborators, projects and project outputs',
    ],
    detail: '',
    work: '',
  }
  ]
  return (
    <>
      <SEO
        title="Red Bangle - Creative Agency that’s AI- and technology-first"
        description="We harness creativity, artificial intelligence and technology to help B2B and B2C brands differentiate, connect, endure in a world that’s rapidly evolving."
        url="https://www.redbangle.com/about/creative-cloud-platform"
      />
      <section className="bg-rb-mercury pt-15 pb-15 md:pb-24 md:pt-24 relative text-rb-black">
        <div className="container">
          <h1 className="text-[56px] tracking-[-1px] md:text-[72px] lg:text-[112px] uppercase leading-[1.07] md:leading-[114px] md:tracking-[-2.24px] font-everett font-medium">
            Our Creative Cloud Platform
          </h1>
          <p className="text-sm md:text-accordion-large font-semibold max-w-[1153px] mt-8 md:mt-16 leading-[21px] md:leading-[1.07] tracking-[-.56px]">
            When we began our journey as an agency in 2017, we began tech-first.
            We’ve since built a patent-pending technology platform that fuels
            our growth.
          </p>
        </div>
      </section>
      <div
        ref={videoRef}
        className={`mt-0 md:mb-[-2px] video-scroll duration-500 ease-out !overflow-visible lg:h-[200vh] md:h-[150vh] ${
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
            src="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/who-we-are/rb_cloud_platform_video.mp4"
            poster="/img/who-we-are/rb_cloud_platform_thumbnail.png"
            className="web-vid w-full h-full object-cover relative"
          ></video>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/who-we-are/rb_cloud_platform_video.mp4"
          poster="/img/who-we-are/rb_cloud_platform_thumbnail.png"
          className="block md:hidden w-full h-full object-cover"
        ></video>
      </div>

      <div className="container pt-15 md:pt-30 md:pb-15">
        <p className="text-xl md:text-2xl text-rb-black/80 opacity-90 font-normal tracking-normal md:leading-[33px] mb-10 md:mb-9">
          Our agency runs on a patent-pending creative cloud technology platform
          that facilitates efficient creative workflows and collaboration
          between us, our clients and our global community of creative
          freelancers and specialist studios.
          <br />
          <br />
          From briefs to estimates, resource allocation, project schedules, personal 
          dashboards and timesheets, to real-time interactive reviews and easy asset 
          access as well as repurposing - our platform delivers all the goodies a great 
          creative cloud collaboration and workflow management solution should. And it was 
          conceptualised, designed and developed by us, for us.
        </p>
        <div className="container px-0 md:block hidden">
          <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/3 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
                key={s.id}
              >
                <div className={`${i === 2 ? 'lg:ml-auto lg:mr-0' : ''}`}>
                  <div className="lg:w-fit ">
                    <RollupNumber {...s.countUpProps} className={`${s.id === 0 ? 'md:-ml-[7px]':''} ${s.id === 2 ? 'md:-ml-[6px]':''}`}/>
                    <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett">
                      {s.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container  px-0 md:hidden block">
          <div className="flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-8 md:gap-y-6 max-w-full md:max-w-none">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
                key={s.id}
              >
                <div
                  className={`lg:w-fit flex lg:flex lg:flex-col lg:mx-auto ${
                    s.id === 1 ? 'md:!ml-12' : ''
                  } ${s.id === 0 ? 'md:!ml-32' : ''} ${
                    s.id === 2 ? 'md:!ml-12' : ''
                  }`}
                >
                  <div>
                    <RollupNumber
                      {...s.countUpProps}
                      className={`font-medium !tracking-[-0.768px] ${s.id === 1 ? '-ml-[3px]':''}`}
                    />
                  </div>
                  <div
                    className={`text-[14px] lg:mt-0 lg:ml-0 leading-[15.54px] md:text-2xl md:leading-7 tracking-[-0.56px] md:tracking-[-0.96px] text-rb-black mt-4 md:mt-3 font-medium font-everett
                      ${s.id === 0 ? 'ml-9' : ''}
                      ${s.id === 1 ? 'ml-9' : ''}
                      ${s.id === 2 ? 'ml-5' : ''}
                      `}
                  >
                    {s.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RedbangleWaySection
        sectionBG="!pb-[40px] !pt-15 md:!py-15"
        title={
          <div className="md:max-w-[720px]">
            We run on patent-pending technology
          </div>
        }
        data={redbanglewayCreateAbout}
        // image={{
        //   src: 'img/who-we-are/our_cloud_platform.jpg',
        //   width: '491',
        //   height: '562',
        // }}
        video={{
          src: '/img/who-we-are/red_bangle_platform.mp4',
          width: '491',
          height: '562',
        }}
        heading="Our creative cloud platform"
      />
      
      <Scrollspy centered secStyles = "md:!pb-15 md:!pt-7">
        {services.map((s, si) => (
          <section
            key={s.key}
            data-spy-id={s.key}
            data-spy-title={s.label}
            className={`overflow-hidden group ${
              si != 0 ? 'mt-[32px] md:mt-30 w-full' : ''
            }`}
          >
            <div className="xl:flex md:justify-center md:px-4 xl:px-0">
              <div className="flex px-4 md:px-0 md:-mx-4 lg:-mx-8 flex-wrap group-odd:flex-row-reverse">
                <div className="w-full md:px-4 md:w-1/2 lg:px-8 self-center flex-shrink-0">
                  <div className="md:h-full md:group-even:float-right md:group-odd:float-left overflow-hidden">
                    <img alt="" {...s.image} className="max-w-full md:max-w-max" />
                    {/* <video
                      {...s.video}
                      className="cover-video max-w-max"
                      autoPlay
                      muted
                      playsInline
                      loop
                    /> */}
                  </div>
                </div>
                <div className={`w-full md:px-4 md:w-1/2 self-center md:max-w-[578px] ${s.key === 'clients'? 'mt-0 md:mt-[30px]':''} ${s.key === 'collaborators'? 'mt-0 md:mt-[31px]':''} ${s.key === 'forUs'? 'mt-0 md:mt-[36px]':''}`}>
                  <h3 className="font-everett font-medium mt-5 md:mt-0 mb-3 md:mb-4 text-xl leading-5.5 tracking-[-0.8px] md:text-[32px] md:leading-9.5 md:tracking-[-1.28px]">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-lg md:leading-6.5 tracking-[-0.28px] md:tracking-[-0.36px] md:max-w-[471px] text-[#100f0fcc]">
                    {s.content}
                  </p>
                  <div className={`gap-x-7 items-end grid my-7 md:my-10 text-sm md:text-base md:leading-5 tracking-[-0.16px]`}>
                    <div>
                      {s.steps
                        .map((step, i) => (
                          <div
                            key={i}
                            className="py-4 md:py-5 border-b border-b-rb-black border-opacity-15 text-[#100f0fcc]"
                          >
                            {step}
                          </div>
                        ))}
                    </div>
                  </div>
                  {/* <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-[15px] md:gap-3">
                    <Button
                      href={s.detail}
                      suffix={<LineArrow hover />}
                      sameLine
                      className="md:w-auto"
                    >
                      FIND OUT MORE
                    </Button>
                    {s.work ? (
                      <Button
                        href={s.work}
                        sameLine
                        intent="p-secondary"
                        suffix={<LineArrow hover />}
                        className="md:w-auto"
                      >
                        EXPLORE OUR WORK
                      </Button>
                    ) : (
                      ''
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        ))}
      </Scrollspy>

      <section className={`overflow-hidden bg-white !pt-[32px] !pb-15 md:!py-15 `}>
        <div className="container text-center">
          <h3 className="text-title md:text-title-md mb-8 md:mb-14 font-everett">
            Our Platform vs Other Workflow <br className='hidden md:block'/>Management Platforms
          </h3>
          <div className="w-full overflow-x-auto md:p-0">
            <div className="max-w-full">
              <table className="w-full max-w-full md:w-[965px] mx-auto text-sm border-collapse border-spacing-0 text-left font-everett leading-[24px]">
                <thead>
                  <tr className="h-[50px] border-b border-[#D4D4D4]">
                    <th className="md:!w-[313px] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-[#030104] md:whitespace-nowrap text-left">
                    Features And Use Cases
                    </th>
                    <th className="md:!w-[313px] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-[#030104] md:whitespace-nowrap text-left">
                    Red Bangle Platform
                    </th>
                    <th className="md:!w-[313px] capitalize max-w-[30%] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-[#FF0038] md:whitespace-nowrap text-left">
                    Other Project Management Tools
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
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

      <section className="pb-15 md:pb-30 md:pt-15 overflow-hidden">
        <div className="container">
          <h2 className="text-title md:text-title-md font-medium font-everett !tracking-[-2.08px] mb-10 md:mb-16">
            Explore Offerings
          </h2>

          {/* Swiper Slider (for md and above) */}
          <div className="hidden md:block">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                768: {
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
              className="servicesSlider"
            >
              {cards.map(
                ({
                  id,
                  serviceTitle,
                  serviceDescription,
                  serviceAmblem,
                  bgColor,
                  href,
                  textColor,
                }) => (
                  <SwiperSlide key={id}>
                    {serviceTitle === 'AI PRODUCTS' ? (
                      <span className="group block">
                        <div
                          className="h-[22rem] p-8 md:p-[37px] relative overflow-hidden min-h-full md:h-[413.15px]"
                          style={{ backgroundColor: bgColor }}
                        >
                          <div className="absolute bottom-0 right-0 translate-x-[45%] translate-y-[45%] opacity-20">
                            <img
                              src={serviceAmblem}
                              alt=""
                              className="w-[176px] h-[176px] md:w-[350px] md:h-[350px]"
                            />
                          </div>
                          <div className="flex items-end gap-3 mb-5">
                            <h3
                              className="relative text-white text-3xl md:text-[39.22px] font-medium font-everett leading-[36px] md:!leading-[44.45px]"
                              style={{ color: textColor }}
                            >
                              {serviceTitle.split(' ').map((word, idx, arr) => (
                                <React.Fragment key={idx}>
                                  {word}
                                  {idx < arr.length - 1 && <br />}
                                </React.Fragment>
                              ))}
                            </h3>
                            <div className="mb-2.5">
                              <svg
                                width="34"
                                height="32"
                                viewBox="0 0 34 32"
                                fill="none"
                                className="group-hover:translate-x-1 transition-all"
                              >
                                <path
                                  d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                                  fill={textColor}
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            className="text-sm md:text-xl text-white"
                            style={{ color: textColor }}
                          >
                            {serviceDescription}
                          </p>
                        </div>
                      </span>
                    ) : (
                      <Link href={href} className="group block">
                        <div
                          className="h-[22rem] p-8 md:p-[37px] relative overflow-hidden min-h-full md:h-[413.15px]"
                          style={{ backgroundColor: bgColor }}
                        >
                          <div className="absolute bottom-0 right-0 translate-x-[45%] translate-y-[45%] opacity-20">
                            <img
                              src={serviceAmblem}
                              alt=""
                              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
                            />
                          </div>
                          <div className="flex items-end gap-3 mb-5">
                            <h3
                              className="relative text-white text-3xl md:text-[39.22px] font-medium font-everett leading-[36px] md:!leading-[44.45px]"
                              style={{ color: textColor }}
                            >
                              {serviceTitle.split(' ').map((word, idx, arr) => (
                                <React.Fragment key={idx}>
                                  {word}
                                  {idx < arr.length - 1 && <br />}
                                </React.Fragment>
                              ))}
                            </h3>
                            <div className="mb-2.5">
                              <svg
                                width="34"
                                height="32"
                                viewBox="0 0 34 32"
                                fill="none"
                                className="group-hover:translate-x-1 transition-all"
                              >
                                <path
                                  d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                                  fill={textColor}
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            className="text-sm md:text-xl text-white"
                            style={{ color: textColor }}
                          >
                            {serviceDescription}
                          </p>
                        </div>
                      </Link>
                    )}
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Grid (for mobile) */}
          <div className="block md:hidden">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {cards.map(
                ({
                  id,
                  serviceTitle,
                  serviceDescription,
                  serviceAmblem,
                  bgColor,
                  href,
                  textColor,
                }) => (
                  <Link
                    key={id}
                    href={href}
                    className={`group ${
                      serviceTitle === 'AI PRODUCTS' ? 'cursor-none' : ''
                    }`}
                    onClick={(e) =>
                      ['AI PRODUCTS'].includes(serviceTitle) &&
                      e.preventDefault()
                    }
                  >
                    <div
                      className={`h-[22rem] p-8 md:p-14 relative overflow-hidden min-h-full md:h-[31rem]`}
                      style={{ backgroundColor: bgColor }}
                    >
                      <div className="absolute bottom-0 right-0 translate-x-[35%] translate-y-[35%] opacity-20">
                        <img
                          src={serviceAmblem}
                          alt=""
                          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
                        />
                      </div>

                      <div className="flex items-end gap-3 mb-5">
                        <h3
                          className="relative text-white text-3xl md:text-[39.22px] font-medium font-everett leading-[36px] md:!leading-[44.45px]"
                          style={{ color: textColor }}
                        >
                          {serviceTitle.split(' ').map((word, idx, arr) => (
                            <React.Fragment key={idx}>
                              {word}
                              {idx < arr.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </h3>
                        <div className="mb-2">
                          <svg
                            width="34"
                            height="32"
                            viewBox="0 0 34 32"
                            fill="none"
                            className="group-hover:translate-x-1 transition-all shrink-0"
                          >
                            <path
                              d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                              fill={textColor}
                            />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="text-sm md:text-xl text-white"
                        style={{ color: textColor }}
                      >
                        {serviceDescription}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustedBrandsSection
        className="bg-white pb-15 md:pb-15"
        heading="Some Of Our Clients"
      />

      {/* <section className=" py-12 md:py-24">
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
      </section> */}
      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="1084150253"
        videopath="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/who-we-are/rb_cloud_platform_video.mp4"
      >
        <div className="relative max-w-[80%] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://d2z2y0r24g3lw0.cloudfront.net/group-assets/who-we-are/rb_cloud_platform_video.mp4"
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

export default TechnologyPlatform
