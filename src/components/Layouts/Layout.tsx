import Sidebar from "../Sidebar/Sidebar"

const Layout = ({children}: any) => {
  return (
      <><Sidebar /><div>{children}</div></>
  )
}
export default Layout