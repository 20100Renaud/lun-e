import { motion } from "framer-motion";
import {
  Sprout,
  Music4,
  BriefcaseBusiness,
  Globe,
  Monitor,
  Smartphone,
  ExternalLink,
  LayoutGrid,
  Compass,
} from "lucide-react";

import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const projects = [
  {
    title: "Eqcaetio",
    responsive: ["desktop", "mobile"],
    category: "Site internet",
    status: "completed",
    url: "https://eqcaetio.github.io/eqcaetio/",
    icon: Globe,
    description:
      "Page professionnelle présentant l'activité, les contacts et des informations sur le metier de Marilyne JOBERT.",
  },

  {
    title: "Du croquis à l'œuvre",
    responsive: ["desktop", "mobile"],
    category: "Portfolio",
    status: "completed",
    url: "https://20100renaud.github.io/du_croquis_a_l_oeuvre/",
    icon: LayoutGrid,
    description:
      "Book intéractif premettant de partager des créations artistiques avec des proches ou des clients. La version modile et bureau offrent deux expériences distinctes.",
  },

  {
    title: "MileStone",
    responsive: ["mobile"],
    category: "Application mobile",
    status: "completed",
    url: "https://20100renaud.github.io/Milestone/",
    icon: Compass,
    description:
      "Tracker gps permettant le suivis d'un parcours et de créer des points d'intérets avec une précision de 10 m environ.",
  },

  {
    title: "Partisong",
    responsive: ["desktop"],
    category: "Application Web",
    status: "completed",
    url: "https://20100renaud.github.io/Partisong/",
    icon: Music4,
    description:
      "Outil d’édition de partitions musicales pour un résultat homogène et personnalisable.",
  },
  
  {
    title: "ShareUp",
    responsive: ["desktop", "mobile"],
    category: "Application Web et web-mobile",
    status: "in-progress",
    url: "",
    icon: Sprout,
    description:
      "Plateforme communautaire dédiée à l’échange de biens issus du jardin.",
  },

  {
    title: "Gest·AL",
    responsive: ["desktop"],
    category: "Logiciel professionnel",
    status: "in-progress",
    url: "",
    icon: BriefcaseBusiness,
    description:
      "Solution de gestion clients, animaux, comptes-rendus, factures et suivi d’activité.",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-40
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-blue-500/10
          rounded-full
          blur-[140px]
        "
      />

      <Container>
        <SectionTitle
          eyebrow="projets"
          title="Des applications conçues autour d’usages spécifiques."
          description="Chaque projet répond à un besoin concret avec une approche simple, rapide et centrée sur l'utilisateur."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-10 h-full">
                  <div className="flex flex-col mb-4">
                    {/* Responsive icons + Category*/}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {project.responsive.includes("desktop") && (
                          <Monitor
                            size={16}
                            strokeWidth={2}
                            className="text-blue-400"
                          />
                        )}

                        {project.responsive.includes("mobile") && (
                          <Smartphone
                            size={16}
                            strokeWidth={2}
                            className="text-blue-400"
                          />
                        )}
                      </div>
                      <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-blue-400
                          "
                      >
                        · {project.category}
                      </p>
                    </div>

                    <div className="flex justify-between min-w-0">
                      {/* Project title and link */}
                      <div className="flex flex-col flex-wrap">
                        <h3
                          className="
                            text-3xl
                            font-bold
                            leading-tight
                          "
                        >
                          {project.title}
                        </h3>

                        {project.status === "in-progress" ? (
                          <span
                            className="
                              inline-flex
                              self-start
                              items-center
                              rounded-full
                              border border-amber-500/20
                              bg-amber-500/10
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-amber-400
                              whitespace-nowrap
                            "
                          >
                            En cours
                          </span>
                        ) : (
                          project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                self-start
                                items-center
                                gap-1.5
                                rounded-full
                                border border-emerald-500/20
                                bg-emerald-500/10
                                px-3 py-1
                                text-xs
                                font-medium
                                text-emerald-400
                                transition-colors
                                hover:bg-emerald-500/20
                                hover:text-emerald-300
                              "
                            >
                              Visiter
                              <ExternalLink size={13} />
                            </a>
                          )
                        )}
                      </div>

                      {/* Project icon */}
                      <div
                        className="
                        w-16 h-16
                        rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                        shrink-0
                        ml-4
                      "
                      >
                        <Icon size={30} className="text-blue-400" />
                      </div>
                    </div>
                  </div>

                  <p
                    className="
                      text-zinc-400
                      leading-relaxed
                      text-lg
                    "
                  >
                    {project.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
