import Link from "next/link";
import { Button } from "@/components/ui/button";


export const Hero = () => {
    return (
        <article className="text-center mx-auto w-full py-8 sm:py-12">
            <aside className="mx-auto flex flex-col items-center justify-center gap-9 px-8 sm:px-16">
                <hgroup className="text-center mx-auto max-w-md space-y-4 w-full">
                    <h1 className="text-3xl lg:text-5xl">Hero Title</h1>
                    <p className="text-lg lg:text-xl">Hero Description</p>
                </hgroup>
                <div className="max-w-md">
                    <Button 
                        asChild 
                        size="sm"
                        variant="link"
                    >
                        <Link href="#">
                            Shop Now
                        </Link>
                    </Button>
                </div>
            </aside>
        </article>
    )
}