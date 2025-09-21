"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WebsiteCard({ websites }: { websites: any }) {
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
    <Link href={url} passHref>
      <div className="gradient-border border-4 p-4 text-[#007983] transition-colors hover:scale-102 min-h-80 max-h-96">
        <div className="flex justify-center items-center p-5">
          <Image
            src={"https:" + display.fields.file.url}
            width={540}
            height={300}
            alt={""}
          />
        </div>
        <div className="min-h-16">
          <h2 className="text-xl font-semibold mb-2 ">{title}</h2>
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