import React, { useEffect, useState } from 'react'
import { aboutSchema } from '@/components/schema/about-schema'
import { useRouter } from 'next/router' 
import Script from 'next/script'
import {
  SEO,
  TrustedBrandsSection,
  WorkListHeroSection,
} from '@/components/shared'
import { Marquee } from '@/components/shared/Marquee'
import { ContentPostCard } from '@/components/shared/Cards/ContentPostCard'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { workPosts } from '@/utils/dummy'

export default function WorkPage({
  selectedvalue = 'featured',
}) {
  const router = useRouter()
  const _posts = workPosts

  const [visiblePosts, setVisiblePosts] = useState(6)

  const scrollRef = React.useRef(null)
  const [atLeftEnd, setAtLeftEnd] = useState(true)
  const [atRightEnd, setAtRightEnd] = useState(false)
  const handleTagClick = (tag) => {
    setSelectedTag(tag)
    router.push(`/work/${tag}`, undefined, { shallow: true })
  }

  useEffect(() => {
    const { work } = router.query // changed 'tab' to 'work'
    //  const caseStudyTags = ['videos', 'design', 'campaign', 'experience']
     const caseStudyTags = [
    { 
      name: 'Featured', 
      url: 'featured',
    },
    { 
      name: 'Videos', 
      url: 'videos',
    },
    { 
      name: 'Design', 
      url: 'brand-designs',
    },
    { 
      name: 'Campaign', 
      url: 'campaigns',
    },
    { 
      name: 'AI', 
      url: 'ai-creatives',
    },
    { 
      name: 'Experience', 
      url: 'brand-experiences',
    },
    { 
      name: 'Book a Crew',
      url: 'international-video-crews',
    }
  ]
    // if (typeof work === 'string' && caseStudyTags.includes(work)) {
    //     //setSelectedTag(work);
    // }
    if (
      typeof work === 'string' &&
      caseStudyTags.some((tag) => tag.url === work)
    ) {
      setSelectedTag(work)
    }
  }, [router.query])

  useEffect(() => {
    const checkScroll = () => {
      const el = scrollRef.current
      if (!el) return
      setAtLeftEnd(el.scrollLeft === 0)
      setAtRightEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth)
    }

    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      checkScroll() // Initial check
    }

    return () => {
      if (el) el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' })
    }
  }
  useEffect(() => {
    if (selectedvalue) {
      setSelectedTag(selectedvalue)
      setVisiblePosts(6)
    }
  }, [selectedvalue])

  const [selectedTag, setSelectedTag] = useState(selectedvalue)
  // const caseStudyTags = ['videos', 'design', 'campaign', 'experience']
  const caseStudyTags = [
    { 
      name: 'Featured', 
      url: 'featured',
    },
    { 
      name: 'Videos', 
      url: 'videos',
    },
    { 
      name: 'Design', 
      url: 'brand-designs',
    },
    { 
      name: 'Campaign', 
      url: 'campaigns',
    },
    { 
      name: 'AI', 
      url: 'ai-creatives',
    },
    { 
      name: 'Experience', 
      url: 'brand-experiences',
    },
    { 
      name: 'Book a Crew',
      url: 'international-video-crews',
    }
  ]
  const defaultTag = 'b2b-video-production-agency'
  const effectiveTag = selectedTag || defaultTag
  const filteredPosts = _posts
    .filter((post) =>
      post.tabs
        ?.map((tab) => tab.toLowerCase())
        .includes(effectiveTag.toLowerCase())
    )
    .slice(0, visiblePosts)
 const selectedTagData = caseStudyTags.find(tag => tag.url === selectedTag) || caseStudyTags[0];
  return (
    <>
      <SEO 
        title="Red Bangle B2B Agency: Videos, Design, Campaigns & Crew"
        description="Videos, design, campaigns, production and crew solutions for B2B brands by Red Bangle B2B Agency. Creative work that drives brand growth and impact."
        url={`https://www.b2b.redbangle.com/work/${selectedTag || 'featured'}`} />
      {/* <section className="py-14 md:py-23  overflow-hidden bg-rb-mercury text-rb-black ">
        <Marquee duration={40}>
        <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] cap-trim mr-6 md:mr-10 !tracking-[-0.08rem] !font-medium !font-everett">
            WORK SHOWCASE
            <img
                className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
                src="/img/who-we-are/about-pill.webp"
                width="562"
                height="210"
                alt="about pill"
            />
        </div>
        <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] cap-trim mr-6 md:mr-10 !tracking-[-0.08rem] !font-medium !font-everett">
            WORK SHOWCASE
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
            <div className="max-w-[1100px] w-full leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 cap-trim font-semibold !tracking-[-0.08rem]">
                Get big ideas, captivating design, technology magic and flawless production. We&apos;re the engine behind your brand&apos;s unstoppable ride to the top.
            </div>
        </div>
        <div className="container md:mt-16 mt-10">
          <Button
            href="/contact"
            className="font-bold  w-full md:w-auto !inline-flex"
            suffix={<LineArrow hover />}
          >
            Send a brief
          </Button>
        </div>
    </section> */}
      <section className="py-14 md:py-24  overflow-hidden bg-rb-mercury text-rb-black ">
        <WorkListHeroSection
          className=""
          type="WORK SHOWCASE"
          typeTwo="WORK SHOWCASE"
          video1="/img/services/strategy2.mp4"
          video2="/img/services/strategy1.mp4"
          pillImg="/img/who-we-are/about-pill.webp"
          marqueType="img"
          contentClassName="max-w-[1100px] w-full leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:!mt-16 cap-trim font-semibold !tracking-[-0.56px] md:!tracking-[-0.08rem]"
          content={
            <>
              Get big ideas, captivating design, technology magic and flawless
              production. We&apos;re the engine behind your brand&apos;s
              unstoppable ride to the top.
            </>
          }
          duration={25}
        />
      </section>

      <div className="container relative bg-white">
        <div className="sticky top-0 bg-white z-[2] p-2 md:p-0 border-b border-gray-300  ">
          <div className="relative mt-0 py-6">
            {/* Arrow buttons on top of tags
                {!atLeftEnd && (
                    <button
                        className="absolute -top-6   -left-2 z-10 text-rb-red md:hidden "
                        onClick={handleScrollLeft}
                    >
                        <FaArrowAltCircleLeft className="bg-white rounded-full text-2xl hover:scale-110 duration-700" />
                    </button>
                )}
                {!atRightEnd && (
                    <button
                        className="absolute -top-6 -right-2 z-10 text-rb-red md:hidden"
                        onClick={handleScrollRight}
                    >
                        <FaArrowAltCircleRight className="bg-white rounded-full text-2xl hover:scale-110 duration-700" />
                    </button>
                )} */}

            {/* Scrollable Tag List */}
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar md:justify-center md:gap-12 "
            >
              {caseStudyTags.map((tag) => (
                // <button
                //     key={tag}
                //     onClick={() => handleTagClick(tag)}
                //     className={`!mr-[9px] !text-[32px] font-medium font-everett relative capitalize
                //     ${selectedTag === tag
                //             ? 'text-rb-red'
                //             : 'text-[#11101080] hover:text-rb-red'}`}
                // >
                //     {tag}
                // </button>
                <a
                  key={tag.url}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTagClick(tag.url)
                  }}
                  className={`inline-block align-top leading-[1] p-0 m-0 !mr-[9px] text-[32px] font-medium font-everett relative whitespace-nowrap
                            ${
                              selectedTag === tag.url
                                ? 'text-rb-red after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[7px]'
                                : 'text-[#11101080] hover:text-rb-red'
                            }`}
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1  md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24 mt-16 md:mt-18">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(p => (
                <div key={p.key} onPointerDown={() => saveState()}>
                  <ContentPostCard href={`/${selectedTag}/${p.case_study_title}`} page="work" {...p} />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No case studies available for &ldquo;{selectedTag}&ldquo;
              </p>
            )}
          </div>
        </div>
        {filteredPosts.length > 0 && (
          <div className="text-center">
            {(() => {
              const filteredLength =
                selectedTag === ''
                  ? _posts.length
                  : _posts.filter((post) =>
                      post.tabs
                        ?.map((tab) => tab.toLowerCase())
                        .includes(selectedTag.toLowerCase())
                    ).length

              if (filteredLength > 6 && visiblePosts < filteredLength) {
                return (
                  <Button
                    className="w-fit mx-auto mt-[30px] md:mt-15 focus:outline-none"
                    onClick={() => setVisiblePosts((prev) => prev + 6)}
                    suffix={<LineArrow />}
                  >
                    SEE MORE
                  </Button>
                )
              } else if (filteredLength > 6 && visiblePosts >= filteredLength) {
                return (
                  <Button
                    className="w-fit mx-auto mt-[30px] md:mt-15 focus:outline-none"
                    onClick={() => setVisiblePosts(6)}
                    suffix={<LineArrow />}
                  >
                    SEE LESS
                  </Button>
                )
              }

              return null
            })()}
          </div>
        )}
      </div>
      <TrustedBrandsSection className="py-12 md:pt-24 md:pb-12" />

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}
