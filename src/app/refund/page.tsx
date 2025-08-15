// src/app/refund/page.tsx

"use client";

import Head from 'next/head';
import Link from 'next/link';

export default function RefundPage() {
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
        <title>Refund Policy - SideSpark AI</title>
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center">Refund Policy</h1>
          <p className="text-center text-gray-500 mb-10">Last updated: August 9, 2025</p>

          <Section title="Our Guarantee">
            <p>We want you to be satisfied with SideSpark.ai. Our refund policy is designed to be fair to you while protecting our business from the potential abuse of our credit-based system.</p>
          </Section>

          <Section title="Monthly Subscriptions">
            <p>For all **monthly** subscription plans, we offer a **7-day money-back guarantee** on your first payment. If you are not satisfied with the service for any reason, you can request a full refund within 7 days of your initial purchase.</p>
          </Section>

          <Section title="Annual Subscriptions">
            <p>For all **annual** subscription plans, we offer a **30-day money-back guarantee** on your first payment. This gives you ample time to explore the full range of our features and decide if it's the right fit for your long-term goals.</p>
          </Section>

          <Section title="How to Request a Refund">
            <p>To request a refund under our money-back guarantee, please contact us at <a href="mailto:support@sidespark.ai" className="text-[#4a42ff] underline">support@sidespark.ai</a> within the specified time frame (7 days for monthly, 30 days for annual). Please include the email address associated with your account.</p>
          </Section>
        </div>
      </div>
    </>
  );
}