import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import {
  getMergedGitHubRepos,
  getPortfolioProfile,
} from "@/lib/portfolio";

export default async function Home() {
  const profile = getPortfolioProfile();
  const githubRepos = await getMergedGitHubRepos(profile);

  return (
    <>
      <Header name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills profile={profile} />
        <Projects profile={profile} githubRepos={githubRepos} />
        <Experience profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
