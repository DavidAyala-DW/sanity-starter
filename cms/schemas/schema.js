// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import route from './documents/route'
import page from './documents/page'
import blog from './documents/blog'
import product from './documents/products'
import siteSettings from './documents/siteSettings'


//We import Page sections
import simplePortableText from './objects/simple-portable-text'
import link from './objects/link'
import links from './objects/links'
import space from "./objects/space"
import internalLink from './objects/internal-link'
import blockContent from './blockContent'
import hero from "./objects/hero"
import backgroundImage from "./objects/backgroundImage"
import textContentCenter from './objects/textContentCenter'
import arrayLinks from './objects/arrayLinks'
import article from "./objects/article"
import articles from "./objects/articles"
import singleProduct from './objects/product'
import products from './objects/products'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.   
    siteSettings, 
    blog,
    product,
    page,
    route,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    link,
    links,
    internalLink,
    simplePortableText,
    space,
    backgroundImage,
    hero,
    arrayLinks,
    article,
    articles,
    singleProduct,
    products,
    textContentCenter,
  ]),
})
