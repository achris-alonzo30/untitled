import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
    {
        src:"/product-1.webp",
        alt: "Juame Ramirez Studio Chair",
    },
    {
        src:"/product-2.webp",
        alt: "Corpus Studio BB Chair",
    },
    {
        src:"/product-3.webp",
        alt: "Paul Coenen Arm Chair",
    },
    {
        src:"/product-4.webp",
        alt: "PPAA Coffee Table",
    }
]


export const Products = () => {
    return (
        <article className="text-center mx-auto w-full py-8 sm:py-12">
            <aside className="mx-auto flex flex-col items-center justify-center gap-9 px-8 sm:px-16">
                <hgroup className="text-center mx-auto max-w-md space-y-4 w-full">
                    <h1 className="text-3xl lg:text-5xl">Feature Products</h1>
                    <p className="text-lg lg:text-xl">Feature Products Description</p>
                </hgroup>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center col-span-1">
                    {products.map(({src, alt}, idx) => (
                        <Image 
                            src={src}
                            alt={alt}
                            key={idx}
                            width={250}
                            height={250}
                            quality={100}
                            className="object-cover w-50 h-50 rounded-sm"
                        />
                    ) )}
                </div>
                <div className="max-w-md">
                    <Button
                        asChild
                        size="sm"
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