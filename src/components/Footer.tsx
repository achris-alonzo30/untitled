import Link from "next/link"
import { Newsletter } from "./Newsletter"
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="flex-1 mt-auto w-full px-8 md:py-12 border-t">
            <nav className="container flex flex-col md:flex-row items-center justify-center sm:justify-between gap-6 md:gap-16 max-w-7xl text-sm">
                <ul className="flex flex-col justify-between items-center md:items-start gap-4">
                    <h2 className="font-medium">seika</h2>
                    <div className="flex-1 flex items-center gap-4">
                        <Link href="#">
                            Links
                        </Link>
                        <Link href="#">
                            Links
                        </Link>
                    </div>
                </ul>
                <ul className="flex w-full max-w-sm flex-col gap-2">
                    <h3 className="font-medium">newsletter</h3>
                    <Newsletter />
                </ul>
            </nav>
            <nav className="container mt-8 flex items-center justify-center sm:justify-between gap-16 max-w-7xl w-full text-sm">
                <p>© {new Date().getFullYear()} Seika.</p>
                <ul className="ml-auto flex items-center gap-4">
                    <Link href="#">
                        <FiLinkedin className="size-4" />
                    </Link>
                    <Link href="#">
                        <FiGithub className="size-4" />
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}