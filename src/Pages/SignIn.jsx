import React from 'react'
import {SignedIn, UserButton } from '@clerk/clerk-react'
function SignIn() {
  return (
    <div>     
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
  )
}

export default SignIn