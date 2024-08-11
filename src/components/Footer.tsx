import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex-1 mt-auto w-full py-4 px-8">
            <nav className="flex items-center justify-between gap-6 max-w-7xl ">
                <ul>
                    <h2>seika</h2>
                </ul>

                <ul>
                    <Link href="#">
                        Search
                    </Link>
                    <Link href="#">
                        Cart
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}