"use client";
import { useState, useRef, useEffect } from "react";
import { X } from 'lucide-react'; // optional: for close icon


export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // Modal 1
  const [openCreateCoin, setOpenCreateCoin] = useState(false); // Modal 2
  const [openAddComment, setOpenAddComment] = useState(false); // Modal 3
  const modalRef = useRef();
  const modalRef2 = useRef();
  const modalRef3 = useRef();

  // Close Modal 1 when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close Modal 2 when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef2.current && !modalRef2.current.contains(event.target)) {
        setOpenCreateCoin(false);
      }
    }
    if (openCreateCoin) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCreateCoin]);

  // modal 3
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef3.current && !modalRef3.current.contains(event.target)) {
        setOpenAddComment(false);
      }
    }
    if (openAddComment) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openAddComment]);

  // Prevent background scrolling when a modal is open
  useEffect(() => {
    if (isOpen || openCreateCoin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, openCreateCoin]);

  return (
    <>
      <div className="relative min-h-screen bg-black flex items-center justify-center">
        {/* Always Visible Button */}
        <button
          onClick={() => {
            setIsOpen(true);
            setOpenCreateCoin(false); // Make sure only first modal shows
          }}
          className="bg-cyan-500 text-white px-5 py-2 rounded-md hover:bg-cyan-600 transition"
        >
          Open Create Coin Modal
        </button>

        {/* Modal 1 */}
        {isOpen && !openCreateCoin && (
          <div className="absolute inset-0 bg-black/80 z-10 flex items-center justify-center p-4">
            <div
              ref={modalRef}
              className="w-full max-w-xl h-[90vh] bg-[#0f0f0f] text-white rounded-2xl shadow-xl relative flex flex-col"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
              >
                &times;
              </button>

              <h2 className="text-center text-lg font-semibold mb-4 border-b border-white/20 pt-6 pb-3">
                Create Coin
              </h2>

              {/* Form Content */}
              <form className="px-6 overflow-y-auto flex-1 space-y-5 pb-28">
                {/* Name Input */}
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Example: pepe coin"
                    className="w-full bg-[#1c1c1c] border border-gray-700 text-white text-sm rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Ticker */}
                <div>
                  <label className="block text-sm">Ticker</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      $
                    </span>
                    <input
                      type="text"
                      placeholder="Example: TXR"
                      className="w-full pl-7 bg-[#1c1c1c] border border-gray-700 text-white text-sm rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Image File */}
                <div>
                  <label className="block text-sm mb-1">Image URL (max 2mb):</label>
                  <input
                    type="file"
                    className="w-full bg-[#1c1c1c] border border-gray-700 text-white text-sm rounded-md px-3 py-2 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
                  />
                </div>

                {/* Optional Inputs */}
                <div>
                  <label className="block text-sm mb-1">Description</label>
                  <textarea
                    placeholder="Optional"
                    className="w-full bg-[#1c1c1c] border border-gray-700 text-white text-sm rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Website</label>
                  <input
                    type="url"
                    placeholder="Optional"
                    className="w-full bg-[#1c1c1c] border border-gray-700 text-white text-sm rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <p className="text-xs text-gray-400">
                  Tip: coin data cannot be changed after creation
                </p>
              </form>

              {/* Button to trigger Modal 2 */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-[#0f0f0f] border-t border-white/10">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setOpenCreateCoin(true);
                    
                  }}
                  className="w-full px-5 py-2.5 text-sm font-medium text-white border border-cyan-500 rounded-md hover:bg-cyan-500/20 transition"
                >
                  Create coin
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal 2 */}
        {openCreateCoin && !isOpen && (
          <div className="absolute inset-0 bg-black/80 z-20 flex items-center justify-center p-4">
            <div
              ref={modalRef2}
              className="max-w-xl w-full bg-[#0D0D0D] border border-gray-700 rounded-xl shadow-md text-white p-6"
            >
              <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
                <button
                  onClick={() => {
                    setOpenCreateCoin(false);
                    setIsOpen(true);
                  }}
                >
                  {/* Back Icon */}
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                    <line x1="8" y1="12" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="12" y2="8" />
                  </svg>
                </button>
                <p className="text-xl font-semibold">Create Coin</p>
                <div></div>
              </div>

              <div>
                <h5 className="text-base mb-1">
                  Choose how many [WWDR] you want to buy (optional)
                </h5>
                <p className="text-sm text-green-400 mb-4">
                  Tip: buying a small amount helps protect your coin from snipers
                </p>

                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-full bg-[#1A1A1A] text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <span className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center gap-1 text-yellow-400">
                    <img
                      src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=026"
                      alt="bnb"
                      className="w-5 h-5"
                    />
                    BNB
                  </span>
                </div>

                <button
                  onClick={() => {
                    setOpenCreateCoin(false);
                    setOpenAddComment(true);
                  }}
                  className="w-full px-5 py-2.5 text-sm font-medium text-white border border-cyan-500 rounded-md hover:bg-cyan-500/20 transition"
                >
                  Confirm Create Coin
                </button>
              </div>
            </div>
          </div>
        )}



{openAddComment && !isOpen && !openCreateCoin &&
(
<div ref={modalRef3} className="absolute z-10 w-1/2  bg-[#0D0D0D] text-white  rounded-xl p-6 shadow-md border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Add a comment</h3>
        <button onClick={()=>setOpenAddComment(false)} className="">
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      <textarea
        placeholder="Comment"
        className="w-full bg-[#1A1A1A] text-white placeholder-gray-400 border border-gray-700 rounded-lg p-3 mb-5 resize-none focus:outline-none focus:ring-1 focus:ring-green-400"
        rows={4}
      />

      
<button
                  onClick={() => {
                    setOpenCreateCoin(false);
                    setOpenAddComment(false);
                  }}
                  className="w-full px-5 py-2.5 text-sm font-medium text-white border border-cyan-500 rounded-md hover:bg-cyan-500/20 transition"
                >
                  Post reply
                </button>
    </div>)}
 



      </div>
    </>
  );
}
