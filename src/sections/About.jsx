import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import photo from "../assets/photo_ID.jpg";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          eyebrow="à propos"
          title="Pourquoi des outils numériques ?"
        />

        <div
          className="
            grid lg:grid-cols-2
            gap-16
          "
        >
          {/* --------- LEFT ------------ */}
          <div
            className="
              relative
              text-zinc-400
              leading-relaxed
              text-lg
              space-y-4
              flex flex-col justify-center
            "
          >
            <div className="space-y-4">
              <Quote className="w-14 h-14 text-blue-500/20 rotate-180" />

              <div className="pl-8 space-y-4">
                <p>
                  <i>
                    En 2012, j’ai lancé mon activité en tant que prestataire de
                    services. Rapidement, j’ai constaté que la gestion
                    administrative prenait le pas sur mon cœur de métier. Pour
                    optimiser mon temps, j’ai développé ma première application
                    à l’aide d’outils de gestion de bases de données.
                  </i>
                </p>
                <p>
                  <i>
                    Grâce à ma formation à Holberton School en 2026, j’ai élargi
                    mes compétences techniques et stratégiques. Aujourd’hui, je
                    mets mon expérience au service de particuliers et d’entrepreneurs pour les accompagner dans la gestion de leur
                    activité, l’élaboration de projets sur mesure et adaptés à
                    leurs besoins.
                  </i>
                </p>
              </div>

              <div className="flex justify-end">
                <Quote className="w-14 h-14 text-blue-500/20" />
              </div>
            </div>
          </div>
          {/* ----------- RIGHT ----------*/}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
              relative flex flex-col
              justify-center
              items-center
            "
            >
              {/* GLOW BACKGROUND */}
              <div
                className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                bg-blue-500/10
                blur-[120px]
              "
              />
              {/* ORBIT */}
              <div
                className="
                relative z-10
                flex flex-col
                items-center

              "
              />
              {/* IMAGE */}
              <motion.img
                src={photo}
                alt="image"
                animate={{
                  y: [0, -15, 0],
                  rotate: [4, 2, 4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                w-[340px] h-[340px] rounded-full object-cover
                drop-shadow-[0_0_60px_rgba(59,130,246,0.35)]
                select-none pointer-events-none
              "
              />
            </motion.div>

            {/* NAME */}
            <div className="mt-8 text-center">
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Vincent
              </h3>

              <p
                className="
                  text-zinc-500
                  tracking-[0.2em]
                  uppercase
                  text-sm
                  mt-2
                "
              >
                Développeur passionné
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
