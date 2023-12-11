import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

export const Layout = ({children}: any) => {
  return (
    <>
    {/* // grid container */}
      <Sidebar />
      <div>{children}</div>
    </>
  )
}
