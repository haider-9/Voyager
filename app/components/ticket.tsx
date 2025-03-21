import { Button } from "./ui/button";
import { Phone } from "lucide-react"; 

export default function Ticket() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-4 bg-[#333]">
      <p className="text-gray-300 mb-2 font-medium">Ready to go?</p>
      <h2 className="heading text-2xl md:text-3xl font-bold  mb-4 text-center">Give us a quick call</h2>
      
      <Button 
        className="
          group relative mt-6 
          bg-[var(--color-slime)] hover:bg-[var(--color-slime)]/80 
          rounded-full px-8 py-6     
          shadow-[0_0_15px_rgba(0,255,0,0.5)] 
          flex items-center gap-2
          animate-bounce
          text-black
        "
      >
        <Phone size={18} className="animate-pulse" />
        <span>Contact us</span>
        <div className="absolute inset-0 rounded-full bg-[var(--color-slime)]/20 blur-md group-hover:blur-xl opacity-70 "></div>
      </Button>
    </div>
  );
}
