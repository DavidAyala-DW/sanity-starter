import groq from 'groq'
import { NextSeo } from 'next-seo'
import client from '@/lib/sanity-client'
import Layout from '@/components/layout'
import RenderSections from '@/components/render-sections'
import { slugParamToPath } from '@/lib/urls'
import {
  getMenus,
  getSiteConfig,
  getContentTypeSections,
  fulfillSectionQueries
} from "@/lib/helpers"

export default function Page({props}) {

  const {
    title = 'Missing title',
    content = [],
    siteSettings,  
    menus
  } = props

  return (    
    <Layout menus={menus} siteSettings={siteSettings}>
      <NextSeo
        title={title}
      />
      {content && <RenderSections sections={content} />}
    </Layout>
  )
  
}

export async function getStaticPaths() {

  const routes = await client.fetch(groq`*[_type == 'blog']{slug}`);
  const paths = routes.map(({ slug }) => ({
    params: {
      slug: slug.current === '/' ? false : [slug.current],
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
  
}

export const getStaticProps = async ({ params }) => {

  const slug = slugParamToPath(params?.slug)
  const loadParallel = [
    getContentTypeSections(slug,"blog"),
    getSiteConfig(),
    getMenus("route")
  ]

  let [data, siteSettings, menus] = await Promise.all(loadParallel)
  siteSettings = siteSettings == null ?  {} : siteSettings;
  data = await fulfillSectionQueries(data, menus)
  data.slug = slug;

  return {
    props:{
      props: { ...data, siteSettings, menus } || {},
    }
  }
  
}
