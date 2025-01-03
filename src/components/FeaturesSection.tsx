import { Globe2, Brain, HandshakeIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Globe2,
      title: "Global Harmony Framework",
      description: "Explore how ancient wisdom and cutting-edge technology drive equitable growth and planetary stewardship.",
    },
    {
      icon: Brain,
      title: "Nexus AI in Action",
      description: "See how AI democratizes resources, fosters creativity, and powers sustainability.",
    },
    {
      icon: HandshakeIcon,
      title: "Economic Equity Reimagined",
      description: "Dive into systems like Universal Basic Ownership (UBO) and worker-owned enterprises.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          A Glimpse into Harmonia Nexus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:scale-105 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};