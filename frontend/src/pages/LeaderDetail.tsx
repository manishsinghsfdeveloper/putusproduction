import React from "react";
import { useParams, Link } from "react-router-dom";
import { team } from "../data/team";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaArrowLeft,
} from "react-icons/fa";


export default function LeaderDetail() {
  const { id } = useParams<{ id: string }>();
  const leader = team.find((t) => t.id === id);

  if (!leader) {
    return (
      <div className="text-center text-white py-40 bg-[#0c0f1a]">
        <h2 className="text-3xl font-bold">Leader not found</h2>
        <Link to="/about" className="text-blue-400 underline mt-4 block">
          Back to About
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0c0f1a] text-white min-h-screen py-20 px-6 relative">
      {/* 🔙 Back Button */}
      <div className="absolute top-10 left-10">
        <Link to="/about" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
        <FaArrowLeft className="text-lg" />
        <span className="font-medium">Back to About</span>
        </Link>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 mt-10">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-80 h-96 object-cover rounded-2xl shadow-xl"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{leader.name}</h1>
          <h3 className="text-xl text-blue-400 mb-6">{leader.title}</h3>
          <p className="text-gray-300 leading-relaxed mb-8">{leader.intro}</p>

          {/* Social icons */}
          <div className="flex gap-5">
            {leader.socials.instagram && (
              <a
                href={leader.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 text-2xl transition-colors"
              >
                <FaInstagram />
              </a>
            )}
            {leader.socials.facebook && (
              <a
                href={leader.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl transition-colors"
              >
                <FaFacebook />
              </a>
            )}
            {leader.socials.linkedin && (
              <a
                href={leader.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
            )}
            {leader.socials.twitter && (
              <a
                href={leader.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
              >
                <FaTwitter />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
