export default function addInternalLinks(obj,links){

  const keys = Object.keys(obj);
  keys.forEach(key => {

    if(typeof obj[key] === 'array'){

      obj[key].forEach((childKey, i) => {
        addInternalLinks(obj[key][i], links);
      })

      return;

    }

    if(typeof obj[key] === 'object'){
      addInternalLinks(obj[key], links);
      return
    }

    if(key == "_type" && obj[key] == "links"){
      const {link} = obj ?? null;
      const selectedLink = links.find(internalLink => internalLink?._id == link?._ref);
      obj.internalLink = selectedLink?.slug?.current;
    }

  })

}