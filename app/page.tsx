import { createClient } from "contentful";
import ArticleCard from "./components/custom/websiteCard";
import MemberCard from "./components/custom/memberCard";
import React from "react";

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
  const members = [
    {
      name: "Trixie",
      title: "Backend Developer",
      image: "/assets/img/Trixie.webp",
    },
    { name: "Errol", title: "UI/UX Designer", image: "/assets/img/Errol.webp" },
    {
      name: "Justin",
      title: "Frontend Developer",
      image: "/assets/img/Justin.webp",
    },
    { name: "Max", title: "Frontend Developer", image: "/assets/img/Max.webp" },
    {
      name: "Deniel",
      title: "Backend Developer",
      image: "/assets/img/Deniel.webp",
    },
    {
      name: "Roslyn",
      title: "UI/UX Designer",
      image: "/assets/img/Roslyn.webp",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-cyan-100 to-slate-50 p-8">
      <div className="h-auto">
        <h1 className="text-4xl text-wrap font-bold p-5 text-center text-[#007983]">
          Meet the Team!
        </h1>
        <div className="max-w-3xl flex flex-row gap-4 p-10 flex-wrap justify-center overflow-visible">
          {members.map((member, id) => (
            <MemberCard key={id} member={member} />
          ))}
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-wrap font-bold p-5 text-center text-[#007983]">
          Live Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-4 min-h-96 p-10">
          {websites.map((website) => (
            <ArticleCard key={website.sys.id} websites={website} />
          ))}
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-wrap font-bold p-5 text-center text-[#007983]">
          Past Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-4 min-h-96 p-10"></div>
      </div>
    </div>
  );
}
