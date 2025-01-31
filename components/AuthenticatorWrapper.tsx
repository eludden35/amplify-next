'use client'

import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

export const AuthenticatorWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <Authenticator>
      {children}
    </Authenticator>
  )
}