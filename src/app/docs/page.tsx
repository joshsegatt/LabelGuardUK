import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, ShieldAlert, Zap, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Documentation | LabelGuardUK",
    description: "Learn how to use LabelGuardUK to generate compliant food labels instantly.",
};

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <div className="h-4 w-px bg-white/20"></div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" />
                            <span className="font-bold tracking-tight">Documentation</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-24">
                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Getting Started</h3>
                        <ul className="space-y-2 mb-8">
                            <li>
                                <a href="#introduction" className="block text-sm text-primary font-medium hover:text-primary transition-colors">Introduction</a>
                            </li>
                            <li>
                                <a href="#quick-start" className="block text-sm text-white/60 hover:text-white transition-colors">Quick Start Guide</a>
                            </li>
                        </ul>

                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Core Features</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#natashas-law" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                                    <ShieldAlert className="w-3 h-3" /> Natasha's Law
                                </a>
                            </li>
                            <li>
                                <a href="#pdf-engine" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                                    <Zap className="w-3 h-3" /> Real-time PDF Build
                                </a>
                            </li>
                            <li>
                                <a href="#templates" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                                    <FileText className="w-3 h-3" /> Premium Templates
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 max-w-3xl prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80">
                    <section id="introduction" className="mb-16 scroll-mt-24">
                        <h1>LabelGuardUK Documentation</h1>
                        <p className="text-xl text-white/60 font-light leading-relaxed">
                            Welcome to the official documentation for LabelGuardUK. Learn how to automate your food labeling process and guarantee compliance with UK regulations.
                        </p>
                    </section>

                    <section id="quick-start" className="mb-16 scroll-mt-24">
                        <h2>Quick Start Guide</h2>
                        <p>Getting your first compliant label ready takes less than two minutes:</p>
                        <ol className="space-y-4">
                            <li><strong>Access the Builder:</strong> Navigate to the Label Builder from your dashboard.</li>
                            <li><strong>Product Details:</strong> Enter your product name, description, and price.</li>
                            <li><strong>List Ingredients:</strong> Type in your raw ingredients. Our engine will automatically scan and flag any of the 14 major allergens.</li>
                            <li><strong>Generate PDF:</strong> Click the "Generate Print PDF" button to instantly download a high-resolution, print-ready file.</li>
                        </ol>
                    </section>

                    <hr className="border-white/10 my-12" />

                    <section id="natashas-law" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20 text-orange-400">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <h2 className="!mb-0">Natasha's Law Compliance</h2>
                        </div>
                        <p>
                            Natasha's Law requires all food businesses to provide full ingredient lists and allergen labeling on foods pre-packaged for direct sale (PPDS).
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-6">
                            <h4 className="text-white mt-0">How we automate compliance:</h4>
                            <ul className="mb-0">
                                <li>Real-time scanning of your ingredient text against a database of the 14 major allergens.</li>
                                <li>Automatic bolding, capitalization, or highlighting of detected allergens on the final print layout.</li>
                                <li>Warning prompts if a potentially dangerous ingredient is detected but not explicitly declared.</li>
                            </ul>
                        </div>
                    </section>

                    <section id="pdf-engine" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 text-primary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="!mb-0">Real-time PDF Engine</h2>
                        </div>
                        <p>
                            Our proprietary PDF generation engine runs directly in your browser. This means absolutely zero server-side loading times. The moment you click "Generate Print PDF", the exact millimeter-perfect dimensions are compiled into an EAN-13 ready document formatted for standard thermal label printers or A4 sticker sheets.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}
