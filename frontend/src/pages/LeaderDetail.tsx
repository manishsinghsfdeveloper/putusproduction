// src/pages/LeaderDetail.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { team } from "../data/team";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function LeaderDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const leader = team.find((t) => t.id === id);

  if (!leader) {
    return (
      <section className="section py-20 text-center text-white">
        <h2 className="text-2xl font-bold">Leader not found</h2>
        <p className="mt-4 text-white/60">We couldn't find that profile.</p>
        <button
          onClick={() => navigate("/about")}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded text-white hover:bg-zinc-700 transition"
        >
          <FaArrowLeft />
          Back to About
        </button>
      </section>
    );
  }

  return (
    <main className="section py-12 bg-[#0c0f1a] text-white min-h-screen relative z-0">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Back button fixed and styled */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 mt-4 relative z-20"
        >
          <FaArrowLeft className="text-sm" />
          <span>Back</span>
        </button>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-80 h-96 object-cover rounded-2xl shadow-xl"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-display font-bold">{leader.name}</h1>
            <p className="text-lg text-blue-400 font-medium mt-1">
              {leader.title}
            </p>

            <p className="mt-6 text-white/80 leading-relaxed">{leader.intro}</p>

            <div className="flex gap-5 mt-8">
              {leader.socials.instagram && (
                <a
                  href={leader.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 text-2xl transition"
                >
                  <FaInstagram />
                </a>
              )}
              {leader.socials.facebook && (
                <a
                  href={leader.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 text-2xl transition"
                >
                  <FaFacebook />
                </a>
              )}
              {leader.socials.linkedin && (
                <a
                  href={leader.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 text-2xl transition"
                >
                  <FaLinkedin />
                </a>
              )}
              {leader.socials.twitter && (
                <a
                  href={leader.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sky-400 text-2xl transition"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
