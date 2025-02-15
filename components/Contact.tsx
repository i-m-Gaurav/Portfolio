'use client'
import React from 'react';
import {  Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from 'next/link'

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      subject: "New Contact Form Submission - Portfolio",
      from_name: formData.get('name'),
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          access_key: '830db683-b286-417c-9db8-db84064ee200', // Replace with your new API key from Web3Forms
          to_email: 'indiagauravkumar@gmail.com',
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-8 animate-fade-up opacity-0">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full glass-effect mb-2">
          Contact
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-soft-gray text-sm max-w-md mx-auto">
          Go through my projects, if you like some, try to <span className='italic'>hire me</span> or just say hi?
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="glass-effect rounded-xl p-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-sm">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="glass-effect bg-transparent h-9 border-white/10 text-soft-white placeholder:text-soft-gray text-sm"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="glass-effect bg-transparent h-9 border-white/10 text-soft-white placeholder:text-soft-gray text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="message" className="text-sm">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                className="glass-effect bg-transparent min-h-[100px] border-white/10 text-soft-white placeholder:text-soft-gray text-sm"
                placeholder="Your message here..."
              />
            </div>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 h-9 glass-effect hover:bg-white hover:text-soft-black transition-all duration-300 text-sm"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-3 w-3" />
                  </>
                )}
              </Button>
              
              <Link
                href="mailto:indiagauravkumar@gmail.com"
                className="flex items-center gap-2 text-sm text-soft-gray hover:text-soft-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email directly
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;