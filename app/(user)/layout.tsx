import React from 'react'
import Loading from './loading'
import { Suspense } from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container w-full max-w-screen-xl mx-auto py-10 pl-7 px-25 lg:px-20'>
      <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
    </div>
  )
}

export default UserLayout
