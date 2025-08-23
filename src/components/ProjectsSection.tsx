import { ExternalLink, Github, Play, Award } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "VeeFriends Multiplayer Game Demo",
      description: "Interactive game built with AI-generated art assets, showcasing creative AI applications for fan engagement and community building.",
      tags: ["Game Development", "AI Art", "Community Building"],
      type: "Creative AI",
      impact: "Demonstrates AI's potential for fan experiences"
    },
    {
      title: "Self-Hosted Stable Diffusion & ComfyUI",
      description: "Complete AI image and video generation pipeline running locally with custom workflows for content creation at scale.",
      tags: ["Stable Diffusion", "ComfyUI", "Video Pipelines"],
      type: "Infrastructure",
      impact: "Full control over AI content generation"
    },
    {
      title: "AWS Cloud AI Deployments",
      description: "Production-ready AI applications deployed on AWS infrastructure using S3, CloudFront, and EC2 for scalable solutions.",
      tags: ["AWS", "S3", "CloudFront", "EC2"],
      type: "Cloud Infrastructure",
      impact: "Scalable AI deployment expertise"
    },
    {
      title: "AI Business Automation Systems",
      description: "End-to-end automation solutions for small businesses using GoHighLevel, including AI-powered landing pages and marketing flows.",
      tags: ["GoHighLevel", "Automation", "Marketing"],
      type: "Business Solutions",
      impact: "Real ROI for clients through AI"
    },
    {
      title: "NFT Journey - Early Web3 Success",
      description: "Successfully executed early NFT opportunities following Gary's strategic advice, proving ability to identify and capitalize on emerging trends.",
      tags: ["NFTs", "Web3", "Strategy"],
      type: "Strategic Execution",
      impact: "Proven execution on emerging opportunities"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-gradient-primary">Featured Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real-world AI implementations spanning creative applications, infrastructure, and business solutions
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card-feature group relative overflow-hidden">
            {/* Project Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50"></div>
              <Play className="w-12 h-12 text-primary/70 relative z-10" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                {project.type}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold group-hover:text-gradient-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-card-border">
                <div className="flex items-center gap-2 text-accent">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.impact}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group/btn">
                    <Github className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group/btn">
                    <ExternalLink className="w-4 h-4 text-accent group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "AI Models Deployed", value: "15+" },
          { label: "Business Automations", value: "8" },
          { label: "Cloud Projects", value: "12" },
          { label: "Creative AI Apps", value: "6" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-gradient-accent mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;