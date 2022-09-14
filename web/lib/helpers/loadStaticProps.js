import client from '@/lib/sanity-client'
import { getSlugVariations } from '@/lib/urls'
import groq from 'groq'


export async function getMenus(route){
  const request = await client.fetch(groq`*[_type == "${route}"] {_id, slug {current}} `);
  return request;
}

export async function getSiteConfig(){
  const siteSettings = await client.fetch(groq`*[_type == "siteSettings"][0]{...}`);
  return siteSettings;
}

export async function getPageSections(slug, route){

  const request = await client.fetch(
    groq`
      *[_type == "${route}" && slug.current in $possibleSlugs][0]{
        page -> {...}
      }
    `,
    { possibleSlugs: getSlugVariations(slug) }
  )

  return request?.page;
}

export async function getContentTypeSections(slug, route){

  const request = await client.fetch(
    groq`
      *[_type == "${route}" && slug.current in $possibleSlugs][0]{
        _id,
        title,
        content
      }
    `,
    { possibleSlugs: getSlugVariations(slug) }
  )

  return request;
}