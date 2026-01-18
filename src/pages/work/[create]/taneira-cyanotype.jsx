import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    SEO,
    Testimonials,
    WorkHeroSection,
    RollupNumber
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';


// const jewelsTestimonialData = [
//   {
//     key: 0,
//     quote:
//       'It has been a pleasure to work with the Red Bangle team. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
//     name: 'SHOBA NARAYAN',
//     designation: 'FOUNDER',
//     image: {
//       srcSet:
//         '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
//       sizes: '(max-width:768px) 533px, 1066px',
//     },
//   }
// ]

const pageData = {
   logo: {
        src: '/img/logos/taneria.png',
        alt: 'taneria cyanotype',
        width: '260',
        height: '105',
    },
 image: '/img/works/taneria-cyanotype-banner.webp',
    tags: ['Textile and Apparel', ' Documentary Film'],
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                vimeoId: '867138024',
                name: 'Cyanotype by Taneira',
                company: 'Taneira',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/works/taneria-cyanotype-video-thumbnail.webp',
                },
            },

        ],
    },
}


function TaneiraCyanotype() {
    const router = useRouter();
    const fullUrl = `https://www.b2c.redbangle.com${router.asPath}`;
    const { logo, tags, commercials, desktopVideo, mobileVideo, image } = pageData
    const socials = [
        {
            key: 0,
            href: `https://twitter.com/intent/tweet?text=${fullUrl}`,
            color: '#000',
            icon: <Twitter />,
        },

        {
            type: 'linkedin',
            key: 1,
            href: fullUrl,
            color: '#006699',
            icon: <Linkedin />,
        },
    ]
    return (
        <>
            <SEO
                title="Case Study: Taneira Cyanotype"
                description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
                url="https://www.b2c.redbangle.com/work/video-content-production-agency-india/taneira-cyanotype"
            />
            <WorkHeroSection
                title={"Launching the Cyanotype clothing range"}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
            />
            <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
                <div className="container ">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">


                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                The creative team at Taneira was about to launch a collection using the “Cyanotype” process, which captures flowers on fabrics. To celebrate this unison of art and nature, we developed a film that revealed the handcrafted and earthy process against the backdrop of Shantiniketan.
                            </p>



                        </div>

                    </div>
                </div>




                <CommercialSection
                    sources={commercials?.sources}
                    type={commercials?.type}
                />
                {/* <Testimonials
          title={'WHAT OUR CLIENT SAYS'}
          testimonialData={jewelsTestimonialData}
          className="pt-14 md:pt-24 md:pb-30 pb-16"
        /> */}
            </section>

        </>
    )
}
TaneiraCyanotype.PageLayout = SCSLayout
export default TaneiraCyanotype
