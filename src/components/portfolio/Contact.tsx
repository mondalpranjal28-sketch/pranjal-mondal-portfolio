import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { links, isPlaceholder } from "@/config/portfolio";
import { Section, SectionHeading } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type FormValues = z.infer<typeof schema>;

const contactItems = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, icon: Mail },
  { label: "LinkedIn", value: links.linkedin, href: links.linkedin, icon: Linkedin },
  { label: "GitHub", value: links.github, href: links.github, icon: Github },
  { label: "Phone", value: links.phone, href: `tel:${links.phone}`, icon: Phone },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // No email backend is connected yet. Hook this up to a server function or
    // email service, then replace this block with the real request.
    setSubmitted(true);
    toast.info("Message captured locally", {
      description:
        "The contact form is validated but not yet connected to an email service, so nothing was sent.",
    });
    // eslint-disable-next-line no-console
    console.info("contact form payload", { subject: values.subject });
    reset();
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-border bg-secondary/30 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring/40";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="$ connect"
        title="Let's Build Something Together"
        subtitle="I'm always interested in connecting with developers, recruiters, researchers, and people working on interesting technology and data-driven projects."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <ul className="space-y-3">
          {contactItems.map(({ label, value, href, icon: Icon }) => {
            const pending = isPlaceholder(value);
            const content = (
              <>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate font-mono text-xs text-muted-foreground">
                    {pending ? `${value} — not set yet` : value}
                  </span>
                </span>
              </>
            );
            return (
              <li key={label}>
                {pending ? (
                  <div className="glass flex min-h-14 items-center gap-3 rounded-xl p-3 opacity-70">
                    {content}
                  </div>
                ) : (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="glass card-hover flex min-h-14 items-center gap-3 rounded-xl p-3"
                  >
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass rounded-2xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input id="name" className={fieldClass} placeholder="Your name" aria-invalid={!!errors.name} {...register("name")} />
              {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p> : null}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" className={fieldClass} placeholder="you@example.com" aria-invalid={!!errors.email} {...register("email")} />
              {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p> : null}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
              Subject
            </label>
            <input id="subject" className={fieldClass} placeholder="What's this about?" aria-invalid={!!errors.subject} {...register("subject")} />
            {errors.subject ? <p className="mt-1.5 text-xs text-destructive">{errors.subject.message}</p> : null}
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-xl border border-border bg-secondary/30 p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring/40"
              placeholder="Tell me a bit about it..."
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p> : null}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 inline-flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <Send className="h-4 w-4" aria-hidden="true" /> Send Message
          </button>

          <p className="mt-3 text-xs text-muted-foreground" role="status">
            {submitted
              ? "Thanks — your message was validated. An email backend isn't connected yet, so please reach out directly for now."
              : "Note: this form validates input but is not yet connected to an email service."}
          </p>
        </form>
      </div>
    </Section>
  );
}