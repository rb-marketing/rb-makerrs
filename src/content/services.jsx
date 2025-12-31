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