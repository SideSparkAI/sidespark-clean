// src/components/LandingHero.tsx

export default function LandingHero() {
  return (
    <section className="w-full py-20 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-spark-teal to-spark-yellow text-transparent bg-clip-text animate-gradient-x"
        >
          Not Sure What to Build?
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Take our quiz to find your perfect AI side hustle. Let your curiosity lead the way.
        </p>
        <button 
          className="bg-spark-indigo text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg shadow-spark-indigo/30 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-spark-indigo/50"
        >
          Spark Your First Idea
        </button>
      </div>
    </section>
  );
}