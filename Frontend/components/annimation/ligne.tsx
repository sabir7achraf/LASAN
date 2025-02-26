import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLines = () => {
    const line1Ref = useRef<SVGPathElement>(null);
    const line2Ref = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (line1Ref.current && line2Ref.current) {
            // Animation pour la première ligne
            gsap.to(line1Ref.current, {
                attr: { d: "M0,150 Q300,400 600,150 T1200,350" },
                duration: 15,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });

            // Animation pour la deuxième ligne
            gsap.to(line2Ref.current, {
                attr: { d: "M0,250 Q400,500 800,250 T1200,450" },
                duration: 18,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <svg
            width="100%"
            height="100%"
            viewBox="200 200 1800 400"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        >
            {/* Première ligne */}
            <path
                ref={line1Ref}
                d="M0,100 Q300,350 600,100 T1200,300"
                stroke="#f0a500"
                strokeWidth="2"
                fill="none"
                opacity="0.2"
            />
            {/* Deuxième ligne */}
            <path
                ref={line2Ref}
                d="M0,200 Q400,450 800,200 T1200,400"
                stroke="#f0a500"
                strokeWidth="2"
                fill="none"
                opacity="0.15"
            />
        </svg>
    );
};

export default AnimatedLines;