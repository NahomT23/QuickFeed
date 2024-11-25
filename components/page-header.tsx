import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { Button } from './ui/button'
import HeaderMenu from './header-menu'
import Link from 'next/link'
  
const PageHeader = () => {
  return (
        <header className='sticky inset-x-0 top-0 w-full z-30 transition-all bg-white/20 backdrop-blur-md'>
            <div className='w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b'>
              <div className='flex items-center justify-between h-14 '>
                <h1>
                  <strong className='cursor-pointer text-2xl'>
                    <Link href={"/"}>
                    QuickFeed
                    </Link>
                  </strong>
                </h1>
                <div>
                <SignedOut>
            <SignInButton>
                <Button>Sign In</Button>
            </SignInButton>

            <SignUpButton>
                <Button className='ml-5'>Sign Up</Button>
            </SignUpButton>



          </SignedOut>
          <SignedIn>
          <HeaderMenu/>
          <UserButton/>
          </SignedIn>
                </div>
              </div>
            </div>
        </header>
  )
}

export default PageHeader
