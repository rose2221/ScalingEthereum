import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function SignIn() {
  return (
<div className="bg-[#070713] h-[100vh] flex justify-center items-center">
    <div className="signin__body">
    <div className="sign__form">
    <h1 className="text-white sign__text">Sign In to Your Account</h1>
      
    <Input type="name"  placeholder="User Name" variant="bordered"  className="inputClassName" style={{color:'white'}}/>
    <Input type="password" placeholder="Password" variant="bordered" style={{borderColor:'#ffffff',color:'white'}}  className="inputClassName"/>

      <Link to="/">
      <Button color='primary' variant="solid" size = "lg">
        Sign In
      </Button>
      </Link>
    </div>
    </div>
</div>
  );
}