import { aboutSchema } from '@/components/schema/about-schema'
import {
  LineHeading,
  RedbangleWaySection,
  RollupNumber,
  SEO,
  TrustedBrandsSection,
} from '@/components/shared'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { redbanglewayCreateAbout } from '@/content/services'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from '@/styles/sections/StatsSection.module.scss'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui'
import { Linkedin, Twitter, Whatsapp } from '@/components/icons'
import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import { TOC } from '@/components/shared/TOC'
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'

export const OurName = () => {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const videoRef = useRef(null)
  const lenis = useLenis()
  const ourNameRef = useRef()
  const router = useRouter()
  const [fullUrl, setFullUrl] = useState('');
  const [activeToc, setActiveToc] = useState('')
  const [toc, settoc] = useState(false)
  const tocTrigger = () => {
    settoc((state) => !state)
  }

  useEffect(() => {
    setFullUrl(`${window.location.origin}${router.asPath}`);
  }, [router.isReady, router.asPath]);

  useEffect(() => {
    const headings = [...ourNameRef.current?.querySelectorAll('h2[id]')]
    const figcaption = [...ourNameRef.current?.querySelectorAll('figcaption')]
    const sub_headings = [...ourNameRef.current?.querySelectorAll('h3[id]')]
    const img_center = [...ourNameRef.current?.querySelectorAll('.wp-image-1064')]

    const scroll = () => {
      const windowScrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      const actives = []
      if (headings.length) {
        actives.push(headings[0].id)
      }

      figcaption.forEach((figcaption) => {
        figcaption.style.textAlign = 'center'
        figcaption.classList.add('relative', 'bottom-5')
      })

      img_center.forEach((img) => {
        img.classList.add('relative', 'left-[13%]')
      })

      sub_headings.forEach((sub_heading) => {
        ;(sub_heading.style.paddingTop = '28px'),
          (sub_heading.style.paddingBottom = '10px')
      })

      headings.forEach((h) => {
        h.style.paddingTop = '28px'
        if (
          windowScrollTop + 50 >
          h.getBoundingClientRect().top + windowScrollTop
        ) {
          if (actives.indexOf(h.id) === -1) {
            actives.push(h.id)
          }
        }
      })
      if (actives.length) setActiveToc(actives[actives.length - 1])
    }
    if (headings.length) setActiveToc(headings[0].id)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

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

  const cards = [
    {
      id: 0,
      serviceTitle: 'B2B GLOBAL',
      serviceDescription:
        'End–to-end creative solutions for global B2B enterprises.',
      serviceAmblem: '/img/who-we-are/b2b_global_full.svg',
      bgColor: 'rgb(147 0 0)',
      textColor: '#ffffff',
      href: process.env.NEXT_PUBLIC_B2B,
    },
    {
      id: 1,
      serviceTitle: 'B2C INDIA',
      serviceDescription:
        'Brand Content solutions for consumer brands in India.',
      serviceAmblem: '/img/who-we-are/b2c_india_full.svg',
      bgColor: 'rgb(198, 0, 37)',
      textColor: '#ffffff',
      href: process.env.NEXT_PUBLIC_B2C,
    },

    // {
    //   id: 2,
    //   serviceTitle: 'AI PRODUCTS',
    //   serviceDescription:
    //     'Artificial intelligence products that amplify brand communications.',
    //   serviceAmblem: '/img/who-we-are/ai_products_full.svg',
    //   bgColor: 'rgb(253, 2, 56)',
    //   textColor: '#ffffff',
    //   href: '',
    // },
  ]

  const tocTree = {
    type: 'list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            type: 'link',
            children: [],
            text: 'A Bike, a Bangle, and New Beginnings',
            href: '#a-bike-a-bangle-and-new-beginnings',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'link',
            children: [],
            text: 'Red Bangle as a Symbol',
            href: '#red-bangle-as-a-symbol',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'link',
            children: [],
            text: 'From Production House to a Video Agency to an AI-First Creative Agency',
            href: '#from-production-house-to-a-video-agency-to-an-ai-first-creative-agency',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'link',
            children: [],
            text: 'Our Philosophy - Why Not?',
            href: '#our-philosophy-why-not',
          },
        ],
      },
      // {
      //   type: 'list-item',
      //   children: [
      //     {
      //       type: 'link',
      //       children: [],
      //       text: 'The Value of Explainer Videos in Modern Marketing',
      //       href: '#the-value-of-explainer-videos-in-modern-marketing',
      //     },
      //     {
      //       type: 'list',
      //       children: [
      //         {
      //           type: 'list-item',
      //           children: [
      //             {
      //               type: 'link',
      //               children: [],
      //               text: 'Beyond direct conversions, explainer videos serve as powerful trust-building tools.',
      //               href: '#beyond-direct-conversions-explainer-videos-serve-as-powerful-trust-building-tools',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  }

  return (
    <>
      <SEO
        title="Red Bangle - Why the name ‘Red Bangle’?"
        description="We harness creativity, artificial intelligence and technology to help B2B and B2C brands differentiate, connect, endure in a world that’s rapidly evolving."
        url={fullUrl}
      />
      <article>
        <section className="py-9">
          <div className="container">
            <div className="max-w-[1096px]">
              <h1 className="font-everett text-[32px] md:text-[48px] lg:text-[72px] leading-[120%] font-medium mb-5 tracking-[-1.44px]">
                Why the name ‘Red Bangle’?
              </h1>
              <div className="md:text-[24px] text-rb-black/80">
                Our name has a little story. And it dates back to 2010, <br className='hidden md:block'/>when our
                founder, Lakshmi Rebecca, was riding a Royal Enfield motorbike to work.
              </div>
            </div>
          </div>
          <div className="pt-[48px] md:pt-18">
            <div className="h-[180px] md:h-[556px] overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/who-we-are/why_bangle_blog_banner.jpg`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="pb-[60px] md:pb-[76px]">
        <div className="container blog-content-main ourname-content">
          <div className="text-[#100f0fcc] text-[16px] font-normal leading-[190%] tracking-[-0.4px] w-full flex flex-wrap items-center "
           ref={ourNameRef}>

            <div className="flex flex-col md:flex-row md:items-start">
              <span className="md:pr-4 max-w-[830px]">
              <h2 id="a-bike-a-bangle-and-new-beginnings" className='!pt-[12px] md:!pt-[28px]'>A Bike, a Bangle, and New Beginnings</h2>
                <span className="block max-w-[830px]">
                  What do you get when you throw in a motor bike, a thinking
                  young woman, a lacquer bangle and Bangalore weather? A great
                  idea.
                </span>

                <span className="block max-w-[830px] pt-5 md:pt-6">
                  On an early spring morning in 2010 in Bangalore, I was on the 
                  way to work on my motorbike, a Royal Enfield Thunderbird 
                  (a.k.a a Bullet, a 350 cc geared cruiser). I was in what had 
                  then become my standard riding gear: a full-face black helmet, 
                  black riding jacket, blue jeans, black shoes and - I can’t remember 
                  for sure - maybe my riding gloves. Now let me set some context on what 
                  looks like an over-armoured ride to work in a regular Indian city.
                </span>
              </span>
            </div>

             <span className="block pt-5 md:pt-6 max-w-[830px]">
              I’d been riding motorbikes for 9 years already. I rode inter-city 
              when South Indian highways were still being built in the early 2000s. 
              I’d ridden motorbikes when all of India probably had just 15 women 
              riding motorbikes. Back then, it  just wasn’t a thing, it just wasn’t cool (well, not for years. 
              Today, there are probably a thousand in Bangalore alone).
            </span>

            <div className="max-w-[830px]">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/who-we-are/lakshmi_new.png`}
                alt="lakshmi"
                className="hidden md:block float-left md:w-[302px] mt-[9px] md:pr-4 md:mb-5 mb-7.5 object-cover relative"
              />
               <span className="hidden md:block">
                  Honestly, I took to riding a motorbike because a beat up old geared motorbike was 
                  the only vehicle I had access to at home when I was 19, and I didn’t see any reason 
                  why I couldn’t use it to pick up groceries. In my head, if the men could ride motorbikes, 
                  then why not me. But, that’s really not how the world saw it then. Whether it was the third-hand 
                  beat up Bajaj Kawasaki that I first learnt to ride when I was 19, the TVS Victor that came a few 
                  years later or the bullet - a woman riding a motorbike just drew a lot of attention and often, 
                  unwanted attention. This varied from catcalls, uninvited races on busy urban roads, words of
                  appreciation from strangers in cars, on cycles and on other motorbikers, questions about the 
                  mileage, questions about the price of the bike, and generally a vocalisation of everything that a 
                  woman on a motorbike made everyone feel - uncomfortable, awe-struck, curious, hopeful, envious and more. 
                  A couple of times, it got scary too. Once, a car full of men blocked my way and chased me down
                  in the middle of the day on a busy Chennai road in 2003. I made a mental note of the car’s number, 
                  rode straight to the nearest police station and complained to the lady constable there. She looked me 
                  up and down, and asked me why I was wearing jeans and riding a motorbike. Oh well. But, that didn’t stop 
                  me. I just gradually stopped wearing bright-coloured clothing when out on my motorbike and eventually to 
                  inconspicuous riding gear that more or less hid the fact that I was a woman riding a motorbike.
                </span>
                <span className="md:hidden block md:pl-4 pt-5 md:pt-6">
                  Honestly, I took to riding a motorbike because a beat up old geared motorbike was 
                  the only vehicle I had access to at home when I was 19, and I didn’t see any reason 
                  why I couldn’t use it to pick up groceries. In my head, if the men could ride motorbikes, 
                  then why not me. But, that’s really not how the world saw it then. Whether it was the third-hand 
                  beat up Bajaj Kawasaki that I first learnt to ride when I was 19, the TVS Victor that came a few 
                  years later or the bullet - a woman riding a motorbike just drew a lot of attention and often, 
                  unwanted attention. This varied from catcalls, uninvited races on busy urban roads, words of
                  appreciation from strangers in cars, on cycles and on other motorbikers, questions about the 
                  mileage, questions about the price of the bike, and generally a vocalisation of everything that a 
                  woman on a motorbike made everyone feel - uncomfortable, awe-struck, curious, hopeful, envious and more. 
                  A couple of times, it got scary too. Once, a car full of men blocked my way and chased me down
                  in the middle of the day on a busy Chennai road in 2003. I made a mental note of the car’s number, 
                  rode straight to the nearest police station and complained to the lady constable there. She looked me 
                  up and down, and asked me why I was wearing jeans and riding a motorbike. Oh well. But, that didn’t stop 
                  me. I just gradually stopped wearing bright-coloured clothing when out on my motorbike and eventually to 
                  inconspicuous riding gear that more or less hid the fact that I was a woman riding a motorbike.
                </span>
            </div>
             <div className="block md:w-3/4">
                <span className="md:block hidden italic max-w-[830px] pt-5 md:pt-6">
                  (Picture above: taken in 2017, featuring my black riding jacket, black helmet - if you can spot it, and a friend’s Harley.)
                </span>
                <span className="md:block hidden max-w-[830px] pt-5 md:pt-6">
                  So, that’s why I was wearing what I was wearing on my ride to work in 2010. But something different 
                  happened that morning. It was probably around 8:45am on a road with surprisingly not much traffic. 
                  I noticed a Channapatna red bangle peaking out of the sleeve of my black riding jacket. This got me 
                  wondering.
                </span>
                <span className="md:hidden block italic max-w-[830px] pt-5 md:pt-6">
                  (Picture below: taken in 2017, featuring my black
                  riding jacket, black helmet - if you can spot it, and a
                  friend’s Harley.)
                </span>
                <img
                  src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/who-we-are/lakshmi_new.png`}
                  alt="lakshmi"
                  className="md:hidden block w-full mt-9 mb-7.5 object-cover"
                />
                <span className="md:hidden block max-w-[830px]">
                  So, that’s why I was wearing what I was wearing on my ride to work in 2010. But something different 
                  happened that morning. It was probably around 8:45am on a road with surprisingly not much traffic. 
                  I noticed a Channapatna red bangle peaking out of the sleeve of my black riding jacket. This got me 
                  wondering.
                </span>
              </div>

            <span className="block max-w-[830px] md:mt-[24px]">
              <h2 id="red-bangle-as-a-symbol" className='!pt-[48px] md:!pt-[28px]'>Red Bangle as a Symbol</h2>
              <span className="block">
                What does a red bangle symbolise? In fact, what does a clay red bangle symbolise? I think I vaguely remembered one from my childhood.
              </span>
              <div className="flex flex-col md:flex-row md:items-start md:mt-0 max-w-[830px]">
                <img
                  src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/who-we-are/why_bangle_without_hand-01.jpg`}
                  alt="bangle"
                  className="hidden md:block md:w-[302px] w-full md:mt-[10px] mt-9 md:mb-0 mb-7.5 object-cover"
                />
                <span className="block md:ml-4 pt-5 md:pt-0">
                    Clay to me is organic, earthy, malleable, moldable, fragile yet firm. Red is vibrant, strong, inspiring, 
                    stark, bold and energetic. And, a Bangle is symbolic, beautiful, playful and elegant - all at once. A 
                    clay red bangle was all of these, and it was hand-made. You could break it a hundred times, and make 
                    it again. (Or at least in my imagination, you could.) And so, that morning, I decided that when I started 
                    a business, I would call it ‘Red Bangle’. 
                  </span>
              </div>
              <img
                  src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/who-we-are/why_bangle_without_hand-01.jpg`}
                  alt="bangle"
                  className="block md:hidden md:w-1/4 w-full md:mt-[28px] mt-9 md:mb-0 mb-7.5 object-cover"
                />
            </span>
            <span className="max-w-[830px]">
              <h2 id="from-production-house-to-a-video-agency-to-an-ai-first-creative-agency" className='md:mt-[24px] !pt-[12px] md:!pt-[28px]'>From Production House to a Video Agency to an AI-First Creative Agency</h2>
              <span>
                A year later, I started my YouTube show and a production house. I called it Red Bangle.
              </span>
              <span className="block">
                In 2016, I moved on from running a production house to running a tech-enabled global video agency. I called this too Red Bangle.
              </span>
              <span className="block">
                Today, Red Bangle has evolved into an AI-first creative agency serving both B2B and B2C brands the world over.
              </span>
            </span>
            <img
              src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/who-we-are/redbangle_logo_ournamepage.png`}
              alt="logo"
              className="w-[830px] !mb-0 object-cover mt-9 md:mt-0"
            />

            <span className="flex flex-col md:flex-row md:items-start md:mb-5">
              <span className="md:w-[830px] w-full">
                <h2 id="our-philosophy-why-not" className='!pt-[12px] md:!pt-[28px]'>Our Philosophy - <span className='italic'>Why Not?</span></h2>
                <span className="block">
                  Perhaps now the meaning of ‘Red Bangle’ has evolved, too.
                  Perhaps now it stands for a vibrant circle of evolution
                  and community - in business, in creativity, and my own
                  personal life. One that keeps moving forward together,
                  down the winding road, up the mountain and down the hill –
                  no matter the naysayers, no matter the challenges, no
                  matter the rocks along the path, soaking in all the small
                  wins along the way and smiling at the sun. Charting its
                  own surprising path. Inspiring each of us to say ‘why
                  not’, and consciously evolve.
                </span>
                <span className="block pt-5 md:pt-6">
                  <span>
                    I can say with certainty 9 years into running this
                    business, that we have built an organisation and a
                    community of people who are not afraid of change, not
                    tired of evolving. To us, change and evolution are fun,
                    exciting and a new opportunity, even if we are nervous
                    about the unknown. We embrace it all, each in our own
                    ways. While I could write “because, why not” here and
                    end this essay, I can think of a million real reasons in
                    history that point to examples of life forms that
                    survived and thrived because they evolved, and embraced
                    a ‘why not’ attitude and DNA at many turns.
                  </span>
                  <span className="block pt-5 md:pt-6">
                    Truly, is evolution an option to any of us? Just how
                    well we embrace it, is. Perhaps ‘Red Bangle’ is just a
                    wise, creative symbol of resilience (on a lighter note -
                    much akin to a cockroach).
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
        </section>
        {/* <section className="pb-10 pt-3 md:pt-0 md:pb-20">
          <div className="container">
            <div className="flex -mx-4 flex-wrap">
              <div className="w-full md:w-3/4 px-4">
                <div
                  ref={ourNameRef}
                  className="blog-content-main max-w-[830px]"
                >
                  <h2 id="a-bike-a-bangle-and-new-beginnings">A Bike, a Bangle, and New Beginnings</h2>
                  <p>
                    What do you get when you throw in a motor bike, a thinking
                    young woman, a lacquer bangle and Bangalore weather? A great
                    idea.
                  </p>

                  <p>
                    On an early spring morning in 2010 in Bangalore, I was on
                    the way to work on my motorbike, a Royal Enfield{' '}
                    <span className="italic">Thunderbird </span>
                    (a.k.a a Bullet, a 350 cc geared cruiser). I was in what had
                    then become my standard riding gear: a full-face black
                    helmet, black riding jacket, blue jeans, black shoes and - I
                    can’t remember for sure - maybe my riding gloves. Now let me
                    set some context on what looks like an over-armoured ride to
                    work in a regular Indian city.
                  </p>

                  <p>
                    I’d been riding motorbikes for 9 years already. I rode
                    inter-city when South Indian highways were still being built
                    in the early 2000s. I’d ridden motorbikes when all of India
                    probably had just 15 women riding motorbikes. Back then, It
                    just wasn’t a thing, it just wasn’t cool (well, not for
                    years. Today, there are probably a thousand in Bangalore
                    alone).
                  </p>
                  <span className="flex justify-start">
                    <img
                      src="/img/who-we-are/why_bangle_022.jpg"
                      alt="enfield"
                      className="pt-5 pb-2.5 object-cover"
                      width={415}
                      height={415}
                    />
                  </span>
                  <p>
                    Honestly, I took to riding a motorbike because a beat up old
                    geared motorbike was the only vehicle I had access to at
                    home when I was 19, and I didn’t see any reason why I
                    couldn’t use it to pick up groceries. In my head, if the men
                    could ride motorbikes, then why not me. But, that’s really
                    not how the world saw it then. Whether it was the third-hand
                    beat up Bajaj Kawasaki that I first learnt to ride when I
                    was 19, the TVS Victor that came a few years later or the
                    bullet - a woman riding a motorbike just drew a lot of
                    attention and often, unwanted attention. This varied from
                    catcalls, uninvited races on busy urban roads, words of
                    appreciation from strangers in cars, on cycles and on other
                    motorbikers, questions about the mileage, questions about
                    the price of the bike, and generally a vocalisation of
                    everything that a woman on a motorbike made everyone feel -
                    uncomfortable, awe-struck, curious, hopeful, envious and
                    more. A couple of times, it got scary too. Once, a car full
                    of men blocked my way and chased me down in the middle of
                    the day on a busy Chennai road in 2003. I made a mental note
                    of the car’s number, rode straight to the nearest police
                    station and complained to the lady constable there. She
                    looked me up and down, and asked me why I was wearing jeans
                    and riding a motorbike. Oh well. But, that didn’t stop me. I
                    just gradually stopped wearing bright-coloured clothing when
                    out on my motorbike and eventually to inconspicuous riding
                    gear that more or less hid the fact that I was a woman
                    riding a motorbike.
                  </p>
                  <span className="flex justify-start">
                    <img
                      src="/img/who-we-are/lakshmi_new.png"
                      alt="lakshmi"
                      className="pt-5 pb-2.5 object-cover"
                      width={415}
                      height={415}
                    />
                  </span>
                  <p className='italic'>
                    (Picture at the top: taken in 2017, featuring my black
                    riding jacket, black helmet - if you can spot it, and a
                    friend’s Harley.)
                  </p>
                  <p>
                    So, that’s why I was wearing what I was wearing on my ride
                    to work in 2010. But something different happened that
                    morning. It was probably around 8:45am on a road with
                    surprisingly not much traffic. I noticed a Channapatna red
                    bangle peaking out of the sleeve of my black riding jacket.
                    This got me wondering.
                  </p>
                  <h2 id="red-bangle-as-a-symbol">Red Bangle as a Symbol</h2>
                  <p>
                    What does a red bangle symbolise? In fact, what does a clay
                    red bangle symbolise? I think I vaguely remembered one from
                    my childhood.
                  </p>
                  <span className="flex justify-start">
                    <img
                      src="/img/who-we-are/why_bangle_without_hand-01.jpg"
                      alt="bangle"
                      className="pt-5 pb-2.5 object-cover"
                      width={415}
                      height={415}
                    />
                  </span>
                  <p>
                    Clay to me is organic, earthy, malleable, moldable, fragile
                    yet firm.
                  </p>
                  <p>
                    Red is vibrant, strong, inspiring, stark, bold and
                    energetic. And, a Bangle is symbolic, beautiful, playful and
                    elegant - all at once.
                  </p>
                  <p>
                    A clay red bangle was all of these, and it was hand-made.
                    You could break it a hundred times, and make it again. (Or
                    at least in my imagination, you could.) And so, that
                    morning, I decided that when I started a business, I would
                    call it ‘Red Bangle’.
                  </p>
                  <h2 id="from-production-house-to-a-video-agency-to-an-ai-first-creative-agency">From Production House to a Video Agency to an AI-First Creative Agency</h2>
                  <p>
                    A year later, I started my YouTube show and a production
                    house. I called it Red Bangle.
                  </p>
                  <p>
                    In 2016, I moved on from running a production house to
                    running a tech-enabled global video agency. I called this
                    too Red Bangle.
                  </p>
                  <p>
                    Today, Red Bangle has evolved into an AI-first creative
                    agency serving both B2B and B2C brands the world over.
                  </p>
                  <span className="flex justify-start">
                    <img
                      src="/img/who-we-are/logo_new.png"
                      alt="logo"
                      className="pt-5 pb-2.5 object-cover"
                      width={415}
                      height={415}
                    />
                  </span>
                  <h2 id="our-philosophy-why-not">Our Philosophy - Why Not?</h2>
                   <span className="flex justify-start">
                    <img
                      src="/img/who-we-are/red_bangle_logo_our_name.png"
                      alt="logo"
                      className="pt-5 pb-2.5 object-cover"
                      // width={415}
                      // height={415}
                    />
                  </span>
                  <p>
                    Perhaps now the meaning of ‘Red Bangle’ has evolved, too.
                    Perhaps now it stands for a vibrant circle of evolution and
                    community - in business, in creativity, and my own personal
                    life. One that keeps moving forward together, down the
                    winding road, up the mountain and down the hill – no matter
                    the naysayers, no matter the challenges, no matter the rocks
                    along the path, soaking in all the small wins along the way
                    and smiling at the sun. Charting its own surprising path.
                    Inspiring each of us to say ‘why not’, and consciously
                    evolve.
                  </p>
                  <p>
                    I can say with certainty 9 years into running this business,
                    that we have built an organisation and a community of people
                    who are not afraid of change, not tired of evolving. To us,
                    change and evolution are fun, exciting and a new
                    opportunity, even if we are nervous about the unknown. We
                    embrace it all, each in our own ways. While I could write
                    “because, why not” here and end this essay, I can think of a
                    million real reasons in history that point to examples of
                    life forms that survived and thrived because they evolved,
                    and embraced a ‘why not’ attitude and DNA at many turns.
                  </p>
                  <p>
                    Truly, is evolution an option to any of us? Just how well we
                    embrace it, is. Perhaps ‘Red Bangle’ is just a wise,
                    creative symbol of resilience (on a lighter note - much akin
                    to a cockroach).
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/4 px-4">
                <div
                  className={`  md:opacity-100 md:visible md:sticky md:top-18 md:h-auto fixed inset-0 w-full h-full bg-black/30 md:bg-transparent z-[9999] px-6 md:px-0 duration-300 ease-out ${
                    toc ? 'opacity-1 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {tocTree?.children?.length > 1 && (
                    <div className="md:border md:border-black/20 rounded-lg mb-4 bg-white mt-10 md:mt-0">
                      <div className="py-4 px-5 text-[14px] font-semibold md:border-b md:border-b-black/20 flex justify-between items-center">
                        Table of contents
                        <button
                          onClick={tocTrigger}
                          className="w-6 h-6 inline-flex items-center justify-center md:hidden"
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M9 1L1 9M1 1L9 9"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        className="py-4 px-5 text-[14px] font-semibold toc-content flex flex-col gap-4 max-h-[60vh] overflow-y-auto rb-scrollbar"
                        data-lenis-prevent
                      >
                        <TOC
                          lenis={lenis}
                          isRoot
                          isActive={(id) => id === activeToc}
                          {...tocTree}
                        />
                      </div>
                    </div>
                  )}

                  <div className="hidden md:block">
                    <h3 className="text-[18px] font-medium font-everett mb-3">
                      Share it on:
                    </h3>

                    <div className="flex gap-4 relative max-w-fit">
                      <LinkedinShareButton
                        url={`https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`}
                        quote={'Linkedin'}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`}
                          className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#006699] hover:border-[#006699]"
                        >
                          <Linkedin />
                        </a>
                      </LinkedinShareButton>

                      <TwitterShareButton
                        url={`https://twitter.com/intent/tweet?text=${articleUrl}`}
                        quote={'Twitter'}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://twitter.com/intent/tweet?text=${articleUrl}`}
                          className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#000] hover:border-[#000]"
                        >
                          <Twitter />
                        </a>
                      </TwitterShareButton>

                      <WhatsappShareButton
                        url={`whatsapp://send?text=${articleUrl}`}
                        quote={'Twitter'}
                      >
                        <a
                          href={`whatsapp://send?text=${articleUrl}`}
                          data-action="share/whatsapp/share"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#00C200] hover:border-[#00C200]"
                        >
                          <Whatsapp />
                        </a>
                      </WhatsappShareButton>

                      <button
                        onClick={copyPageUrl}
                        className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center  border-rb-dune/80 text-rb-dune/80 transition-all hover:text-[#000] hover:border-[#000]"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4.16797 12.5003H3.33464C2.89261 12.5003 2.46868 12.3247 2.15612 12.0122C1.84356 11.6996 1.66797 11.2757 1.66797 10.8337V3.33366C1.66797 2.89163 1.84356 2.46771 2.15612 2.15515C2.46868 1.84259 2.89261 1.66699 3.33464 1.66699H10.8346C11.2767 1.66699 11.7006 1.84259 12.0131 2.15515C12.3257 2.46771 12.5013 2.89163 12.5013 3.33366V4.16699M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z"
                            stroke="#5C5C5C"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <div className="copy-link-popup absolute bg-rb-black p-2 text-white text-xs rounded right-0 -bottom-12">
                        Link copied to clipboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-12 left-0 right-0 flex justify-center md:hidden">
            <Button onClick={tocTrigger}>Table of Contents</Button>
          </div>
        </section> */}
      </article>

      {/* <section className="pb-15 md:pb-30 overflow-hidden">
        <div className="container">
          <h2 className="text-title md:text-title-md font-medium font-everett !tracking-[-2.08px] mb-6 md:mb-16">
            Explore Offerings
          </h2>

          Swiper Slider (for md and above)
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
                      </Link>
                    )}
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          Grid (for mobile)
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
      </section> */}

      {/* <TrustedBrandsSection
        className="bg-white pb-15 md:pb-15"
        heading="Some Of Our Clients"
      /> */}

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default OurName
