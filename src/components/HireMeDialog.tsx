import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface HireMeDialogProps {
  children: React.ReactNode;
}

export const HireMeDialog = ({ children }: HireMeDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Hi Akter,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)}.%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AReply to: ${encodeURIComponent(email)}`;
    window.open(`mailto:akterh.ja@gmail.com?subject=${encodeURIComponent(subject || "Hiring Inquiry")}&body=${body}`, "_self");
    toast({ title: "Opening your email client...", description: "Complete sending the email from your mail app." });
    setOpen(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Let's Work <span className="gradient-text">Together</span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required placeholder="Your name" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Project inquiry" value={formData.subject} onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required placeholder="Tell me about your project..." rows={4} value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} />
          </div>
          <Button type="submit" className="w-full gap-2 glow-effect">
            <Send size={18} />
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
