import Link from "next/link";
import DecorativeBorder from "./DecorativeBorder";

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-10 overflow-hidden">
      <DecorativeBorder className="absolute top-0 left-0 text-background opacity-20" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-none mb-6">
          BihariDesigner
        </h2>
        
        <p className="text-xl md:text-2xl font-medium mb-16 max-w-2xl text-mithila">
          Made with pixels, patterns & a little bit of Bihar.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl mb-16 uppercase tracking-widest text-sm font-bold">
          <Link href="#" className="hover:text-terracotta transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-terracotta transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-terracotta transition-colors">Behance</Link>
          <Link href="/contact" className="hover:text-terracotta transition-colors">Contact</Link>
        </div>

        <div className="w-full border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} BihariDesigner. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Design jo scroll rok de.</p>
        </div>
      </div>
    </footer>
  );
}
