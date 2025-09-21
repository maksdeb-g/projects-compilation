"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Website {
  fields: {
    title: string;
    description: string;
    url: string;
    display: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export default function WebsiteCard({ websites }: { websites: Website }) {
  const { title, description, url, display } = websites.fields;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const truncatedDescription =
    description && description.length > 100
      ? description.slice(0, 100) + "..."
      : description;

  return (
    <Link href={url} passHref className="h-full">
      <div className="gradient-border p-1 text-[#007983] hover:scale-105 shadow-lg transition-all duration-200 h-full bg-white">
        <div className="flex justify-center items-center">
          <Image
            src={"https:" + display.fields.file.url}
            width={540}
            height={300}
            alt={title}
          />
        </div>
        <div className="min-h-16 p-5">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-800">
            {showFullDescription ? description : truncatedDescription}
          </p>
          {description && description.length > 100 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleDescription();
              }}
              className="text-blue-400 hover:underline mt-2"
            >
              {showFullDescription ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
