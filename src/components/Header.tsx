"use client";

import React, { useState } from "react";
import "../css/header.css";
import { BiPhone, BiEnvelope, BiUser, BiBriefcase, BiChevronDown } from "react-icons/bi";

export default function Header({ onLoginClick }: { onLoginClick: () => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="relative flex justify-between items-center p-4 bg-transparent shadow-md overflow-hidden" id="bgclr">
        <div className="bottom-header"></div>
        <div className="flex items-center space-x-4 z-10 relative" id="logo_image">
          <img src="/images/logo.png" alt="PSS Transport Logo"  className="h-16 w-auto"/>
        </div>
        <div className="flex items-center space-x-6 z-10 relative">
          <div className="flex items-center space-x-1 text-black font-medium">
            <BiPhone className="text-lg text-yellow-400" />
            <span>+91 9876543254</span>
          </div>
          <div className="flex items-center space-x-1 text-black font-medium">
            <BiEnvelope className="text-lg text-yellow-400" />
            <span>pss@gmail.com</span>
          </div>
        </div>

        <div className="flex space-x-2 z-10 relative">
          <button className="bg-yellow-200 hover:bg-yellow-300 px-4 py-1 rounded-lg font-medium flex items-center space-x-1">
            <BiUser className="text-lg text-gray-700" />
            <span>Customer Login</span>
          </button>
          <button className="bg-yellow-200 hover:bg-yellow-300 px-4 py-1 rounded-lg font-medium flex items-center space-x-1">
            <BiBriefcase className="text-lg text-gray-700" />
            <span>Agent Login</span>
          </button>
        </div>
      </header>

      <nav className="w-full flex justify-center py-3 text-gray-800 shadow-sm font-bold bg-white" id="navbgclr">
        <a href="#" className="px-3 text-lg hover:text-yellow-700 transition-colors">Home</a>

        <div
          className="relative px-3"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center space-x-1 text-lg hover:text-yellow-700 transition-colors">
            <span>Manage Ticket</span>
            <BiChevronDown className="text-gray-700" />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100 font-normal">Print Ticket</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100 font-normal">Edit Ticket</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100 font-normal">Cancel Ticket</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100 font-normal">Download Ticket</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100 font-normal">Send SMS / Email</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100 font-normal">Reschedule Ticket</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100 font-normal">Check Refund Status</a>
            </div>
          )}
        </div>

        <a href="#" className="px-3 hover:text-yellow-700 transition-colors">Track Bus</a>
        <a href="#" className="px-3 hover:text-yellow-700 transition-colors">Contact</a>
        
      </nav>
    </>
  );
}
