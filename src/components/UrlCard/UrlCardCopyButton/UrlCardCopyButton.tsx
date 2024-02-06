"use client";

import { UrlItem } from "@/models";
import { copyToClipboard } from "@/utils";
import { toast } from "sonner";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components";
import { Copy } from "lucide-react";
import { TINY_TARGET_URL } from "@/constants";

export default function UrlCardCopyButton({ short }: { short: UrlItem['short'] }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Copy
                        size={18}
                        strokeWidth={2.25}
                        className="cursor-pointer active:scale-95"
                        onClick={() => {
                            copyToClipboard(TINY_TARGET_URL + short)
                            toast.info('URL copiada al portapapeles');
                        }}
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Copiar</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
