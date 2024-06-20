import Image from "next/image"

const Cards = ({ title, description, stack, github, live,image }: any) => {
    return (
        <div className="max-w-sm w-full bg-[#76767619] text-xs  border border-slate-600 shadow-lg rounded-lg overflow-hidden mx-auto md:mx-4 mb-4">
           <div className="p-2 flex justify-between text-xs items-center border-b border-slate-600">
                <h1 className="text-xs md:text-sm font-semibold text-white">{title}</h1>
                <a href={github} className="text-blue-500 px-2 hover:underline text-xs md:text-sm">Github link</a>
            </div>
            <div className="p-2 md:p-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                    <p className="text-white text-xs md:text-sm">{description}</p>
                </div>
                <div className="flex-1">
                    <Image src={image} height={200} width={200} alt="Project Image" className="w-full h-24 md:h-32 object-cover rounded-lg shadow-md" />
                </div>
            </div>
            <div className="p-2 flex justify-between text-xs md:text-sm items-center border-slate-600 border-t">
                <div className="flex-1">
                    <p className="text-white">{stack}</p>
                </div>
                <a href={live} className="text-white hover:underline text-right text-xs md:text-sm">Live link</a>
            </div>
        </div>
    )
}

export default Cards
