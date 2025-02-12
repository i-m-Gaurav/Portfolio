import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

export async function GET(){

    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if(!username || !token){
        return NextResponse.json({message : "ERROR", status : 500});
    }

    const octokit = new Octokit({
        auth : token
    })

    try {

        const { data : repos} = await octokit.rest.repos.listForUser({
            username : username,
        })

        const personalRepos = repos.filter((repo) => !repo.fork);

        if (!Array.isArray(personalRepos)) {
            return NextResponse.json({ message: "Failed to fetch repositories", status: 500 });
        }



        const repoCommitCounts = await Promise.all(
            personalRepos.map(async (repo) => {
              try {
                const commitsUrl = repo.commits_url.replace("{/sha}", "");
                const { data: commitData } = await octokit.request('GET ' + commitsUrl, {
                  headers: { 'Accept': 'application/vnd.github.v3+json' }
                });
                return { ...repo, total_commits: commitData.length };
              } catch (error) {
                console.error(`Error getting commits for ${repo.name}:`, error);
                return { ...repo, total_commits: 0 }; // Handle errors gracefully
              }
            })
          );
      
          // Sort by commit count (descending)
          repoCommitCounts.sort((a, b) => b.total_commits - a.total_commits);
      
          // Get the top 6 repos
          const top6Repos = repoCommitCounts;
      
          return NextResponse.json(top6Repos);
        
    } catch (error) {

        console.error("Error",error);
        return NextResponse.json({message : "failed", status : 500})
        
    }


}