import React from "react";

const RadialGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* MAIN LARGE GLOW EFFECTS */}
     
           {/* Main Purple Glow */}
      <div
        className="absolute top-[-15%] left-[10%] w-[900px] h-[900px] rounded-full animate-pulseGlow"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(59,130,246,0.12) 45%, transparent 75%)",
        }}
      />

      {/* Right Blue Glow */}
      <div
        className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.10) 45%, transparent 75%)",
        }}
      />

      {/* Bottom Pink Glow */}
      <div
        className="absolute bottom-[-15%] left-[15%] w-[850px] h-[850px] rounded-full animate-scaleGlow"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.14) 0%, rgba(139,92,246,0.08) 50%, transparent 80%)",
        }}
      />

      {/* Center Blue Glow */}
      <div
        className="absolute top-[35%] left-[35%] w-[500px] h-[500px] rounded-full animate-pulseGlow"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ROTATING CIRCLES */}
     
      {/* Large Rotating Circle */}
      <div className="absolute top-[18%] left-[12%] w-[500px] h-[500px] border border-black/5 dark:border-white/5 rounded-full animate-spin-slow" />

      {/* Medium Rotating Circle */}
      <div className="absolute bottom-[12%] right-[15%] w-[350px] h-[350px] border border-primary/10 rounded-full animate-spin-slow" />

      {/* Small Rotating Circle */}
      <div className="absolute top-[55%] left-[55%] w-[220px] h-[220px] border border-pink-400/10 rounded-full animate-spin-slow" />

      
      {/* GRID DESIGN EFFECT */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOWING LINES */}

      {/* Horizontal Line */}
      {/*<div className="absolute top-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" /> */}

      {/* Vertical Line */}
      {/* <div className="absolute top-0 left-[35%] h-full w-[1px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" /> */}

      {/* Diagonal Accent Box */}
      <div className="absolute bottom-[20%] left-[30%] w-[220px] h-[220px] border border-blue-400/10 rotate-12 animate-float" />

      {/* FLOATING SMALL GLOW DOTS */}

      <div
        className="absolute top-[20%] left-[75%] w-[180px] h-[180px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[20%] right-[20%] w-[250px] h-[250px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-[70%] left-[8%] w-[150px] h-[150px] rounded-full animate-pulseGlow"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      {/* BLUR LIGHT EFFECT */}

      <div className="absolute top-[10%] left-[40%] w-[300px] h-[300px] bg-purple-500/5 blur-3xl rounded-full" />

      <div className="absolute bottom-[5%] right-[30%] w-[250px] h-[250px] bg-pink-500/5 blur-3xl rounded-full" />

    </div>
  );
};

export default RadialGradientBackground;
