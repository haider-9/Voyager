import Marquee from "react-fast-marquee";

export default function TiltedMarquee() {
    const words = ["Luxury", "Enjoy", "Explore", "Adventure"];
    
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="bg-[var(--color-slime)] h-20 w-full absolute" />
            <div className="bg-[var(--color-dark-green)] w-full top-2 relative transform skew-y-2">
                <Marquee speed={100} className="text-white text-xl p-4 skew-y-2">
                    <div className="flex flex-row items-center justify-center gap-10">
                        {[...Array(4)].map((_, i) => (
                            words.map((word, index) => (
                                <span key={`${word}-${i}-${index}`}>{word}</span>
                            ))
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}