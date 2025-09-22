"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Website } from "@/app/types";

export default function WebsiteCard({ websites }: { websites: Website }) {
  const { title, description, url, display } = websites.fields;
  const [showFullDescription, setShowFullDescription] = useState(false);
  console.log(websites);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const truncatedDescription =
    description && description.length > 100
      ? description.slice(0, 100) + "..."
      : description;

  return (
    <Link href={url} passHref className="h-full lg:w-96">
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
              className=" text-[#007983] hover:underline mt-2"
            >
              {showFullDescription ? "See Less" : "See More"}
            </button>
          )}
        </div>
        <div className="flex gap-2 justify-center py-4 text-center items-center">
          {websites.fields.developers.map((dev: string, i: number) => (
            <span
              key={`${websites.sys.id}-${i}`}
              className="px-4 py-2 border-[1px] border-[#007983] rounded-3xl"
            >
              {dev}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
