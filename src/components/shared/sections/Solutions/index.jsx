import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'

import styles from '@/styles/sections/Solutions.module.scss'

gsap.registerPlugin(ScrollTrigger)
const slides = [
  {
    key: 0,
    title: 'B2B GLOBAL',
    excerpt:
      'End–to-end creative solutions for global B2B enterprises. Taking brands from strategy and design to global video production, experiential campaigns and AI-enabled content.',
    video: {
      src: '/img/b2b_box.webm',
      // poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    color: 'rgb(147 0 0)',
    textColor: '#ffffff',
    href: process.env.NEXT_PUBLIC_B2B,
  },
  {
    key: 1,
    title: 'B2C INDIA',
    excerpt:
      'Crafting strategic creative solutions and AI Influencers for ambitious consumer brands in India. Creating cool content IPs targeting Indian GenZs.',
    video: {
      src: '/img/b2c_box.webm',
      // poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    color: 'rgb(198, 0, 37)',
    textColor: '#ffffff',
    href: process.env.NEXT_PUBLIC_B2C,
  },
  // {
  //   key: 2,
  //   title: 'Design',
  //   excerpt:
  //     'Experience technology-enabled, scaled video content production services.Go from scripts and storyboards to production across 100 countries.',
  //   video: {
  //     src: '/global_box.mp4',
  //     poster: '/img/services/create-poster.webp',
  //     width: '1440',
  //     height: '810',
  //   },
  //   color: 'rgb(253, 1, 56)',
  //   textColor: '#ffffff',
  //   href: '',
  // },
  // {
  //   key: 3,
  //   title: 'AI PRODUCTS',
  //   excerpt:
  //     'Artificial intelligence solutions that enhance brand communications, and custom-built products that unlock the power of AI for ambitious marketers.',
  //   video: {
  //     src: '/img/ai_labs_box.webm',

  //     poster: '/img/services/play-poster.webp',
  //     width: '1440',
  //     height: '810',
  //   },
  //   color: 'rgb(253, 2, 56)',
  //   textColor: '#ffffff',
  //   href: '',
  // },
]
const sReverse = slides
export const SolutionsSection = () => {
  const containerRef = useRef()
  const onClick = (i) => {
    try {
      window.scrollTo(
        0,
        containerRef.current.offsetTop +
          (i == 1 ? 200 : 0) +
          (i == 0 ? 0 : (i + (i == 2 ? 1 : 0)) * window.innerHeight)
      )
    } catch {}
  }
  useEffect(() => {
    const container = containerRef.current
    const contents = document.querySelectorAll('.content-track > div')
    const sections = document.querySelectorAll('[data-solutionsection]')
    const bullets = document.querySelectorAll('[data-solutionsection-bullet]')

    const tls = []

    const mm = gsap.matchMedia()
    mm.add('(min-width:768px)', () => {
      // console.log(window.innerHeight)
      const totalDuration = 2 * window.innerHeight
      const n = sections.length
      const singleDuration = totalDuration / n
      // gsap.set(contents, { autoAlpha: 0 })
      // gsap.set(contents[0], { autoAlpha: 1 })
      const mstl = ScrollTrigger.create({
        trigger: '.pin-up',
        start: () => 'top top',
        // invalidateOnRefresh: true,
        end: () => `+=${totalDuration}`,
        // markers: true,
        pin: true,
        scrub: true,
        // animation: linetl,
      })
      sections.forEach((s, i) => {
        const scrollTriggerSettings = {
          trigger: container,
          start: () => `top+=200px -=${singleDuration * (i - 1)}`,
          end: () =>
            i == 2 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,
          markers: false,
          toggleActions: 'play none play reverse ',
        }

        // Check if the current slide is the third one (index 2)
        if (i === 3) {
          // Increase the duration for the third slide
          scrollTriggerSettings.end = () =>
            `bottom top+=${singleDuration * 1.5}`
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            ...scrollTriggerSettings,
            scrub: true,
            // trigger: container,
            // start: () => `top+=200px -=${singleDuration * (i - 1)}`,
            // end: () =>
            //   i == 2 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,

            // // markers: true,
            // scrub: true,
            // // animation: tl,
            // toggleActions: 'play none play reverse',
          },
        })
        tls.push(tl)
        // ScrollTrigger.create()
        tl.fromTo(
          contents[i],
          {
            yPercent: 0,
            //  autoAlpha: i !== 0 ? 0 : 1
          },
          {
            yPercent: -100 * i,
            // autoAlpha: 1,
            // duration: 0.5,
          },
          0
        )
        const ltl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            // 200 for giving space to stay for the first section and 2 times as there are 2 containers on top of the last section
            start: () => `top+=${singleDuration * i} top+=200px`,
            toggleActions: 'play none play reverse',
            // markers: true,
          },
        })
        // if (i > 0) {
        //   ltl.fromTo(
        //     bullets[i - 1],
        //     { backgroundColor: 'white' },
        //     { backgroundColor: 'transparent' },
        //     0
        //   )
        // }

        // if (i === 3) {
        //   ltl.fromTo(
        //     bullets[i - 1],
        //     { backgroundColor: 'transparent' },
        //     { backgroundColor: 'transparent' },
        //     0
        //   )
        // }

        // ltl.fromTo(
        //   bullets[i],
        //   { backgroundColor: 'transparent' },
        //   { backgroundColor: 'white' },
        //   0
        // )
        bullets.forEach((bullet) => {
          ltl.set(bullet, { backgroundColor: 'transparent' })
        })

        ltl.set(bullets[i], { backgroundColor: 'white' })
        tls.push(ltl)
      })

      return () => {
        mstl.kill()
        tls.forEach((t) => t.kill())
      }
    })

    return () => {
      mm.kill()
    }
  }, [])

  return (
    <>
      <section
        className="text-white relative overflow-visible md:overflow-hidden"
        ref={containerRef}
      >
        <div className="pin-up min-h-screen">
          <div className="container relative hidden md:block">
            <div className="flex flex-col absolute top-[50vh] -translate-y-1/2 md:right-4 xl:right-0 z-[1]">
              {sReverse.map((_, i) => (
                <button
                  key={i}
                  data-solutionsection-bullet={i}
                  onClick={() => onClick(i)}
                  className="w-3 h-3 border border-white bg-transparent my-[3px] rounded-full"
                ></button>
              ))}
            </div>
          </div>
          <div className="content-track flex min-h-screen md:h-screen flex-col md:relative w-full ">
            {sReverse.map((s, i) => (
              <div
                key={s.key}
                className="min-h-screen md:min-h-0 md:h-full w-full flex-shrink-0 grid place-content-center first:pt-18  first:md:pt-24 pt-16 md:py-24 top-0 left-0 sticky md:static"
                style={{ backgroundColor: s.color }}
                data-solutionsection={s.color}
              >
                <div className="container">
                  <h3
                    className={
                      styles.title + ` text-5xl -mt-14 lg:text-[100px] lg:mt-0`
                    }
                    style={{ color: s.textColor }}
                  >
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap items-end flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-7 pt-11 md:pt-0 ">
                      {/* <img alt={s.title} {...s?.image} className="w-full" /> */}
                      <video
                        autoPlay
                        playsInline
                        muted
                        loop
                        alt={s.title}
                        {...s?.video}
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-7 md:pr-10">
                      <p
                        className="mt-5.5 md:mt-0 mb-7.5 md:mb-10 md:text-2xl font-normal tracking-[-0.48px]"
                        style={{ color: s.textColor }}
                      >
                        {s.excerpt}
                      </p>
                      {/* <Button
                        intent="secondary"
                        suffix={s.title != 'AI PRODUCTS' && <LineArrow hover />}
                        href={s.href}
                        className={`w-full md:w-auto md:max-w-max ${s.title === 'AI PRODUCTS' ? 'cursor-none' : ''}`}
                        style={{ color: s.textColor, borderColor: s.textColor }}
                      >
                        {s.title === 'AI PRODUCTS' ? 'COMING SOON' : 'LEARN MORE'}
                      </Button> */}
                      {s.title === 'AI PRODUCTS' ? (
                        <span
                          className="uppercase group/button flex items-center justify-center whitespace-nowrap transition-colors border-2 text-white h-11 md:h-15 text-xs leading-4.5 md:text-base font-bold rounded-8.5 py-5 px-8 w-full md:w-auto md:max-w-max cursor-none"
                          style={{
                            color: s.textColor,
                            borderColor: s.textColor,
                          }}
                        >
                          COMING SOON
                        </span>
                      ) : (
                        <Button
                          intent="secondary"
                          suffix={<LineArrow hover />}
                          href={s.href}
                          className="w-full md:w-auto md:max-w-max"
                          style={{
                            color: s.textColor,
                            borderColor: s.textColor,
                          }}
                        >
                          LEARN MORE
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
