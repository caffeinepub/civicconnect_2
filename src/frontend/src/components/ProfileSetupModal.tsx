import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSaveUserProfile } from "@/hooks/useQueries";
import { Loader2, UserCircle } from "lucide-react";
import { useState } from "react";

interface ProfileSetupModalProps {
  open: boolean;
  onComplete: () => void;
}

export default function ProfileSetupModal({
  open,
  onComplete,
}: ProfileSetupModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const saveProfile = useSaveUserProfile();

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await saveProfile.mutateAsync({ name: name.trim(), email: email.trim() });
      onComplete();
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "oklch(var(--civic-teal) / 0.12)" }}
            >
              <UserCircle
                size={22}
                style={{ color: "oklch(var(--civic-teal))" }}
              />
            </div>
            <DialogTitle className="text-xl">Complete Your Profile</DialogTitle>
          </div>
          <DialogDescription>
            Welcome! Please tell us a bit about yourself to get started.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="profile-name">Full Name</Label>
            <Input
              id="profile-name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={saveProfile.isPending}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="profile-email">Email Address</Label>
            <Input
              id="profile-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={saveProfile.isPending}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {saveProfile.isError && (
            <p className="text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2">
              Failed to save profile. Please try again.
            </p>
          )}

          <Button
            type="submit"
            disabled={saveProfile.isPending}
            className="w-full rounded-full"
            style={{
              backgroundColor: "oklch(var(--civic-teal))",
              color: "white",
            }}
          >
            {saveProfile.isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Saving...
              </>
            ) : (
              "Save Profile"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
