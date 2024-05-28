"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 font-bold">
        <li>Node.js</li>
        <li>Figma</li>
        <li>PostgreSQL</li>
        <li>PHPMyAdmin</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <div className="font-bold">
            American International University-Bangladesh
          </div>
          <p>Bachelor's Degree in Computer Science and Engineering</p>
        </li>
        <li>
          <div className="font-bold">British Council</div>
          <p>A Levels</p>
        </li>
        <li>
          <div className="font-bold">South Point School and College</div>
          <p>O Levels</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 font-bold">
        <li>CISCO IT Essentials</li>
        <li>DEAN'S LIST HONORS</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-8" id="about">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="mt-20"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-20">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer and a recent graduate from American
            International University-Bangladesh with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, PostgreSQL, HTML, CSS, and
            Git. I am a quick learner and am always looking to expand my
            knowledge and skill set. I enjoy working with enthusiastic people in
            a friendly environment and am excited to collaborate with others to
            create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
