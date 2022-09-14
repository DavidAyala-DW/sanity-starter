import client from "../sanity-client"
import groq from 'groq'

export default async function addArticles(obj){

  const articles = [];

  addArticlesInfo(obj, articles);

  if(articles.length){

    await Promise.all(articles.map( async (article) => {
      await requestArticle(article);
    }))

  }

}


function addArticlesInfo(obj, articles){

  const keys = Object.keys(obj);
  keys.forEach(key => {

    if(typeof obj[key] === 'array'){

      obj[key].forEach((childKey, i) => {
        addArticlesInfo(obj[key][i], articles);
      })

      return;

    }

    if(typeof obj[key] === 'object'){
      addArticlesInfo(obj[key], articles);
      return
    }
    
    if(key == "_type" && obj[key] == "article"){
      articles.push(obj);    
    }
    

  })

}



async function requestArticle(obj){
  
  const request = await client.fetch(groq`*[_type == 'blog' && _id == "${obj?.article?._ref}" ][0]{
    _id,
    summary,
    title,
    slug,
    image
  }`);
  
  const {title, slug:{current}, summary,image} = request;

  Object.assign(obj,{title, slug:current, summary, image});

}