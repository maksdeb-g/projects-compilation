import MemberCard from "@/app/components/custom/memberCard";

export default function Hero() {
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
    <div className="h-full p-10">
      <h1 className="text-4xl text-wrap font-bold p-5 text-center text-[#007983]">
        Meet the Team!
      </h1>
      <div className="max-w-3xl flex flex-row gap-4 p-10 flex-wrap justify-center overflow-visible">
        {members.map((member, id) => (
          <MemberCard key={id} member={member} />
        ))}
      </div>
    </div>
  );
}
