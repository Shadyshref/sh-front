

import { useEffect, useRef, useState } from "react"
// import images from"../../public/images"

const Header = () => {
  useEffect(()=>{
window.addEventListener("scroll",()=>{
  if(window.scrollY>100){
    headerref.current.style.background="#181e2a"
    headerref.current.style.padding="20px 0px"
  }else{
      headerref.current.style.background="#1c2230"
    headerref.current.style.padding="60px 0px"
  }
})
  },[])
   const headerref=useRef()
  const[links,setLinks]=useState(["Featuers","Team","Sign in"])
    
  return (
    <header ref={headerref} className="pt-[60px] fixed w-full top-0 z-50" >
<div className="container flex  items-center justify-between gap-[30px] sm:gap-0 flex-col sm:flex-row px-[60px] ">
<a href="/">
    <img src="images/logo.svg" alt="" />
    </a>
    <nav>
      <ul className="flex items-center gap-[50px]">
        {links.map((link)=>(
          <li key={link}>
            <a href="" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200">{link}</a>
          </li>
        ))}
      </ul>
    </nav>

</div>

  

    </header>
  )
}

export default Header