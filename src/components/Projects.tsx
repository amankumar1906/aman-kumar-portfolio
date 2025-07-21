import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "ApplyRight",
      subtitle: "AI Resume Optimizer",
      period: "Mar – Jun 2025",
      description: "Full-stack application using FastAPI + React + Redpanda Kafka + OpenAI/Gemini APIs. Features custom RAG pipeline with DOCX export and intelligent skill scoring to help job seekers optimize their resumes.",
      technologies: ["FastAPI", "React", "Kafka", "OpenAI API", "Gemini", "RAG", "DOCX"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Car-O-Pedia",
      subtitle: "Airbnb for Cars",
      period: "Jan – Mar 2024",
      description: "Built a complete car rental platform with React + Spring Boot featuring an admin panel, Stripe payment integration, and MongoDB database. Implemented UX-driven refinements based on user feedback.",
      technologies: ["React", "Spring Boot", "MongoDB", "Stripe", "Admin Panel"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`gradient-card shadow-card hover-lift transition-smooth group ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                        {project.title}
                        {project.featured && (
                          <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary mb-2">{project.subtitle}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="hover-lift"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover-glow" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="hover-glow shadow-soft" 
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-glow" 
              asChild
            >
              <a href="https://github.com/amankumar1906" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;