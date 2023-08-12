import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { BsCalendarPlus, BsTelephone } from "react-icons/bs";

const sublinkdata = [
  {
    name: "Our Doctors",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
  {
    name: "Our Price",
    link: "/",
  },
  {
    name: "Reviews",
    link: "/",
  },
];

const workData = [
  {
    icon: <BsCalendarPlus />,
    title: "Work days",
    time: "Mon to Fri",
  },
  {
    icon: <BiTime />,
    title: "Office hours",
    time: "8:00 to 15:00",
  },
];

function Logo() {
  return (
    <>
      <NavItemCover>
        <div className="relative aspect-square w-[60%] flex flex-col justify-center items-center ">
          <Image
            src={"/Dentist_logo.svg"}
            alt="dentist logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-sm">
          <div className="font-bold">DOCTOR</div>
          <div className="text-xs tracking-widest">DENTIST</div>
        </div>
      </NavItemCover>
    </>
  );
}

function Sublinks() {
  return (
    <NavItemCover>
      <div className="flex justify-between gap-6 items-center ">
        {sublinkdata.map((link) => (
          <Link href={link.link} key={link.name}>
            {link.name}
            {link.name === "Services" ? "*" : ""}
          </Link>
        ))}
      </div>
    </NavItemCover>
  );
}

function WorkSch() {
  return (
    <>
      <NavItemCover>
        <div className="flex justify-between gap-6 items-center ">
          {workData.map((link) => (
            <div
              key={link.title}
              className="flex justify-center items-start gap-2 relative"
            >
              <div className="text-sm">{link.icon}</div>
              <div className=" ">
                <div className="font-bold leading-3">{link.title}</div>
                <div className="mt-2">{link.time}</div>
              </div>
            </div>
          ))}
        </div>
      </NavItemCover>
    </>
  );
}

function ContactBtn() {
  return (
    <div className="flex flex-col justify-center items-center px-10  py-4 ">
      <Link
        href={"/"}
        className=" bg-priblack px-10 py-2 flex gap-2 hover:bg-green-600 justify-center items-center rounded-full text-pricolor "
      >
        <BsTelephone />
        Order a call
      </Link>
    </div>
  );
}

function NavItemCover({ children }: any) {
  return (
    <div className="flex flex-col justify-center items-center  px-10  h-[90px] first:">
      {children}
    </div>
  );
}

function BorderCover({ children }: any) {
  return <div className="border-r-[1px] border-r-priblack ">{children}</div>;
}

export default function Header() {
  return (
    <section className=" border-b-[1px] border-b-priblack  ">
      <div className="max-w-6xl mx-auto flex justify-center  items-center">
        <BorderCover>
          <Logo />
        </BorderCover>
        <BorderCover>
          <Sublinks />
        </BorderCover>
        <BorderCover>
          <WorkSch />
        </BorderCover>
        <ContactBtn />
      </div>
    </section>
  );
}
