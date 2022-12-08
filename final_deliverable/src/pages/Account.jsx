import React from 'react'
import AccountContainer from '../components/AccountContainer'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Account() {
  return (
    <AccountContainer />
  )
}

export default withAuthenticator(Account)