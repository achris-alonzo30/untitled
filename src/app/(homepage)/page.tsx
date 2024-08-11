import { Hero } from "./_components/Hero";
import { Feature } from "./_components/Feature";

export default function Homepage() {
    return (
        <section className="flex flex-col flex-1 h-full w-full max-w-7xl pt-24 lg:pt-32 px-8">
            <Hero />
            <Feature />
        </section>
    )
}