import { createClient } from "contentful";
import ArticleCard from "./components/custom/articleCard";
import ProjectCard from "./components/custom/projectCard";

async function getArticles() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const res = await client.getEntries({
    content_type: "articles",
  });

  return res.items;
}

async function getProjects() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const res = await client.getEntries({
    content_type: "projects",
  });

  return res.items;
}

export default async function Home() {
  const articles = await getArticles();
  const projects = await getProjects();
  return (
    <div className="flex h-full items-center justify-center bg-gray-700">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>
        <div className="grid grid-cols-2 gap-4">
          {articles.map((article: any) => (
            <ArticleCard key={article.sys.id} article={article} />
          ))}
        </div>

        <h1 className="text-3xl font-bold mt-10 mb-6 text-center">Projects</h1>
        <div className="grid grid-cols-2 gap-4 mt-10">
          {projects.map((project: any) => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
