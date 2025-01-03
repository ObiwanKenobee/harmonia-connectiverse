import { Button } from "@/components/ui/button";

export const JoinSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Nexus Movement</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg hover:bg-white/50 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Volunteer Your Skills</h3>
            <p className="mb-4 text-gray-600">Collaborate with changemakers worldwide.</p>
            <Button variant="outline" className="hover:bg-primary hover:text-white">
              Get Started
            </Button>
          </div>
          <div className="p-6 rounded-lg hover:bg-white/50 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Innovate with Us</h3>
            <p className="mb-4 text-gray-600">Bring your ideas to life within our open-source platform.</p>
            <Button variant="outline" className="hover:bg-primary hover:text-white">
              Share Ideas
            </Button>
          </div>
          <div className="p-6 rounded-lg hover:bg-white/50 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Contribute</h3>
            <p className="mb-4 text-gray-600">Support projects that build equity and sustainability for all.</p>
            <Button variant="outline" className="hover:bg-primary hover:text-white">
              Support Now
            </Button>
          </div>
        </div>
        <p className="mt-12 text-xl font-medium text-primary">
          Harmonia Nexus: Where Humanity and Planet Thrive Together
        </p>
      </div>
    </section>
  );
};