import { EvervaultCardDemo } from "@/components/ui/EvervaultCardDemo";
import Image from "next/image";
import Cards from "../components/Cards";

const Projects = () => {
    return (
        <div className="flex flex-wrap justify-center bg-red-500 p-2 max-w-7xl mx-auto mt-24 sm:px-6 lg:px-8">
            <div className="flex flex-wrap w-full justify-center lg:justify-start">
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="GGV Mart" 
                        description="A dynamic marketplace app enabling users to buy, sell, and trade items locally with ease. Connect with your community and find great deals effortlessly." 
                        image="/ggvmart.png" 
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards title="CosmoDrome"/>
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards title="GGV Ma"/>
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards title="GGV Ma"/>
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards title="GGV Ma"/>
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards title="GGV Ma"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
