import { ArrowDown } from "lucide-react"

export const HomeSection = () => {
    return <section id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jared </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Santos </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I am a 2025 Computer Science Grad from Rutgers University.
                    I specialize in backend development with Java and Python. I have built projects which use APIs from Google
                    Cloud Platform as well as Machine Learning projects using scikit-learn.

                    I have experience building web applications using Spring Boot endpoints for data processing and storage.
                </p>

                <div className="opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cos-button">
                        View My Work
                    </a>
                </div>

            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-md text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />

        </div>
    </section>
}