"use client";
import { Github, Linkedin, Twitter, Mail, Send, File } from "lucide-react";
import { RiDiscordLine } from "react-icons/ri";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GitHubCalendar } from 'react-github-calendar';

const New = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const resumeLink =
    "https://drive.google.com/file/d/1Dl4hbHHD670mivJVFCRquueTB2oQD-cn/view?usp=drive_link";

  const handleDiscordCopy = async () => {
    try {
      await navigator.clipboard.writeText("blueduckpond");
      toast({
        title: "Discord username copied!",
        description: "blueduckpond has been copied to your clipboard.",
      });
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please copy manually: blueduckpond",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      subject: "New Contact Form Submission - Portfolio",
      from_name: formData.get("name"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: "830db683-b286-417c-9db8-db84064ee200",
          to_email: "indiagauravkumar@gmail.com",
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch {
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
    <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10 text-white flex flex-col gap-10 text-pretty">
      {/* Intro */}
      <section className="space-y-2">
        <span className="text-xs italic">me,</span>
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-4xl sm:text-5xl font-bold">Gaurav</h1>
        </div>
        <p className="text-base sm:text-lg text-gray-300">
          Full Stack Developer.
        </p>
        <Link
          href={resumeLink}
          target="_blank"
          className="inline-flex items-center gap-2 p-2 border border-gray-700 rounded-lg hover:border-gray-600 hover:scale-105 transition-all duration-200 cursor-pointer text-xs"
        >
          <File className="text-gray-400" size={14} />
          Resume
        </Link>
      </section>

      <i>Some Activity...</i>

      <GitHubCalendar username="i-m-Gaurav" />


      {/* Socials */}
      <section className="space-y-3 border-t border-gray-800 pt-6">
        <p className="italic text-sm text-gray-400">Find me here...</p>
        <div className="flex flex-wrap gap-3 items-center">
          {[
            {
              icon: <Github size={16} />,
              href: "https://github.com/i-m-Gaurav/",
            },
            {
              icon: <Linkedin size={16} />,
              href: "https://www.linkedin.com/in/i-am-gaurav/",
            },
            {
              icon: <Twitter size={16} />,
              href: "https://x.com/_i_gaurav",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-700 rounded-lg hover:border-gray-600 hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              {link.icon}
            </a>
          ))}
          <button
            onClick={handleDiscordCopy}
            className="p-2 border border-gray-700 rounded-lg hover:border-gray-600 hover:scale-110 transition-all duration-200 cursor-pointer"
          >
            <RiDiscordLine size={16} />
          </button>
        </div>
      </section>

      {/* About */}
      <section className="space-y-3 border-t border-gray-800 pt-6">
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          I am a learner, I love computers not from outside, but what i can do with this, its a small but a giant world for me. always exploring something new, i read books and cook good food too.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-3 border-t border-gray-800 pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
          Tech Stack
        </h2>
        <div className="space-y-2 text-xs sm:text-sm">
          <div>
            <span className="font-semibold text-gray-200">Frontend:</span>{" "}
            React, Next.js, JavaScript, TypeScript, Tailwind, Shadcn UI
          </div>
          <div>
            <span className="font-semibold text-gray-200">Backend:</span>{" "}
            Express.js, Go, MongoDB, PostgreSQL, Prisma
          </div>
          <div>
            <span className="font-semibold text-gray-200">DevOps:</span> AWS,
            Docker, Kubernetes, CI/CD, Terraform
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="space-y-3 border-t border-gray-800 pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
          Experience
        </h2>
        <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
          <p className="font-bold text-gray-200">Unfluke (Trading Startup)</p>
          <p className="text-gray-400">
            Unfluke is a trading platform focused on simplifying stock research
            and strategy automation. I work on building and improving the
            frontend experience — from custom stock scanners and alerts to
            portfolio dashboards and API integrations.
          </p>
          <p className="text-gray-500">
            Tech used: React, Tailwind, Node.js, Express.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-3 border-t border-gray-800 pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              title: "Ideos",
              desc: "Collaborative platform for innovators to share ideas and connect.",
              repo: "https://github.com/i-m-Gaurav/ideos",
              live: "https://ideos.vercel.app",
            },
            {
              title: "Show Time",
              desc: "Find and book tickets to must-see shows and events.Its a bookmyshow clone(kind of).",
              repo: "https://github.com/i-m-Gaurav/bookmyshow-clone",
              live: "https://showtimee.vercel.app",
            },
            {
              title: "GGV Mart",
              desc: "Marketplace app for buying, selling, and trading items locally.",
              repo: "https://github.com/yashraj22/GGVMart",
              live: "https://ggvmart.vercel.app",
            },
            {
              title: "TechVerse",
              desc: "Community of tech enthusiasts sharing resources and knowledge.",
              repo: "https://github.com/i-m-Gaurav/Techverse",
              live: "https://techversecommunity.vercel.app",
            },
            {
              title: "Motion",
              desc: "Minimal note-taking web app.",
              repo: "https://github.com/i-m-Gaurav/motion",
              live: "https://motion.sudodev.in/",
            },
            {
              title: "DevScope",
              desc: "AI-based assessment platform tailored to users’ skills.",
              repo: "https://github.com/i-m-Gaurav/DevScope",
              live: "https://dev-scope.vercel.app/",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="border border-gray-700 p-4 rounded-lg hover:border-gray-600 transition-all"
            >
              <h3 className="font-bold text-sm mb-1">{p.title}</h3>
              <p className="text-gray-400 mb-2 text-xs">{p.desc}</p>
              <div className="flex gap-2 text-xs">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Repo
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-3 border-t border-gray-800 pt-6 pb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
          Let&apos;s Work Together
        </h2>
        <p className="text-xs sm:text-sm text-gray-400">
          Go through my projects — if you like some, feel free to{" "}
          <span className="italic">hire me</span> or just say hi.
        </p>

        <div className="flex">
          <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 w-full max-w-xs"
        >
          <div className="space-y-1">
            <Label htmlFor="name" className="text-xs text-gray-300">
              Your Name
            </Label>
            <Input
              id="name"
              name="name"
              required
              className="bg-transparent h-8 border-gray-700 text-white placeholder:text-gray-500 text-xs focus:border-gray-600"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs text-gray-300">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-transparent h-8 border-gray-700 text-white placeholder:text-gray-500 text-xs focus:border-gray-600"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="text-xs text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-transparent min-h-[60px] border-gray-700 text-white placeholder:text-gray-500 text-xs focus:border-gray-600 resize-none"
              placeholder="Your message here..."
            />
          </div>

          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={isLoading}
              className="h-8 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-xs px-6"
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send <Send className="ml-1 h-3 w-3" />
                </>
              )}
            </Button>

            <Link
              href="mailto:indiagauravkumar@gmail.com"
              className="flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-gray-300 transition-colors h-8 border border-gray-700 rounded hover:border-gray-600 px-4"
            >
              <Mail className="h-3 w-3" />
              Email
            </Link>
          </div>
        </form>
        <div className="flex justify-center items-center w-full">
          <Image src = "mail.svg" width={100} height={100} alt="Mail Icon" />
        </div>
        </div>
      </section>
    </div>
  );
};

export default New;
