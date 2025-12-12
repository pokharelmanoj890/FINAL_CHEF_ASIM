import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const workHistory = [
  {
    company: "Nexus Human Resource Pvt Ltd",
    position: "Head Chef (Trainer)",
    location: "Basundhara 3, Kathmandu, Nepal",
    period: "Jul 2023 - Present",
    responsibilities: [
      "Develop a schedule to assess training needs",
      "Conduct employee surveys and interviews",
      "Consult with other trainers, managers, and leadership",
      "Test and review created dishes",
      "Conduct training through new materials",
      "Review employee performance and learning",
      "Conducting pizza, pasta, burger and salad making classes",
    ],
  },
  {
    company: "Hobos Steak House",
    position: "Sous Chef",
    location: "Larnaca, Cyprus",
    period: "Feb 2021 - May 2023",
    responsibilities: [
      "Preparing meals and food to meet the specifications of guests in a timely manner",
      "Ensuring all employees follow set standards, procedures, and sanitation recommendations",
      "Managing kitchen inventory and ensuring supplies are fresh and of high quality",
      "Keeping workstation and kitchen equipment clean, organized and sanitized",
      "Taking charge of kitchen opening, closing and other side duties",
      "Preparing different sauces like Diana (Espagnole) sauce, Bearnaise Sauce (Hollandaise Sauce)",
    ],
  },
  {
    company: "Hobos Steak House",
    position: "Chef de Partie",
    location: "Larnaca, Cyprus",
    period: "Oct 2018 - Feb 2021",
    responsibilities: [
      "Represents the food production on a daily base",
      "Safety training on food handling equipment",
      "Review the daily production sheets with the Sous Chef",
      "Work on all departments and perform all duties directed by Sous Chef",
      "Different pasta making like Southern Comfort pasta, Penne pasta etc.",
    ],
  },
  {
    company: "Ellinadiko Greek Restaurant",
    position: "Sous Chef",
    location: "Protaras, Cyprus",
    period: "Mar 2018 - Oct 2018",
    responsibilities: [
      "Taking charge of kitchen opening, closing and other side duties",
      "Preparation of high quality pizza ingredients: dough, sauces and toppings",
      "Using kitchen equipment such as grills, flambé, oven etc.",
      "Preparing different sea foods and pasta like Lasagne, Fresh pesto pasta, Tortellini al forno, Carbonara, Linguine, Vongole, Moussaka",
    ],
  },
  {
    company: "Marquis De Napa Restaurant",
    position: "Chef De Partie",
    location: "Ayianapa, Cyprus",
    period: "Apr 2017 - Dec 2017",
    responsibilities: [
      "Produce consistent, high quality plates of food",
      "Ensure portion control at all times",
      "Keep the kitchen in a clean and hygienically safe condition",
      "Work in a consistent manner at all times",
      "Assist Chefs and Sous Chefs",
    ],
  },
  {
    company: "Cosmelenia Hotel Apartment",
    position: "Commis I/II",
    location: "Ayianapa, Cyprus",
    period: "Jun 2016 - Dec 2016",
    responsibilities: [
      "Keeping workstation and kitchen equipment clean, organized and sanitized",
      "Guiding Commis III and Trainee about their duties and responsibilities",
      "Coordinating with seniors and juniors for events",
      "Tagging food, cutting, cleaning, time management, stock management",
    ],
  },
];

export function WorkHistorySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="experience"
      className={cn(
        "py-28 relative overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Career Journey</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Over a decade of culinary excellence across international kitchens
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workHistory.map((job, index) => (
            <div key={`${job.company}-${job.position}`} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== workHistory.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 hover:shadow-elevated transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">
                      {job.position}
                    </h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
