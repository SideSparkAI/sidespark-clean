// src/app/page.tsx

import Head from 'next/head';
import LandingHero from '@/components/LandingHero';
import FeatureBlurbs from '@/components/FeatureBlurbs';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SideSpark AI ⚡ Launch Your AI-Powered Venture</title>
        <meta name="description" content="Turn your ideas into intelligent, automated tools with SideSpark.ai. No coding, no complexity." />
      </Head>
      
      <LandingHero />
      <FeatureBlurbs />
    </>
  );
}