import { createClient } from "contentful";
import ArticleCard from "./components/custom/websiteCard";
import React from "react";

// Define the type for the Contentful response
interface Website {
  sys: {
    id: string;
  };
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
  contentTypeId: string;
}

async function getWebsites(): Promise<Website[]> {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });
  const res = await client.getEntries<Website>({
    content_type: "websites",
  });
  return res.items.map((item) => ({
    sys: item.sys,
    fields: item.fields,
    contentTypeId: item.sys.contentType.sys.id,
  }));
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
          {websites.map((website) => (
            <ArticleCard key={website.sys.id} websites={website} />
          ))}
        </div>
      </div>
    </div>
  );
}
