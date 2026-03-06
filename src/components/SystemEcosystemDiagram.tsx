import { motion } from 'motion/react';
import { 
  Database, Globe, LayoutTemplate, Activity, 
  Layers, Zap, Server, Code, Home, 
  MessageCircle, BarChart3, Settings, 
  CheckCircle2, AlertCircle, ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ActivityItem = ({ icon: Icon, title, time, status }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
  >
    <div className={cn("mt-0.5 p-1.5 rounded-md", 
      status === 'success' ? "bg-green-500/20 text-green-400" : 
      status === 'processing' ? "bg-blue-500/20 text-blue-400" : "bg-orange-500/20 text-orange-400"
    )}>
      <Icon size={14} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-medium text-gray-200 truncate">{title}</p>
      <p className="text-[10px] text-gray-500">{time}</p>
    </div>
  </motion.div>
);

const MetricCard = ({ label, value, trend, trendUp }: any) => (
  <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{label}</p>
      <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
    </div>
    <div className={cn("flex items-center gap-1 text-xs mt-2", trendUp ? "text-green-400" : "text-red-400")}>
      {trendUp ? <ArrowUpRight size={14} /> : <ArrowUpRight size={14} className="rotate-90" />}
      <span>{trend}</span>
    </div>
  </div>
);

const ConnectionNode = ({ icon: Icon, label, status, position, delay = 0 }: any) => (
  <motion.div 
    className={cn("absolute p-4 rounded-2xl bg-[#09090b] border border-white/10 shadow-xl flex items-center gap-3 z-20", position)}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="relative">
      <div className={cn("absolute inset-0 blur-lg opacity-40", status === 'active' ? "bg-green-500" : "bg-blue-500")} />
      <div className="relative w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
        <Icon size={20} className="text-white" />
      </div>
      {status === 'active' && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#09090b] animate-pulse" />
      )}
    </div>
    <div>
      <p className="text-xs font-bold text-white">{label}</p>
      <p className="text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-1">
        {status === 'active' ? 'Connected' : 'Syncing...'}
      </p>
    </div>
  </motion.div>
);

export function SystemEcosystemDiagram() {
  return (
    <div className="w-full h-full bg-[#050505] flex overflow-hidden font-sans selection:bg-accent/30 rounded-[28px]">
      
      {/* Sidebar */}
      <div className="w-16 border-r border-white/10 flex flex-col items-center py-6 gap-6 bg-white/5 backdrop-blur-md z-20">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,100,224,0.5)]">
          <Layers size={18} className="text-white" />
        </div>
        {[Home, Database, Globe, LayoutTemplate, MessageCircle, BarChart3].map((Icon, i) => (
          <div key={i} className={cn("p-2 rounded-lg transition-colors cursor-pointer", i === 1 ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300 hover:bg-white/5")}>
            <Icon size={20} />
          </div>
        ))}
        <div className="mt-auto p-2 text-gray-500 hover:text-white cursor-pointer">
          <Settings size={20} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative bg-[url('/grid.svg')] bg-repeat opacity-100">
        {/* Header */}
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-white/5 backdrop-blur-md z-20">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-bold text-white">Integration Hub</h2>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-medium text-green-400">System Operational</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold text-white">Imobiliária Demo</p>
              <p className="text-[10px] text-gray-500">Premium Plan</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-purple-500 border border-white/20" />
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-6 relative z-10 overflow-hidden">
          
          {/* Central Visualization (Graph) */}
          <div className="col-span-12 lg:col-span-8 row-span-4 bg-black/40 border border-white/10 rounded-2xl relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-5" />
            
            {/* Grid Pattern inside Graph */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative">
                <div className="absolute inset-0 bg-accent blur-[40px] opacity-20" />
                <motion.div 
                  className="w-24 h-24 rounded-2xl bg-[#09090b] border border-accent/50 flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,100,224,0.2)] relative z-10"
                  animate={{ boxShadow: ["0 0 30px rgba(0,100,224,0.2)", "0 0 50px rgba(0,100,224,0.4)", "0 0 30px rgba(0,100,224,0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Layers size={32} className="text-accent" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">HUB Core</span>
                </motion.div>
                
                {/* Orbiting Particles */}
                <motion.div 
                  className="absolute inset-[-20px] border border-accent/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#0064E0]" />
                </motion.div>
              </div>
            </div>

            {/* Satellite Nodes */}
            <ConnectionNode icon={Database} label="CRM Source" status="active" position="top-1/2 left-8 -translate-y-1/2" delay={0.2} />
            <ConnectionNode icon={Globe} label="Meta Catalog" status="active" position="top-8 right-12" delay={0.4} />
            <ConnectionNode icon={LayoutTemplate} label="Landing Pages" status="active" position="bottom-8 right-12" delay={0.6} />

            {/* Animated Connections (SVG Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
              {/* CRM -> HUB */}
              <motion.path 
                d="M 140 50% H 50%" 
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* HUB -> Meta */}
              <motion.path 
                d="M 50% 50% L 85% 20%" 
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              {/* HUB -> LPs */}
              <motion.path 
                d="M 50% 50% L 85% 80%" 
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,100,224,0.1)" />
                  <stop offset="50%" stopColor="rgba(0,100,224,0.8)" />
                  <stop offset="100%" stopColor="rgba(0,100,224,0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right Panel: Live Logs */}
          <div className="col-span-12 lg:col-span-4 row-span-6 bg-black/40 border border-white/10 rounded-2xl p-5 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider">Real-time Activity</h3>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-500 font-mono">LIVE</span>
              </div>
            </div>
            
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col gap-2">
                <ActivityItem icon={CheckCircle2} title="Imóvel #4928 atualizado" time="Just now" status="success" />
                <ActivityItem icon={Zap} title="Novo Lead: Campanha Zona Sul" time="2s ago" status="processing" />
                <ActivityItem icon={Globe} title="Catálogo Meta sincronizado" time="15s ago" status="success" />
                <ActivityItem icon={LayoutTemplate} title="LP gerada: Ed. Horizon" time="1m ago" status="success" />
                <ActivityItem icon={AlertCircle} title="Erro imagem: ID #2910" time="3m ago" status="warning" />
                <ActivityItem icon={CheckCircle2} title="Imóvel #1102 atualizado" time="5m ago" status="success" />
                <ActivityItem icon={Zap} title="Novo Lead: Campanha Centro" time="8m ago" status="processing" />
                <ActivityItem icon={MessageCircle} title="WhatsApp enviado: Lead #992" time="12m ago" status="success" />
              </div>
              {/* Fade out bottom */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#09090b] to-transparent" />
            </div>
          </div>

          {/* Bottom Panel: Metrics */}
          <div className="col-span-12 lg:col-span-8 row-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard label="Imóveis Ativos" value="1,284" trend="+12%" trendUp={true} />
            <MetricCard label="Leads Hoje" value="42" trend="+5%" trendUp={true} />
            <MetricCard label="Taxa de Conversão" value="3.8%" trend="+0.4%" trendUp={true} />
          </div>

        </div>
      </div>
    </div>
  );
}
