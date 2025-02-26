"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedDumbells = () => {
    const dumbell1Ref = useRef<HTMLImageElement>(null);
    const dumbell2Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (dumbell1Ref.current && dumbell2Ref.current) {
            // Animation pour le premier haltère
            gsap.to(dumbell1Ref.current, {
                x: 100,
                y: 50,
                rotation: 360,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });

            // Animation pour le deuxième haltère
            gsap.to(dumbell2Ref.current, {
                x: -100,
                y: -50,
                rotation: -360,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            {/* Premier haltère */}
            <img
                ref={dumbell1Ref}
                src="/dumbbell.png" // Remplacez par le chemin de votre image d'haltère
                alt="Dumbell"
                style={{ width: "50px", position: "absolute", top: "20%", left: "10%", filter: "invert(1)" }}
            />
            {/* Deuxième haltère */}
            <img
                ref={dumbell2Ref}
                src="/dumbbell.png" // Remplacez par le chemin de votre image d'haltère
                alt="Dumbell"
                style={{ width: "50px", position: "absolute", top: "50%", left: "80%", filter: "invert(1)" }}
            />
        </div>
    );
};

export default AnimatedDumbells;