
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'


function App() {

  return (
 <div className='bg-gray-400 w-full h-screen'>
     <BrowserRouter>
      <nav className='flex justify-around text-white items-center h-14 w-4/5 bg-[#343A40] rounded-md mb-12 '>
            <a href="/">login</a>
            <a href="/findlove">find love</a>
            <a href="/about">about</a>
            <a href="/succes">succes</a>
      </nav>
      
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/findlove" element={<h1>find love</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/succes" element={<h1>succes</h1>} />
      </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
