import { ModeToggle, SigninForm, SignupForm, Tabs, TabsContent, TabsList, TabsTrigger, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components";
import { Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Autenticación | Tiny Target',
}
export default function AuthPage({ searchParams }: { searchParams: { [key: string]: string } }) {
    const { mode } = searchParams;

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between pt-20 sm:pt-16 p-16">
            <div className="absolute top-5 right-5 flex gap-1.5 items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/" className="overflow-hidden relative size-10 rounded-md bg-primary hover:bg-primary/90 flex items-center justify-center text-tiny-target-primary">
                                <Home size={19} />
                                <span className="absolute -left-1/2 pointer-events-none size-0">Ir al inicio</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Ir al inicio</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <ModeToggle />
            </div>

            <section>
                <Tabs defaultValue={mode || "signin"} className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2 bg-tiny-target-secondary text-tiny-target-primary">
                        <TabsTrigger value="signin">Iniciar sesión</TabsTrigger>
                        <TabsTrigger value="signup">Registrarse</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                        <h2 className="font-bold text-[35px] text-center my-6 text-foreground">Ingrese a su cuenta</h2>
                        <SigninForm />
                    </TabsContent>
                    <TabsContent value="signup">
                        <h2 className="font-bold text-[35px] text-center my-6 text-foreground">Crea tu cuenta</h2>
                        <SignupForm />
                    </TabsContent>
                </Tabs>
            </section>
        </main>
    )
}