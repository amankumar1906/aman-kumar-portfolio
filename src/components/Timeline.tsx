import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Timeline = () => {
  const experiences = [
    {
      company: "Diamond Diagnostics",
      role: "Full Stack Developer",
      period: "Aug 2023 – Current",
      location: "Remote",
      description: "Migrated AngularJS to Angular for a unified ERP/CRM, used AWS Lambda/S3, Redis caching, and Elastic Beanstalk.",
      technologies: ["Angular", "AWS Lambda", "S3", "Redis", "Elastic Beanstalk"],
      current: true
    },
    {
      company: "Venu",
      role: "AI Software Engineer",
      period: "Aug 2023 – May 2024",
      location: "Remote",
      description: "Built cross-platform app with React Native and a smart chatbot using AWS Bedrock and Google Places API. Led backend optimization using Java + Spring Boot.",
      technologies: ["React Native", "AWS Bedrock", "Google Places API", "Java", "Spring Boot"],
      current: false
    },
    {
      company: "READY.NET",
      role: "Software Engineer Intern",
      period: "May 2023 – Aug 2023",
      location: "Remote",
      description: "Refactored AntD components with TypeScript, boosting UI dev speed and testability.",
      technologies: ["TypeScript", "Ant Design", "React"],
      current: false
    },
    {
      company: "PAYBACK India",
      role: "Backend Intern",
      period: "Jun 2021 – Aug 2021",
      location: "Remote",
      description: "Improved MySQL performance, built secure REST APIs in Spring Boot.",
      technologies: ["MySQL", "Spring Boot", "REST APIs"],
      current: false
    }
  ];

  return (
    <section id="timeline" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Professional Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 flex items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 shadow-glow z-10"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card 
                    className={`gradient-card shadow-card hover-lift animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold flex items-center gap-2">
                            <Building className="h-5 w-5 text-primary" />
                            {exp.company}
                            {exp.current && (
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                Current
                              </Badge>
                            )}
                          </CardTitle>
                          <p className="text-lg font-semibold text-primary mt-1">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="hover-lift"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;