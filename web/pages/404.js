import { NextSeo } from 'next-seo'
import Layout from '@/components/layout'
import Link from "next/link"

import {
  getMenus,
  getSiteConfig,
} from "@/lib/helpers"

export default function Page404({props}) {

  const {
    title = '404 Page',
    siteSettings,  
    menus
  } = props

  return (    
    <Layout menus={menus} siteSettings={siteSettings}>

      <NextSeo
        title={title}
      />

      <div className="w-full my-auto max-w-max mx-auto flex flex-col items-center space-y-0.5">

        <h1 className="text-[64px]">
          404 - Page Not Found
        </h1>

        <Link href="/" passHref>
          <a className="underline italic">
            Go back home
          </a>
        </Link>

      </div>



    </Layout>
  )

}

export const getStaticProps = async ({ params }) => {

  const loadParallel = [
    getSiteConfig(),
    getMenus("route")
  ]

  const [siteSettings, menus] = await Promise.all(loadParallel);

  return {
    props:{
      props: { siteSettings, menus } || {},
    }
  }
  
}