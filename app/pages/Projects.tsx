import WebsiteCard from "../components/custom/websiteCard";
import { createClient } from "contentful";
import type { Website } from "../types";

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

export default async function Projects() {
  const websites = await getWebsites();

  return (
    <div className="flex flex-col items-center mx-auto">
      <h1 className="text-4xl text-wrap font-bold pt-5 pb-5 text-center text-[#007983] font-[Outfit] w-[fit-content]">
        Explore our Work
      </h1>
      <div className="max-w-80 md:max-w-[120%] min-w-[350px] grid md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-96 p-10 overflow-visible justify-center">
        {websites.map((website) => (
          <WebsiteCard key={website.sys.id} websites={website} />
        ))}
      </div>
    </div>
  );
}
