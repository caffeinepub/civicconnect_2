import { useState } from 'react';
import { CheckCircle, Loader2, AlertTriangle, ClipboardList } from 'lucide-react';
import { useSubmitGrievance } from '@/hooks/useQueries';
import { GrievanceCategory } from '../backend';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormState {
  name: string;
  email: string;
  category: GrievanceCategory | '';
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  description?: string;
}

const initialForm: FormState = { name: '', email: '', category: '', description: '' };

const categoryOptions: { value: GrievanceCategory; label: string }[] = [
  { value: GrievanceCategory.cleanliness, label: 'Cleanliness & Sanitation' },
  { value: GrievanceCategory.maintenance, label: 'Infrastructure & Maintenance' },
  { value: GrievanceCategory.noise, label: 'Noise Complaint' },
  { value: GrievanceCategory.safety, label: 'Public Safety' },
  { value: GrievanceCategory.other, label: 'Other' },
];

export default function Grievance() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  const submitGrievance = useSubmitGrievance();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address';
    if (!form.category) newErrors.category = 'Please select a category';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    else if (form.description.trim().length < 20) newErrors.description = 'Please provide at least 20 characters';
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
    if (!form.category) return;
    try {
      const refNum = await submitGrievance.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim(),
        category: form.category as GrievanceCategory,
        description: form.description.trim(),
      });
      setReferenceNumber(refNum);
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
            Grievance Section
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.88 0.04 195)' }}>
            Submit your concerns and complaints. We take every grievance seriously and respond promptly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info Panel */}
            <div className="space-y-6">
              <div>
                <h2 className="section-heading text-2xl mb-3">How It Works</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Submit your grievance and receive a unique reference number to track your complaint's progress.
                </p>
              </div>

              {[
                {
                  step: '01',
                  title: 'Fill the Form',
                  desc: 'Provide your details and describe your grievance clearly.',
                },
                {
                  step: '02',
                  title: 'Get Reference Number',
                  desc: 'Receive a unique reference number upon submission.',
                },
                {
                  step: '03',
                  title: 'Track Progress',
                  desc: 'Use your reference number to follow up on your complaint.',
                },
                {
                  step: '04',
                  title: 'Resolution',
                  desc: 'Our team will address your grievance and notify you.',
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white"
                    style={{ backgroundColor: 'oklch(var(--civic-teal))' }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: 'oklch(0.60 0.16 30 / 0.06)',
                  borderColor: 'oklch(0.60 0.16 30 / 0.2)',
                }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle size={16} className="mt-0.5 shrink-0" style={{ color: 'oklch(0.60 0.16 30)' }} />
                  <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.45 0.1 30)' }}>
                    For emergencies, please contact local authorities directly. This form is for non-emergency grievances only.
                  </p>
                </div>
              </div>
            </div>

            {/* Grievance Form */}
            <div className="lg:col-span-2">
              {referenceNumber ? (
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
                    Grievance Submitted!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your grievance has been received. Please save your reference number for follow-up.
                  </p>
                  <div
                    className="inline-block rounded-xl px-6 py-4 mb-6"
                    style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.08)', border: '1px solid oklch(var(--civic-teal) / 0.2)' }}
                  >
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Reference Number</p>
                    <p className="text-lg font-mono font-bold" style={{ color: 'oklch(var(--civic-teal))' }}>
                      {referenceNumber}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setReferenceNumber(null)}
                      className="rounded-full"
                    >
                      Submit Another
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="civic-card p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.1)' }}
                    >
                      <ClipboardList size={20} style={{ color: 'oklch(var(--civic-teal))' }} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Submit a Grievance</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="grievance-name">Full Name *</Label>
                        <Input
                          id="grievance-name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange('name')}
                          disabled={submitGrievance.isPending}
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="grievance-email">Email Address *</Label>
                        <Input
                          id="grievance-email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange('email')}
                          disabled={submitGrievance.isPending}
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="grievance-category">Grievance Category *</Label>
                      <Select
                        value={form.category}
                        onValueChange={(val) => {
                          setForm((prev) => ({ ...prev, category: val as GrievanceCategory }));
                          if (errors.category) setErrors((prev) => ({ ...prev, category: undefined }));
                        }}
                        disabled={submitGrievance.isPending}
                      >
                        <SelectTrigger
                          id="grievance-category"
                          className={errors.category ? 'border-destructive' : ''}
                        >
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categoryOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="grievance-description">Description *</Label>
                      <Textarea
                        id="grievance-description"
                        placeholder="Please describe your grievance in detail (minimum 20 characters)..."
                        rows={5}
                        value={form.description}
                        onChange={handleChange('description')}
                        disabled={submitGrievance.isPending}
                        className={errors.description ? 'border-destructive' : ''}
                      />
                      {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
                    </div>

                    {submitGrievance.isError && (
                      <div className="text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-3">
                        Failed to submit grievance. Please try again.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={submitGrievance.isPending}
                      className="w-full rounded-full"
                      style={{ backgroundColor: 'oklch(var(--civic-teal))', color: 'white' }}
                    >
                      {submitGrievance.isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Grievance'
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
