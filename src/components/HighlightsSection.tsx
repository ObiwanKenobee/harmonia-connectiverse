import { Zap, BarChart2, UserCircle } from "lucide-react";

export const HighlightsSection = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Seamless Access",
      description: "Experience an intuitive design that lets you navigate effortlessly between learning, collaborating, and taking action.",
    },
    {
      icon: BarChart2,
      title: "Interactive Visuals",
      description: "Real-time data on sustainability metrics, simulations of equitable resource distribution, and blockchain-powered transparency visualizations.",
    },
    {
      icon: UserCircle,
      title: "Personalized Engagement",
      description: "AI-powered dashboards tailored to your contributions and interests, with notifications for initiatives aligned with your passions.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simplistic Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
              <highlight.icon className="w-12 h-12 mx-auto mb-4 text-teal" />
              <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};