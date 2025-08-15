// src/app/page.tsx

"use client";

import { useState } from 'react';
import Head from 'next/head';
import { createClient } from '../../utils/supabaseClient';

interface QuizQuestion {
  section: string;
  question: string;
  options: string[];
  allowOther?: boolean;
}

const quizQuestions: QuizQuestion[] = [
    { section: 'Motivation & Goals', question: "What's your main reason for wanting to build an AI agent?", options: ['Automate boring tasks', 'Start a side hustle', 'Solve a personal problem', 'Just curious to explore'] },
    { section: 'Motivation & Goals', question: 'How soon do you want results from your agent?', options: ['Immediately — I need impact now', 'Within a few weeks', 'I’m in it for the long haul', 'No rush, just experimenting'] },
    { section: 'Motivation & Goals', question: 'What kind of value do you want your agent to deliver?', options: ['Save me time', 'Make me money', 'Help others', 'Entertain or inspire'], allowOther: true },
    { section: 'Personality & Style', question: 'How do you usually approach new projects?', options: ['Dive in headfirst', 'Plan everything meticulously', 'Tinker and iterate', 'Wait until inspiration strikes'] },
    { section: 'Personality & Style', question: 'Which of these best describes your vibe?', options: ['Visionary', 'Hacker', 'Helper', 'Creator', 'Strategist'] },
    { section: 'Personality & Style', question: 'How comfortable are you with tech?', options: ['I write code', 'I can tweak things', 'I prefer plug-and-play', 'I avoid tech when I can'] },
    { section: 'Interests & Domains', question: 'Which area excites you most?', options: ['Productivity & automation', 'E-commerce & marketing', 'Education & learning', 'Mental health & wellness', 'Creative writing & storytelling'], allowOther: true },
    { section: 'Interests & Domains', question: 'If your agent could do one thing perfectly, what would it be?', options: ['Write content', 'Analyze data', 'Talk to users', 'Make decisions', 'Manage tasks'] },
    { section: 'Interests & Domains', question: "What kind of users do you imagine your agent serving?", options: ['Just me', 'My team', 'My customers', 'The general public'] },
    { section: 'Risk & Commitment', question: 'How much time are you willing to invest in building this?', options: ['A few hours', 'A weekend', 'A few weeks', 'Ongoing project'] },
    { section: 'Risk & Commitment', question: 'How much are you willing to invest in your agent idea?', options: ['I’m looking for free or low-cost tools', 'I can spend a little to get started', 'I’m ready to invest if it works', 'I have a budget and want to go big'] },
    { section: 'Risk & Commitment', question: 'Would you be open to monetizing your agent?', options: ['Absolutely', 'Maybe later', 'Not interested', 'Depends on how useful it becomes'] },
    { section: 'Risk & Commitment', question: 'How do you feel about sharing your agent publicly?', options: ['Excited to show it off', 'Nervous but curious', 'Prefer to keep it private', 'Not sure yet'] },
    { section: 'Bonus Personality Spark', question: 'Which quote resonates most with you?', options: ['“Move fast and break things.”', '“Measure twice, cut once.”', '“Build what you want to see in the world.”', '“Keep it simple, stupid.”'] },
    { section: 'Bonus Personality Spark', question: 'What’s your ideal working style?', options: ['Solo creator', 'Collaborator', 'Delegator', 'Explorer'] },
    { section: 'Bonus Personality Spark', question: 'If your agent had a personality, what should it be?', options: ['Bold and opinionated', 'Calm and supportive', 'Witty and clever', 'Efficient and silent'] },
];

export default function CombinedHomePage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherAnswer, setOtherAnswer] = useState("");

  const handleGoogleLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const handleAnswer = (option: string) => {
    setAnswers([...answers, option]);
    setIsOtherSelected(false);
    setOtherAnswer("");
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const getSuggestions = () => {
    if (answers.includes('E-commerce & marketing')) return ['SEO Keyword Agent', 'Ad Copy Generator'];
    if (answers.includes('Creative writing & storytelling')) return ['Story Outline Generator', 'Character Creator'];
    return ['Task Automation Agent', 'Meeting Summarizer'];
  };
  
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <>
      <Head>
        <title>SideSpark AI ⚡ Launch Your AI-Powered Venture</title>
      </Head>
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8 transition-all duration-500">
        <div className="w-full max-w-3xl text-center">
          {!quizStarted ? (
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Not Sure What to Build?</h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">Take our quiz to find your perfect AI side hustle.</p>
              <button
                onClick={() => setQuizStarted(true)}
                className="bg-[#4a42ff] hover:bg-[#FFD700] text-white hover:text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Take the Quiz
              </button>
            </div>
          ) : !showResults ? (
            <div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                  <div className="bg-[#4AD9D9] h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                </div>
                <p className="text-[#FFD700] font-bold text-lg mb-2">{quizQuestions[currentQuestionIndex].section}</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 min-h-[6rem]">{quizQuestions[currentQuestionIndex].question}</h2>
              
              {!isOtherSelected ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quizQuestions[currentQuestionIndex].options.map((option) => (
                    <button key={option} onClick={() => handleAnswer(option)}
                      className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg text-lg text-left font-semibold hover:bg-[#4a42ff] border-2 border-gray-200 dark:border-gray-700 hover:border-[#4AD9D9] transition-all transform hover:scale-105">
                      {option}
                    </button>
                  ))}
                  {quizQuestions[currentQuestionIndex].allowOther && (
                    <button onClick={() => setIsOtherSelected(true)}
                      className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg text-lg text-left font-semibold hover:bg-[#4a42ff] border-2 border-gray-200 dark:border-gray-700 hover:border-[#4AD9D9] transition-all transform hover:scale-105">
                      Other...
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                    <input 
                      type="text"
                      value={otherAnswer}
                      onChange={(e) => setOtherAnswer(e.target.value)}
                      placeholder="Type your answer here"
                      className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-[#4AD9D9] focus:outline-none"
                    />
                    <button
                      onClick={() => handleAnswer(otherAnswer)}
                      disabled={!otherAnswer.trim()}
                      className="bg-[#4a42ff] hover:bg-[#FFD700] text-white hover:text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                      Submit
                    </button>
                </div>
              )}
                <p className="text-center text-gray-500 mt-8">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
            </div>
          ) : (
             <div>
              <h2 className="text-4xl font-bold mb-4">You're a natural born <span className='text-[#FFD700]'>Creator</span>!</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Based on your answers, we've identified the perfect agent for you.</p>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl my-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-[#4AD9D9]">Your Recommended Agent Idea:</h3>
                <p className="text-3xl my-4 font-bold">{getSuggestions()[0]}</p>
                <p className="text-gray-500">And we have another tailored idea waiting for you.</p>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Sign up to unlock your full results and start building for free.</p>
              <button 
                onClick={handleGoogleLogin}
                className="bg-[#4a42ff] hover:bg-[#FFD700] text-white hover:text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Sign Up & See Results
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}