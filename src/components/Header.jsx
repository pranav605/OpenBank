import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <div className='flex relative text-center justify-center items-center flex-col w-full md:p-0 p-2 gap-8'>
      <motion.div className='flex flex-row w-full justify-center items-center bg-neutral-900 p-4 rounded-full border border-neutral-700 mb-4 mt-8 max-w-5xl '>
        <motion.div className='flex flex-row justify-between w-full items-center'>
          <motion.div className='flex flex-row justify-center items-center gap-1'>
            <motion.img
              src='/assets/logo.png'
              height={12}
              width={24}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            ></motion.img>
            <motion.a href='/' className='text-sm font-normal text-white'>OpenBank</motion.a>
          </motion.div>
          <motion.div className='hidden md:flex flex-row gap-4 justify-center items-center'>
            <motion.a href='/' className='text-white/90 text-sm font-light cursor-pointer hover:text-white transition-colors'>Home</motion.a>
            <motion.a href='/careers' className='text-white/90 text-sm font-light cursor-pointer hover:text-white transition-colors'>Careers</motion.a>
            <motion.a href='/about' className='text-white/90 text-sm font-light cursor-pointer hover:text-white transition-colors'>About</motion.a>
            <motion.a href='/security' className='text-white/90 text-sm font-light cursor-pointer hover:text-white transition-colors'>Security</motion.a>
          </motion.div>
          <motion.div className='hidden md:flex flex-row gap-2 items-center'>
            <motion.button className='text-sm text-white py-2 px-3 rounded-full border border-transparent hover:border-neutral-600 transition-all'>
              Sign up
            </motion.button>
            <motion.button className='accent-bg text-sm text-black py-2 px-3 rounded-full transition-colors cursor-pointer'>
              Login
            </motion.button>
          </motion.div>
           {/* Mobile Menu Icon (Visible on mobile, Hidden on desktop) */}
          <motion.div className='flex md:hidden'>
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className='cursor-pointer text-black p-2 rounded-full accent-bg hover:bg-neutral-700 transition-colors'
            >
              {isOpen ? <XMarkIcon height={24} width={24} /> : <Bars3BottomLeftIcon height={24} width={24} />}
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* --- MOBILE MENU PANEL --- */}
        <AnimatePresence>
          {isOpen && (
            // Use flex md:hidden to ensure the menu only appears on mobile
            <motion.div 
              className='absolute md:hidden w-4/5 max-w-5xl z-20 mt-2 top-24' 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              // The inner background panel
            >
              <motion.ul className='flex flex-col gap-1 list-none p-4 rounded-xl border border-neutral-700 bg-neutral-900 shadow-2xl'>
                <motion.li className='p-2 hover:bg-neutral-800 rounded-lg' onClick={() => setIsOpen(false)}><motion.a href='/' className='text-white text-base font-light block'>Home</motion.a></motion.li>
                <motion.li className='p-2 hover:bg-neutral-800 rounded-lg' onClick={() => setIsOpen(false)}><motion.a href='/careers' className='text-white text-base font-light block'>Careers</motion.a></motion.li>
                <motion.li className='p-2 hover:bg-neutral-800 rounded-lg' onClick={() => setIsOpen(false)}><motion.a href='/about' className='text-white text-base font-light block'>About</motion.a></motion.li>
                <motion.li className='p-2 hover:bg-neutral-800 rounded-lg' onClick={() => setIsOpen(false)}><motion.a href='/security' className='text-white text-base font-light block'>Security</motion.a></motion.li>
                <motion.li className='flex flex-col gap-2 pt-4'>
                    <motion.button className='w-full text-sm text-white py-2 rounded-full border border-neutral-700 hover:bg-neutral-800 transition-colors'>
                        Sign up
                    </motion.button>
                    <motion.button className='w-full accent-bg text-sm text-black py-2 rounded-full hover:bg-blue-500 transition-colors'>
                        Login
                    </motion.button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Header;
