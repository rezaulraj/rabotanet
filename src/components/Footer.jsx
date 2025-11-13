import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f2529] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">
            RabotaNet Recruitment <span className="text-primary">®</span>
          </h2>
          <p className="text-sm text-red-400 mt-2">
            We find exceptional talent for your company
          </p>

          <div className="mt-6">
            <img
              src="/logo2.png"
              alt="RabotaNet Recruitment"
              width={150}
              height={200}
              className="h-auto w-40"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact us</h3>
          <p className="flex items-center gap-2">
            📧{" "}
            <a href="mailto:manager@rabotanet.com" className="hover:underline">
              manager@rabotanet.com
            </a>
          </p>

          {/* Social icons */}
          <div className="flex space-x-3 mt-6">
            <a
              href="https://www.facebook.com/RabotaNet00"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/rabotanet01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded"
            >
              <FaInstagram />
            </a>
            <a
              href="http://www.youtube.com/@RabotaNet01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/RabotaNet01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.tiktok.com/@rabotanet1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.pinterest.com/dizirabotanet/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/employers" className="hover:text-red-400">
                Employers
              </Link>
            </li>
            <li>
              <Link to="/applicants" className="hover:text-red-400">
                Applicants
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Office Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold mb-3">Office</h3>

          <div className="space-y-3">
            <h4 className="text-[20px]">Belarus</h4>
            <a
              href="https://www.google.com/maps/search/220092,+Frunzensky+District,+Minsk,+Beruta+st.,+3B,+Belarus/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] hover:text-primary"
            >
              220092, Frunzensky District, Minsk, Beruta st., 3B, Belarus
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="text-[20px]">UK</h4>
            <a
              href="https://www.google.com/maps/place/Lower+Harding+St,+Northampton,+UK/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] hover:text-primary"
            >
              Lower Harding St, Northampton NN1 2JL, United Kingdom
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="text-[20px]">Romania</h4>
            <a
              href="https://www.google.com/maps/search/Str.+Sg.+Constantin+Moise+5+D+BUCURESTI,+Loc.+SECTORUL+6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] hover:text-primary"
            >
              Str. Sg. Constantin Moise 5 D, SECTORUL 6, BUCHAREST
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="text-[20px]">UAE [Dubai]</h4>
            <a
              href="https://www.google.com/maps/place/The+One+Tower/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] hover:text-primary"
            >
              The One Tower, Fl.24, DUBAI, UAE
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="text-[20px]">Dhaka</h4>
            <a
              href="https://www.google.com/maps/search/Road+Number+12,+Sector+:+6+,+Uttara+,Dhaka+-1230+Bangladesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] hover:text-primary"
            >
              Road Number 12, Sector : 6 , Uttara ,Dhaka -1230 Bangladesh
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 text-center container max-w-7xl mx-auto px-6">
        <p className="text-sm text-center">
          Copyright © 2025 RabotaNet Recruitment
        </p>
      </div>
    </footer>
  );
}
