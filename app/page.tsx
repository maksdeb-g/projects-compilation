import { createClient } from "contentful";
import ArticleCard from "./components/custom/websiteCard";
import React from "react";

async function getWebsites() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });
  const res = await client.getEntries({
    content_type: "websites",
  });
  return res.items;
}

export default async function Home() {
  const websites = await getWebsites();

  return (
    <div className="flex min-h-screen items-start justify-center bg-gradient-to-b from-cyan-100 to-slate-50 p-8">
      <div className="max-w-3xl mx-auto p-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center text-[#007983]">
          Past Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-4 min-h-96">
          {websites.map((article: any) => (
            <ArticleCard key={article.sys.id} websites={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
