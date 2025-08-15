// src/components/FeatureBlurbs.tsx

const features = [
  { emoji: '🧩', title: 'Modular Shards', description: 'Build with smart, stackable blocks. Each Shard has a unique skill and personality.' },
  { emoji: '🔁', title: 'Workflow Magic', description: 'Visually connect Shards to create powerful, automated workflows in minutes.' },
  { emoji: '🎮', title: 'Gamified Growth', description: 'Earn badges, level up your skills, and define your unique creator style as you build.' },
];

export default function FeatureBlurbs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            // Card with hover effect
            <div 
              key={feature.title} 
              className="bg-gradient-to-br from-gray-900 to-spark-dark border border-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:border-spark-indigo hover:shadow-2xl hover:shadow-spark-indigo/20 hover:-translate-y-2"
            >
              <p className="text-5xl mb-4">{feature.emoji}</p>
              <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}