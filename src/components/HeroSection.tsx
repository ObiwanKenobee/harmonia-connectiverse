import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-b from-primary/10 to-transparent">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
        Harmonia Nexus
      </h1>
      <p className="text-2xl md:text-3xl mb-4 text-primary/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Universal Harmony, One Connection at a Time
      </p>
      <p className="max-w-2xl text-lg mb-8 text-gray-600 animate-fade-up" style={{ animationDelay: "0.4s" }}>
        Discover a new paradigm where equity, sustainability, and innovation are more than ideals—they're a way of life.
      </p>
      <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
        <Button className="bg-primary hover:bg-primary/90">Explore the Vision</Button>
        <Button className="bg-secondary hover:bg-secondary/90">Join the Movement</Button>
        <Button className="bg-teal hover:bg-teal/90">Take Action</Button>
      </div>
    </section>
  );
};