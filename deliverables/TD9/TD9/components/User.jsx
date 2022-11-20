import React from 'react'
import { useState } from 'react'
import { withAuthenticator } from "@aws-amplify/ui-react";


function User() {
  const [userID, setUserID] = useState('')
  const [userHistory, setUserHistory] = useState({})
  
  return (
    <div>User</div>
  )
}

export default withAuthenticator(User)