import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full animate-float animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border border-accent/30 rounded-full animate-float"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary-glow">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Available for AI Innovation Roles</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gradient-primary">AI Builder.</span><br />
          <span className="text-gradient-accent">Hacker.</span><br />
          <span className="text-foreground">Visionary.</span><br />
          <span className="text-gradient-primary">Storyteller.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Exploring how AI reshapes business, content, and culture. Ready to scale AI innovation at VaynerMedia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#vision" 
            className="btn-hero group"
          >
            Why I'm the right fit for VaynerMedia
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#projects" 
            className="btn-hero-outline"
          >
            View My AI Projects
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;