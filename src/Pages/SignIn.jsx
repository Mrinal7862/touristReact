import React, {useState} from 'react'
import {account} from "../appwrite"
import {SignedIn, UserButton } from '@clerk/clerk-react'
import {useNavigate} from 'react-router-dom'
function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  // function to handle sign-In
  const logger = async(e) =>{
    e.preventDefault()

    try {
      const session = await account.createEmailPasswordSession(email, password)
      console.log("Signed In Success fully: ", session)

      setSuccess("Signed In Successfully")

      const userId = session.userId

      
      navigate(`/profile/${userId}`)

      console.log("User: ", user)

      
    } catch (error) {
      console.log("Error signing in: ", error.message)
      setError(error.message)
    }
    
  }

  // pressed key map 
  const onPress =(e)=>{
    if(e.key == 'Enter'){
      logger()
    }
  }
  return (
    <div>     
<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={logger}
        className="bg-white p-6 rounded shadow-md w-80"
      >
       
        {error && <h1 className="bg-red-100 p-3 text-red-600 text-center mb-4">{error}</h1>}
        {success && <h1 className="bg-green-100 p-3 text-green-600 text-center mb-4">{success}</h1>}
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          onKeyDown={onPress}
        >
          Sign In
        </button>
      </form>
       {/* sign up */}
       <p>Don't have and Account ? <a href='/signup'>Sign-Up</a></p>
    </div>
    </div>
  )
}

export default SignIn