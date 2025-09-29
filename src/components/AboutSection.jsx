import { Code, User } from "lucide-react";

export const AboutSection = () => {
   
    
    
    
    return (
    <section id ="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Backend Developer | 2025 Computer Science Grad from Rutgers | Specializes in Java and Python</h3>
                    <p className="text-muted-foreground">
                        I have developed both class projects and personal projects ranging from small projects such as an Android app to 
                        a project which tells me the performance of search tags on YouTube. 
                    </p>

                    <p className="text-muted-foreground">
                        I'm passionate about finding problems and learning how to solve them. I always try to learn new technologies which are
                        relevant to my expertise and future projects I plan to develop.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cos-button">
                            Get in touch!
                        </a>
                        <button 
                        onClick={(e) => {
                        window.open('https://drive.google.com/file/d/1-s0H6HVTB96CfrNKHWs5gJy3bOSct1Tr/view?usp=sharing');
                        }}
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Backend Dvelopment</h4>
                                <p className="text-muted-foreground"> 
                                    Creaitng programs to analyse and transfer data
                                    using frameworks such as spring boot.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> FullStack Dvelopment</h4>
                                <p className="text-muted-foreground"> 
                                    Building web applications to apply and visualize data 
                                    for user use and application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};