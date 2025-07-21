import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love building useful things and tackling complex challenges"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to pick up new technologies and adapt to changing requirements"
    },
    {
      icon: Code,
      title: "Quality Focused",
      description: "I care about writing clean, maintainable code that stands the test of time"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Always open to feedback and collaboration to achieve the best results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main description */}
          <Card className="gradient-card shadow-card hover-lift mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <p className="text-lg md:text-xl leading-relaxed text-center">
                I love building useful things — whether it's AI-powered tools, full-stack web apps, 
                or internal platforms that help teams work better. I'm quick to pick up new tech, 
                care about quality, and always open to feedback. I enjoy solving problems, 
                simplifying chaos, and quietly making things better.
              </p>
            </CardContent>
          </Card>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-soft hover-lift animate-fade-in-up" 
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;