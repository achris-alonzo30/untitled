import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Feature = () => {
     return (
        <article className="py-8 sm:py-12">
            <aside className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-8 sm:px-18">
                <hgroup className="max-w-md space-y-6 items-start">
                    <h2 className="text-3xl lg:text-5xl">Feature Title</h2>
                    <p className="text-lg lg:text-xl">Feature Description</p>
                    <Button 
                        asChild 
                        size="sm"
                    >
                        <Link href="#">
                            Shop Now
                        </Link>
                    </Button>

                </hgroup>
                {/* Enhance the image with next/image */}
                <div className="h-50 w-50">
                <Image 
                    priority
                    width={250}
                    height={250}
                    quality={100}
                    src="/product-5.webp"
                    alt="Domino Bookshelf"
                    className="object-cover w-full h-full rounded-sm"
                />
                </div>
            </aside>
        </article>
     )
}