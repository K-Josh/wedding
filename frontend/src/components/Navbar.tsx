import { Link } from "react-scroll"
import { I18nLabel } from "../i18n/labels"
import Logo from '../assets/logo.png'

function Navbar() {
  return (
      <div className='container py-[1rem] gap-[2rem] mx-auto flex items-center justify-center'>
          <div className='flex items-center px-[1rem] gap-[2rem]'>
              <Link
                  to='banner'
                  spy={true}
                  smooth={true}
                  offset={-200}
                  activeClass='glass'
                  className='md:text-[1.2rem] cursor-pointer'
              >
                  <I18nLabel label='text.home' />
              </Link>
              <Link
                  to='story'
                  spy={true}
                  smooth={true}
                  // offset={-350}
                  activeClass='glass'
                  className='md:text-[1.2rem] cursor-pointer'
              >
                  <I18nLabel label='text.our.story' />
              </Link>
          </div>
          <div className='w-12 h-12 p-1 border border-blue-200 rounded-full'>
              <img src={Logo} alt='logo' className='py-[0.3rem]'/>
          </div>
         <div className='flex items-center px-[1rem] gap-[2rem]'>
             <Link
                 to='venue'
                 spy={true}
                 smooth={true}
                 duration={300}
                 activeClass='glass'
                 className='md:text-[1.2rem] cursor-pointer'
             >
                 <I18nLabel label='text.venue' />
             </Link>
             <Link
                 to='rsvp'
                 spy={true}
                 offSet={300}
                 smooth={true}
                 duration={300}
                 activeClass='glass'
                 className='md:text-[1.2rem] cursor-pointer'
             >
                 <I18nLabel label='text.RSVP' />
             </Link>
         </div>
      </div>
  )
}

export default Navbar
