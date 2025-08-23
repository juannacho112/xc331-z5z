import { Lightbulb, Users, Rocket, Heart } from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Lightbulb,
      title: "Democratize AI Content Tools",
      description: "VaynerMedia can lead by offering AI-powered ad creation, landing page generators, and video tools that eliminate excuses and empower creators at every level."
    },
    {
      icon: Users,
      title: "Empower VeeFriends Community",
      description: "Provide free or accessible AI tools to VeeFriends holders and fans, creating value-first experiences that strengthen community bonds and showcase AI potential."
    },
    {
      icon: Rocket,
      title: "Scale Value First, Monetize Later",
      description: "Following Gary's philosophy, focus on delivering massive value through AI innovation before building revenue streams - trust that monetization follows utility."
    },
    {
      icon: Heart,
      title: "AI as Storytelling Leverage",
      description: "Use AI not to replace human creativity, but to amplify storytelling at unprecedented scale while maintaining authentic voice and emotional connection."
    }
  ];

  return (
    <section id="vision" className="section-padding bg-gradient-to-br from-surface/50 to-background">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-gradient-accent">Vision for AI</span> at <span className="text-gradient-primary">VaynerMedia</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          How we can democratize AI content creation and build the future of storytelling at scale
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-8">
          {visionPoints.map((point, index) => (
            <div key={index} className="card-elevated group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:sticky lg:top-20">
          <div className="card-feature text-center p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
              "Scale value first, monetize later"
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Gary's philosophy perfectly aligns with AI's potential. By democratizing content creation tools, 
              we eliminate excuses and empower every creator to build their audience at scale.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <span className="text-sm text-muted-foreground">AI Ad Generators</span>
                <span className="text-primary font-medium">Instant Creation</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                <span className="text-sm text-muted-foreground">Landing Page Tools</span>
                <span className="text-accent font-medium">Zero Code Required</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <span className="text-sm text-muted-foreground">Video Pipelines</span>
                <span className="text-primary font-medium">Scale Storytelling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="text-center">
        <div className="max-w-4xl mx-auto p-8 bg-card/30 border border-primary/20 rounded-3xl backdrop-blur-sm">
          <blockquote className="text-2xl md:text-3xl font-bold text-gradient-primary mb-4">
            "AI isn't about replacing humans—it's about giving every human superpowers to tell their story at scale."
          </blockquote>
          <p className="text-muted-foreground">
            This is how VaynerMedia can lead the AI revolution in content and community building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;