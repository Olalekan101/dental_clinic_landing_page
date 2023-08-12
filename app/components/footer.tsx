import React from "react";
import { FiMapPin } from "react-icons/fi";

function FooterWapper({ children }: any) {
  return (
    <div className=" px-5 py-5 flex flex-col  items-start justify-center border-r-[1px] border-r-priblack last:border-r-prigreen">
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-prigreen border-t-[1px] border-t-priblack  z-10 ">
      <section className="flex max-w-6xl mx-auto">
        <FooterWapper>
          <div className="font-bold">Testimonials from our customers</div>
          <div className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            recusandae, minima aliquid architecto alias dolorem?
          </div>
          <div className="">
            <p className="underline">Overview</p>
          </div>
        </FooterWapper>
        <FooterWapper>
          <div className="flex justify-between w-[300px] items-center mx-auto gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-bold">City</div>
              <ul className="flex flex-col gap-1">
                <li>New York</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
              </ul>
              <div className="">
                <p className="underline">Select your city</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold">Address</div>
              <ul className="flex flex-col gap-1">
                <li>145 Merry Parade</li>
                <li>Bravo Nebraska</li>
                <li>68030-8989, US</li>
              </ul>
              <div className="flex gap-1 items-center">
                <FiMapPin />
                <p className="underline">View on the map</p>
              </div>
            </div>
          </div>
        </FooterWapper>
        <FooterWapper>
          <div className="font-bold">Testimonials from our customers</div>
          <div className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            recusandae, minima aliquid architecto alias dolorem?
          </div>
          <div className="">
            <p className="underline">Overview</p>
          </div>
        </FooterWapper>
      </section>
    </footer>
  );
}
