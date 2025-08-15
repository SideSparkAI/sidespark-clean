// src/app/contact/page.tsx

"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xyzplyyg");

  if (state.succeeded) {
    return (
        <div className="flex flex-col items-center justify-center flex-grow text-center p-8">
            <h1 className="text-4xl font-bold text-[#4AD9D9]">Thanks for your message!</h1>
            <p className="text-lg mt-4">We'll get back to you soon.</p>
            <Link href="/" className="mt-8 bg-[#4a42ff] hover:bg-[#FFD700] text-white hover:text-black font-bold py-3 px-6 rounded-full text-lg transition-all duration-300">
              Back to Home
            </Link>
        </div>
    );
  }

  return (
    <>
       <Head>
        <title>Contact - SideSpark AI</title>
        <meta name="description" content="Get in touch with the SideSpark.ai team." />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">Have a question or feedback? We'd love to hear from you.</p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text" 
                name="name"
                required
                className="block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-[#4AD9D9] focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                required
                className="block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-[#4AD9D9] focus:outline-none"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-[#4AD9D9] focus:outline-none"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            
            <div>
              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-[#4a42ff] hover:bg-[#FFD700] text-white hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}