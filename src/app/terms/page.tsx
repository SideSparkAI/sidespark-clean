// src/app/terms/page.tsx

"use client";

import Head from 'next/head';
import Link from 'next/link';

export default function TermsPage() {
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
        <title>Terms of Service - SideSpark AI</title>
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">Terms of Service</h1>

          <Section title="OVERVIEW">
            <p>This website is operated by SideSpark AI. Throughout the site, the terms "we", "us" and "our" refer to SideSpark AI. SideSpark AI offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
            <p>By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”). These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
            <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services.</p>
            <p>Any new features or tools which are added to the current service shall also be subject to the Terms of Service. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.</p>
          </Section>

          <Section title="SECTION 1 - GENERAL CONDITIONS">
            <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
            <p>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>
            <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
          </Section>
          
          {/* ... Other sections as previously defined ... */}

           <Section title="SECTION 6 - PERSONAL INFORMATION">
             <p>Your submission of personal information is governed by our Privacy Policy. Please see our <Link href="/privacy" className="text-[#4a42ff] underline">Privacy Policy</Link>.</p>
          </Section>

          <Section title="SECTION 7 - PROHIBITED USES">
            <p>You are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service. We reserve the right to terminate your use of the Service for violating any of the prohibited uses.</p>
          </Section>
        </div>
      </div>
    </>
  );
}