"use client";

interface Member {
  name: string;
  title: string;
  image: string;
}

export default function MemberCard({ member }: { member: Member }) {
  const { name, title, image } = member;

  return (
    <div
      className="flex flex-col overflow-visible justify-end h-[250px] w-[175px] gradient-border p-1 text-[#007983] hover:scale-105 shadow-lg transition-all duration-200 bg-cover bg-center"
    >
      <img className="w-[90%] z-10" src={image}></img>
      <div className="p-2 text-center bg-white/70 rounded-md">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}

