import { motion } from 'motion/react';
import { ShinyButton } from '@/components/ui/shiny-button';

// Particle component for the "cosmic river" effect
const ParticleSwarm = () => {
  // Create a dense swarm of particles
  const particles = Array.from({ length: 40 });
  
  return (
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full z-0 overflow-hidden pointer-events-none opacity-60">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-accent rounded-full"
          initial={{
            x: -20, // Start off-screen left
            y: Math.random() * 100 + "%",
            opacity: 0,
            scale: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: ["0%", "120%"], // Flow across to the right (central-left area)
            y: [null, (Math.random() - 0.5) * 20 + "%"], // Slight vertical drift
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10, // Slow flow
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10, // Stagger start
          }}
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            boxShadow: "0 0 10px var(--color-accent)",
          }}
        />
      ))}
    </div>
  );
};

// Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-black via-[#020617] to-[#0f172a]">
      
      {/* Capsule 1: Top Center - Blurred, Breathing */}
      <motion.div
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[40vw] h-[60vh] rounded-[100%] bg-accent/10 blur-[120px]"
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Capsule 2: Bottom Right - Sharper, Metal-like, Rotating */}
      <motion.div
        className="absolute -bottom-[10%] -right-[5%] w-[35vw] h-[35vw] rounded-[40%] border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl shadow-2xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120, // Very slow rotation
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
            boxShadow: "inset 0 0 60px rgba(255,255,255,0.02), 0 0 100px rgba(0,0,0,0.8)"
        }}
      >
        {/* Internal reflection/shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30 rounded-[40%]" />
      </motion.div>

      {/* Capsule 3: Bottom Left - Sharp, Drifting */}
      <motion.div
        className="absolute bottom-[10%] -left-[5%] w-[25vw] h-[25vw] rounded-[35%] border border-accent/10 bg-accent/5 backdrop-blur-2xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
            boxShadow: "inset 0 0 40px rgba(var(--color-accent), 0.1)"
        }}
      />

      {/* Central Particle Swarm */}
      <ParticleSwarm />
      
      {/* Cinematic Overlay/Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </div>
  );
};

export function HeroHubOverview() {
  return (
    <section id="hero_section" className="relative bg-background overflow-hidden min-h-[90vh] flex items-center justify-center">
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl mx-auto"
          >
            Sua imobiliária <span className="text-accent">ainda faz anúncios</span> no Facebook e Instagram <span className="text-accent">de forma manual</span>? 
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Poucas pessoas sabem, mas é possível automatizar e integrar todos os seus imóveis em suas campanhas no Meta ADS, ganhando mais escala e visibilidade
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4"
          >
            <a href="#contact">
              <ShinyButton className="hover:shadow-[0_0_30px_rgba(0,100,224,0.5)] px-8 py-4 text-lg">
                Quero saber mais
              </ShinyButton>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
