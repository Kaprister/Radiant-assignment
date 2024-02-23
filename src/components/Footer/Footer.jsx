import React from 'react'
import AFIcon from '../../assets/ffa-icon.svg'

const categories = [
    "Web Builder", "Hosting", "Data Center", "Robotic-Automation"
]

const contacts = [
    "Contact", "Privacy Policy", "Terms Of Service", "Categories", "About"
]

function Footer() {
  return (
    <>
        <footer className=' bg-[#212731] flex flex-col md:flex-row gap-10 md:gap-32 md:h-[250px] justify-center items-center py-10 md:py-0 md:pl-20'>
            <ol className=' flex flex-col gap-2'>
                <h3 className=' text-white uppercase'>Categories</h3>
                {categories.map((item, index) => (
                    <li
                        className=' cursor-pointer font-thin text-[#B6BDC4]'
                        key={index}
                    >{item}</li>
                ))}
            </ol>
            <ol className=' flex flex-col gap-2'>
                <h3 className=' text-white uppercase'>Contact</h3>
                {contacts.map((contact, index) => (
                    <li
                        className=' cursor-pointer font-light text-[#B6BDC4]'
                        key={index}
                    >{contact}</li>
                ))}
            </ol>
            <div className=' flex gap-1 justify-center items-center'>
                <p className=' cursor-pointer font-light text-[#D1D6DA]'>United States</p>
                <img className='w-[15px] cursor-pointer' src={AFIcon} alt="aIcon"/>
            </div>
        </footer>
    </>
  )
}

export default Footer
