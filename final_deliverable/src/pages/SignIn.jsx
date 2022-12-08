import React from 'react'
import { Container } from 'react-bootstrap'
import SignInContainer from '../components/SignInContainer'
import { withAuthenticator } from '@aws-amplify/ui-react'

function SignIn() {
  return (
    <Container>
      <SignInContainer />
    </Container>
  )
}

export default withAuthenticator(SignIn)