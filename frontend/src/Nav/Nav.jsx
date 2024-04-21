import { useState ,useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button , Avatar} from "@nextui-org/react";
import { Link } from "react-router-dom";
import avatar from '../assets/avatar.jpg'
import logo from '../assets/logo.png'
function Nav({visible , handleRegister , handleSignIn , signOutVisible}) {

    return (
      <>
       <div>
       <Navbar className="bg-[#000000]" isBordered maxWidth="full">
    <Link to='/'>
      <NavbarBrand justify="start" className="mr-[8-rem]">
         <img src={logo} alt="" className="w-[36px] h-[36px]"/>
        <p className="font-bold text-inherit text-white">ZKProof Portal</p>
      </NavbarBrand>
    </Link>
      <NavbarContent className="hidden sm:flex gap-16" justify="end">
        <NavbarItem className="text-[#fb7185]">
          <Link href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#fb7185]">
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#fb7185]">
          <Link href="#" >
            Orderbook
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#fb7185]">
          <Link href="#" >
            Provers
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#fb7185]">
          <Link href="#" >
            How it Works
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#fb7185]">
          <Link href="#" >
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <div style={{display:'flex',flexDirection:'row',gap:'32px'}}>
          {!visible ?
          <div className="flex flex-row gap-2"> 
          <Avatar src={avatar} />
          <Button className="settings__button bg-[#e11d48] text-white" size="md" onClick={signOutVisible} >
              Sign Out
            </Button></div> : null}
          {visible ? <Button className="settings__button bg-[#e11d48] text-white" size="md" onClick={handleSignIn} color="primary">
              Sign In
            </Button> : null}
          {visible ? <Button className="settings__button bg-[#e11d48] text-white" size="md" onClick={handleRegister} color='primary'>
              Register
            </Button> : null}
        </div>
      </NavbarContent>
    </Navbar>
       </div>
      </>
    )
  }
  
  export default Nav