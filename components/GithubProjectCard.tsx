"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string | null; // Description can be null
  language: string | null; // Language can be null
  html_url: string; // Add html_url for the link
}

const GithubProjectCard = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch repositories"); // Handle potential missing error property
        }
        const data: Repo[] = await response.json(); // Type the data
        setRepos(data);
      } catch (error: any) {
        // Type the error as any
        console.error("Error fetching the repos", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="max-w-sm w-full bg-[#76767619] p-4 text-center text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-sm w-full bg-[#76767619] p-4 text-center text-red-500">
        {error} {/* Display the error message */}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <>
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {" "}
            {/* Use html_url */}
            <div
              key={repo.id}
              className="max-w-sm w-full bg-[#76767619] text-xs border border-[#30363d] shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-2 flex justify-start text-xs items-center border-b border-[#30363d]">
                <h1 className="text-xs mr-4 px-2 md:text-sm font-normal text-[#e6edf3]">
                  {repo.name}
                </h1>
              </div>

              <div className="p-2 md:p-4">
                <p className="text-[#c5c5c5] text-xs md:text-sm">
                  {repo.description || "No description available"}
                </p>
              </div>

              <div className="p-4 flex justify-between text-xs md:text-sm items-center border-[#30363d] border-t">
                <span className="text-[#e6edf3]">
                  Language: {repo.language || "Not specified"}
                </span>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default GithubProjectCard;
