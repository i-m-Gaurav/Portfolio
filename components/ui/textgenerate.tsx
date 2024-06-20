"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi visitors, Hi, I'm Gaurav Kumar, a passionate front-end developer
originally from the quaint town of Nawada in Bihar, now residing in
Noida. I hold a B.Sc. in Information Technology from Magadh
University, Bihar, and a Master's in Computer Applications from Guru
Ghasidas Central University, Bilaspur, Chhattisgarh. With a strong
enthusiasm for front-end development, I have honed my skills in the
MERN stack through various personal and full-stack projects. My
hands-on experience and dedication to coding drive my continuous
learning and improvement. I'm currently seeking an entry-level
position at a leading MNC or a dynamic startup where I can contribute
and grow.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
