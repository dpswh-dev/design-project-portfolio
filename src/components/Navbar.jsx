import React, {useState, useEffect} from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'luxury' ? 'light' : 'luxury');
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100" data-theme="luxury">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>About us</a></li>
              <li>
                <a>Case Studies</a>
                <ul className="p-2">
                  <li><a>Quality Education</a></li>
                  <li><a>Good Energy</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="text-xl ml-5 font-semibold pointer-events-none select-none">Group One</a>
          {/* <ul className="menu menu-horizontal px-1 text-xl hide">
            <li className='ml-5'><a>About us</a></li>
          </ul> */}

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><a>Case Study 1</a></li>
            <li><a>Case Study 2</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2 mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <input type="checkbox" value="cupcake" className="toggle theme-controller" onClick={() => toggleTheme()} />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </div>
      </div>
  )
}
