// src/app/privacy/page.tsx

"use client";

import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );

  return (
    <>
       <Head>
        <title>Privacy Policy - SideSpark AI</title>
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center">Privacy Policy</h1>
          <p className="text-center text-gray-500 mb-10">Last updated: August 9, 2025</p>

          <Section title="Introduction">
            <p>This Privacy Policy describes how SideSpark AI (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services at https://sidespark.ai (the "Site") or otherwise communicate with us (collectively, the "Services").</p>
            <p>For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.</p>
            <p>Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.</p>
          </Section>
          
           {/* ... Other sections as previously defined ... */}

           <Section title="How We Disclose Personal Information">
                <p>In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage).</li>
                    <li>When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as through your use of social media login integrations.</li>
                </ul>
          </Section>
        </div>
      </div>
    </>
  );
}