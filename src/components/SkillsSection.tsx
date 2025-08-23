import { Brain, Cloud, Palette, Cpu, Zap, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI Tools & No-Code",
      skills: ["Cursor", "Lovable", "GoHighLevel", "Automation Tools"],
      color: "primary"
    },
    {
      icon: Palette,
      title: "Generative AI",
      skills: ["Midjourney", "Stable Diffusion (Self-hosted)", "ComfyUI Video Pipelines"],
      color: "accent"
    },
    {
      icon: Cpu,
      title: "Custom AI Hosting",
      skills: ["Self-hosted Models", "OpenUI Chat", "Internet-accessible Deployments"],
      color: "primary"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      skills: ["AWS S3", "CloudFront", "EC2", "Hobby Project Deployments"],
      color: "accent"
    },
    {
      icon: Zap,
      title: "Business Applications",
      skills: ["Marketing Automation", "Landing Page Generators", "Content Scaling", "Ad Generators"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Experimentation",
      skills: ["Google/OpenAI/Anthropic Models", "MCP Servers", "VeeFriends Game Development"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-gradient-accent">Skills & Knowledge</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive AI expertise spanning development, deployment, and business applications
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="card-feature group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform
              ${category.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'}`}>
              <category.icon className={`w-7 h-7 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
            </div>
            
            <h3 className="text-xl font-bold mb-4 group-hover:text-gradient-primary transition-colors">
              {category.title}
            </h3>
            
            <ul className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${category.color === 'primary' ? 'bg-primary' : 'bg-accent'}`}></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Achievement Banner */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-card/50 border border-primary/30 rounded-2xl backdrop-blur-sm">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-primary/50"></div>
            <div className="w-8 h-8 bg-accent/20 rounded-full border-2 border-accent/50"></div>
            <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-primary/50"></div>
          </div>
          <span className="text-foreground font-medium">Continuously exploring and comparing cutting-edge AI models</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;