import { Link, useLocation } from 'react-router-dom'

function Nav() {

    const location = useLocation()

    return (
        <div className=' h-14 w-4/5 bg-[#343A40] rounded-md mb-12 '>
            <nav className='flex justify-around mt-3'>
                    <Link
                        className={`${location.pathname === '/' ? 'text-white' : 'text-gray-400'} ml-5 text-lg hover:text-white transition-all`}
                        to="/">Sign in</Link>
                    <Link
                        className={`${location.pathname === '/signup' ? 'text-white' : 'text-gray-400'} ml-5 text-lg hover:text-white transition-all`}
                        to="/findlove">Find Love</Link>
                    <Link
                        className={`${location.pathname === '/signup' ? 'text-white' : 'text-gray-400'} ml-5 text-lg hover:text-white transition-all`}
                        to="/about">About Us</Link>
                    <Link
                        className={`${location.pathname === '/signup' ? 'text-white' : 'text-gray-400'} ml-5 text-lg hover:text-white transition-all`}
                        to="/succes">Succes</Link>
            </nav>
        </div>
    )
}

export default Nav