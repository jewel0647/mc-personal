import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import { SiLaravel, SiVuedotjs, SiTailwindcss, SiMysql } from "react-icons/si";

import {
  Experience,
  ExperienceType,
  TechStack,
  TechStackType,
  Project,
  ProjectType,
  Header,
} from "../components";

const exps: ExperienceType[] = [
  {
    role: "Senior Software Engineer",
    company: "Closeloop Technologies",
    color: "bg-red-500",
    type: "FULL",
    isRemote: true,
    from: "May 2019",
    to: "Jan 2023",
    duration: "3 yrs 9 mos",
    detail: [],
  },
  {
    role: "Full Stack Developer",
    company: "Custom D",
    color: "bg-teal-500",
    type: "FULL",
    isRemote: false,
    from: "Feb 2015",
    to: "Mar 2019",
    duration: "3 yrs 5 mos",
    detail: [],
  },
  {
    role: "Software Developer",
    company: "Pwrteams",
    color: "bg-orange-500",
    type: "FULL",
    isRemote: false,
    from: "Feb 2011",
    to: "Jan 2015",
    duration: "4 yrs 1 mos",
    detail: [],
  },
];

const stacks: TechStackType[] = [
  {
    name: "Laravel PHP",
    icon: <SiLaravel size="28px" color="white" />,
    color: "bg-red-500",
    description: (
      <>
        For almost 9 years I have been using Laravel as the backend framework on
        nearly all my projects. I am a{" "}
        <span className="text-teal-500 underline underline-offset-2">
          Laravel Certificated Developer
        </span>{" "}
        and passed the certification exam with the Laravel organization. Through
        out my time working with Laravel I&apos;ve touched almost every part of
        their development ecosystem; using the authentication scaffolding,
        payment scaffolding, deployment management, and more...
      </>
    ),
    badges: [
      "Livewire",
      "Jetstream",
      "Nova",
      "Sactum",
      "Echo",
      "Cashier",
      "Forge",
      "Filament",
    ],
    versions: ["Version 9", "Version 10"],
  },
  {
    name: "Vue",
    icon: <SiVuedotjs size="28px" color="white" />,
    color: "bg-emerald-500",
    description: (
      <>
        For advanced front-ends I almost always use Vue JS, this year moving all
        my projects to the latest release version 3 using the composition API. I
        am experienced using many of the popular Vue plugins and frameworks.
      </>
    ),
    badges: ["Quasar", "Vueify", "Vue Formulate", "Inertia JS", "Headless UI"],
    versions: ["Version 3"],
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size="28px" color="white" />,
    color: "bg-sky-500",
    description: (
      <>
        I started using Tailwind CSS since it&apos;s launch in 2018 and it
        quickly became a staple in all my projects. I regularly use it when
        creating custom components because I prefer to use native elements with
        styling over javascript based components when possible. Using Purge and
        JIT compiling to ensure the smallest file size and fatest page load
        times.
      </>
    ),
    badges: ["Daisy", "Flowbite", "Mamba UI", "Headless UI"],
    versions: [],
  },
  {
    name: "MySQL",
    icon: <SiMysql size="28px" color="white" />,
    color: "bg-cyan-900",
    description: (
      <>
        Nearly all of the projects I have worked on use relational databases
        with MySQL, typically used with an ORM like Laravel Eloquent for
        managing relationships. I&apos;m comfortable using advanced data
        structures like pivot table, polymorphic relationships, nested-set
        relationships, recursive relationships, and more...
      </>
    ),
    badges: [],
    versions: [],
  },
];

