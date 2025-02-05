import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";


export default function Container({ children, className, ...args }: ComponentProps<'div'>) {
    return (
        <div className={cn("w-full max-w-screen-2xl mx-auto px-2 xl:px-0", className)} {...args}>
            {children}
        </div>
    );
}