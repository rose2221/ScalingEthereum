import { useState ,useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button , Avatar} from "@nextui-org/react";
import { Link } from "react-router-dom";
import avatar from '../assets/avatar.jpg'
function Nav({visible , handleRegister , handleSignIn , signOutVisible}) {

    return (
      <>
       <div>
       <Navbar className="bg-[#000000]" isBordered maxWidth="full">
      <NavbarBrand justify="end">
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit text-white">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem className="text-[#1e40af]">
          <Link href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#1e40af]">
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#1e40af]">
          <Link href="#" >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <div style={{display:'flex',flexDirection:'row',gap:'32px'}}>
          {!visible ?
          <div className="flex flex-row gap-2"> 
          <Avatar src={avatar} />
          <Button className="settings__button" size="md" onClick={signOutVisible} color="primary">
              Sign Out
            </Button></div> : null}
          {visible ? <Button className="settings__button" size="md" onClick={handleSignIn} color="primary">
              Sign In
            </Button> : null}
          {visible ? <Button className="settings__button" size="md" onClick={handleRegister} color='primary'>
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