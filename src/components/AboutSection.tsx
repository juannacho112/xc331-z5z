import { Code, Zap, Target, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "CS Background + Hacker Roots",
      description: "Passionate about AI since college with hands-on hobbyist experience"
    },
    {
      icon: Zap,
      title: "AI for Business & Creativity",
      description: "Building tools that scale content, automate marketing, and empower creators"
    },
    {
      icon: Target,
      title: "NFT Success Following Gary's Advice",
      description: "Proved execution skills by capitalizing on early Web3 opportunities"
    },
    {
      icon: TrendingUp,
      title: "VaynerMedia Vision",
      description: "Believe in scaling AI tools for creators, brands, and fan communities"
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-gradient-primary">Personal Story</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From CS student to AI innovator, driven by the potential to democratize technology
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="text-xl font-medium text-gradient-primary">
              Started with computers in college. Got hooked on AI. Never looked back.
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I build AI stuff for fun and business. Self-hosted models, marketing automation, 
              creative tools - you name it.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Followed Gary's NFT advice early. Made it work. That's how I operate - 
              <span className="text-foreground font-medium">spot opportunities, execute fast.</span>
            </p>
            
            <div className="text-lg text-foreground border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
              VaynerMedia + AI = the future of content creation at scale.
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="card-elevated group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;