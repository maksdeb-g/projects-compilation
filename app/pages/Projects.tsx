import WebsiteCard from "../components/custom/websiteCard";
import { createClient } from "contentful";

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

export default async function Projects() {
  const websites = await getWebsites();

  return (
    <div className="h-auto max-w-5xl mx-auto">
      <h1 className="text-4xl text-wrap font-bold p-5 text-center text-[#007983]">
        Live Projects
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 min-h-96 p-10">
        {websites.map((website) => (
          <WebsiteCard key={website.sys.id} websites={website} />
        ))}
      </div>
    </div>
  );
}
