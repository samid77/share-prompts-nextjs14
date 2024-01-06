'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchData();
  }, []);

  return (
    <nav className='flex between w-full mb-16 pt-3'>
      <Link href={'/'} className='flex gap-2 flex-center'>
        <Image 
          src={'/assets/images/logo.svg'} 
          alt='Promptopia Image'
          width={30}
          height={30}
          className='object-contain'
          />
          <p className='logo_text'>Promptopia</p>
      </Link>
      {/** Mobile Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn 
          ? (
            <div className='flex gap-3 md:gap-5 ml-3'>
              <Link href={'/create-prompt'} className='black_btn'>Create Post</Link>
              <button type='button' onClick={() => signOut} className='outline_btn'>Sign Out</button>
              <Link href={'/profile'}>
                <Image 
                  src={'/assets/images/logo.svg'}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='Profile Picture'
                />
              </Link>
            </div>
            )
          : (
            <>
              {
                providers && Object.values(providers).map((provider: any) => (
                  <button 
                    type='button' 
                    key={provider.name} 
                    onClick={() => signIn(provider.id)} 
                    className='black_btn'>Sign In</button>
                ) )
              }
            </>
          )}
      </div>
    </nav>
  )
}

export default Nav