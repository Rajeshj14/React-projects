'use client'

import React, { useState } from "react";
import Header from "../components/Header";
import '../app/page.css'
import { BiBus, BiMap, BiCalendar, BiSearch } from "react-icons/bi";

export default function HomePage() {
  const [fromCity, setFromCity] = useState("Velankanni");
  const [toCity, setToCity] = useState("");
  const [active, setActive] = useState("book");
   const [mobile, setMobile] = useState("");
    const stops = [
    "Chennai",
    "Tambaram",
    "Vandalur",
    "Chengalpattu",
    "Melmaruvatur",
    "Acharapakkam",
    "Tindivanam",
    "Vikravandi",
    "Villupuram",
    "Ulundurpettai",
    "Valikandapuram",
    "Anaiparaikadu",
    "Kootur",
    "Trichy",
    "Dindugal",
    "Ghandinagar",
    "Madurai",
    "Virudunagar",
    "Sattur",
    "Kovilpatti",
    "Kayatar",
    "Tirunelveli",
    "Nanguneri",
    "Panaikudi",
    "Aralvaimozhi",
    "Thovalai",
    "Nagercoil",
    "Thucklay",
    "Azhagiyamandapam",
    "Chiranyankuzhi",
    "Marthandam",
    "Kuzhiturai",
    "Kaliyakavilai",
    "Thirupuram",
    "Kanjirangulam",
    "Kovalam",
    "Kazhakootam",
    "Koliyacode",
    "Valakom",
    "Koodal",
    "Pala",
    "Perumpaavoor",
    "Thalore",
    "Ollur",
    "Thamburan Omni stand",
    "Thrissur",
  ];
  return (
    <>
      <Header />

      <main className="w-full min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-8 bg-cover bg-center" style={{ backgroundImage: "url('/images/slider-bg.png')" }}>
        <div>
        <img src="/images/slider-text.png" alt="" className="imgfortext"/>
        </div>

        <div>
        <img src="/images/slider-rocket.png" alt="" className="imgforrocket"/>
        </div>

        <div>
        <img src="/images/form-bg.png" alt="" className="imgforlocation"/>
        <div>
     <div className="relative max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6" style={{ fontFamily: "sans-serif" }} id="booking">
<div className="p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-md font-bold">FOR BOOKING</h2>
          <p className="text-xs text-gray-500">Where would you like to go?</p>
        </div>

        {/* Toggle */}
        <div className="relative flex ml-auto rounded-full bg-yellow-700 p-1 h-7 w-36">
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-yellow-500 rounded-full transform transition-transform duration-300 ${
              active === "track" ? "translate-x-full" : ""
            }`}
          ></div>

          <button
            onClick={() => setActive("book")}
            className={`relative w-1/2 text-center font-medium text-sm transition-colors duration-300 ${
              active === "book" ? "text-black" : "text-white"
            }`}
          id="btn">
            BOOK
          </button>

          <button
            onClick={() => setActive("track")}
            className={`relative w-1/2 text-center font-medium text-sm transition-colors duration-300 ${
              active === "track" ? "text-black" : "text-white"
            }`}
          id="btn">
            TRACK
          </button>
        </div>
      </div>

      {/* Conditional form for TRACK */}
      {active === "track" && (
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Enter PRN / Mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          id="btntxt"/>
          <button
            onClick={() => alert(`Getting details for: ${mobile}`)}
            className="bg-yellow-500 text-white font-medium px-4 rounded-md hover:bg-yellow-600 transition-colors"
          id="btn">
            Get Details
          </button>
        </div>
      )}
    </div>


        {/* From / To */}
        {active !== "track" && (
          <>
            {/* From / To */}
            <div className="space-y-3 mb-3">
              <div className="flex items-center border rounded-md p-2" >
                <BiBus className="text-gray-500 mr-2" />
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full outline-none" id="btn"
                >
                  {stops.map((stop, index) => (
                    <option key={index} value={stop}>{stop}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center border rounded-md p-2">
                <BiMap className="text-gray-500 mr-2" />
                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full outline-none" id="btn"
                >
                  <option value="">Select To City</option>
                  {stops.map((stop, index) => (
                    <option key={index} value={stop}>{stop}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center border rounded-md p-2">
                <BiCalendar className="text-gray-500 mr-2" />
                <input type="date" placeholder="Journey Date" className="w-full outline-none" id="btn"/>
              </div>
              <div className="flex items-center border rounded-md p-2">
                <BiCalendar className="text-gray-500 mr-2" />
                <input type="date" placeholder="Return Date" className="w-full outline-none" id="btn"/>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-yellow-800 rounded-md font-medium flex justify-center items-center" id="btn">
              <span className="mr-2 text-white"><BiSearch /> Search</span>
            </button>
          </>
        )}
    </div>
        </div>
        </div>

      </main>
    </>
  );
}
