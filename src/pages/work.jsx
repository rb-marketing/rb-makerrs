import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { workPosts } from '@/utils/dummy'
import { SEO, TrustedBrandsSection, WorkListHeroSection } from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards/ContentPostCard'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import Script from 'next/script'
import { aboutSchema } from '@/components/schema/about-schema'

export default function WorkPage({ selectedvalue = 'featured' }) {
  const router = useRouter()
  const _posts = workPosts

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

  const [selectedTag, setSelectedTag] = useState(null)
  const [visiblePosts, setVisiblePosts] = useState(6)
  const scrollRef = React.useRef(null)

  useEffect(() => {
    const storedVisible = sessionStorage.getItem('work-visiblePosts')
    const storedTag = sessionStorage.getItem('work-selectedTag')

    if (storedVisible) setVisiblePosts(parseInt(storedVisible, 10))
    if (storedTag) setSelectedTag(storedTag)
    if (!router.query.work) {
      if (selectedvalue && caseStudyTags.some(tag => tag.url === selectedvalue)) {
        setSelectedTag(selectedvalue)
      } else if (!storedTag) {
        setSelectedTag('featured')
      }
    } else {
      setSelectedTag(router.query.work)
    }
  }, [router.query.work, selectedvalue])

  const saveState = (scrollOverride) => {
    const scroll = scrollOverride !== undefined ? scrollOverride : window.scrollY
    sessionStorage.setItem('work-scroll', String(scroll))
    sessionStorage.setItem('work-visiblePosts', String(visiblePosts))
    sessionStorage.setItem('work-selectedTag', selectedTag || 'featured')
  }

useEffect(() => {
  const scrollToPosts = () => {
    //after hard refresh we need to scrolls tabs section right..for that
    const postsGrid = document.querySelector(".work-posts-section")
    const stickyTabs = document.querySelector(".sticky-tab-section")
    if (postsGrid) {
      const gridTop = postsGrid.getBoundingClientRect().top + window.scrollY
      const stickyHeight = stickyTabs?.offsetHeight || 0
      window.scrollTo({ top: gridTop - stickyHeight - 70, behavior: "smooth" })
    }
  }

  const restore = () => {
  const navEntries = performance.getEntriesByType("navigation")
  const isReload = navEntries.length && navEntries[0].type === "reload"
  const storedTag = sessionStorage.getItem("work-selectedTag")
  const storedScroll = sessionStorage.getItem("work-scroll")

  if (storedTag) {
    setSelectedTag(storedTag)
  }

  if (isReload) {
    // Hard refresh → reset to 6 posts & scroll to tabs
    setVisiblePosts(6)
    sessionStorage.setItem("work-visiblePosts", "6")
    scrollToPosts()
  } else if (storedScroll && !isNaN(parseInt(storedScroll, 10))) {
    // Back/forward navigation → restore posts & scroll
    const storedVisible = sessionStorage.getItem("work-visiblePosts")
    if (storedVisible) setVisiblePosts(parseInt(storedVisible, 10))

    setTimeout(() => {
      window.scrollTo(0, parseInt(storedScroll, 10))
    }, 50)
  } else {
    // First visit → reset to 6 posts (NO SCROLL)
    setVisiblePosts(6)
    sessionStorage.setItem("work-visiblePosts", "6")
  }
}
restore()
 
}, [])


  useEffect(() => {
    setVisiblePosts(6) 
  }, [selectedTag])

  const handleTagClick = (tagUrl) => {
  // Reset visible posts to 6 when switching tab
  setVisiblePosts(6)
  setSelectedTag(tagUrl)

  // Shallow route update
  router.push(`/work/${tagUrl}`, undefined, { shallow: true, scroll: false })

  // Scroll to posts
  setTimeout(() => {
    const postsGrid = document.querySelector('.work-posts-section')
    const stickyTabs = document.querySelector('.sticky-tab-section')
    if (postsGrid) {
      const topOffset = postsGrid.getBoundingClientRect().top + window.scrollY
      const stickyHeight = stickyTabs?.offsetHeight || 0
      window.scrollTo({ top: topOffset - stickyHeight - 70, behavior: 'smooth' })
    }
  }, 50)
}

  const handleSeeMore = () => {
    const newVisible = visiblePosts + 6
    setVisiblePosts(newVisible)
    saveState()
  }

  const handleSeeLess = () => {
    setVisiblePosts(6)
    setTimeout(() => {
      const postsGrid = document.querySelector(".work-posts-section")
      const stickyTabs = document.querySelector(".sticky-tab-section")
      if (postsGrid) {
        const gridTop = postsGrid.getBoundingClientRect().top + window.scrollY
        const stickyHeight = stickyTabs?.offsetHeight || 0
        window.scrollTo({ top: gridTop - stickyHeight - 70, behavior: 'smooth' })
      }
    }, 100)
  }


  const filteredPosts = _posts
    .filter(post => selectedTag && post.tabs?.map(tab => tab.toLowerCase()).includes(selectedTag.toLowerCase()))
    .slice(0, visiblePosts)

    // Derived metadata for SEO
const selectedTagData = caseStudyTags.find(tag => tag.url === selectedTag) || caseStudyTags[0];
  return (
    <>
      <SEO 
        title="Red Bangle B2B Agency: Videos, Design, Campaigns & Crew"
        description="Videos, design, campaigns, production and crew solutions for B2B brands by Red Bangle B2B Agency. Creative work that drives brand growth and impact."
        url={`https://www.staging.b2b.redbangle.com/work/${selectedTag || 'featured'}`} />

      <section className="py-14 md:py-24 overflow-hidden bg-rb-mercury text-rb-black ">
        <WorkListHeroSection
          type="WORK SHOWCASE"
          typeTwo="WORK SHOWCASE"
          video1="/img/services/strategy2.mp4"
          video2="/img/services/strategy1.mp4"
          pillImg="/img/who-we-are/about-pill.webp"
          marqueType="img"
          contentClassName="max-w-[1100px] w-full leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:!mt-16 cap-trim font-semibold !tracking-[-0.56px] md:!tracking-[-0.08rem]"
          content={<>Get big ideas, captivating design, technology magic and flawless production. We&apos;re the engine behind your brand&apos;s unstoppable ride to the top.</>}
          duration={25}
        />
      </section>

      <div className="container relative bg-white">
        {/* Tags */}
        <div className="sticky top-0 bg-white z-[2] p-2 md:p-0 border-b border-gray-300 sticky-tab-section">
          <div className="relative mt-0 py-6">
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar md:justify-center md:gap-12">
              {caseStudyTags.map(tag => (
                <a key={tag.url} href="#" onClick={e => { e.preventDefault(); handleTagClick(tag.url) }}
                   className={`inline-block align-top leading-[1] p-0 m-0 !mr-[9px] text-[32px] font-medium font-everett relative whitespace-nowrap
                   ${selectedTag === tag.url ? 'text-rb-red after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[7px]' : 'text-[#11101080] hover:text-rb-red'}`}>
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="container work-posts-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24 mt-16 md:mt-18">
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

        {/* See More / See Less */}
        {filteredPosts.length > 0 && (
          <div className="text-center">
            {(() => {
              const total = _posts.filter(post => post.tabs?.map(t => t.toLowerCase()).includes(selectedTag.toLowerCase())).length
              if (total > 6 && visiblePosts < total)
                return <Button className="w-fit mx-auto mt-[30px] md:mt-15" onClick={handleSeeMore} suffix={<LineArrow />}>SEE MORE</Button>
              if (total > 6 && visiblePosts >= total)
                return <Button className="w-fit mx-auto mt-[30px] md:mt-15" onClick={handleSeeLess} suffix={<LineArrow />}>SEE LESS</Button>
              return null
            })()}
          </div>
        )}
      </div>

      <TrustedBrandsSection className="py-12 md:pt-24 md:pb-12" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      ></script>
    </>
  )
}
