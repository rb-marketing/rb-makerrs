

import { LineArrow } from '@/components/icons'
import { LineHeading, NewsletterField, SEO } from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { ArrowButton, Button } from '@/components/ui'
import React, { useState, useEffect } from 'react'
import { getBlogs } from '@/utils/graphql'
import { formatBlogPosts } from '@/utils/formate'
import { blogSchema } from '@/components/schema/blog-schema'
import Script from 'next/script'
import { Dropdown } from '@/components/dropdown/dropdown'
import { useRouter } from 'next/router'

const PAGE_LIMIT = 100;

const Articles = ({ featuredPost, posts: { edges, pageInfo } }) => {
  const [state, setState] = useState({
    pageInfo: {
      endCursor: pageInfo.endCursor,
      hasNextPage: pageInfo.hasNextPage,
    },
    posts: edges,
  })


  const loadMore = async () => {
    const {
      data: { posts },
    } = await getBlogs(state.pageInfo.endCursor, PAGE_LIMIT); 

    setState((prev) => ({
      pageInfo: posts.pageInfo,
      posts: [
        ...prev.posts,
        ...formatBlogPosts(posts?.edges).filter(
          (newPost) => !prev.posts.some((p) => p.slug === newPost.slug)
        ),
      ]
    }));
  };
  useEffect(() => {
    loadMore()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // setTimeout(() => {
    //   setisPopupOpen(true);
    // }, 10000);

  }, [])


  // Separate posts with the 'SEO Blogs' category and without //
  const { techPosts, otherPosts } = state.posts.reduce(
    (result, post) => {
      const { categories } = post;

      if (categories.some((c) => c.name === 'SEO Blogs')) {
        result.techPosts.push(post);
      } else {
        result.otherPosts.push(post);
      }

      return result;
    },
    { techPosts: [], otherPosts: [] }
  );


  // Concatenate the arrays to display 'SEO Blogs' posts last
  const allPosts = otherPosts.concat(techPosts);
  const [visiblePosts, setVisiblePosts] = useState(9); // Initial number of visible posts

  useEffect(() => {
    setVisiblePosts(6)
  }, [])
  const totalPosts = allPosts.length;

 const loadMorePosts = () => {
    const nextVisiblePosts = visiblePosts + 6;
    setVisiblePosts(Math.min(nextVisiblePosts, filteredPosts.length));
  };

  const router = useRouter();
  const { category } = router.query;


  useEffect(() => {
    const handlePopState = (event) => {
      setSelectedCategory('Select Category');
    };

    if (category === undefined) {
      window.addEventListener('popstate', handlePopState);
    }

  }, [])

  let categoryOptions = allPosts
    .flatMap(item => item.categories)
    .filter((category, index, self) =>
      index === self.findIndex((c) => c.slug === category.slug)
    )



  const initialCategory = categoryOptions && categoryOptions.find(obj => obj.slug === category);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory?.slug);
  //after selecting categories
  const handleCategoryChange = (category) => {
    if (category.slug === 'all-blogs') {
      router.push(`/blog`, undefined, { shallow: true });
      setSelectedCategory(category.slug);
    } else {
      router.push(`/blog?category=${category.slug}`, undefined, {
        shallow: true,
      });
      setSelectedCategory(category.slug);
    }

    setVisiblePosts(6);
    // reset visible count when filtering
  };


  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory?.slug);
    }
  }, [category]);

  const filteredPosts = (category && category !== "all-blogs")
    ? allPosts.filter(post => post.categories.some(cat => cat.slug === selectedCategory))
    : allPosts;

  return (
    <>
      <SEO
        title="Red Bangle - Insights on B2B Video Production and Content"
        description="Explore Red Bangle’s insights and blogs on B2B video production, brand identity design, marketing campaigns, corporate communications, employer branding and more."
        keywords="Read our latest Articles,
        Stay updated with Latest News and Insights,
        Marketing Blogs,
        Content Marketing Insights,
        Brand Content Resources"
        url={category !== undefined ? `https://www.staging.b2b.redbangle.com/blog?category=${category}`:`https://www.staging.b2b.redbangle.com/blog`}
      />
      <section className="bg-rb-mercury py-23">
        <div className="container">
          <h1 className="font-everett text-[32px] md:text-[64px] xl:text-[120px] font-normal mb-8 md:mb-18 leading-[100%]">
            BLOGS & ARTICLES
          </h1>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center mb-13 border-b border-b-rb-davy-grey pb-13">
            <p className="flex-1 md:text-[32px] font-semibold tracking-[-1.28px] mb-0">
              Discover how creativity, content and technology can drive growth for your B2B brand.
            </p>

            <NewsletterField />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="h-[315px] overflow-hidden relative">
                <a
                  href={`/${featuredPost?.tags[0]?.name || 'blog'}/${featuredPost?.slug}`}
                  target="_blank"
                  className="overflow-hidden group"
                >
                  <img
                    {...featuredPost?.featuredImage}
                    src={featuredPost?.featuredImage.src}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-300"
                    alt=""
                  />

                  <div className="absolute bottom-5 left-5 flex gap-1">
                    {featuredPost?.categories?.map((c) => (
                      <div
                        key={c.slug}
                        className="border border-white rounded-full py-2 px-4 text-[12px] font-semibold text-white capitalize"
                      >
                        {c.name}
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            </div>

            <div>
              {/* <div className="flex gap-2 mb-4">
                <span className="text-[14px] md:text-[16px]">
                  {featuredPost?.date}
                </span>
                <span className="text-[14px] md:text-[16px]">|</span>
                <span className="text-[14px] md:text-[16px]">
                  {featuredPost?.author}
                </span>
              </div> */}

              <h3 className="text-[26px] md:text-[32px] leading-[120%] font-semibold mb-4 tracking-[-1.28px]">
                {featuredPost?.title}
              </h3>

              <div
                dangerouslySetInnerHTML={{ __html: featuredPost?.excerpt }}
                className="mb-10"
              ></div>

              <a
                href={`/${featuredPost?.tags[0]?.name || 'blog'}/${featuredPost?.slug}`}
                className="inline-flex gap-2 items-center text-rb-red font-semibold"
                target="_blank"
              >
                Continue reading
                <LineArrow className=" max-w-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">Discover more</LineHeading>
          {/* 
          <h2 className="text-title md:text-title-md mb-8 font-everett">
            Leverage Videos for Growth
          </h2> */}

          <div>
            <Dropdown
              placeholder={selectedCategory && selectedCategory !== 'all-blogs' ? selectedCategory : 'ALL BLOGS'}
              options={categoryOptions}
              onChange={handleCategoryChange} // Handle the value change
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
            {filteredPosts.slice(0, visiblePosts).map(
              ({ date, author, featuredImage, slug, categories, title, tags }) => (
                <div key={slug}>
                <a href={`/${tags[0]?.name || 'blog'}/${slug}`} target="_blank"
                  className="">
                    <div className="h-[384px] block md:h-[272px] overflow-hidden relative mb-4">
                      <div className="w-full h-full overflow-hidden group">
                        <img
                          alt=""
                          {...featuredImage}
                          src={featuredImage.src}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                      <div className="absolute bottom-5 left-5 flex gap-1">
                        {categories.map((c) => (
                          <div
                            key={c.slug}
                            className={`${c.name === 'Uncategorized' ? 'hidden' : ''
                              } capitalize border border-white rounded-full py-2 px-4 text-[12px] font-semibold text-white`}
                          >
                            {c.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* <div className="flex gap-2 mb-4">
                        <span className="text-[14px] md:text-[16px]">
                          {date}
                        </span>
                        <span className="text-[14px] md:text-[16px]">|</span>
                        <span className="text-[14px] md:text-[16px]">
                          {author}
                        </span>
                      </div> */}

                      <h3 className="text-[22px] md:text-[24px] leading-[120%] font-semibold mb-5.5 md:mb-4 tracking-[-0.96px] line-clamp-2">
                        {title}
                      </h3>

                      <span
                        className="inline-flex gap-2 items-center text-rb-red font-semibold"
                       
                      >
                        Continue reading
                        <LineArrow className=" max-w-[20px]" />
                      </span>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
          <div className={`${filteredPosts.length > 6 ?'pt-15':''} text-center`}>

            {filteredPosts.length > 6 && visiblePosts < filteredPosts.length && (
              <Button
                className="w-full md:w-fit mx-auto mt-[30px] md:mt-12 focus:outline-none"
                onClick={loadMorePosts}
                suffix={<LineArrow />}
              >
                SEE MORE
              </Button>
            )}

            {filteredPosts.length > 6 && visiblePosts >= filteredPosts.length && (
              <Button
                className="w-full md:w-fit mx-auto mt-[30px] md:mt-12"
                onClick={() => {
                  setVisiblePosts(6); // or set to 6 if that's your default
                }}
                suffix={<LineArrow />}
              >
                SEE LESS
              </Button>
            )}
          </div>


        </div>
      </section>

      <GetUpdates />
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      ></script>
    </>
  )
}

export async function getStaticProps() {
  try {
    const { data } = await getBlogs(null, PAGE_LIMIT)

    // Format blog posts
    const formatedPosts = formatBlogPosts(data.posts?.edges)

    // Separate "SEO Blogs" and other categories
    let seoBlogs = []
    let nonSeoBlogs = []

    formatedPosts.forEach((obj) => {
      if (
        obj.categories.some((cat) => cat.name.toLowerCase() === 'seo blogs')
      ) {
        seoBlogs.push(obj)
      } else {
        nonSeoBlogs.push(obj)
      }
    })

    // Concatenate non-SEO blogs with SEO blogs at the end
    let rearrangedArray = nonSeoBlogs.concat(seoBlogs)

    // Extract the featured post
    const featuredPost = rearrangedArray.shift()

    return {
      props: {
        featuredPost,
        posts:
          {
            ...data.posts,
            edges: rearrangedArray,
          } || null,
      },
    }
  } catch (error) {
    // Handle errors
    console.error('Error fetching blogs:', error)

    return {
      props: {
        featuredPost: null,
        posts: null,
      },
    }
  }
}

Articles.PageLayoutProps = {
  hasContactForm: false,
}

export default Articles
