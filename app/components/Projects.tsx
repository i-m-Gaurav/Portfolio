
import Cards from "../components/Cards";
import AnimatedTooltipPreview1 from "../../components/ui/tooltip/tooltip1"; 
import AnimatedTooltipPreview2 from "../../components/ui/tooltip/tooltip2"; 
import AnimatedTooltipPreview3 from "../../components/ui/tooltip/tooltip3"; 
import AnimatedTooltipPreview4 from "../../components/ui/tooltip/tooltip4";
import AnimatedTooltipPreview5 from "../../components/ui/tooltip/tooltip5";

const Projects = () => {
    return (
        <div className="flex flex-wrap justify-center  p-2 max-w-7xl mx-auto mt-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center p-5">Personal Projects</h1>
            <div className="flex flex-wrap w-full justify-center lg:justify-start">
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="GGV Mart" 
                        description="A dynamic marketplace app enabling users to buy, sell, and trade items locally with ease. Connect with your community." 
                        image="/ggvmart.png" 
                        TooltipComponent={<AnimatedTooltipPreview1/>}
                        github = "https://github.com/yashraj22/GGVMart"
                        live = "https://ggvmart.vercel.app"
                        
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="CosmoDrome"
                        description = "A web app showcasing daily images captured by the Mars rover. Explore an extensive gallery of Martian landscapes."
                        image = "/cosmodrome.png" 
                        TooltipComponent = {<AnimatedTooltipPreview2/>}
                        github = "https://github.com/i-m-Gaurav/mars.github.io"
                        live = "https://i-m-gaurav.github.io/mars.github.io/"
                        
                    />
                </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="Prompt Store" 
                        description="Secure, authenticated platform for sharing and discovering AI prompts, streamlining creativity across various needs." 
                        image="/prompt.png" 
                        TooltipComponent = {<AnimatedTooltipPreview3/>}
                        github = "https://github.com/i-m-Gaurav/Post.it"
                        live = "https://post-it-umber.vercel.app/"

                    />
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="Weather App"
                        description = "A weather app that allows users to search for the weather in any city and view the forecast for the next 5 days."
                        image = "/weather.png" 
                        TooltipComponent = {<AnimatedTooltipPreview4/>}
                        github = "https://github.com/i-m-Gaurav/NextJS-weatherApp"
                        live = "https://next-js-weather-app-puce.vercel.app/"
                     />
                        
                    </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                    <Cards 
                        title="design1"
                        description = "Modern Design frontend design with NextJS and Tailwind CSS equipped with modern ui components."
                        image = "/design1.png" 
                        TooltipComponent = {<AnimatedTooltipPreview4/>}
                        github = "https://github.com/i-m-Gaurav/design1"
                        live = "https://design1-gray.vercel.app/"
                     />
                </div>
                <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                <Cards 
                        title="Dribble UI"
                        description = "  Pixel-perfect recreation of Dribbble's home page, showcasing frontend skills and attention to detail."
                        image = "/dribble.png" 
                        TooltipComponent = {<AnimatedTooltipPreview5/>}
                        github = "https://github.com/i-m-Gaurav/Dribble"
                        live = "https://dribble-ivory.vercel.app/"
                     />
                        
                    </div>
                
            </div>
        </div>
    );
}

export default Projects;
