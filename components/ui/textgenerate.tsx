"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi Vistors, I'm Gaurav, a passionate Front-End developer with a strong enthusiasm for MERN stack development. With a B.Sc IT from Magadh University and a Master's in Computer Applications from Guru Ghasidas Central University, I've honed my skills through various projects. I'm dedicated to continuous learning and improvement, seeking an entry-level position at a leading MNC or dynamic startup.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
