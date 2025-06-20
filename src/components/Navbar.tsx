
const Navbar = () => {
  return (
    <div className="fixed  z-20 w-full bg-white opacity-70 top-0 py-4 shadow-md">
        <div className="w-full flex flex-row justify-evenly pb-4">
        <nav className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">About Me</nav>
        <nav className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Portfolio</nav>
        <nav className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Services</nav>
        <nav className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Contacts</nav>
        </div>
       </div>
  )
}

export default Navbar