"use client";

import { About as AboutType, Timeline } from "@/utils/interfaces";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatDate } from "@/utils";
import { SlideIn, Transition } from "./ui";
import { Skill } from "@/utils/interfaces";

interface AboutProps {
  about: AboutType;
  timeline: Timeline[];
  skills?: Skill[];
}

const About = ({ about, timeline, skills = [] }: AboutProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categorizedSkills = {
    language: skills.filter(
      (skill) => skill.enabled && skill.category === "language",
    ),
    framework: skills.filter(
      (skill) => skill.enabled && skill.category === "framework",
    ),
    tool: skills.filter((skill) => skill.enabled && skill.category === "tool"),
  };

  return (
    <section
      className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative"
      id="about"
    >
      <div>
        <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
          <SlideIn>{about.quote}</SlideIn>
        </h3>
        <Transition viewport={{ once: true }}>
          <p className="text-xl md:text-4xl text-foreground/50">
            {about.description}
          </p>
        </Transition>

        {/* Skills Section */}
        <div className="mt-32">
          <h4 className="text-2xl md:text-5xl font-bold mb-6">Skills</h4>

          {/* Languages */}
          <div className="mb-8">
            <h5 className="text-xl font-semibold mb-4">
              Programming Languages
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categorizedSkills.language.map((skill) => (
                <div
                  key={skill._id}
                  className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg"
                >
                  {skill.image && (
                    <Image
                      src={skill.image.url}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks/Libraries */}
          <div className="mb-8">
            <h5 className="text-xl font-semibold mb-4">
              Frameworks & Libraries
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categorizedSkills.framework.map((skill) => (
                <div
                  key={skill._id}
                  className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg"
                >
                  {skill.image && (
                    <Image
                      src={skill.image.url}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-8">
            <h5 className="text-xl font-semibold mb-4">Tools & Technologies</h5>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categorizedSkills.tool.map((skill) => (
                <div
                  key={skill._id}
                  className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg"
                >
                  {skill.image && (
                    <Image
                      src={skill.image.url}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="py-10 overflow-hidden grid w-full">
            {/* {education.map((edu, index) => (
              <Transition key={edu._id}>
                <TimelineCard
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  timeline={edu}
                />
              </Transition>
            ))} */}
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <div className="sticky top-6">
          <Transition>
            <Image
              src={about.avatar.url}
              // src={"/img.jpeg"}
              width={400}
              height={400}
              alt={about.name}
              className="rounded-xl max-md:aspect-square object-cover"
            />
          </Transition>
        </div>
      </div> */}
    </section>
  );
};

export default About;

interface TimelineCardProps {
  timeline: Timeline;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
}

const TimelineCard = ({
  timeline,
  activeIndex,
  setActiveIndex,
  index,
}: TimelineCardProps) => (
  <div className="border-b border-primary/20 py-4">
    <div
      className="flex items-center justify-between gap-4 cursor-pointer select-none"
      onClick={() => setActiveIndex(index)}
    >
      <span>0{index + 1}</span>
      <span className="text-xl md:text-3xl font-bold flex-1">
        {timeline.jobTitle}
      </span>
      <div className="relative size-6 flex items-center justify-center">
        <span className="bg-primary w-4 md:w-6 h-0.5 absolute" />
        <motion.span
          initial={{ rotate: 90 }}
          animate={{
            rotate: activeIndex === index ? 0 : 90,
          }}
          className="absolute bg-primary w-4 md:w-6 h-0.5 rotate-90"
        />
      </div>
    </div>
    <motion.div
      initial={{
        height: activeIndex === index ? "100%" : 0,
      }}
      animate={{
        height: activeIndex === index ? "100%" : 0,
      }}
      className="overflow-hidden"
    >
      <p className="text-foreground/60 py-4 max-md:text-sm">
        {timeline.summary}
      </p>
      <div className="flex justify-between items-center pb-3 text-foreground/80">
        <div className="max-md:text-sm">
          <span>{timeline.company_name}</span>
          {/* <span>{timeline.jobLocation}</span> */}
        </div>
        <div className="max-md:text-xs">
          <span className="italic">
            {formatDate(timeline.startDate).month +
              ", " +
              formatDate(timeline.startDate).year}
          </span>
          {" - "}
          <span className="italic">
            {formatDate(timeline.endDate).month +
              ", " +
              formatDate(timeline.endDate).year}
          </span>
        </div>
      </div>
      <ul className="list-disc list-inside">
        {timeline.bulletPoints.map((point, index) => (
          <li key={index} className="text-foreground/80 max-md:text-sm">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);
