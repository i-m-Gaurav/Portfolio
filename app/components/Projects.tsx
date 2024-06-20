import { EvervaultCardDemo } from "@/components/ui/EvervaultCardDemo";
import Image from "next/image";
import Cards from "../components/Cards";

const Projects = () => {
    return (
        <div className="flex flex-wrap justify-center  p-2 max-w-7xl mx-auto mt-24 sm:px-6 lg:px-8">
            <div className="flex flex-wrap w-full justify-center lg:justify-start">
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="GGV Mart" 
                        description="A dynamic marketplace app enabling users to buy, sell, and trade items locally with ease. Connect with your community." 
                        image="/ggvmart.png" 
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="CosmoDrome"
                        description = "A web app showcasing daily images captured by the Mars rover. Explore an extensive gallery of Martian landscapes."
                        image = "/cosmodrome.png" />
                        
                    </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="GGV Mart" 
                        description="A dynamic marketplace app enabling users to buy, sell, and trade items locally with ease. Connect with your community." 
                        image="/ggvmart.png" 
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="CosmoDrome"
                        description = "A web app showcasing daily images captured by the Mars rover. Explore an extensive gallery of Martian landscapes."
                        image = "/cosmodrome.png" />
                        
                    </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="GGV Mart" 
                        description="A dynamic marketplace app enabling users to buy, sell, and trade items locally with ease. Connect with your community." 
                        image="/ggvmart.png" 
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="CosmoDrome"
                        description = "A web app showcasing daily images captured by the Mars rover. Explore an extensive gallery of Martian landscapes."
                        image = "/cosmodrome.png" />
                        
                    </div>
                
            </div>
        </div>
    );
}

export default Projects;
