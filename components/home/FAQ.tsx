import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is JobFind",
    answer:
      "JobFind.ai is your AI Career Pilot: we parse your résumé, match you to the roles you're best suited for, help you craft on-brand cover letters, and even automate follow-ups—so you land more interviews with less effort.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up, upload your résumé or import from LinkedIn. Instantly see your Clarity Engine™ insights and FitScore™ matches. Our AI will apply to jobs while you rest, generate tailored cover letters, and track progress—all in one place.",
  },
  {
    question: "What makes JobFind different from others?",
    answer: `
    Clarity Engine: AI-powered résumé parsing with visual skill maps.
FitScore: Role-by-role match percentages so you focus on your strongest fits.
Visa Filters: Instantly include/exclude jobs by F-1 OPT, STEM OPT, or H-1B sponsorship.
Cover-Letter AI: Train on your own style and get instant, editable snippets.
Automations: Smart nudges and Ghostbuster Bot follow-ups keep you moving forward.
    
    `,
  },
  {
    question: "How accurate is the job matching?",
    answer:
      "Our AI combines keyword extraction, contextual language models, and industry benchmarks to deliver FitScores you can trust—on average, users see a 30-50% increase in interview invites within 30 days.",
  },
  {
    question: "Do you support international candidates?",
    answer:
      "Absolutely. Use our Visa Filters to surface only roles that accept F-1 OPT, STEM OPT Extension, or offer H-1B sponsorship—no more guessing which listings you're actually eligible for.",
  },
  {
    question: "How does AI-generated cover-letter training work?",
    answer:
      "Upload 2-3 past cover letters or emails, and our model will learn your tone, style, and preferred phrases. Every snippet you generate afterward will feel like you wrote it yourself.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center lg:gap-10 gap-7 lg:mt-10 mt-5 p-5 flex-col">
      <h3 className="lg:text-3xl text-2xl text-center font-semibold">
        Got Questions? We've Got Answers
      </h3>
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="lg:w-2xl"
      >
        {faqs.map((faq) => (
          <AccordionItem value={faq.question} key={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
