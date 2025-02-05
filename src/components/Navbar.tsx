"use client";
import { cn } from "@/lib/utils";
import { type HTMLMotionProps, motion, type Variants } from "motion/react"
import Link from "next/link";
export function Navbar() {
    const navbarVariants: Variants = {
        initial: {
            y: -100,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'linear'
            }
        }
    }
    return (
        <motion.header
            initial={{
                y: -100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    ease: [ 0, 0.71, 0.2, 1.01 ]
                }
            }}
            className={'w-full h-fit bg-primary text-primary-foreground font-medium text-base flex items-center justify-center'}>
            <motion.nav className={'w-full max-w-screen-2xl h-fit bg-inherit p-4 flex justify-between items-center'}>
                <NavLogo>
                    Logo
                </NavLogo>
                <NavLinks />
            </motion.nav>
        </motion.header>
    );
}

export function NavLogo({ children, className, ...args }: { children?: React.ReactNode } & HTMLMotionProps<'div'>) {
    return (
        <motion.div className={cn("cursor-pointer", className)} {...args}>
            <Link href={'/'} className={'w-full'} aria-label="Home">
                {
                    children ? children : "Logo"
                }
            </Link>
        </motion.div>
    )
}

export function NavLinks() {
    const navLinks = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Projects",
            url: "/projects"
        },
        {
            name: "Contact",
            url: "/contact"
        },
        {
            name: "Blog",
            url: "/blog"
        }
    ]
    return (
        <motion.ul className={'flex gap-4'}>
            {
                navLinks.map((link) => (
                    <motion.li key={link.name}>
                        <Link title={link.name} href={link.url}>
                            {link.name}
                        </Link>
                    </motion.li>
                ))
            }
        </motion.ul>
    )
}