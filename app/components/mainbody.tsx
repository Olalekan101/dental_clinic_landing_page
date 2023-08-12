"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Imagetype = {
  imgsrc: string;
  className?: string;
};

const Linkdata = [
  {
    name: "Treatment",
    link: "/",
  },
  {
    name: "Prevention",
    link: "/",
  },
  {
    name: "Prosthetics",
    link: "/",
  },
  {
    name: "Dental implants",
    link: "/",
  },
];

function ImageWaraper({ imgsrc, className }: Imagetype) {
  return (
    <section className={`"", ${className}`}>
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[500px] h-[300px] translate-y-10">
        <Image
          src={imgsrc}
          alt="dental image"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}

function LinkWarpper() {
  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        {Linkdata.map((data) => (
          <Link
            href={data.link}
            key={data.name}
            className="px-4 py-1 border-2 border-priblack rounded-full hover:bg-priblack bg-pricolor hover:text-pricolor duration-200 delay-75 transition-colors cursor-pointer"
          >
            {data.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default function Mainbody() {
  return (
    <section className="relative flex flex-col justify-end items-center h-full">
      <div className="flex flex-col justify-center items-center gap-4 mb-auto mt-5">
        <div className="text-4xl">
          The dental department of <span>Dentist Doctor</span> is a team
          <br />
          of specialists with many years of experience
        </div>
        <LinkWarpper />
      </div>
      <motion.div
        className=""
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.3,
        }}
      >
        <ImageWaraper imgsrc={"/D2.png"} className="rotate-45 translate-x-10" />
      </motion.div>
      <motion.div
        className=""
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.3,
        }}
      >
        <ImageWaraper
          imgsrc={"/D1.png"}
          className="-rotate-45 -translate-x-10"
        />
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
        className=""
      >
        <ImageWaraper imgsrc={"/D3.png"} />
      </motion.div>
    </section>
  );
}
