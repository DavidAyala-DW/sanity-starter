import addInternalLinks from "./internalLinks";
import addArticles from "./articles"
import addProducts from "./products"

export async function fulfillSectionQueries(page, internalLinks) {

  if (!page?.content) {
    return page
  }

  const sectionsWithQueryData = await Promise.all(
    page.content.map(async (section) => {

      addInternalLinks(section, internalLinks); // This include all cases
      console.log(section);
      await addArticles(section);
      await addProducts(section);
    
      if (section.query) {
        const queryData = await client.fetch(groq`${section.query}`)

        return { ...section, query: queryData }
      } else {
        return section
      }

    })
  )

  return { ...page, content: sectionsWithQueryData }

}