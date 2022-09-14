import client from "../sanity-client"
import groq from 'groq'

export default async function addProducts(obj){

  const products = [];

  addProductsInfo(obj, products);

  if(products.length){
    console.log(products);
    await Promise.all(products.map( async (product) => {
      await requestProduct(product);
    }))

  }

}


function addProductsInfo(obj, products){

  const keys = Object.keys(obj);
  keys.forEach(key => {

    if(typeof obj[key] === 'array'){

      obj[key].forEach((childKey, i) => {
        addProductsInfo(obj[key][i], products);
      })

      return;

    }

    if(typeof obj[key] === 'object'){
      addProductsInfo(obj[key], products);
      return
    }
    
    if(key == "_type" && obj[key] == "singleProduct"){
      console.log("Find product");
      products.push(obj);    
    }
    

  })

}



async function requestProduct(obj){
  
  const request = await client.fetch(groq`*[_type == 'product' && _id == "${obj?.product?._ref}" ][0]{
    _id,
    summary,
    title,
    image
  }`);
  
  const {title, summary,image} = request;

  Object.assign(obj,{title, summary, image});

}