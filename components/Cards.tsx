import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import Link from "next/link"
import AnimatedTooltipPreview1 from "@/components/ui/tooltip/tooltip1";


const Cards = ({ title, description, github, live,image, TooltipComponent }: any) => {

    return (
        <div className="max-w-sm w-full bg-[#76767619]   text-xs  border border-[#30363d] shadow-lg rounded-lg overflow-hidden mx-auto md:mx-4 mb-4">
           <div className="p-2 flex justify-start text-xs items-center border-b border-[#30363d]">
                <h1 className="text-xs mr-4 px-2 md:text-sm font-normal text-[#e6edf3]">{title}</h1>
                {github && (
                    <Link href={github}>
                        <FaGithub size={20} />
                    </Link>
                )}
            </div>
            <div className="p-2 md:p-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        
                <div className="flex-1">
                    <p className="text-[#e6edf3] text-xs md:text-xs">{description}</p>
                </div>
                <div className="flex-1">
                    <Image src={image} height={200} width={200} alt="Project Image" className="w-full h-24 md:h-32 object-cover rounded-lg shadow-md" />
                </div>
            </div>
            <div className="p-2 flex justify-between text-xs md:text-sm items-center border-[#30363d] border-t">
                <div className="flex">
                    <div className="text-white">
                        {TooltipComponent }
                      
                    </div>
                </div>
                <a href={live} className="text-white hover:underline text-right text-xs md:text-sm"><button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Try Now.
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button></a>
            </div>
        </div>
    )
}

export default Cards
