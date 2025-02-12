import GithubProjectCard from "./GithubProjectCard";



export default function Github(){
    return(
        <>
        <div className="w-full border rounded-lg border-[#30363d] ">
            <div className = "border-b-2 border-[#30363d] m-2 p-2">All Github Projects</div>
            {/* this is the repo project card.*/}
            <GithubProjectCard/>
        </div>
        </>
    )
}