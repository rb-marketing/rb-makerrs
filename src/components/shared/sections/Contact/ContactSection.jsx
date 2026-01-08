import { ContactForm } from '../ContactForm'

import { CollabContactForm } from '../CollabContactForm'

export const ContactSection = ({ type = '' }) => {
  return (
    <section className="bg-rb-mercury py-12 md:py-23">
      <div className="container">
        <div className="rb-row md:items-center md:justify-between">
          {type !== 'collab' && (
            <div className="w-full md:w-1/2">
              <div className="text-[60px] lg:text-[82px] xl:text-[102px] leading-[1.06] text-rb-black tracking-[-2.56px] uppercase font-everett font-medium">
              let&rsquo;s make something{' '}
              <span className="text-rb-link-green">new</span> <br /> today
            </div>
            </div>
          )}
          {type === 'collab' && (
            <div className="w-full md:w-[58%]">
              <div className="text-[52px] lg:text-[70px] xl:text-[97px] leading-[1.06] text-rb-black tracking-[-2.56px] uppercase font-everett font-medium">
                Collaborate with
                <br />
                <span className="text-rb-red ">Red Bangle</span>{' '}
                <br className="hidden md:block" /> today
              </div>
            </div>
          )}
          <div className="w-full md:w-5/12 mt-10 md:mt-0">
            <h3 className="text-base leading-5.5 md:text-2xl md:leading-6.5 mb-5.5 md:mb-7 font-semibold">
              {type === 'collab'
                ? 'Drop us a note.'
                : 'Grow your borderless brand today'}
            </h3>
            {type === 'collab' ? <CollabContactForm /> : <ContactForm />}
          </div>
        </div>
      </div>
    </section>
  )
}
