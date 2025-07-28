import React from "react";
import { BsGithub } from "react-icons/bs";
import GlowCard from "../components/GlowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TitleHeader from "../components/TitleHeader";

const worksData = [
  {
    image: "./images/tele.png",
    tags: ["Nest.js", "mono-repository", "prisma", "Angular","nginx", "Ongoing"],
    title: "hcw-home",
    description:
      "HCW@Home is a completely Open Source teleconsultation application, allowing a caregiver to carry out consultations with his patients in all simplicity.",
    link: "https://github.com/techySPHINX/hcw-home",
  },
  {
    image: "./images/money.png",
    tags: ["Nest.js", "mono-repository", "prisma", "mongodb", "Completed"],
    title: "Finarva",
    description:
      "Finarva is a NestJS backend platform that helps financial agents deliver personalized services to microentrepreneurs, including client management, investments, insurance, quizzes, and learning tools.",
    link: "https://github.com/techySPHINX/Finarva",
  },
  {
    image: "./images/hookith-1.png",
    tags: ["Next.js", "notion-api", "discord-api", "google-api", "On-going"],
    title: "Hookith",
    description:
      "A powerful SaaS automation platform built with Next.js, seamlessly integrated with multiple third-party providers to streamline workflows, enhance productivity, and deliver scalable cloud-based solutions.",
    link: "https://github.com/techySPHINX/hookith",
  },
  {
    image: "./images/fitness.png",
    tags: [
      "spring-boot",
      "keycloak",
      "spring-cloud",
      "spring-security",
      "microservices",
      "On-going",
    ],
    title: "CoreTribe-AI",
    description:
      "An AI-powered fitness app built with Spring Boot microservices, delivering scalable, standards-based backend tailored to users’ health goals and budget.",
    link: "https://github.com/techySPHINX/coretribe-ai",
  },
  {
    image: "./images/agent.png",
    tags: ["LangChain", "Next.js", "Postgresql", "IBM Watson", "On-going"],
    title: "NeuralSmith",
    description:
      "An AI-powered EdTech platform that lets users query intelligent agents trained via web scraping from Google Docs, books, links, and YouTube—transforming diverse content into personalized, interactive learning experiences.",
    link: "https://github.com/techySPHINX/NeuralSmith",
  },
  {
    image: "./images/book.png",
    tags: ["Nest.js-Backend", "Postgressql", "Completed"],
    title: "BookStore",
    description:
      "A NestJS backend API for managing a bookstore with JWT authentication, CRUD operations for books, customers, and orders, and PostgreSQL integration via Prisma. Includes Swagger for interactive API documentation.",
    link: "https://github.com/techySPHINX/BookStore",
  },
  {
    image: "./images/snipcrunch.png",
    tags: ["Spring-Boot", "React Js", "AI", "Completed"],
    title: "SnipCrunch",
    description:
      "A full-featured URL shortener built with Spring Boot and React, offering custom domains, analytics, QR codes, and link expiration.Combines a secure, scalable backend with a sleek and responsive frontend for seamless user experience.",
    link: "https://github.com/techySPHINX/SnipCrunch",
  },
  {
    image: "./images/glintkit.png",
    tags: ["Tailwindcss", "Radix-UI", "React", "On-going"],
    title: "GlintKit-UI",
    description:
      "GlintKit UI is a modern, accessible, and developer-first React UI library built with Radix UI, Tailwind CSS, and Framer Motion — designed for speed, flexibility, and beautiful DX. Ideal for building scalable design systems, dashboards, and web apps with ease.",
    link: "https://github.com/techySPHINX/glintkit-ui",
  },
  {
    image: "./images/page.png",
    tags: ["Next.js", "Core", "Typescript", "Gemini", "Completed"],
    title: "Referraluxe",
    description:
      "Referraluxe is a community-driven platform built with Supabase and Next.js, connecting college students with alumni for job referrals.It enables students to request referrals, alumni to share opportunities, and fosters collaborative career growth.",
    link: "https://github.com/techySPHINX/Referraluxe",
  },
  {
    image: "./images/saver.png",
    tags: ["Next.js", "Shadcn-ui", "Tailwindcss", "Stripe", "AWS", "Completed"],
    title: "Saver",
    description:
      "A cutting-edge project management SaaS with visual Kanban boards, smart task tracking, and secure payment integration — built for seamless team collaboration.",
    link: "https://github.com/techySPHINX/Saver",
  },
  {
    image: "./images/bharat.png",
    tags: ["React-Native", "FastAPI", "Firebase", "Completed"],
    title: "BharatKonnect",
    description:
      "BharatKonnect is a smart driver app for the logistics industry, offering real-time updates and an intuitive interface to keep drivers informed and efficient throughout deliveries.",
    link: "https://github.com/techySPHINX/BharatKonnect",
  },
  {
    image: "./images/proji.png",
    tags: ["Next.js", "Discord-API", "Python", "AWS", "Completed"],
    title: "Proji",
    description:
      "A Fullstack Project using Next Js 14 , server actions and concept of Kanban Board for task management building software and collaboration for future and deploy on AWS.",
    link: "https://github.com/techySPHINX/Proji",
  },
  {
    image: "./images/GeoCortex.png",
    tags: ["Python", "Automation", "Completed"],
    title: "GeoCortex",
    description:
      "This Python project simulates a GPS-based toll system for Indian highways using ANPR and virtual GPS tracking. It calculates tolls electronically based on distance traveled — enabling smoother traffic, fairer charges, and lower operational costs.",
    link: "https://github.com/techySPHINX/GeoCortex",
  },
];

const Work = () => {
  return (
    <section id="work" className="section-padding w-full">
      <TitleHeader title="Projects" sub="💼 My Works" />
      <div className="mt-12">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {worksData.map((project, index) => (
            <SwiperSlide key={index}>
              <GlowCard
                index={index}
                footer={
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-medium text-sm"
                  >
                    <BsGithub className="text-xl" />
                  </a>
                }
              >
                <div className="space-y-4">
                  <div className="relative w-full h-52 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/10 text-white text-xs px-2 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
