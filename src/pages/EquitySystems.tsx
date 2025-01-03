import { Scale, Users, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EquitySystems = () => {
  const features = [
    {
      icon: Scale,
      title: "Universal Basic Ownership (UBO)",
      description: "Empowering individuals with a stake in global wealth.",
    },
    {
      icon: Users,
      title: "Worker-Owned Enterprises",
      description: "Democratizing profits through blockchain-powered transparency.",
    },
    {
      icon: Brain,
      title: "AI-Ethical Audits",
      description: "Real-time evaluations of corporate fairness, sustainability, and impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary/5 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Equity-Driven Systems</h1>
        <p className="text-xl mb-12 text-muted-foreground">
          Building a Fairer World for All
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

export default EquitySystems;