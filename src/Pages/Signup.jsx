import React from 'react'
import { SignInButton, SignedOut} from '@clerk/clerk-react'

function Signup() {
  return (
    <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
    </div>
  )
}

export default Signup