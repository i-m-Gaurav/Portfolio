import GithubProjectCard from "./GithubProjectCard";



export default function Github(){
    return(
        <>
        <div className="w-full border rounded-lg border-red-500 bg-blue-500">
            <div className = "border-b-2 border-white">All Github Projects</div>
            {/* this is the repo project card.*/}
            <GithubProjectCard/>
        </div>
        </>
    )
}