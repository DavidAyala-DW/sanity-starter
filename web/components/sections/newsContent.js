import Image from "next/image";
import SanityImage from "../sanity-image";

export default function NewsContent(props) {

  const {show, query} = props;
  
  if(!query) return (<></>);

  const {
    title = "",
    description = "",
    link = {},
    image = ""
  } = query;
  
  return (  

    <>

      {( show && query !== undefined) && (

        <section
            className="px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col pt-[107px] md:pt-[142px] vw:pt-[7.395vw]"
          >   

            <div className="flex flex-col mb-12 md:mb-[38px] vw:mb-[1.979vw]">

              <h1 className="tracking-[.05em] leading-7 md:leading-[37px] vw:leading-[1.156] text-[24px] md:text-[32px] vw:text-[1.666vw] font-extralight mb-6 md:mb-4 lg:mb-3 vw:mb-[.625vw]">
                {title}
              </h1>
        
              <p className="hidden md:block font-light text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] opacity-80">
                Tuesday 24, May 2022  7:00PM
              </p>

              {
                description && (
                  <div className="font-light text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.1666] opacity-80 mt-5 vw:mt-[1.0416vw] md:max-w-[470px] lg:max-w-[880px] vw:max-w-[41.66vw]">
                    {description}
                  </div>
                )
              }

              <a className="mt-8 vw:mt-[1.6666vw] flex items-center space-x-1.5 max-w-max tracking-[.05em] uppercase text-[10px] vw:text-[.520vw] leading-[13px] vw:leading-[1.3] font-light" href={link.url}>

                <span>
                  {link.title}
                </span>

                <div className="hidden md:block w-[13px] h-[7px] vw:w-[.6770vw] vw:h-[.3645vw]">
                  <Image
                    src="/images/arrowRight.svg"
                    alt="arrowRight"
                    layout="responsive"
                    width={13}
                    height={7}
                  />
                </div>
                
              </a>

            </div>  

            <div className="w-full 3xl:max-w-[70.833vw]">
              <div className="w-full">
                <div className="w-full aspect-h-1 aspect-w-[1.055] md:aspect-w-[1.45] lg:aspect-w-[1.7]">
                  <div className="w-full h-full">
                    <div className="relative w-full h-full">
                      <SanityImage src={image} layout={"fill"} className="object-cover"/>
                    </div>
                  </div>
                </div>       
              </div>
            </div>


        </section>

      )}

    </>

  )

}
