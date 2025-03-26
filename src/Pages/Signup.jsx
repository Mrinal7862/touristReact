import React, { useState } from "react";
import { account } from "../appwrite";
import SignIn from "./SignIn";
import { SignInButton, SignedOut } from "@clerk/clerk-react";
import { ID } from "appwrite";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //  toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  // password Confirmation 
 

  const handleSignup = async (e) => {

    e.preventDefault();

    if(password.length<6){
      setError("Password should be at least 9 characters")
    }

    if(password !== confirmPassword){
      setError("Password does not match");
      return;  // if not this then code will continue to run
    }


    try {
      await account.create(ID.unique(), email, password, username);

      alert("Account Created Successfully");

      setSuccess("User Created Successfully")

      console.log("user created Successfully")

      

      window.location.href = "/signin";

    } catch (error) {
      alert(error.message);
    }
  };

  // on pressing enter 
  const onPress =(e)=>{
    if(e.key == 'Enter'){
      handleSignup()
    }
  }

  return (
    <div className="flex flex-col  p-3 bg- items-center justify-center w-full ">

      {error && <h1 className="items-center justify-center w-full bg-pink-100 p-3 m-2 rounded-md flex text-red-600">{error}</h1>}
      <form
        onSubmit={handleSignup}
        className=" bg-red-200  p-6 rounded shadow-md w-full flex-wrap flex justify-center item-center font-mono  "
      >
        <p className="text-xs flex w-full justify-end gap-2 md:text-xl ">Already a member ?<a href='/signin' className=" focus:text-purple-900 text-violet-800 hover:underline "> Sign-In </a></p>
        <h2 className="text-2xl font-bold mb-4 w-full flex item-center  text-purple-600">
          Sign-Up
        </h2>
        
        {/* User Name Section */}
        <label
          htmlFor="User Name"
          className="flex text-purple-600  p-3"
        >
          User name
        </label>
        <input
          type="text"
          id="User Name"
          placeholder="Please Set your User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        {/* Email Section */}
        <label
          htmlFor="yourEmail"
          className="flex text-purple-600  p-3"
        >
          E-mail
        </label>
        <input
          type="email"
          id="yourEmail"
          placeholder="Please Set your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        {/* Password Section */}
        <label
          htmlFor="yourPassword"
          className="flex text-purple-600  p-3"
        >
          Password
        </label>
        <div className="flex passcode  w-full">
          <input
            type={showPassword ? "text" : "password"}
            id="yourPassword"
            placeholder="Please Set your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="button"
            onClick={togglePassword}
            className="text-white bg-purple-600 hover:bg-white hover:text-purple-600 transition-all duration-300 p-2 mb-4  border rounded"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        {/* confirm password */}
        <label
          htmlFor="yourConfirmPassword"
          className="flex text-purple-600  p-3"
        >
          Confirm-Password
        </label>
        <div className="flex passcode  w-full">
          <input
            type="password"
            id="yourConfirmPassword"
            placeholder="Please Set your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded w-full"
          onKeyDown={onPress}
        >Submit</button>
      </form>

      {success && <h1 className="items-center justify-center w-full bg-green-500 flex text-white">{success}</h1>}

    </div>
  );
}

export default Signup;
