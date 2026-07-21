"use client";
import { PropsWithChildren } from 'react'

const Layout = ({children}: PropsWithChildren) => {
  return (
    <>  
      <main className="max-w-site">{children}</main>
    </>
  )
}

export default Layout
