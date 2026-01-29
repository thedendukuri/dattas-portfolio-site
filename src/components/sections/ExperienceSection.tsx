import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Operations Specialist",
    company: "NEST",
    location: "Lowell, MA",
    period: "Jan 2023 – Present",
    highlights: [
      "Managed QuickBooks for invoicing, billing, and accounts receivable with 98% accuracy",
      "Developed an Admin Portal using React.js for internal analytics",
      "Achieved 130% revenue growth through donor data management and email automation",
      "Led POS migration to Toast, reducing vendor fees by 15%",
    ],
  },
  {
    title: "Retail Banker I",
    company: "TD Bank",
    location: "Lowell, MA",
    period: "Sep 2024 – Apr 2025",
    highlights: [
      "Managed Salesforce CRM and Odyssey for client portfolio tracking",
      "Cross-sold financial products including credit cards and savings accounts",
      "Handled wire transfers, notarizations, and new account openings",
    ],
  },
  {
    title: "Building Manager",
    company: "University Crossing, UMass Lowell",
    location: "Lowell, MA",
    period: "Sep 2021 – Dec 2022",
    highlights: [
      "Coordinated 50+ campus events and managed facility operations",
      "Led crisis response procedures during emergency situations",
      "Supervised student workers and maintained building security",
    ],
  },
];

const education = [
  {
    degree: "MBA in Finance",
    school: "UMass Lowell",
    status: "In Progress",
    expected: "Expected Dec 2026",
  },
  {
    degree: "Graduate Certificate in Financial Management",
    school: "UMass Lowell",
    status: "Completed",
    expected: "",
  },
  {
    degree: "B.Sc. Business Administration",
    school: "UMass Lowell",
    status: "Completed",
    expected: "MIS & Finance Concentration",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function ExperienceSection() {
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
            Experience & <span className="text-gold">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise in finance, data analytics, and operational excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-6 border-l-2 border-border hover:border-gold transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-gold" />
                  
                  <div className="bg-card rounded-lg p-4 border border-border hover:border-gold/50 transition-colors">
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-gold font-medium">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-gold mt-1.5">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-lg p-5 border border-border hover:border-gold/50 transition-colors"
                >
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-gold">{edu.school}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      edu.status === "In Progress" 
                        ? "bg-gold/20 text-gold" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {edu.status}
                    </span>
                    {edu.expected && (
                      <span className="text-xs text-muted-foreground">{edu.expected}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
