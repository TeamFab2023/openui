
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({children}: any) => {
  return (
      <>
      <div className="grid grid-cols-2 ">
 
         <Sidebar />
   
 
         <div className=" p-4 sm:ml-64 grid col-span-2 ">
           <div>{children}</div>
         </div>
       </div></>
  )
}
export default Layout