import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-primary via-[#ff0080] to-background opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.187rem]" />
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
                <Link href="/" className="flex justify-center items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white mb-2">
                    Welcome back
                </h2>
                <p className="text-center text-sm text-muted-foreground">
                    Please enter your details to access your business&apos;s food labels.
 and templates.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px] z-10">
                <div className="glass px-6 py-12 shadow-2xl sm:rounded-2xl sm:px-12 border border-white/10 group hover:border-white/20 transition-colors">
                    <form className="space-y-6" action="/dashboard">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white text-left">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="vendor@example.com"
                                    className="block w-full rounded-lg border-0 bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-4 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{' '}
                        <Link href="/dashboard" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                            Start for free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
