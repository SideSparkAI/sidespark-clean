// src/app/pricing/page.tsx

"use client";

import React, { useState } from 'react';
import Head from 'next/head';

const features = [
  { name: 'AI Opportunity Finder', spark: '✅', ignite: '✅', blaze: '✅' },
  { name: 'Basic Shards', spark: '✅', ignite: '✅', blaze: '✅' },
  { name: 'Smart Prompts', spark: '✅', ignite: '✅', blaze: '✅' },
  { name: 'Sandbox Environment', spark: '✅', ignite: '✅', blaze: '✅' },
  { name: 'Workflow Builder', spark: '❌', ignite: '✅', blaze: '✅' },
  { name: 'Agent Personality Tuning', spark: '❌', ignite: '✅', blaze: '✅' },
  { name: 'Reactive Agents', spark: '❌', ignite: '✅', blaze: '✅' },
  { name: 'Standard Analytics', spark: '❌', ignite: '✅', blaze: '✅' },
  { name: 'Multi-Agent Collaboration', spark: '❌', ignite: '❌', blaze: '✅' },
  { name: 'Live Editing', spark: '❌', ignite: '❌', blaze: '✅' },
  { name: 'Secure Mode', spark: '❌', ignite: '❌', blaze: '✅' },
  { name: 'Role-Based Access', spark: '❌', ignite: '❌', blaze: '✅' },
  { name: 'Custom Data Feeds', spark: '❌', ignite: '❌', blaze: '✅' },
  { name: 'Monetization Tools', spark: '❌', ignite: '✅', blaze: '✅' },
];

const plans = [
  { name: 'Spark', monthlyPrice: 10.50, annualPrice: 108, description: 'For ideation and basic agent building.', features: ['AI Opportunity Finder', 'Basic Shards', 'Smart Prompts', 'Sandbox'], cta: 'Choose Spark', bgColor: 'bg-gray-800', ctaColor: 'bg-[#4AD9D9] text-black' },
  { name: 'Ignite', monthlyPrice: 23, annualPrice: 228, description: 'For building and launching powerful agents.', features: ['Workflow Builder', 'Agent Personality Tuning', 'Reactive Agents', 'Analytics'], cta: 'Choose Ignite', bgColor: 'bg-[#4a42ff]', ctaColor: 'bg-[#FFD700] text-black', popular: true },
  { name: 'Blaze', monthlyPrice: 65, annualPrice: 588, description: 'For scaling with advanced and collaborative tools.', features: ['Multi-Agent Collaboration', 'Live Editing', 'Secure Mode', 'Custom Data Feeds'], cta: 'Choose Blaze', bgColor: 'bg-gray-800', ctaColor: 'bg-[#4AD9D9] text-black' },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <Head>
        <title>Pricing - SideSpark AI</title>
        <meta name="description" content="Choose your plan and start building AI-powered side hustles." />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">Choose Your Spark</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Whether you’re just starting or scaling your AI side hustle, we’ve got a plan for you.</p>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className={`${!isAnnual ? 'text-black dark:text-white' : 'text-gray-500'}`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} className="sr-only peer" />
            <div className="w-14 h-8 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#4a42ff]"></div>
          </label>
          <span className={`${isAnnual ? 'text-black dark:text-white' : 'text-gray-500'}`}>Annual</span>
          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md ml-2">Save 15%</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 flex flex-col relative`}>
              {plan.popular && <div className="absolute top-0 -translate-y-1/2 bg-[#FFD700] text-black px-4 py-1 rounded-full font-bold">Most Popular</div>}
              <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 h-12">{plan.description}</p>
              <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold">${isAnnual ? (plan.annualPrice / 12).toFixed(2) : plan.monthlyPrice.toFixed(2)}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{isAnnual ? `Billed as $${plan.annualPrice} per year` : 'Billed monthly'}</p>
              <ul className="space-y-3 mb-8">
                  {plan.features.map(f => <li key={f} className="flex items-center"><span className="text-[#4AD9D9] mr-3">✓</span> {f}</li>)}
              </ul>
              <button className={`${plan.ctaColor} font-bold py-3 px-6 rounded-lg mt-auto hover:scale-105 transition-transform`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-4xl font-bold text-center mb-8">Full Feature Comparison</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="py-4 px-2 border-b border-gray-200 dark:border-gray-700">Feature</th>
                            <th className="py-4 px-2 text-center border-b border-gray-200 dark:border-gray-700">Spark</th>
                            <th className="py-4 px-2 text-center border-b border-gray-200 dark:border-gray-700">Ignite</th>
                            <th className="py-4 px-2 text-center border-b border-gray-200 dark:border-gray-700">Blaze</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature) => (
                            <tr key={feature.name}>
                                <td className="py-4 px-2 border-b border-gray-100 dark:border-gray-800">{feature.name}</td>
                                <td className="py-4 px-2 text-center border-b border-gray-100 dark:border-gray-800 font-mono text-lg text-[#4AD9D9]">{feature.spark}</td>
                                <td className="py-4 px-2 text-center border-b border-gray-100 dark:border-gray-800 font-mono text-lg text-[#4AD9D9]">{feature.ignite}</td>
                                <td className="py-4 px-2 text-center border-b border-gray-100 dark:border-gray-800 font-mono text-lg text-[#4AD9D9]">{feature.blaze}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </>
  );
}