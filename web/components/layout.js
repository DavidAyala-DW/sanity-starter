import Header from './header'
import Head from "next/head"
import Footer from './footer'

function Layout(props) {

  const {
    children,
    siteSettings:{
      mainNav,
      footerNav,
      facebookHandle,
      instagramHandle,
      privacyPolicyHandle,
      cookiesPreferencesHandle,
      reservationsButton
    },
    menus
  } = props

  const globalMenus = [
    mainNav,
    footerNav
  ]

  const setGlobalURL = [
    privacyPolicyHandle,
    cookiesPreferencesHandle,
    reservationsButton,
  ]

  setGlobalURL.forEach(menuItem => {

    if(!menuItem) return;

    const {slug} = menus.find(item => item._id == menuItem.link._ref);
    
    if(!slug) {
      menuItem.link.url = "/";
      return;
    }

    menuItem.link.url = slug.current != "/" ? `/${slug.current}`: "/"; 

    if (menuItem.externalLink) {
      menuItem.link.url = menuItem.externalLink;
    }

  })
  
  globalMenus.forEach(menuItem => {

    if(!menuItem) return;
    
    menuItem.forEach(menu => {

      const {slug} = menus.find(item => item._id == menu.link._ref);
      
      if(!slug) {
        menu.link.url = "/";
        return;
      }

      menu.link.url = slug.current != "/" ? `/${slug.current}`: "/"; 
      if (menu.externalLink) {
        menu.link.url = menu.externalLink;
      }

    })
  });

  return (
    <>

      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
    
      <div
      className="bg-body flex flex-col"
      >

        <Header {...{
          mainNav,
          facebookHandle,
          instagramHandle,
          reservationsButton,
          menus,
        }}/>

        <div className="w-full min-h-screen flex flex-col relative">
          {children}
        </div>

        <Footer {...{
          facebookHandle,
          instagramHandle,
          menus,
          privacyPolicyHandle,
          cookiesPreferencesHandle,
          footerNav
        }}/>

      </div>
    </>
  )
}

export default Layout
