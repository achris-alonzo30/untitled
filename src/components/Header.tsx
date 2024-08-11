import Link from "next/link"

export const Header = () => {
    return (
        <header className="w-full fixed top-0 border-b py-4 px-8 bg-opacity-30">
            <nav className="flex items-center justify-between gap-6 max-w-7xl ">
                <ul className="flex items-center gap-10">
                    <h2 className="font-medium">seika</h2>
                    <Link href="#shop">
                        Shop
                    </Link>
                </ul>
                <ul className="flex items-center gap-10">
                    <Link href="#">
                        Search
                    </Link>
                    <Link href="#">
                        Cart
                    </Link>
                </ul>
            </nav>
        </header>
    )
}