const projects: ProjectType[] = [
  {
    title: "Leadgen Funnel Builder",
    description: `LiveLeads was created to easily build advanced marketing
    funnels for collecting user information with custom
    questions. Quiz steps are dynamically routed using a
    nested-data-structure and multiple buyers can be
    integrated with field mapping to match their data
    requirements.`,
    challenge: `"The most challenging aspect of this project was
    implementing a nested-set data structure to controle the
    flow of steps in each quiz."`,
    stacks: [
      "Laravel",
      "Livewire",
      "Alpine JS",
      "Vue JS",
      "Quasar",
      "Tailwind CSS",
      "AMCharts",
      "Draggable JS",
    ],
    integrations: [
      "Github",
      "Transparently",
      "Trellis(Savvy)",
      "LeadProsper",
      "Leadspedia",
      "PX Exchange",
    ],
    image: "livelead",
  },
  {
    title: "Marketing Campaign Management",
    description: `Bidobo is an internal tool that controlled dozens of marketing campaigns at once; tracking
      live incoming traffic, daily budgets, spend per account, and revenue breakdowns. With the help of this tool,
      we were able to optimize the workflow and scale campaigns to total for $30k+ in spend per day.
    `,
    challenge: `"My role was as lead developer and also managed two developers on this project."`,
    stacks: [
      "Laravel",
      "Vue JS",
      "Electron JS",
      "Bootstrap CSS",
      "Chrome Extension",
    ],
    integrations: [
      "Cake Marketing",
      "HasOffers",
      "Telegram",
      "ImproveMX",
      "Google Sheets",
      "Zeus Track",
    ],
    image: "bidobo",
  },
  {
    title: "Advertising Account Automation",
    description: `Affiliomash was an internal tool used to manage hundreds of advertising accounts at once and
      completely automate their creation. The dashboard displays the virtual machine status, monitored contact
      details, and transactions linked to each account.
    `,
    challenge: `"All the automation is done with custom hardware and integrations. More about this project can be discussed privately."`,
    stacks: ["Laravel", "Vue JS", "Bootstrap CSS"],
    integrations: [
      "Cake Marketing",
      "HasOffers",
      "Laravel Forge",
      "Google Sheets",
      "Handsontable",
      "Photopea",
      "Virtual Box",
      "SMG Gateway",
      "OFX Parser",
    ],
    image: "affilio-smash",
  },
];

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* app */}
      <div className="max-w-app mx-auto px-20 py-10">
        {/* content */}
        <div className="flex flex-col bg-white rounded border border-gray-100">
          {/* header */}
          <Header
            name="Michael Cavalli"
            role="Senior Software Engineer"
            location="24 Beckenham Avenue, 1023 Auckland, New Zealand"
            email="MichaelCavalli40@outlook.com"
          />

          {/* body */}
          <div className="flex flex-col p-20 space-y-14">
            {/* About me */}
            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-semibold">About Me</h1>
              <p className="text-gray-800 text-lg">
                I have worked in web development for over 10 years as a Full
                Stack Developer. I&apos;ve always had a love for technology so
                taking the initiative to learn Full Stack Web Development has
                definitely been one of the most challenging yet amazing
                decisions I&apos;ve ever made. Contributing to web development
                projects and overcoming both personal and professional
                challenges have only further motivated me to continue pursuing
                my career goals within the software development industry This
                journey has also taught me to believe and be kind to myself,
                anything is possible with time and dedication. I can&apos;t wait
                to see where this road take me and I wouldn&apos;t have it any
                other way! When I&apos;m not on the job, I love hiking with my
                dog, working my way through every recipe in the family cookbook,
                and indulging my love for seeing new places.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col space-y-8">
              <h1 className="text-3xl font-semibold">Tech Stack</h1>
              <p className="text-gray-800 text-lg">
                I&apos;ve worked with many front and back end frameworks, but
                this is my preferred stack when working on projects. This is
                just a brief list.
              </p>

              {/* stack */}
              {stacks.map((stack, index) => (
                <TechStack key={index} {...stack} />
              ))}

              {/* additional summary */}
              <p className="text-gray-800 text-lg">
                I&apos;m an extremely quick learner and have worked on many
                projects where I&apos;ve had to learn a new stack or technology
                to integrate within the current project. Many times creating
                adaptors to bridge between these technologies or devleop custom
                solutions to archive the goal of that requirement.
              </p>
            </div>

            {/* Education */}
            <div className="flex flex-col space-y-3">
              <h1 className="text-3xl font-semibold">Education</h1>

              <div className="flex flex-col">
                <h2 className="italic whitespace-nowrap text-xl text-gray-800 font-bold">
                  The University of Auckland
                </h2>
                <p>Bachelor’s Degree in Computer Science</p>
                <span className="text-gray-500">Sep 2006 - Oct 2010</span>
              </div>
            </div>

            {/* Work experience */}
            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-semibold">Work Experience</h1>

              {/* companies */}
              {exps.map((exp, index) => (
                <Experience key={index} {...exp} />
              ))}
            </div>

            {/* Recent Projects */}
            <div className="flex flex-col space-y-5">
              <h1 className="text-3xl font-semibold">Recent Projects</h1>
              <p className="text-gray-800 text-lg">
                These are the most notable projects I have designed and
                developed in the marketing category. Listed are some of the
                technologies and integrations used in the development of these
                projects.
              </p>

              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
