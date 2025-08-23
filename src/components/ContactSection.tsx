import { Mail, Linkedin, ArrowRight, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-t from-surface to-background">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent mb-8">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">Ready to Build the Future</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gradient-primary">AI is moving fast.</span><br />
          <span className="text-gradient-accent">I move faster.</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Let's build the future of content with AI — together. Ready to scale innovation at VaynerMedia.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="card-feature text-center p-12">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-8 animate-float">
            <Mail className="w-12 h-12 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-muted-foreground mb-8">
            Ready to discuss how AI can transform VaynerMedia's content strategy and empower creators worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:your.email@gmail.com" 
              className="btn-hero group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero-outline group"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-card-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Available</div>
              <div className="text-sm text-muted-foreground">Immediate Start</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Remote/NYC</div>
              <div className="text-sm text-muted-foreground">Location Flexible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Full-Time</div>
              <div className="text-sm text-muted-foreground">Commitment Level</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-card-border text-center">
        <p className="text-muted-foreground text-sm">
          Built with AI tools, designed for human connection. Portfolio created with Lovable.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;