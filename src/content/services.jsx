import Link from 'next/link'

export const services = [
  {
    key: 'strategy',
    label: 'Strategy',
    title: 'STRATEGY',
    // image: { src: '/img/services/scs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/strategy.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We blend marketing expertise with data and insights to arrive at strategies to expand your audience, amplify reach, and boost your brand.',
    steps: [
      '01. Brand Environment Analysis',
      '02. Brand Positioning',
      '03. Brand Communication',
    ],
    detail: '/services/strategy',
    work: '/work/strategy',
  },
  {
    key: 'design',
    label: 'Design',
    title: 'DESIGN',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/design-rect.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'Our design solutions spark conversations and brand love amongst your audiences. Go from brand identity systems to design-led experiences and more.',
    steps: [
      '01. Brand Identity ',
      '02. Mascots & Avatars',
      '03. Tech-Powered Experiences',
      '04. Design Collateral',
      '05. Motion Graphics',
      '06. Environmental Graphics',
    ],
    detail: '/services/design',
    // work: '/work/design',
  },
  {
    key: 'campaign',
    label: 'Campaign',
    title: 'CAMPAIGN',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/campaign-rect.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We dive into human behavior and culture to craft campaigns that do all it takes to deliver real, game-changing results for your brand.',
    steps: [
      '01. Integrated',
      '02. Television',
      '03. Digital',
      '04. Interactive',
      '05. Print & POSM ',
      '06. Outdoor & Offline',
    ],
    detail: '/services/campaign',
    work: '/work/campaign',
  },
  {
    key: 'content',
    label: ' Content',
    title: ' CONTENT',
    // image: { src: '/img/services/ecs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/content-rect-1.mp4',
      poster: '/img/services/play-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We fuel growth with content that packs a punch. Our team builds brand communities and delivers ROI through brand IPs, snappy videos, and more',
    steps: [
      '01. Branded IPs & Series',
      '02. Platform Content',
      '03. Tech-powered Content',
      '04. Film & Video Content',
      '05. Influencer Marketing',
      '06. Website & Editorial Content',
    ],
    detail: '/services/content',
    work: '/work/content',
  },
  {
    key: 'technology',
    label: ' Technology',
    title: ' TECHNOLOGY',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/technology-rect.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We fuse technology and creativity to craft engaging digital experiences. From campaigns to content, we deliver technology-enabled narratives that transform brands.',
    steps: [
      '01. AI-based Tech Solutions ',
      '02. Interactive & Immersive',
      '03. Phygital Experiences',
      '04. Gamified Experiences',
      '05. Branded Websites & Apps',
      '06. Private Social',
    ],
    detail: '/services/technology',
    work: '/work/technology',
  },
  {
    key: 'production',
    label: 'Production',
    title: 'PRODUCTION',
    // image: { src: '/img/services/ccs-cover.webp', width: 1062, height: 1115 },
    video: {
      src: '/img/services/production-rect-1.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    content:
      'We produce campaigns and content that steal the spotlight. Our Producers bring big ideas to life across formats, locations, languages, genres and screens.',
    steps: [
      '01. Storyboards & Narramatics',
      '02. Celebrities & Casting',
      '03. Art Direction & Styling',
      '04. Music Sourcing & Composition',
      '05. Illustrations & CGI',
      '06. Production',
      '07. Editing & Animation',
      '08. Versioning & Adaptations',
    ],
    detail: '/services/production',
    // work: '/work/production',
  },
]


export const redbanglewayCreate = [
  {
    key: '0',
    heading: 'Knowledge',
    content: (
      <>
        <div>
          We dive deep into your brand&apos;s DNA to understand your audience,
          challenges, and specific needs, to craft campaigns that truly
          resonate.
        </div>
      </>
    ),
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Inspiration',
    content:
      'We tap into cultural contexts to uncover insights and draw inspiration, setting the stage to explore limitless ways in which we can approach your creative campaign.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Creation',
    content:
      'We turn our insights into the perfect marriage of visuals and words, crafting engaging stories and conversations that make your brand campaigns impossible to ignore.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Execution',
    content: (
      <>
        <div>
          From films to print and interactive, we&apos;ve got the creative
          chops, production expertise and tech know-how to bring great campaign
          ideas to life.
        </div>
      </>
    ),
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]
export const redbanglewayCreateAbout = [
  {
    key: '0',
    heading: 'Always tech-first',
    content:
      'We started building our technology platform on day zero. Our intent was to bake efficiencies into creative workflows, ensure zero information and asset loss, and accelerate growth.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Creative Collaboration',
    content:
      'Our platform enables seamless collaboration between us, our clients and our curated community of creative collaborators the world over. We onboard, co-create, collaborate, manage and deliver on the cloud.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Efficient Workflows',
    content:
      'From briefs to estimates, project management, real-time reviews, asset organisation, expense logging and timesheets. Year after year, our platform helps us create with greater efficiency.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Value for Clients',
    content:
      'On-brief, on-time and great quality - the mix we’ve been aiming for from day one. What clients want with every agency. And our path to success.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '4',
    heading: 'Value for Collaborators',
    content:
      'Whether it’s video crews in North America or graphic designers in India—our platform allows us to seamlessly onboard, curate and co-create with creative talent the world over.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]
export const approach = [
  { key: 0, title: 'Project Brief', src: 'brief.svg' },
  { key: 1, title: 'Info Gathering', src: 'info.svg' },
  { key: 2, title: 'Concept Proposal', src: 'concept.svg' },
  { key: 3, title: 'Research & Script', src: 'research.svg' },
  { key: 4, title: 'Visualization', src: 'visualization.svg' },
  { key: 5, title: 'Pre-Prod Meeting', src: 'prepod.svg' },
  { key: 6, title: 'Production', src: 'production.svg' },
  { key: 7, title: 'Post Production', src: 'postproduction.svg' },
  { key: 8, title: 'Delivery', src: 'delivery.svg' },
  { key: 9, title: 'Video Asset Repurposing', src: 'videoasset.svg' },
]
export const aboutServices = [
  {
    id: 0,
    title: 'B2B Global Services',
    desc: 'End–to-end creative solutions for global B2B enterprises.',
    img: '/img/who-we-are/B2B.jpg',
    imgmweb: '/img/who-we-are/B2B.jpg',
    alt: 'B2B Global',
    href: process.env.NEXT_PUBLIC_B2B,
  },
  {
    id: 1,
    title: 'B2C India Services',
    desc: 'Brand Content solutions for consumer brands in India.',
    img: '/img/who-we-are/B2C.jpg',
    imgmweb: '/img/who-we-are/B2C.jpg',
    alt: 'B2C India',
    href: process.env.NEXT_PUBLIC_B2C,
  },
  // {
  //   id: 2,
  //   title: 'AI Products',
  //   desc: 'Artificial intelligence products that amplify brand communications.',
  //   img: '/img/who-we-are/AI.jpg',
  //   imgmweb: '/img/who-we-are/AI.jpg',
  //   alt: 'AI Products',
  //   href: '#',
  // },
]

export const TNC = [
  {
    key: 0,
    title: 'What services does your global B2B agency offer?',
    content: (
      <>
        <div>
          Red Bangle offers a range of creative services to global businesses.
        </div>
        <h3 className="mt-5 font-semibold  text-base">1. Strategy:</h3>
        <div>
          We offer a range of strategy services - including brand environment
          analysis, brand communication strategy, and video content strategy. We
          blend data, insights and marketing expertise to craft strategies that
          drive growth for your B2B enterprise.
        </div>
        <h3 className="mt-5 font-semibold  text-base">2. Design:</h3>
        <div>
          We offer a range of design services. From brand identity and
          experiences, to mascots, print and editorial collateral, to wall
          graphics for corporate offices. We help you build brand
          differentiation, credibility and human connect through our design
          solutions.
        </div>
        <h3 className="mt-5 font-semibold  text-base">3. Videos:</h3>
        <div>
          We offer a wide range of content services for brand growth. Whether it
          is case study videos, thought leadership content, product explainer
          videos, hiring and culture videos, or videos for corporate
          communications and public relations. We offer end to end video
          production services, including research, conceptualisation, anywhere
          production, and endless versioning.
        </div>
        <h3 className="mt-5 font-semibold  text-base">4. Campaign:</h3>
        <div>
          From insightful communication strategies, to big campaign ideas and
          creatives, exciting campaign plans, and flawless execution across
          formats and locations – we provide comprehensive campaign solutions.
          Whether it&apos;s for brand marketing, product and solution marketing,
          employer branding, localisation or ESG campaigns – we support every
          phase of enterprise growth.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          5. Artificial Intelligence:
        </h3>
        <div>
          From using GenAI to generate video and imagery for brand
          communications and creating AI Influencers to developing AI models for
          a global campaign - we’ve got what it takes to conceptualise, consult,
          and develop AI-integrated communications for B2B brands.
        </div>
        <h3 className="mt-5 font-semibold  text-base">6. Technology:</h3>
        <div>
          From beautifully responsive corporate websites and private social apps
          to immersive XR experiences and gamified content – we conceptualise,
          design and develop custom technology solutions that help you achieve
          your B2B brand communication goals.
        </div>
        <h3 className="mt-5 font-semibold  text-base">7. Crews:</h3>
        <div>
          With Red Bangle, you can get professional video crews on-demand in 100
          countries. Be it a single-camera testimonial shoot or a multi-camera
          event shoot - our curated video crew services scale to your brief, no
          matter how many cities and continents.
        </div>
      </>
    ),
  },
  {
    key: 1,
    title: 'How experienced is your team?',
    content:
      'We’ve been fuelling B2B communications with great creativity and technology for nearly a decade now. We are a team of over 50 people across design, videos, technology and more. We know what sticks in global B2B communications.',
  },
  {
    key: 2,
    title: ' Do you have a portfolio i can view?',
    content: (
      <>
        Yes. Explore our Campaign portfolio{' '}
        <Link href="/work/campaign" className="underline text-rb-red">
          here
        </Link>
        {''}, Videos portfolio {''}
        <Link href="/work/videos" className="underline text-rb-red">
          here
        </Link>
        {''}, and our Technology portfolio{' '}
        <Link href="/work/technology" className="underline text-rb-red">
          here
        </Link>
        .
      </>
    ),
  },
  {
    key: 3,
    title: 'Typically, what business verticals do you create videos for?',
    content:
      'Red Bangle produces a variety of videos and video content to meet the diverse needs of global B2B brands. This includes videos for marketing, corporate communications and public relations, employer branding, internal communications, sales and RFPs, and more. The formats range from corporate films to marketing explainers.',
  },
  {
    key: 5,
    title: 'What are your typical project turnaround times?',
    content: (
      <>
        <div>
          Project turnaround times vary based on the format, scale of production
          as well as the type of service. Here’s a little guidance for each of
          our services.
        </div>
        <h3 className="mt-5 font-semibold  text-base">1. Strategy</h3>
        <div>
          A smaller ask such as researching and defining your content strategy
          could take up to 4 weeks, but a larger ask such as brand strategy
          could take up to 2 months depending on the amount of research and
          analysis required.
        </div>
        <h3 className="mt-5 font-semibold  text-base">2. Design</h3>
        <div>
          Depending on the requirement, the timeline varies. A simple brochure
          may take a week. A branded tee may take a couple of days for an
          existing brand. And a whole new brand identity system could take
          anywhere between 2 and 6 months depending on the expanse of the brief.
        </div>
        <h3 className="mt-5 font-semibold  text-base">3. Videos</h3>
        <div>
          Depending on the format and the scale of the project, as well as
          depending on how quickly we receive your feedback - we take anywhere
          between 10 and 40 working days to turnaround a brief. When we are
          making a longer-duration video (that’s not a simple testimonial video
          or an interview video) or an interactive video, this timeline might
          stretch to over 45 days. A short series of videos could be produced in
          45 days and a larger requirement - for example, YouTube content to
          grow subscribers and community - could be run as a year-long project.
        </div>
        <h3 className="mt-5 font-semibold  text-base">4. Campaign</h3>
        <div>
          Workflows and timelines are highly customized and responsive for this
          service. A simple campaign could be created in 30 working days from
          the formal contract or take up to 90 days - this is subject to the
          brief, the scale of the requirement, as well as dependencies on the
          client-side.
        </div>
        <h3 className="mt-5 font-semibold  text-base">
          5. Artificial Intelligence
        </h3>
        <div>
          From using GenAI to generate video and imagery for brand
          communications and creating AI Influencers to developing AI models for
          a global campaign - we’ve got what it takes to conceptualise, consult,
          and develop AI-integrated communications for B2B brands.
        </div>
        <h3 className="mt-5 font-semibold  text-base">6. Technology</h3>
        <div>
          When it comes to technology, the conceptualisation, research,
          consulting, design and development process could vary between as
          little as 1 month for a microsite, 4 months for a website (including
          all the graphics and content) and up to 12 months for a branded game.
          Turnaround times similarly vary for other services such as augmented
          reality, private social apps, etc.
        </div>
        <h3 className="mt-5 font-semibold  text-base">7. Crews</h3>
        <div>
          Typically, we can get a curated video crew in place in as little as 3
          working days. And post the shoot, we could either handover the files
          at the shoot on a hard disk or quality-check the footage and deliver
          it online 28 hours post the shoot.
        </div>
      </>
    ),
  },
  {
    key: 9,
    title:
      'What are your policies around intellectual property rights and business data confidentiality?',
    content:
      'We take data security, privacy, confidentiality, and intellectual property rights very seriously. Our practices adhere to global standards. We license every single software and creative asset required, and ensure that necessary media release documents and service contracts are in place to explicitly call out the intellectual property rights assigned to the client.',
  },
  {
    key: 10,
    title: 'Which time zone does your company operate in?',
    content: (
      <>
        Our global services team supports clients across time zones. So,{' '}
        <Link href="/contact" className="underline text-rb-red">
          send us a brief
        </Link>{' '}
        and we’ll set up a meeting at a mutually convenient time.
      </>
    ),
  },
]

export const serviceVideos = {
  get_design: {
    video: {
      src: '/img/services/service_get_design.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/service_get_design.mp4',
      poster: '/img/services/think-full-poster.webp',
      width: '1920',
      height: '1080',
    },
  },
   get_podcast: {
    video: {
      src: '/img/services/service_get_podcast.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/service_get_podcast.mp4',
      poster: '/img/services/think-full-poster.webp',
      width: '1920',
      height: '1080',
    },
  },
  get_campaign: {
    video: {
      src: '/img/services/campaign/hero.mp4',
      poster: '/img/services/campaign/hero.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/campaign/hero.mp4',
      poster: '/img/services/campaign/hero.webp',
      width: '1920',
      height: '1080',
    },
  },
  book_a_crew: {
    video: {
      src: '/img/services/crew/crew-preview..mp4',
      poster: '/img/services/crew/poster-crew.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/crew/crew-preview.mp4',
      poster: '/img/services/crew/poster-crew.webp',
      width: '1920',
      height: '1080',
    },
  },
  design: {
    video: {
      src: '/img/services/design_video.mp4',
      poster: '/img/services/design_video.png',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/design_video.mp4',
     poster: '/img/services/design_video.png',
      width: '1920',
      height: '1080',
    },
  },
  content: {
    video: {
      src: '/img/services/content-rect-2.mp4',
      poster: '/img/services/content-rect-2.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/content-rect-2.mp4',
      poster: '/img/services/content-rect-2.webp',
      width: '1920',
      height: '1080',
    },
  },
  technology: {
    video: {
      src: '/img/services/tech-rect2.mp4',
      poster: '/img/services/tech-rect2.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/tech-rect2.mp4',
      poster: '/img/services/tech-rect2.webp',
      width: '1920',
      height: '1080',
    },
  },
  production: {
    video: {
      src: '/img/services/production-rect.mp4',
      poster: '/img/services/production_rect.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/production-rect.mp4',
      poster: '/img/services/production_rect.webp',
      width: '1920',
      height: '1080',
    },
  },
  ai: {
    video: {
      src: '/img/services/ai-react.mp4',
      poster: '/img/services/ai-react.webp',
      width: '1440',
      height: '810',
    },
    fullVideo: {
      src: '/img/services/ai-react.mp4',
      poster: '/img/services/ai-react.webp',
      width: '1920',
      height: '1080',
    },
  }
}

export const podcastCards = [
  {
    key: 0,
    title: 'Podcast Research & Strategy',
    text: 'We study your industry, audience and competitors, and build on your strategic priorities to define the themes and direction for your podcast. We ensure that your podcast reflects your brand purpose, market positioning and long-term goals.',
    icon: {
      src: '/img/services/podcast/icon1.svg',
      alt:'star',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Podcast Concept',
    text: 'We translate focus themes into a unique podcast concept and structure the format to ensure that each episode embraces your brand, expresses your point of view consistently and with authority, and offers something memorable to your audience.',
    icon: {
      src: '/img/services/podcast/icon2.svg',
      alt: 'S-circles',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Podcast Branding',
    text: 'We craft a great name and tagline for your podcast, design the logo, channel art, thumbnails, in-episode graphics, music, and more. We bring the whole package together so your podcast stands out no matter where it is viewed and how.',
    icon: {
      src: '/img/services/podcast/icon3.svg',
      alt: 'S-Maze',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Global Production',
    text: 'From a two-camera shoot to a four-camera setup and a mix of production setups. Whether it’s 1 shoot a month or 4 shoots a month. Whether it’s in a studio, at an event, or on the go. Whether it’s in New York or New Delhi. Makerrs has podcast production covered for your brand, no matter what the scale, format, or genre.',
    icon: {
      src: '/img/services/podcast/icon4.svg',
      alt: 'Think',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Podcast Publishing',
    text: 'Our eye-grabbing thumbnails, SEO-friendly titles, descriptions, chapters, and transcripts, and our overall comprehensive project management ensure every episode goes live on schedule across YouTube, Spotify, Apple Podcast, and more. ',
    icon: {
      src: '/img/services/podcast/icon5.svg',
      alt: 'Services',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Podcast Amplification',
    text: 'Every good episode needs several pieces of amplification content – teaser, down edits, carousel, and static graphic – and supporting thumbnails, titles, captions, descriptions, and more! Our podcast producers, writers, and editors are here to scale podcast post-production and marketing content to meet your community growth ambitions.',
    icon: {
      src: '/img/services/podcast/icon6.svg',
      alt: 's-megaphone',
      width: 111,
      height: 111,
    },
  },
  {
    key: 6,
    title: 'Podcast Marketing',
    text: (
          <>
We craft, publish, and track organic marketing content across LinkedIn, X, Instagram, and other social platforms to ensure audience growth. And when you want more than organic growth, we have you covered with planned media spends. We’ll propose the right media spend strategy to achieve your brand and podcast growth goals.          </>
    ),
    icon: {
      src: '/img/services/podcast/icon7.svg',
      alt: 's-chart',
      width: 111,
      height: 111,
    },
  },
]

export const redbanglewayThink = [
  {
    key: '0',
    heading: 'Discovery',
    content:
      "We explore your brand DNA and aspirations through research, interviews, analysis, and discussions.",
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Strategy',
    content:
      'We craft a creative strategy to give your brand and communication a unique personality and advantage.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Creative',
    content:
      'We explore creative directions and build design assets for your unique requirements.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: ' Delivery',
    content:
      'We compile and deliver all assets along with clear guidelines for consistent usage.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '4',
    heading: 'Scale',
    content:
      'From brand identity to brand mascots, we help roll out and scale.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]

export const designCards = [
  {
    key: 0,
    title: 'Brand Design Systems',
    text: 'Get unique, multi-sensory Brand Design Systems–visual, verbal, and sonic–that deliver a cohesive brand story and brand experience across touch points. Sign up for an immersive branding workshop and get started today!',
    icon: {
      src: '/img/services/design/icon1.svg',
      alt:'star',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Event Branding',
    text: 'Be it your own brand event or a branded booth–our comprehensive event branding services include event theme and logo design, invites, motion graphics, mailers, zone and booth design, presentation design, merchandise design, and giveaway curation.',
    icon: {
      src: '/img/services/design/icon2.svg',
      alt: 'S-circles',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Collateral Design',
    text: 'From presentations and coffee table books to packaging design, brochure design, brand merchandise design, social media creatives, and more—we help you slay brand conversations through great design.',
    icon: {
      src: '/img/services/design/icon3.svg',
      alt: 'S-Maze',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Interactive Experiences',
    text: 'We design and develop interactive and immersive brand experiences that transform physical and digital spaces into dynamic storytelling platforms. Be it interactive, augmented or mixed reality - we forge unforgettable experiences for your brand.',
    icon: {
      src: '/img/services/design/icon4.svg',
      alt: 'Think',
      width: 111,
      height: 111,
    },
  },
  {
    key: 4,
    title: 'Brand Mascots and Avatars',
    text: 'Fuel infinite customer engagement possibilities with custom-crafted brand mascots and avatars inspired by human, animal, object, sci-fi, or hybrid DNA. Supercharge your brand across web, social, email, events, and more.',
    icon: {
      src: '/img/services/design/icon5.svg',
      alt: 'Services',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Environmental Graphics',
    text: 'We design visually appealing environments and physical spaces for retail, corporate offices, galleries, public spaces, events, and more—helping people feel, navigate, and interact with your brand through curiosity and joy.',
    icon: {
      src: '/img/services/design/icon6.svg',
      alt: 's-megaphone',
      width: 111,
      height: 111,
    },
  },
  {
    key: 6,
    title: 'Motion Graphics',
    text: 'We\'re motion-first. In today\'s digital landscape, motion is key to captivate audiences through a "fourth dimension" in graphic design. We specialize in motion graphics, animation, VFX, CGI, and more.',
    icon: {
      src: '/img/services/design/icon7.svg',
      alt: 's-chart',
      width: 111,
      height: 111,
    },
  },
]

export const campaignCards = [
  {
    key: 0,
    title: 'Brand & Marketing Campaigns',
    text: 'Get brand awareness campaigns for your new markets that cut through the noise. Get marketing campaigns that drive sales for your product/service. Talk to us today for campaign services that win big for your business.',
    icon: {
      src: '/img/services/campaign/icon1.svg',
      alt:'star',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Employer Branding & Recruitment Campaigns',
    text: 'Get employer brand awareness campaigns to drive recruitment in new regions. Get interactive campaigns that engage your people globally. Talk to us for employer branding campaigns that work hard for your employer brand.',
    icon: {
      src: '/img/services/campaign/icon2.svg',
      alt: 'S-circles',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'CorpComm and Public Relations Campaigns',
    text: 'Enhance your corporate communications with great campaigns that engage every stakeholder group. Our strategy and creative teams are here to craft meaningful campaign strategy, ideas and creatives for you.',
    icon: {
      src: '/img/services/campaign/icon3.svg',
      alt: 'S-Maze',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'Environmental, Social & Governance Campaigns',
    text: 'From campaigns big on documentary films to campaigns big on data-driven storytelling and immersive experiences–craft exciting ESG campaigns with us. Get great ideas and global execution for your ESG campaigns.',
    icon: {
      src: '/img/services/campaign/icon4.svg',
      alt: 'Think',
      width: 111,
      height: 111,
    },
  }
]

export const campaignCards2 = [
  {
    key: 0,
    title: 'Integrated',
    icon: {
      src: '/img/services/campaign/icon5.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 1,
    title: 'Digital',
    icon: {
      src: '/img/services/campaign/icon6.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 2,
    title: 'Interactive & Immersive',
    icon: {
      src: '/img/services/campaign/icon7.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 3,
    title: 'AI-first',
    icon: {
      src: '/img/services/campaign/icon8.svg',
      width: 111,
      height: 111,
    },
  },
   {
    key: 4,
    title: 'Gamified',
    icon: {
      src: '/img/services/campaign/icon9.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 5,
    title: 'Television',
    icon: {
      src: '/img/services/campaign/icon10.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 6,
    title: 'Print & POSM',
    icon: {
      src: '/img/services/campaign/icon11.svg',
      width: 111,
      height: 111,
    },
  },
  {
    key: 7,
    title: 'Outdoor & Offline',
    icon: {
      src: '/img/services/campaign/icon12.svg',
      width: 111,
      height: 111,
    },
  }
]

export const campaignCards3 = [
  {
    key: '0',
    heading: 'Discovery',
    content:
      "We understand your brand, offering, audience and business objectives. We then design a tailored approach to solve communication challenges and craft compelling campaigns.",
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '1',
    heading: 'Strategy',
    content:
      'We go beyond the brief–connecting the dots between your goals, audience, competitive landscape and market to uncover insights and shape a message that stands out for your campaign.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '2',
    heading: 'Creative Direction',
    content:
      'We craft unique ideas and stunning visuals, making your campaigns sticky and memorable. From the campaign key visual and tag line to videos, hoardings, and more–we offer end-to-end campaign solutions.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '3',
    heading: 'Creative Execution',
    content:
      'From copy and design across genres and styles to high-quality film and video production, and limitless versioning–we offer comprehensive, scalable creative execution services so you can focus on the rest.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
  {
    key: '4',
    heading: 'Technology Integrations',
    content:
      'From leveraging AI for interactive campaigns, immersive technologies for memorable campaign experiences and gamified high-engagement campaigns–we bring the tech chops required to deliver new-age campaigns online and offline.',
    image: {
      src: '/img/services/service-image.webp',
      width: '726',
      height: '915',
    },
  },
]