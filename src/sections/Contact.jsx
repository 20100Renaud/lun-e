import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Card className="p-8 sm:p-16 rounded-[40px]">
          <div
            className="
              absolute
              top-[-100px]
              right-[-100px]
              w-[300px]
              h-[300px]
              rounded-full
              bg-blue-500/20
              blur-[120px]
            "
          />

          <div className="relative z-10 max-w-3xl">
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-blue-400
                mb-6
              "
            >
              CONTACT
            </p>

            <h2
              className="
                text-5xl
                font-black
                leading-tight
                mb-8
              "
            >
              Parlons de votre
              <span className="text-blue-500"> projet</span>
            </h2>

            <p
              className="
                text-zinc-300
                text-lg
                leading-relaxed
                mb-10
              "
            >
              Site internet, application web, outil métier ou solution de
              gestion : construisons ensemble un outil adapté à votre besoin.
            </p>

            <Button>
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
