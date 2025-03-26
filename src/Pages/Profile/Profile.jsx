import React from 'react'
import { useParams } from 'react-router-dom'
import { account } from '../../appwrite.js'
import { useEffect, useState } from 'react'

function Profile() {
    const {profileId} = useParams() // Gets profile id from the user
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const getUser = async()=>{
            try {
                const userDetails = await account.get(); 
                console.log(userDetails)
                setUser(userDetails)
            } catch (error) {
                console.log("Error getting user: ", error.message)
            }
        }
        getUser()
    },[user])
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Profile Page</h2>

        {user ? (
          <div>
            <p className="text-lg font-semibold">User ID: {profileId}</p>
            <p className="text-lg">Email: {user.email}</p>
            <p className="text-lg">Name: {user.name || "Not set"}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
    )
}

export default Profile
