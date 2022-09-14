import SanityImage from "./sanity-image";
import SimpleBlockContent from "./simple-block-content";
import Link from "next/link";

export default function Article({content}) {

  const {image, title, summary, slug} = content;

  return (

    <div className="flex flex-col w-full">

      <Link href={`/blog/${slug}`} passHref>
        <a className="w-full block">
          <div className="w-full relative mb-6 lg:mb-8 vw:mb-[1.666vw]">
            <div className="aspect-h-1 w-full aspect-w-[1.324] md:aspect-w-[2.687] lg:aspect-w-[1.352] 3xl:aspect-w-[1.836]">
              <div className="w-full h-full">
                <div className="relative w-full h-full">
                  <SanityImage src={image} className="object-cover" layout={"fill"}/>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <Link href={`/blog/${slug}`} passHref>
        <a className="w-full block">
          <h3 className="text-[32px] vw:text-[1.666vw] leading-[44px] vw:leading-[1.375] font-light mb-4 md:mb-6">
            {title}
          </h3>
        </a>
      </Link>

      <div className="text-base font-normal leading-[1.5] opacity-[.85] md:max-w-[500px] lg:max-w-[545px] vw:max-w-[28.385vw] 3xl:max-w-[26.041vw]">
        <SimpleBlockContent blocks={summary} />
      </div>

    </div>

  )
}
