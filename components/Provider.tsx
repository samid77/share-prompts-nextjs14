'use client';
import React from 'react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
  children?: any;
  session?: any;
}

const Provider: React.FC<ProviderProps> = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider