import { LineHeading } from '../Heading'
import { Marquee } from '../Marquee'

export const icons = [
  {
    id: 0,
    name: 'cain.webp',
    width: '110',
    height: '35',
    alt: 'Mccain',
  },
  { 
    id: 1,
    name: 'infosys-logo.jpg',
    width: '90',
    height: '30',
    alt: 'Infosys',
  },

  { 
    id: 2,
    name: 'indeed.webp',
    width: '132',
    height: '36',
    alt: 'Indeed',
  },
  {
    id: 3,
    name: 'taneria.png',
    width: '145',
    height: '55',
    alt: 'Taneria',
  },
  {
    id: 4,
    name: 'swiggy.svg',
    width: '155',
    height: '43',
    alt: 'Swiggy', 
  },
  { 
    id: 5,
    name: 'bosch.webp',
    width: '151',
    height: '33',
    alt: 'Bosch',
  },
  { 
    id: 6,
    name: 'general-electric.png',
    width: '200',
    height: '150',
    alt: 'General Electric',
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
    width: '83',
    height: '66',
    alt: 'Vivo',
  },
  {
    id: 9,
    name: 'l74-logo.png',
    width: '55',
    height: '62',
    alt: 'L74',
  },
  {
    id: 10,
    name: 'itc1.png',
    width: '135',
    height: '135',
    alt: 'ITC',
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
    width: '100',
    height: '34',
    alt: 'Mumbai Indians',
  },
  {
    id: 13,
    name: 'sequoia.png',
    width: '157',
    height: '50',
    alt: 'Sequoia',
  },
  { 
    id: 14,
    name: 'slb.webp',
    width: '113',
    height: '52',
    alt: 'SLB',
  },
  {
    id: 15,
    name: 'my-11-circle.webp',
    width: '151',
    height: '33',
    alt: 'My 11 Circle',
  },
  { 
    id: 16,
    name: 'dara.png',
    width: '200',
    height: '150',
    alt: 'Dara',
  },
  { 
    id: 17,
    name: 'vymo-logo.webp',
    width: '127',
    height: '52',
    alt: 'Vymo',
  },
  {
    id: 18,
    name: 'exicom.png',
    width: '163',
    height: '44',
    alt: 'Exicom',
  },
  {
    id: 19,
    name: 'treebo.png',
    width: '163',
    height: '44',
    alt: 'Treebo',
  }
]

export const TrustedBrandsSection = ({
  className = '',
  heading = 'Our Clients',
  ...props
}) => {
  return (
    <section className={className} {...props}>
      <div className="container">
        <LineHeading className="mb-7 md:mb-10">{heading}</LineHeading>
        <div className="overflow-hidden md:min-h-[188px]">
          <Marquee duration={50}>
            <div className="flex items-center">
              {icons.slice(0, icons.length / 2).map(({ name, id, ...rest }) => (
                <div key={id} className="mx-6 md:mx-12">
                  <img
                    src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/logos/${name}`}
                    loading="lazy"
                    alt=""
                    {...rest}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <div className="mt-0 md:mt-0"></div>
          <Marquee duration={50} direction={-1}>
            <div className="flex items-center">
              {icons.slice(icons.length / 2).map(({ name, id, ...rest }) => (
                <div key={id} className="mx-6 md:mx-12">
                  <img
                    src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/logos/${name}`}
                    loading="lazy"
                    alt=""
                    {...rest}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}