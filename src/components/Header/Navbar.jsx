import React, { useState } from 'react';
import styled from "styled-components";
import SearchIcon from "../../assets/search-icon.svg"
import Menu from "../../assets/menu.svg"

function Navbar() {
    const [isSearchActive, setIsSearchActive] = useState(false)
  return (
    <>
      <nav className='flex gap-10 justify-around md:justify-center items-center bg-[#212731] p-4 text-white'>
        <div className=' relative h-full'>
            <input className=' rounded-md outline-none text-black' type='text' onClick={() => setIsSearchActive(!isSearchActive)} />
            <img className={` absolute left-1 top-1 w-4 h-5 ${isSearchActive ? "hidden" : ""} `} src={SearchIcon} alt='icon-s'/>
        </div>
        <div className=' md:hidden'>
            <img src={Menu} alt='ham-icon'/>
        </div>
        <div className=' hidden md:flex gap-10'>
            <p className=''>Categories</p>
            <p>Website Builders</p>
            <p>Today's deals</p>
        </div>
      </nav>
    </>
  )
}

const Container = styled.div``;

export default Navbar
