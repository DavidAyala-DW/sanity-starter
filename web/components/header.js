import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png"

export default function Header(props) {

  const {
    mainNav,
    facebookHandle,
    instagramHandle,
    reservationsButton,
  } = props;
  
  const [openModal, setOpenModal] = useState(false);

  function handleClick(){
    const updatedModalValue = !openModal;
    setOpenModal(updatedModalValue);
  }

  return (

    <>

      <header
      className={`${ ((openModal == false ) ? "bg-[#000000] duration-[200ms]  " : "bg-transparent duration-[300ms]") } z-[100] 
      ${ openModal ? "justify-center md:!bg-transparent right-0 fixed md:inset-x-0" : `justify-between sticky bg-[#000000] `} 
      top-0 px-4 md:px-[3.35%] w-full md:mx-auto flex items-center md:justify-between
      py-6 md:pt-8 vw:pt-[1.666vw] md:pb-10 vw:pb-[2.0833vw]`}
      id="header"
      >

        <div className={`cursor-pointer order-3 md:order-1 select-none md:opacity-50 ${openModal && "absolute right-4 md:left-0 md:relative"}`}>

          <div onClick={handleClick} className={`${openModal && "hidden"} w-[25px] vw:!w-[1.302vw]`}>
            <Image
              src={"/images/burguer.svg"}
              alt="burger"
              layout="responsive"
              width={25}
              height={16}
            />
          </div>

          <div onClick={handleClick} className={`${!openModal && "hidden"} w-[21px] vw:!w-[1.093vw]`}>
            <Image
              src={"/images/close.svg"}
              alt="burger"
              layout="responsive"
              width={21}
              height={20}
            />
          </div>
          
        </div>

        <div className={`order order-1 md:absolute md:inset-0 md:w-max md:top-[-5px] vw:top-[-.260vw] md:m-auto md:h-max select-none md:order-2`}>
          
          <Link href="/" passHref>
            <a onClick={ () => setOpenModal(false)  } className="block cursor-pointer w-[115px] vw:w-[5.989vw]">
              <Image
                src={Logo}
                alt="logo.png"
                layout="responsive"
              />
            </a>            
          </Link>

        </div>

        <div className="hidden md:block order-3 select-none">

          <Link href={reservationsButton?.link?.url} passHref>
            <a target="_blank" rel="noopener nooreferrer" className="block">
              <p className="font-medium text-white text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] tracking-[.05em] uppercase opacity-70">
                {reservationsButton?.title}
              </p>
            </a>
          </Link>

        </div>
        
      </header>

      <div
        className={`fixed inset-0 h-full w-full transition-[transform] !duration-[300ms] ${openModal ? "!translate-x-0" : "" } -translate-x-full bg-black
        min-h-screen z-[90] w-full flex items-start`}
      >

        <div className={`md:pl-[3.35%] w-full h-full max-w-full md2:max-w-[73.6%] 3xl:max-w-[66.666%] flex flex-col items-center md:items-start justify-between pt-[152px] md:pt-[108px] vw:pt-[5.625vw] pb-6 vw:pb-[1.25vw]`}>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-start md:space-x-16 vw:space-x-[3.333vw]">

            <div className="flex flex-col w-full items-center md:items-start space-y-2 vw:space-y-[.416vw]">

              { mainNav.map((item,index) => {

                if(index < 4){

                  const {title, link} = item;

                  return (
                    <Link href={link?.url} passHref key={index} >
                      <a onClick={handleClick} className="block text-white uppercase tracking-[.05em] text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2] font-light opacity-90">
                        {title}
                      </a>
                    </Link>
                  )

                }

              })}

            </div>

            <div className="flex flex-col w-full items-center md:items-start space-y-2 vw:space-y-[.416vw]">

              {mainNav.map((item,index) => {

                if(index >= 4){

                  const {title, link} = item;

                  return (
                    <Link href={link?.url} passHref key={index} >
                      <a onClick={handleClick} className="block uppercase tracking-[.05em] text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2] font-light opacity-90">
                        {title}
                      </a>
                    </Link>
                  )

                }

              })}

              <Link href={reservationsButton?.link?.url} passHref>
                <a target="_blank" rel="noopener nooreferrer" onClick={handleClick} className="md:hidden block uppercase tracking-[.05em] text-[32px] md:text-[48px] vw:text-[2.5vw] leading-[1.2] font-light opacity-90">
                  {reservationsButton?.title}
                </a>
              </Link>
              
            </div>

          </div>

          <div className="flex items-center space-x-6 vw:space-x-[1.25vw]">

            <a onClick={handleClick} href={facebookHandle} className="block w-6 vw:w-[1.25vw]">

              <Image
                src={"/images/facebook.svg"}
                alt="facebook logo"
                layout="responsive"
                width={24}
                height={24}
              />

            </a>

            <a onClick={handleClick} href={instagramHandle} className="block w-6 vw:w-[1.25vw]">

              <Image
                src={"/images/instagram.svg"}
                alt="instagram logo"
                layout="responsive"
                width={24}
                height={24}
              />

            </a>

          </div>

        </div>

      </div>

    </>

  )

}