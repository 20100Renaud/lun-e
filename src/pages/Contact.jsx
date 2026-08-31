import Container from "../components/layout/Container";
import PageHero from "../components/layout/PageHero";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";

function ContactForm() {
  return (
    <Card className="p-8">
      <div className="w-full max-w-xl mx-auto">
        <form className="space-y-6">
          <Input placeholder="Nom" />

          <Input placeholder="Email" />

          <Input placeholder="Sujet" />

          <textarea
            rows={6}
            placeholder="Message"
            className="
            w-full
            rounded-2xl
            border border-white/10
            bg-white/10
            px-5 py-4
            text-white
            placeholder:text-zinc-500
            outline-none
            resize-none
            transition
            focus:border-blue-500/50
            focus:bg-white/10
          "
          />

          <Button className="w-full sm:w-auto">Envoyer le message</Button>
        </form>
      </div>
    </Card>
  );
}

export default function Contact() {
  return (
    <PageHero
      fullHeight={true}
      eyebrow="Contact"
      title={
        <>
          Parlons de votre
          <span className="text-blue-500"> projet</span>
        </>
      }
      description="
        Site internet, application web ou solution de gestion : construisons ensemble un outil adapté à votre besoin."
      visual={<ContactForm />}
      children={
        <p>Décrivez votre projet et je vous recontacterai rapidement</p>
      }
    />
  );
}
