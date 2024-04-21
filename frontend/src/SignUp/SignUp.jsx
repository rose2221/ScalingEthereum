import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
  <div className="bg-[#070713] h-[100vh] flex justify-center items-center">
    <div className="signin__body">
    <div className="sign__form">
    <h1 className="text-white sign__text">Sign Up to Get Started</h1>
    <Input type="name"  placeholder="User Name" variant="bordered"  className="inputClassName" style={{color:'white'}}/>
    <Input type="email"  placeholder="Email" variant="bordered"  className="inputClassName" style={{color:'white'}}/>
    <Input type="password"  placeholder="Password" variant="bordered"  className="inputClassName" style={{color:'white'}}/>

      <Link to= "/">
      <Button className="bg-[#e11d48]" variant="solid" size = "lg">
        Register
      </Button>
      </Link>
    </div>
    </div>
  </div>
  );
}
