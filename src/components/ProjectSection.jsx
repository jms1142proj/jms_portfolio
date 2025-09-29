import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id:1,
        title: "Youtube Tag Performace Analyzer",
        description: "A FullStack Java Program for analyzing YouTube Tags in search results",
        tags: ["Java", "React", "SpringBoot"],
        demoURL: "https://youtube-tag-checker-9cax.vercel.app/",
        githubURL: "https://github.com/jms1142proj/youtube-tag-checker"
    }
]


export const ProjectSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
            
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key = {key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            {/* image goes here */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoURL} target = "_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                    <a href={project.githubURL} target = "_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size ={20}/></a>
                                </div>
                            </div>




                            </div>

                    
                            
                        </div>
                    ))}

                </div>

            
            </div>
        </section>
    );
};