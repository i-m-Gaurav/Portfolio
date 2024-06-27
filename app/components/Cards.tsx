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
                <a href={live} className="text-white hover:underline text-right text-xs md:text-sm">Live link</a>
            </div>
        </div>
    )
}

export default Cards
