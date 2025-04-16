import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  // Common link styles
  const linkStyles = "hover:text-[#0077B6] transition-colors duration-200";
  const activeLinkStyles = "text-[#0077B6] font-semibold";

  // Menu items data
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/catering", label: "Catering" },
    { 
      path: "#", 
      label: "Menu",
      subItems: [
        { path: "/breakfast", label: "Breakfast" },
        { path: "/lunch", label: "Lunch" },
        { path: "/dinner", label: "Dinner" }
      ]
    },
    { path: "/seedball", label: "SeedballSection" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-white shadow-lg" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#0077B6] hover:text-[#005f87] transition-colors"
            aria-label="Inemai homepage"
          >
            Inemai
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-[#1A535C] font-medium">
            {menuItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      className={`flex items-center ${linkStyles}`}
                      onMouseEnter={() => setIsDesktopMenuOpen(true)}
                      onMouseLeave={() => setIsDesktopMenuOpen(false)}
                      aria-expanded={isDesktopMenuOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isDesktopMenuOpen && (
                      <div 
                        className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-40 z-30"
                        onMouseEnter={() => setIsDesktopMenuOpen(true)}
                        onMouseLeave={() => setIsDesktopMenuOpen(false)}
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#0077B6]"
                            onClick={() => setIsDesktopMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.path} 
                    className={linkStyles}
                    activeClassName={activeLinkStyles}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <button 
              className="text-[#0077B6] hover:text-[#005f87] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              className="p-1"
            >
              <svg className="w-6 h-6 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 text-[#1A535C] font-medium">
            {menuItems.map((item) => (
              <div key={item.path}>
                {item.subItems ? (
                  <div className="space-y-1">
                    <p className="pl-2 font-semibold text-[#0077B6]">{item.label}</p>
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block py-1 ${linkStyles}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-1 pl-2 ${linkStyles}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <button 
              className="flex items-center text-[#0077B6] hover:text-[#005f87] mt-2 pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search className="w-5 h-5 mr-1" />
              <span>Search</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;