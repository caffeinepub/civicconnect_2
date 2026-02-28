import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2, Send } from 'lucide-react';
import { useSubmitContactMessage } from '@/hooks/useQueries';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successId, setSuccessId] = useState<string | null>(null);

  const submitContact = useSubmitContactMessage();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const id = await submitContact.mutateAsync(form);
      setSuccessId(id);
      setForm(initialForm);
      setErrors({});
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Contact Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.88 0.04 195)' }}>
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="section-heading text-2xl mb-3">Get in Touch</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our team is here to help. Reach out through any of the channels below or fill out the form.
                </p>
              </div>

              {[
                {
                  icon: MapPin,
                  label: 'Address',
                  value: '123 Civic Center Drive\nCommunity City, CC 12345',
                  color: 'oklch(var(--civic-teal))',
                  bg: 'oklch(var(--civic-teal) / 0.1)',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                  color: 'oklch(var(--civic-green))',
                  bg: 'oklch(var(--civic-green) / 0.1)',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@civicconnect.org',
                  color: 'oklch(0.55 0.15 250)',
                  bg: 'oklch(0.55 0.15 250 / 0.1)',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: item.bg }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {successId ? (
                <div className="civic-card p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'oklch(var(--civic-green) / 0.12)' }}
                  >
                    <CheckCircle size={32} style={{ color: 'oklch(var(--civic-green))' }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'oklch(var(--civic-teal-dark))' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Thank you for reaching out. We'll get back to you within 1–2 business days.
                  </p>
                  <p className="text-xs text-muted-foreground mb-6">
                    Reference ID: <span className="font-mono font-semibold text-foreground">{successId}</span>
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSuccessId(null)}
                    className="rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="civic-card p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input
                          id="contact-name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange('name')}
                          disabled={submitContact.isPending}
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange('email')}
                          disabled={submitContact.isPending}
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input
                        id="contact-subject"
                        placeholder="What is this about?"
                        value={form.subject}
                        onChange={handleChange('subject')}
                        disabled={submitContact.isPending}
                        className={errors.subject ? 'border-destructive' : ''}
                      />
                      {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Write your message here..."
                        rows={5}
                        value={form.message}
                        onChange={handleChange('message')}
                        disabled={submitContact.isPending}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    </div>

                    {submitContact.isError && (
                      <div className="text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-3">
                        Failed to send message. Please try again.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={submitContact.isPending}
                      className="w-full rounded-full"
                      style={{ backgroundColor: 'oklch(var(--civic-teal))', color: 'white' }}
                    >
                      {submitContact.isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
