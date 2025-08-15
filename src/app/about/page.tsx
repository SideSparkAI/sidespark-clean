// src/app/about/page.tsx

"use client";

import Link from 'next/link';
import Head from 'next/head';

export default function AboutPage() {

  const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 mb-2">
      <span className="mt-1">⚡</span>
      <span>{children}</span>
    </li>
  );

  return (
    <>
      <Head>
        <title>About - SideSpark AI</title>
        <meta name="description" content="Learn about the mission and vision behind SideSpark.ai." />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">⚡ About SideSpark.ai</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            SideSpark.ai is the easiest way to build AI-powered agents — no coding, no complexity, no gatekeeping.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            We believe everyone should be able to turn their ideas into intelligent, automated tools. Whether you're a creator, solopreneur, educator, or just someone with a spark of curiosity, SideSpark gives you the power to build AI agents that work for you — without needing a technical background.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">🚀 What You Can Build</h2>
          <ul className="text-lg text-gray-600 dark:text-gray-300 list-none pl-0">
            <BulletPoint>Personal assistants that automate your workflows</BulletPoint>
            <BulletPoint>Customer support bots that actually understand your users</BulletPoint>
            <BulletPoint>Niche tools that solve specific problems for your audience</BulletPoint>
            <BulletPoint>Agents that generate income while you sleep</BulletPoint>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">🧠 Why SideSpark Exists</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Most AI platforms are built for developers. SideSpark is built for doers. We strip away the jargon and give you a visual, intuitive way to create agents that are smart, useful, and scalable. You bring the idea. We help you spark it into reality.
          </p>
          
          <div className="text-center mt-16 border-t border-gray-200 dark:border-gray-800 pt-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">SideSpark.ai is more than a tool — it’s a launchpad for your ideas.</p>
            <p className="text-2xl font-bold mt-4 mb-6">Ready to build something that works while you sleep?</p>
            <Link href="/" className="bg-[#4a42ff] hover:bg-[#FFD700] text-white hover:text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
              Let’s spark it.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}