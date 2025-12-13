import React from "react";
import { Link } from "react-router-dom";
import {ClipboardList} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* App / Logo */}
        <div className="text-xl font-semibold text-blue-600">
          <Link
  to="/"
  className="flex items-center gap-2 text-xl font-semibold text-blue-600"
>
  <ClipboardList size={22} />
  <span>Tender Management System</span>
</Link>

        </div>

        {/* Right Section (for future use) */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          {/* Example placeholders */}
           <Link to="/login" className="text-gray-800  hover:text-blue-600">Login</Link> 
           <Link to="/register" className="text-gray-800 hover:text-blue-600">Register</Link> 
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
