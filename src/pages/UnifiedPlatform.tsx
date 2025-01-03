import { Globe2, Network, Languages } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UnifiedPlatform = () => {
  const features = [
    {
      icon: Network,
      title: "Decentralized Architecture",
      description: "Ensures transparency, security, and fairness.",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Breaking barriers with dynamic translations and cultural adaptability.",
    },
    {
      icon: Globe2,
      title: "Inclusive Access",
      description: "Accessible to everyone, from individuals to global organizations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary/5 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Unified Global Platform</h1>
        <p className="text-xl mb-12 text-muted-foreground">
          Seamless Collaboration Across Borders
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnifiedPlatform;