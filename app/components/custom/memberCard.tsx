"use client";
import Image from "next/image";

interface Member {
  name: string;
  title: string;
  image: string;
}

export default function MemberCard({ member }: { member: Member }) {
  const { name, title, image } = member;

  return (
    <div className="flex flex-col justify-end items-center h-[250px] w-[175px] gradient-border text-[#007983] hover:scale-105 shadow-lg transition-all duration-200">
      <img
        className="h-[95%] max-w-[140%] absolute rounded-[1.5rem] pl-2 pr-2 aspect-auto"
        src={image}
        alt="Member Image"
      ></img>
      <div className="w-full flex flex-row justify-between p-3 rounded-[1.5rem] z-10 text-white gap-[10%] bg-[#007983]/50 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-shadow-xs text-shadow-white text-start">
          {name}
        </h2>
        <p className="text-xs text-end text-wrap">{title}</p>
      </div>
    </div>
  );
}
