import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components";
import { Github, Linkedin } from 'lucide-react';
import Link from "next/link";

export function Footer() {
    return (
        <footer className="fixed w-full bottom-0 bg-white dark:bg-[#140d02] z-100">
            <div className="size-full h-12 flex justify-between items-center px-6 animate-slide-up bg-white dark:bg-[#140d02]">
                <p className="text-sm text-foreground">
                    Hecho por <Link href="https://matiasgonta.vercel.app/" target="_blank" className="underline transition-colors text-foreground hover:text-tiny-target-primary dark:hover:text-tiny-target-secondary">Matías Gonta</Link> • © {new Date().getFullYear()} Tiny Target. Todos los derechos reservados.
                </p>
                <ul className="flex gap-2.5 items-center ml-4">
                    <li className="overflow-hidden">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://www.linkedin.com/in/matías-gonta/"
                                        target="_blank"
                                        className="overflow-hidden relative size-fit transition-colors text-foreground hover:text-tiny-target-primary dark:hover:text-tiny-target-secondary"
                                    >
                                        <Linkedin size={20} />
                                        <span className="absolute -left-1/2 pointer-events-none size-0">Ir a Linkedin</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Ir a Linkedin</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                    <li className="overflow-hidden">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://github.com/MatiasGonta/tiny-target"
                                        target="_blank"
                                        className="overflow-hidden relative size-fit transition-colors text-foreground hover:text-tiny-target-primary dark:hover:text-tiny-target-secondary"
                                    >
                                        <Github size={20} />
                                        <span className="absolute -left-1/2 pointer-events-none size-0">Ir a Github</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Ir a Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                </ul>
            </div>
        </footer>
    )
}