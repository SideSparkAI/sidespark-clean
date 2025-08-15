// src/components/OnboardingModals.tsx
"use client";
import { useState } from 'react';

const steps = [
  { emoji: '🌟', title: 'Welcome to the Buildverse!', description: "This is your creative sandbox. Here, you'll bring your AI ideas to life." },
  { emoji: '💡', title: 'Meet the Shards', description: 'Shards are smart blocks that perform specific tasks. Chain them together to create powerful workflows.' },
  { emoji: '🔥', title: 'Spark Your First Idea', description: "Don't know what to build? The Idea Finder will give you personalized suggestions based on your passions." },
  { emoji: '🏆', title: 'Earn Badges as You Go', description: 'As you build and launch, you’ll earn badges to show off your creator style. Let’s get started!' },
];

export default function OnboardingModals() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const currentStep = steps[step];

  return (
    // Backdrop with blur effect
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      {/* Modal Card with glowing border */}
      <div className="relative w-full max-w-md bg-gray-900/80 border border-spark-indigo/50 rounded-2xl shadow-2xl shadow-spark-indigo/20 text-center p-8">
        
        <p className="text-6xl mb-4">{currentStep.emoji}</p>
        
        <h2 className="text-3xl font-bold text-white mb-2">{currentStep.title}</h2>
        
        <p className="text-gray-300 mb-8">{currentStep.description}</p>
        
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === step ? 'bg-spark-teal scale-125' : 'bg-gray-600'}`}
            />
          ))}
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setIsOpen(false)} // Or a skip function
            className="flex-1 bg-gray-700/50 text-gray-300 font-bold py-3 rounded-full transition-colors hover:bg-gray-700"
          >
            Skip
          </button>
          
          {step < steps.length - 1 ? (
            <button 
              onClick={() => setStep(step + 1)}
              className="flex-1 bg-spark-indigo text-white font-bold py-3 rounded-full shadow-lg shadow-spark-indigo/30 transition-transform hover:scale-105"
            >
              Next
            </button>
          ) : (
            <button 
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-spark-teal text-spark-dark font-bold py-3 rounded-full shadow-lg shadow-spark-teal/30 transition-transform hover:scale-105"
            >
              Let's Build!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}