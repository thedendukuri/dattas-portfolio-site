import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Code, ChevronDown, ChevronUp } from "lucide-react";

const financeProjects = [
  {
    title: "JP Morgan Investment Banking Simulation",
    description: "Comprehensive virtual internship experience focusing on M&A advisory and valuation",
    details: "Performed DCF valuations, comparable company analysis, and developed pitch presentations for potential M&A transactions. Created detailed financial models and executive summaries.",
    technologies: ["Excel", "PowerPoint", "Financial Modeling", "DCF"],
  },
  {
    title: "Monthly Variance Analysis",
    description: "Budget variance analysis framework for cost control and performance tracking",
    details: "Developed automated variance analysis reports comparing actual vs. budgeted expenses. Identified cost overruns and provided actionable recommendations for departmental spending.",
    technologies: ["Excel", "PivotTables", "VBA", "Financial Reporting"],
  },
  {
    title: "QuickBooks Integration & Standardization",
    description: "Streamlined invoicing and billing processes for operational efficiency",
    details: "Implemented standardized invoice templates and billing workflows in QuickBooks. Reduced invoice processing time by 40% and improved accounts receivable accuracy to 98%.",
    technologies: ["QuickBooks", "Process Automation", "AR Management"],
  },
];

const technicalProjects = [
  {
    title: "Sales Data Validation & Automation",
    description: "Python automation for donor reports and email receipt generation",
    details: "Built automated data validation pipelines using Python to verify donor records and generate personalized email receipts. Integrated with existing CRM systems for seamless data flow.",
    technologies: ["Python", "Pandas", "Automation", "Data Validation"],
  },
  {
    title: "Prthvi E-Commerce Platform",
    description: "Full-stack e-commerce website development using React.js",
    details: "Developed a responsive e-commerce platform with product catalog, shopping cart, and checkout functionality. Implemented user authentication and order management features.",
    technologies: ["React.js", "JavaScript", "CSS", "E-commerce"],
  },
  {
    title: "POS System Migration to Toast",
    description: "Led point-of-sale migration reducing vendor fees by 15%",
    details: "Managed the complete migration from legacy POS to Toast platform. Conducted vendor analysis, negotiated pricing, and coordinated staff training for smooth transition.",
    technologies: ["Toast POS", "Project Management", "Vendor Negotiation"],
  },
  {
    title: "DoorDash Operations Analytics",
    description: "Channel performance analytics and pricing optimization",
    details: "Analyzed delivery channel performance data to optimize pricing strategies. Developed dashboards to track order volumes, delivery times, and customer satisfaction metrics.",
    technologies: ["Data Analytics", "Excel", "Pricing Strategy"],
  },
  {
    title: "Q4 Sales Analysis",
    description: "SQL-based transactional data insights for quarterly reporting",
    details: "Created complex SQL queries to extract and analyze Q4 transactional data. Generated insights on sales trends, customer segments, and product performance for executive reporting.",
    technologies: ["SQL", "Data Analysis", "Business Intelligence"],
  },
];

interface ProjectCardProps {
  project: typeof financeProjects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-lg border border-border hover:border-gold/50 transition-colors overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">{project.title}</h4>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gold shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border"
          >
            <div className="p-4 pt-3">
              <p className="text-sm text-muted-foreground mb-3">{project.details}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="snap-section relative flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of finance and technical projects demonstrating analytical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Finance Projects */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Finance Projects</h3>
            </div>
            <div className="space-y-4">
              {financeProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Analytics & Technical</h3>
            </div>
            <div className="space-y-4">
              {technicalProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
