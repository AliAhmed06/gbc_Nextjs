import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes you different from other agencies?",
    answer:
      "We combine deep technical expertise with creative innovation to deliver exceptional results. Our approach is highly collaborative, transparent, and focused on delivering measurable value to your business.",
  },
  {
    question: "How does you can help my startup?",
    answer:
      "We provide comprehensive solutions tailored specifically for startups, including technical consulting, product development, and scalable architecture design. Our experience helps startups avoid common pitfalls and accelerate their growth.",
  },
  {
    question: "I have an existing project. Can you help on that?",
    answer:
      "Yes, we specialize in both new projects and existing ones. We can analyze your current project, suggest improvements, and help implement changes while ensuring minimal disruption to your existing operations.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full pt-10">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-[#4AC7EC] font-medium mb-2">FAQ</h2>
            <h3 className="text-3xl font-bold">
              Answers that you are looking for.
            </h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-[#4AC7EC]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
