"use client";

import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub logo icon

const Work = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // Fetch repositories from GitHub
    const fetchRepositories = async () => {
      try {
        const response = await fetch("https://api.github.com/users/deepakSingh-dev/repos");
        const data = await response.json();

        // Ensure data is an array before setting state
        if (Array.isArray(data)) {
          setRepositories(data);
        } else {
          console.error("Unexpected API response:", data);
          setRepositories([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setRepositories([]); // Fallback to an empty array
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div name="work" className="py-56 px-56 text-gray-300 bg-[#0a192f]">
      <div className="flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex flex-col justify-center text-center items-center mx-auto content-div p-4 bg-[#112240]"
            >
              {/* GitHub Logo */}
              <FaGithub className="text-4xl text-white mb-4" />

              {/* Repository Name */}
              <h3 className="text-2xl font-bold text-white tracking-wider mb-2">
                {repo.name}
              </h3>

              {/* Repository Description */}
              <p className="text-gray-400 text-sm mb-4">
                {repo.description || "No description available"}
              </p>

              {/* Hover effect for links */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* GitHub Link */}
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
