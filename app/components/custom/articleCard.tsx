import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ article }: { article: any }) {
  const { title, description, slug, thumbnail } = article.fields;

  return (
    <div className="border rounded-lg p-4 bg-gray-800 text-white hover:bg-gray-700 transition-colors hover:scale-102">
      <div className="flex justify-center items-center p-10">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={540}
          height={300}
          alt={""}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">
        {description || "No description available"}
      </p>
      <Link
        href={"/articles/" + slug}
        className="text-blue-400 hover:underline mt-2 inline-block"
      >
        Read more
      </Link>
    </div>
  );
}
