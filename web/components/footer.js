import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logoFooter.png"

export default function Footer(props) {

  const {
    facebookHandle,
    instagramHandle,
    privacyPolicyHandle,
    cookiesPreferencesHandle,
    footerNav,
  } = props;
  
  return (

    <footer className="px-4 md:px-0 pb-[32px] md:pb-12 md2:pb-[50px] vw:pb-[2.60vw] bg-black pt-20 text-white lg:px-[3.35%] w-full md:mx-auto flex flex-col md2:flex-row items-start">

      <div className="mb-[42px] md2:mb-0 md2:mr-[5.8%] 3xl:mr-[28.645vw] w-max">

        <Link href="/" passHref>

          <a className="block text-white w-[86px] md:w-[153px] vw:w-[7.968vw]">
            <Image
              src={Logo}
              alt="Logo"
              layout="responsive"
            />
          </a>

        </Link>

      </div>

      <div className="flex flex-col mb-[86px] md:mb-[76px] md2:mb-0 md2:space-y-[110px] vw:space-y-[5.7291vw] justify-between md2:mr-[20%] 3xl:mr-[14.0625vw] w-full lg:max-w-max">

        <div className="grid md:max-w-[35%] md2:max-w-full lg:max-w-[294px] grid-cols-3 gap-x-[40px] md:gap-x-[65px] lg:gap-x-10 vw:gap-x-[2.08333vw] gap-y-8 vw:gap-y-[1.6666vw]">

          {footerNav && footerNav.map( (item, i) => {

            const {title,link} = item;
            return (
              <a href={link.url} key={i} className={`uppercase ${i == 4 && "col-start-2 col-end-4"} text-white opacity-80 text-[10px] vw:text-[.520vw] leading-[11px] vw:leading-[1.1] tracking-[.05em] font-normal`} >
                {title}
              </a>
            )

          })}

        </div>

        <div className="hidden md2:flex items-center space-x-[30px] vw:space-x-[1.5625vw]">

          {
            privacyPolicyHandle && (
              <Link href={privacyPolicyHandle?.link?.url} passHref>
                <a className="block text-white opacity-80 text-[10px] vw:text-[.520vw] leading-[11px] vw:leading-[1.1] tracking-[.05em] font-normal uppercase">
                  {privacyPolicyHandle?.title}
                </a>
              </Link>
            )
          }

          {
            cookiesPreferencesHandle && (
              <Link href={cookiesPreferencesHandle?.link?.url} passHref>  
                <a className="block text-white opacity-80 text-[10px] vw:text-[.520vw] leading-[11px] vw:leading-[1.1] tracking-[.05em] font-normal uppercase">
                  {cookiesPreferencesHandle?.title}
                </a>
              </Link>
            )
          }

        </div>

      </div>

      <div className="flex flex-col space-y-16 md2:space-y-[110px] vw:space-y-[5.729vw] justify-between w-full">

        <div className="flex flex-col space-y-6 md:space-y-8 md2:space-y-8 vw:space-y-[1.666vw]">

          <h3 className="block text-white opacity-80 text-[10px] vw:text-[.520vw] leading-[11px] vw:leading-[1.1] tracking-[.05em] font-normal uppercase">
            Newsletter
          </h3>  

          <form className="w-full md:max-w-[78.8%] md2:max-w-full" action="">

            <fieldset className="flex pl-4 md2:pl-6 vw:pl-[1.25vw] pr-7 md2:pr-[14px] vw:pr-[.729vw] item-center space-x-5 vw:space-x-[1.041vw] border-2 border-[rgba(205,_205,_205,_0.2)] py-3 vw:py-[.625vw]">

              <input
                className="text-base md2:text-lg vw:text-[.9375vw] bg-transparent outline-none w-full
                placeholder:text-white text-white leading-[1.5] font-light opacity-80"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />

              <button type="submit" className="w-[26px] vw:w-[1.354vw]">
                <Image
                  src="/images/footerArrow.svg"
                  alt="White arrow"
                  width={26}
                  height={19}
                  layout="responsive"
                />
              </button>

            </fieldset>
            
          </form>

        </div>

        <div className="flex flex-col space-y-12 md2:space-y-0 md2:flex-row md2:items-center justify-between">

          <div className="flex items-center space-x-6 vw:space-x-[1.25vw]">

            <a href={facebookHandle} className="block text-white w-6 vw:w-[1.25vw]">

              <Image
                src={"/images/facebook.svg"}
                alt="facebook logo"
                layout="responsive"
                width={24}
                height={24}
              />

            </a>

            <a href={instagramHandle} className="block text-white w-6 vw:w-[1.25vw]">

              <Image
                src={"/images/instagram.svg"}
                alt="instagram logo"
                layout="responsive"
                width={24}
                height={24}
              />

            </a>

          </div>

          <div className="flex md2:hidden items-center space-x-[50px] vw:space-x-[2.604vw]">

            {
              privacyPolicyHandle && (
                <Link href={privacyPolicyHandle?.link?.url} passHref>
                  <a className="block text-white opacity-80 text-[10px] vw:text-[.520vw] leading-[11px] vw:leading-[1.1] tracking-[.05em] font-normal uppercase">
                    {privacyPolicyHandle?.title}
                  </a>
                </Link>
              )
            }

            {
              cookiesPreferencesHandle && (
                <Link href={cookiesPreferencesHandle?.link?.url} passHref>
                  <a className="block text-white opacity-80 text-[10px] vw:text-[.520vw] leading-[11px] vw:leading-[1.1] tracking-[.05em] font-normal uppercase">
                    {cookiesPreferencesHandle?.title}
                  </a>
                </Link>                
              )
            }

          </div>

          <p className="block text-white opacity-80 text-[10px] vw:text-[.520vw] leading-[11px] vw:leading-[1.1] tracking-[.05em] font-normal uppercase">
            ©2022 Site
          </p>

        </div>

      </div>

    </footer>

  )

}
