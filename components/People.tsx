import React from "react";

import { people } from "@/data";
import { Button } from "./ui/MovingBorders";
import Link from "next/link";

const People = () => {
  return (
    <div id="people" className="py-20 w-full">
      <h1 className="heading">
        Personalities I am <span className="text-purple">honored</span> to work
        with
      </h1>

      <div className="w-full mt-12 flex flex-wrap items-stretch justify-center gap-10">
        {people.map((person) => (
          <Button
            key={person.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 lg:max-w-[34rem] dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={person.link}>
              <div className="flex md:flex-row flex-col md:items-start items-center p-5 md:p-8 gap-6">
                <img
                  src={person.img}
                  alt={person.name}
                  className="md:w-36 w-28 aspect-[3/4] object-cover object-top rounded-2xl shrink-0"
                />
                <div className="md:text-start text-center">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {person.name}
                  </h2>
                  <p className="text-purple mt-1 font-semibold">
                    {person.role}
                  </p>
                  <p className="text-white-100 mt-3 text-sm md:text-base">
                    {person.desc}
                  </p>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default People;
