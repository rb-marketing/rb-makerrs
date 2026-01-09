import { scsThinkSchema } from '@/components/schema/scs-think-schema'
import {
  ServiceCardSection,
  ServiceHeroSection,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
  Testimonials,
  TrustedBrandsSection
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  podcastCards,
  redbanglewayThink,
  serviceVideos,
} from '@/content/services'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Accordion } from '@/components/ui'



const Design = ({ setisPopupOpen }) => {

  const [stopVisible, setstopVisible] = useState(false)

  const createTestimonialData = [
    {
      key: 0,
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
  ]
  const cards = [
    {
      id: 1,
      serviceTitle: 'GET DESIGN',
      serviceDescription:
        'Get brand identity systems, event branding, editorial design, illustrations, and motion graphics. Build brand differentiation and human connect with Makerrs. Explore our branding and design services.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/brand-design-agency',
    },
    {
      id: 0,
      serviceTitle: 'GET VIDEO',
      serviceDescription:
        'We plan, conceptualise, produce and scale video content – be it for your next product or your YouTube channel. We also offer on-demand video production services for customer testimonial videos, recruitment videos, corporate videos and more. Explore our video production services.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/video-production',
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
      href: '/video-production-near-me',
    },
  ]

  const TNC = [
    {
      key: 1,
      title: 'Do you produce both video and audio podcasts?',
      content: (
        <>
          <div>
            Yes. We offer full, flexible, and scalable podcast production services. Whether you want traditional audio-only episodes for platforms like Spotify and Apple Podcasts, video podcasts optimized for YouTube and LinkedIn, or hybrid content that works across both mediums, we deliver professional-quality content.
          </div>
        </>
      )
    },
    {
      key: 2,
      title: 'What is the typical timeline for producing a podcast episode?',
      content:
        'Podcast turnaround times depend on format complexity and post-production requirements. Typically, a standard podcast takes around 14–15 days for end-to-end production—from recording, editing, sound design, and final optimization. For more complex episodes that require extensive research, we recommend allocating at least 30 days to ensure a smooth workflow and great results. Our process includes research, copywriting, speaker prep, production, post-production editing, sound design, and versioning.',
    },
    {
      key: 3,
      title: 'Do you work with remote guests and distributed teams?',
      content:
        'Many of our podcast projects involve guests and team members across different time zones and locations. We coordinate remote recordings using professional-grade audio/video setups and provide technical guidance to ensure broadcast-quality results. We seamlessly integrate content from multiple locations into cohesive episodes while maintaining consistent quality and branding throughout.'
    },
    {
      key: 4,
      title: 'How do you create podcasts that are engaging? ',
      content: (
        'This goes well beyond a great shoot and a good edit. We ensure that your podcast themes align with your business intent and brand purpose, that guests and hosts align with your podcast concept, that the format makes your content flow, that the branding is memorable, and that the call to actions deliver the desired interactions.'
      ),
    },

    {
      key: 5,
      title: 'How do you ensure consistent audio and video quality across episodes?',
      content:
        'We maintain broadcast-standard quality through professional equipment, controlled recording environments, and rigorous post-production processes. Our audio experts handle noise reduction, level balancing, and sound design to ensure consistent listening experiences. For video podcasts, we provide professional lighting setups, multiple camera angles, and color grading. Every episode goes through our quality control process before delivery, ensuring your podcast maintains the professional standard your brand demands.',
    },
    {
      key: 6,
      title: 'Do you follow a specific podcast creation process?',
      content: (
        <>
          <div>
            <p>Broadly, here’s our workflow.</p>
            <h3 className="mt-5 font-semibold text-base">Discovery:</h3>
            <p>We explore your brand’s voice, themes, and audience to identify the conversation your podcast can uniquely own.</p><br />
            <h3 className="mt-5 font-semibold text-base">Strategy & SEO:</h3>
            <p>We research, strategise, and position your podcast. We take a thorough look at SEO to identify key buckets to lean into for strong traction.</p><br />
            <h3 className="mt-5 font-semibold text-base">Concept and Design:</h3>
            <p>We conceptualise and design your podcast around a unique theme to start creating content that aligns with business, brand, and communication goals.</p><br />
            <h3 className="mt-5 font-semibold text-base">Episode Construct:</h3>
            <p>We design frameworks, hooks, segments, question maps, and more to turn complex expertise into sharp, engaging episodes.</p><br />
            <h3 className="mt-5 font-semibold text-base">Production & Post Production:</h3>
            <p>From crews, locations, and lighting to episodes, teasers, extracts, thumbnails, and more–we offer scalable and efficient end-to-end podcast production and post-production solutions.</p><br />
            <h3 className="mt-5 font-semibold text-base">Publishing, Distribution & Amplification:</h3>
            <p>We publish, we post, we report, we review, we optimize, and we do it all again. We publish on YouTube, Spotify, and Apple Podcast, and elsewhere via distribution platforms. We post about the show and the episodes on LinkedIn, Instagram, X, Facebook, and other social platforms to build visibility, community, and long-term ROI.</p>
          </div>
        </>
      )
    }
  ]

  const data = [
    {
      icon: '/img/services/podcast/why-icon1.svg',
      need: 'Research & Strategy',
      others: 'Not available',
      redBangle: 'Sound research & strategy',
    },
    {
      icon: '/img/services/podcast/why-icon2.svg',
      need: 'Content Design',
      others: 'Hit or miss',
      redBangle: 'Audience-focused Content Design',
    },
    {
      icon: '/img/services/podcast/why-icon3.svg',
      need: 'Podcast Branding',
      others: 'Not available',
      redBangle: 'Extensive Podcast branding services',
    },
    {
      icon: '/img/services/podcast/why-icon4.svg',
      need: 'Podcast SEO',
      others: 'Not available',
      redBangle: 'SEO-first approach to podcast publishing, marketing',
    },
    {
      icon: '/img/services/podcast/why-icon5.svg',
      need: 'Podcast Quality',
      others: 'Hit or miss',
      redBangle: 'Consistent high quality',
    },
    {
      icon: '/img/services/podcast/why-icon6.svg',
      need: 'Podcast Marketing',
      others: 'Not available',
      redBangle: 'Comprehensive support',
    },
    {
      icon: '/img/services/podcast/why-icon7.svg',
      need: 'Formats & Genres',
      others: 'Limited formats & genres',
      redBangle: 'Any format & genre',
    },
    {
      icon: '/img/services/podcast/why-icon8.svg',
      need: 'Podcast Formats',
      others: 'Limited formats',
      redBangle: 'Unlimited formats',
    },
    {
      icon: '/img/services/podcast/why-icon9.svg',
      need: 'Reviews & Feedback',
      others: 'Emails back & forth',
      redBangle: 'Single dashboard & interactive reviews',
    },
    {
      icon: '/img/services/podcast/why-icon10.svg',
      need: 'Production & Schedules',
      others: 'You chase them',
      redBangle: 'We manage for you',
    },
    {
      icon: '/img/services/podcast/why-icon11.svg',
      need: 'Podcast Versioning',
      others: 'Limited versioning',
      redBangle: 'Limitless versioning',
    },
    {
      icon: '/img/services/podcast/why-icon12.svg',
      need: 'Project Management',
      others: 'Emails, spreadsheets',
      redBangle: 'Cloud-based workflows',
    },
    {
      icon: '/img/services/podcast/why-icon13.svg',
      need: 'Turnaround Times',
      others: 'They work at their speed',
      redBangle: 'We work at podcast speed',
    },
  ]

  const posts = [
    {
      key: 0,
      name: 'The Lakshmi Rebecca Show',
      company: 'Lakshmi Rebecca',
      image: '/img/works/lakshmi_rebecca_show.jpg',
      alt: 'Lakshmi Rebecca Show',
      tags: ['Video Content', 'YouTube Series'],
      href: 'work/brand-designs/lakshmi-rebecca-show'
    }
  ]

  const _posts = posts.map(postsMapper)


  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('leap-explore'); // Replace 'section-id' with the ID of your section
        if (section && window.scrollY > section.offsetTop) {
          setisPopupOpen(true);
          setstopVisible(true)
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [stopVisible]);
  return (
    <>
      <SEO
        title="Branded Podcast Production and Marketing Services | Makerrs"
        description="Video podcast production and marketing solutions for brands. We research, conceptualise, design, produce, publish and amplify podcasts for YouTube, Spotify, and more."
        url="https://www.staging.b2c.redbangle.com/brand-strategy-agency-india"
      />
      <ServiceHeroSection
        className=""
        type="GET PODCAST"
        video={serviceVideos.get_podcast.video}
        fullVideo={serviceVideos.get_podcast.fullVideo}
        ctaText="Podcast with us "
        ctaLink="/contact"
        textColor='#111010'
        content={
          <>
            <h1 className="inline">Build market leadership and influence through podcasts. Go from podcast research and strategy to concept, design, production, distribution, and amplification with Makerrs. We don’t just make podcasts, we make podcasts work hard for you.</h1>

          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Marketing Agency</h2>
        <h2>Holistic Marketing</h2>
        <h2>Marketing Content Strategy</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Full Service Advertising Agency</h2>
      </div>
      <ServiceCardSection
        tag="Explore Our Podcast Solution"
        title={
          <div className="md:max-w-[620px]">
            Get the world’s best podcast team working for you
          </div>
        }
        iconClassName="w-15 h-15"
        cards={podcastCards}
      />


      <section className={`overflow-hidden bg-white pt-[48px] pb-15 md:pt-30 md:pb-15`}>
        <div className="container text-center">

          <div className="w-full overflow-x-auto md:p-0">
            <div className="max-w-full">
              <h3 className="text-title md:text-title-md mb-8 md:mb-14 font-everett md:w-[940px] mx-auto">
                Why choose Makerrs <br /> over other podcast production agencies?
              </h3>

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
                      What We Offer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, idx) => (
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

      <div className="md:pt-15">
        <FeaturedWorkSection posts={_posts} href="" title="Explore Our Podcast Work" />
      </div>


      <TrustedBrandsSection className="py-12 md:pt-15 md:pb-15" />
     
     <div className="pt-7.5 md:pt-18 pb-15 md:pb-3">
        <ExploreMoreSection
          type="think"
          cards={cards}
        />
     </div>
     

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
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(scsThinkSchema)}
      </Script>
    </>
  )
}
export default Design
