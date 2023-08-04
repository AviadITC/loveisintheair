import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function Layout() {
    return (
        <div className='flex flex-col items-center'>
            <Nav />
            <Outlet />
        </div>
    )
}

export default Layout