import About from "@/components/About";
import Header from "@/components/Header";
import Head from "next/head";
import {
  HoverImageLink,
  ParallaxText,
  SectionHeading,
  SlideIn,
  TextReveal,
  Transition,
} from "@/components/ui";

import { UserObject } from "@/utils/interfaces";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ContactUs } from "@/components/ContactUs";

async function fetchUser() {
  try {
    const res = await fetch("https://api-porto.onrender.com/api/user");
    if (!res.ok) throw new Error("Failed to fetch user data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

export default async function Home() {
  const { user } = (await fetchUser()) as UserObject;
  if (!user) return null;
  const { about, skills, social_handles, timeline, email } = user;

  return (
    <main className="relative">
      <Head>
        <title>Akbar Khairul Aziz - Software Engineer</title>
        <meta name="title" content="Akbar Khairul Aziz - Software Engineer" />
        <meta
          name="description"
          content="A Software Engineer based in Lampung, Indonesia, with an eye for great design (UI) and even better user experience (UX)."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Akbar Khairul Aziz - Software Engineer"
        />
        <meta
          property="og:description"
          content="A Software Engineer based in Lampung, Indonesia, with an eye for great design (UI) and even better user experience (UX)."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Akbar Khairul Aziz - Software Engineer"
        />
        <meta
          property="twitter:description"
          content="A Software Engineer based in Lampung, Indonesia, with an eye for great design (UI) and even better user experience (UX)."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold ">AKBXR</TextReveal>
        </Link>
      </Transition>
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} skills={skills} />
      {/* ===CONTACT US=== */}
      <div
        className="pt-24 rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs email={email} about={about} social_handle={social_handles} />
      </div>
    </main>
  );
}
