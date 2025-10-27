import React from "react";
import { Link } from "react-router-dom";
import { team } from "../data/team";

export default function About() {
  return (
    <div className="bg-[#0f172a] text-white">
      <section className="container mx-auto px-5 py-20 text-center">
        <h1 className="text-5xl font-display font-bold mb-6 py-5">
          About Putus Production
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Putus Production is a creative production house specialising in brand
          storytelling, film and campaigns. We combine strategy, craft, and
          production to create work that moves culture.
        </p>

        <div className="mt-12 bg-gray-900/60 p-5 rounded-2xl shadow-lg max-w-5xl mx-auto backdrop-blur-sm">
          <p className="text-gray-200 text-lg leading-relaxed">
            <strong>Putus</strong> 
            &nbsp; Production is a creative house where storytelling meets strategy. We craft films, brand campaigns, and visual content that connect emotionally and create cultural impact.<br></br>
            <br></br>The name Putus comes from Lantana Camara—a vibrant and resilient plant native to Jharkhand, India. Known for its adaptability and striking presence, it reflects our own philosophy: to grow, evolve, and thrive in every creative environment.<br></br>
            <br></br>At Putus, we make films, advertisements, and original concepts that move people to think, feel, and act—whether that means choosing a brand, exploring an idea, or simply seeing the world in a new light.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-6 py-1">
        <h2 className="text-4xl font-display font-bold mb-10 text-center">
          Who we are...
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {team.map((member) => (
            <Link
              to={`/leader/${member.id}`}
              key={member.id}
              className="group relative w-60 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center">
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-200">{member.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
