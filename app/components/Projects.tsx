import { EvervaultCardDemo } from "@/components/ui/EvervaultCardDemo";
import Image from "next/image";
import Cards from "../components/Cards";

const Projects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl  mt-24 px-4 sm:px-6 lg:px-8">
           <Cards title = "GGV Ma"/>
           <Cards title = "CosmoDrome"/>
           <Cards title = "GGV Ma"/>
           <Cards title = "GGV Ma"/>
           <Cards title = "GGV Ma"/>
           <Cards title = "GGV Ma"/>
        </div>
    );
}

export default Projects;
