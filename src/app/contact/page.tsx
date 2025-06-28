"use client";

import type React from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // if (result.success) {
      //   setSubmitStatus("success");
      //   setFormData({ name: "", email: "", subject: "", message: "" });
      //   setTimeout(() => {
      //     setOpen(false);
      //     setSubmitStatus("idle");
      //   }, 2000);
      // } else {
      //   setSubmitStatus("error");
      // }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className=" py-4 px-2 md:px-0  min-h-screen">
      <div>
        <div
          className="max-w-xl mx-auto px-6 py-6 rounded-md"
          style={{ backgroundColor: "rgb(30, 34, 43)" }}
        >
          <div className="text-center">
            <h1 className="text-base font-bold text-orange-500 uppercase tracking-wider flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Let's Work Together
            </h1>
            <h1 className="text-white/20 text-sm mt-2">
              Have a project in mind? I'd love to hear about it. Send me a
              message and I'll get back to you soon.
            </h1>
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-green-400 font-medium">
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-400 font-medium">
                Failed to send message. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-white/70 font-medium text-sm"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className=" py-4 border-white/15 text-white placeholder:text-white/15 focus:border-orange-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-white/70 font-medium text-sm"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className=" py-4 border-white/15 text-white placeholder:text-white/15 focus:border-orange-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="subject"
                className="text-white/70 font-medium text-sm"
              >
                Subject *
              </Label>
              <Input
                id="subject"
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className=" py-4 border-white/15 text-white placeholder:text-white/15 focus:border-orange-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-white/70 font-medium text-sm"
              >
                Message *
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, timeline, and how I can help you achieve your goals..."
                rows={7}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className=" py-4 border-white/15 text-white placeholder:text-white/15 focus:border-orange-500"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
