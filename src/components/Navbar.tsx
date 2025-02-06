"use client";
import { cn } from "@/lib/utils";
import { type HTMLMotionProps, motion } from "motion/react"
import Link from "next/link";
import { Button } from "./ui/button";
import { IconMenu2, IconTopologyStar2, IconX } from '@tabler/icons-react';
import { useState } from "react";
import { useRouter } from "next/navigation";
export function Navbar() {
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
            <motion.nav className={'w-full max-w-screen-2xl h-fit bg-inherit p-4 flex items-center gap-4'}>
                <NavLogo>
                    <div className="flex gap-2 items-center">
                        <IconTopologyStar2 />
                        <h1>ACME</h1>
                    </div>
                </NavLogo>
                <NavSpacer />
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
    const [ showMenu, setShowMenu ] = useState(false);
    const router = useRouter();
    return (
        <div className={'relative'}>
            <motion.ul className={'hidden md:flex gap-4'} aria-label="Menu" >
                {
                    navLinks.map((link) => (
                        <motion.li key={link.name}>
                            <Link title={link.name} href={link.url} onMouseEnter={() => { router.prefetch(link.url); }} prefetch={false}>
                                {link.name}
                            </Link>
                        </motion.li>
                    ))
                }
            </motion.ul>
            <Button size={'icon'} variant={'secondary'} className={'flex md:hidden'} onClick={() => { setShowMenu(true) }}>
                <IconMenu2 />
            </Button>
            {showMenu && (
                <motion.div className={'fixed top-0 left-0 w-full h-screen bg-primary flex z-10'} aria-hidden={showMenu}>
                    <motion.ul className={'w-full flex flex-col overflow-y-auto'} aria-label="Menu">
                        <motion.li className={' shrink-0 w-full p-4 text-lg flex items-center justify-end'}>
                            <Button size={'icon'} variant={'secondary'} onClick={() => { setShowMenu(false) }}>
                                <IconX />
                            </Button>
                        </motion.li>
                        {
                            navLinks.map((link) => (
                                <motion.li key={link.name} className={'hover:bg-accent/10 shrink-0 text-lg flex'}>
                                    <Link title={link.name} href={link.url} className={'w-full p-4 py-8'} onClick={() => { setShowMenu(false) }} prefetch={false}>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </motion.div>
            )}
        </div>
    )
}

export function NavSpacer() {
    return (
        <div className={'w-full flex h-full bg-red-500'} aria-hidden={true} />
    )
}