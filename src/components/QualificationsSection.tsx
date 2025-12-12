import { GraduationCap, Award, Wrench, User, Trophy, BookOpen, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const qualifications = [
  {
    institution: "InterNapa College",
    degree: "Bachelor of Arts",
    field: "Hospitality and Tourism Management",
    location: "Ayanapa, Sotira, Cyprus",
    period: "2015 - 2019",
  },
  {
    institution: "New Millennium Academy",
    degree: "Higher Secondary Education",
    field: "Management",
    location: "Kathmandu, Nepal",
    period: "2007 - 2009",
  },
  {
    institution: "Shree Adarsha Higher Secondary School",
    degree: "Secondary Level",
    field: "",
    location: "Arghakhanchi, Nepal",
    period: "2007",
  },
];

const technicalSkills = [
  "Culinary Techniques",
  "Food Safety and Sanitation",
  "Menu Development",
  "Kitchen Equipment Proficiency",
  "Inventory and Cost Control",
  "Computer Skills",
];

const personalSkills = [
  "Communication",
  "Interpersonal Skills",
  "Leadership",
  "Multitasking",
  "Adaptability",
  "Work Under Pressure",
  "Problem Solving",
  "Personal Sanitation",
  "Punctual",
];

const training = [
  {
    title: "Restaurant Supervisor",
    year: "2012",
    institution: "International Tourism Development & Hotel Management Training P.Ltd., Kathmandu, Nepal",
  },
  {
    title: "Computer Accounting Package",
    year: "2011",
    institution: "CEI Computers, Butwal-6, Rupendehi, Nepal",
  },
  {
    title: "Casino",
    year: "2010",
    institution: "The Everest Hotel, Kathmandu, Nepal",
  },
];

const achievements = [
  {
    title: "Certificate of Appreciation",
    year: "2017",
    description: "For volunteering time and effort in the organization of the Culinary Arts Event in Inter Napa College",
  },
];

export function QualificationsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="qualifications"
      className={cn(
        "py-28 bg-muted/30 relative overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--secondary)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
            <GraduationCap className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium text-sm">Credentials</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Qualifications & <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A blend of formal education, professional training, and hands-on expertise
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            Education
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {qualifications.map((qual) => (
              <div
                key={qual.institution}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{qual.degree}</h4>
                {qual.field && <p className="text-primary text-sm mb-2">{qual.field}</p>}
                <p className="text-muted-foreground text-sm mb-3">{qual.institution}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {qual.location}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Calendar className="w-3 h-3" />
                  {qual.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Technical Skills */}
          <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Skills */}
          <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-secondary" />
              </div>
              Personal Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {personalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Training & Achievements */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Training */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              Professional Training
            </h3>
            <div className="space-y-4">
              {training.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 hover:shadow-elevated transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.institution}</p>
                    </div>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-secondary" />
              </div>
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-6 shadow-soft border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <span className="text-xs text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
