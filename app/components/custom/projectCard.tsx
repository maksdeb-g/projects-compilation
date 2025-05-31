import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  const { title, description, preview, techs } = project.fields;

  return (
    <div className="border rounded-lg p-4 bg-gray-800 text-white hover:bg-gray-700 transition-colors hover:scale-102">
      <div className="flex justify-center items-center p-10">
        <Image
          src={"https:" + preview.fields.file.url}
          width={540}
          height={300}
          alt={""}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>
        {techs.map((tech: any) => (
          <span>{tech}</span>
        ))}
      </div>

      <p className="text-gray-300">
        {description || "No description available"}
      </p>
    </div>
  );
}
