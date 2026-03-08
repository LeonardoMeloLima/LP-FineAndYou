/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Leaf, 
  ShieldCheck, 
  Activity, 
  Heart, 
  HeartHandshake, 
  Check, 
  TrendingDown, 
  Shield 
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white text-brand-dark overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 w-full px-4 pt-6 pb-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto bg-brand-dark text-white rounded-full px-6 py-3 flex items-center justify-between shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-white" />
            <span className="font-medium text-lg tracking-wide">FineAndYou</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-light">
            <a href="#" className="hover:text-brand-sage transition">Plataforma</a>
            <a href="#" className="hover:text-brand-sage transition">Soluções</a>
            <a href="#" className="hover:text-brand-sage transition">Para Quem</a>
            <a href="#" className="hover:text-brand-sage transition">Contato</a>
          </div>

          <a href="#" className="bg-white text-brand-dark px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-sage transition">
            Falar com consultor
          </a>
        </motion.div>
      </nav>

      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="https://picsum.photos/seed/wellness1/1920/1080"
            className="w-full h-full object-cover object-center"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 lg:w-1/2 text-white pr-8"
          >
            {/* Pills mimicking image pattern */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm border border-white/30 font-light">Gestão Integrada</span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm border border-white/30 font-light">Saúde Ocupacional</span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm border border-white/30 font-light">NR1 Compliance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-6 tracking-tight">
              Pare de tratar a saúde do seu time apenas como burocracia.
            </h1>
            
            <p className="text-lg md:text-xl text-brand-sage font-light leading-relaxed mb-10 max-w-xl">
              Cumprir a NR1 e gerenciar afastamentos não precisa ser uma dor de cabeça. A FineAndYou blinda sua empresa contra passivos trabalhistas enquanto entrega um cuidado real com a saúde mental e física das suas pessoas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#" className="bg-white text-brand-dark px-8 py-3.5 rounded-full font-medium hover:bg-brand-sage transition shadow-lg">
                Falar com nossa equipe
              </a>
              <a href="#" className="text-white border-b border-white/40 pb-0.5 hover:border-white transition text-sm font-light mt-4 sm:mt-0">
                Conhecer o app para mim (Pessoa Física)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="bg-brand-sage py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Stat Circles */}
          <motion.div 
            {...fadeIn}
            className="relative w-[300px] h-[300px] flex-shrink-0 flex items-center justify-center"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-dark text-white flex flex-col justify-center items-center text-center shadow-xl z-10">
              <span className="text-4xl font-light mb-1">Zero</span>
              <span className="text-sm font-light text-brand-sage uppercase tracking-wider">Passivos</span>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-brand-dark text-white flex flex-col justify-center items-center text-center shadow-xl border-[6px] border-brand-sage">
              <span className="text-3xl font-light mb-1">100%</span>
              <span className="text-sm font-light text-brand-sage uppercase tracking-wider">NR1</span>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            {...fadeIn}
            className="flex-1 lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-normal text-brand-dark leading-snug mb-6">
              Sua empresa não precisa de mais um PDF guardado na gaveta.
            </h2>
            <p className="text-lg text-brand-dark/80 font-light leading-relaxed mb-10 max-w-2xl">
              O mercado adora vender relatórios estáticos de 50 páginas só para "cumprir a lei". Mas papel não previne burnout, não reduz o número de atestados e não evita processos por riscos psicossociais. Para proteger sua empresa de verdade, você precisa sair do modo reativo.
            </p>
            
            {/* Bottom mini features */}
            <div className="flex flex-wrap gap-8 text-brand-dark font-medium text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /> Proteção Jurídica</div>
              <div className="flex items-center gap-2"><Activity className="w-5 h-5 text-green-600" /> Gestão Ativa</div>
              <div className="flex items-center gap-2"><Heart className="w-5 h-5 text-green-600" /> Cuidado Humano</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Solution (Cards) */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-normal text-brand-dark mb-4">
              Gestão de saúde que funciona na prática (para o RH e para o colaborador).
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-brand-light p-10 rounded-[2rem] hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="text-xl font-medium text-brand-dark mb-3">Antecipe o problema</h3>
              <p className="text-brand-dark/70 font-light leading-relaxed text-sm">
                Mapeamos o clima e a saúde da equipe continuamente através de autoavaliações. Você consegue enxergar tendências e agir antes que o atestado médico chegue à sua mesa.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-brand-light p-10 rounded-[2rem] hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="text-xl font-medium text-brand-dark mb-3">Compliance sem letras miúdas</h3>
              <p className="text-brand-dark/70 font-light leading-relaxed text-sm">
                Guiamos o seu RH e a sua consultoria parceira passo a passo. Garantimos que sua empresa cumpra 100% das exigências da NR1 (inclusive os riscos psicossociais) de um jeito simples e rastreável.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-brand-light p-10 rounded-[2rem] hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="text-xl font-medium text-brand-dark mb-3">Acolhimento rápido e sigiloso</h3>
              <p className="text-brand-dark/70 font-light leading-relaxed text-sm">
                Detectou um risco alto? O colaborador tem acesso imediato a psicólogos e profissionais de saúde direto pelo nosso aplicativo, com total privacidade. Sem fricção, sem exposição.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: For Whom */}
      <div className="bg-white pt-12 pb-4 text-center px-6">
        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-normal text-brand-dark">
          Seguro para o caixa da empresa.<br/> Excelente para as pessoas.
        </motion.h2>
      </div>

      {/* For Whom 1: HR */}
      <section className="bg-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-3xl font-normal text-brand-dark mb-6">Para o RH e Diretoria</h3>
            <p className="text-lg text-brand-dark/80 font-light leading-relaxed mb-10">
              Tenha um painel com dados anonimizados em tempo real. Reduza a sinistralidade do plano de saúde, diminua o turnover e tenha paz de espírito com a segurança jurídica.
            </p>
            
            {/* Pill badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-light text-xs font-medium text-brand-dark border border-brand-sage/50">
                <Check className="w-3.5 h-3.5 text-green-600" /> Dados em Tempo Real
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-light text-xs font-medium text-brand-dark border border-brand-sage/50">
                <TrendingDown className="w-3.5 h-3.5 text-green-600" /> Redução de Custos
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-light text-xs font-medium text-brand-dark border border-brand-sage/50">
                <Shield className="w-3.5 h-3.5 text-green-600" /> Segurança Jurídica
              </span>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/hrdashboard/800/900" 
              alt="HR Dashboard Interface" 
              className="w-full h-auto rounded-[2rem] shadow-xl object-cover aspect-[4/5]" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* For Whom 2: Employee */}
      <section className="bg-brand-sage py-20 px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="w-full md:w-5/12">
            <img 
              src="https://picsum.photos/seed/employeeapp/800/1000" 
              alt="Employee App Usage" 
              className="w-full h-auto rounded-[2rem] shadow-lg object-cover aspect-[3/4]" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div {...fadeIn} className="w-full md:w-7/12 md:pl-8">
            {/* Pill badges top */}
            <div className="flex gap-3 mb-8">
              <span className="bg-white text-brand-dark px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">100% Sigiloso</span>
              <span className="bg-white text-brand-dark px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">Uso Intuitivo</span>
              <span className="bg-white text-brand-dark px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">Apoio Imediato</span>
            </div>

            <h3 className="text-3xl font-normal text-brand-dark mb-6">Para o Colaborador</h3>
            <p className="text-lg text-brand-dark/80 font-light leading-relaxed mb-10 max-w-xl">
              Um espaço seguro, sigiloso e fácil de usar. Acompanhamento de hábitos, trilhas de autoconhecimento e agendamento rápido de consultas. Tudo na palma da mão.
            </p>
            
            <a href="#" className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-opacity-90 transition">
              Ver como funciona o app
            </a>
          </motion.div>
        </div>
      </section>

      {/* For Whom 3: Consultancy */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-normal text-brand-dark mb-8 leading-tight">
              Para a Consultoria de SST
            </h3>
            <p className="text-lg text-brand-dark/80 font-light leading-relaxed mb-8">
              Ferramentas integradas para rodar o ciclo do PGR/GRO dos seus clientes com agilidade, entregando muito mais valor do que apenas laudos técnicos.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-dark font-medium border-b border-gray-100 pb-4">
                <Check className="w-5 h-5 text-brand-dark" />
                Automação de processos burocráticos
              </li>
              <li className="flex items-center gap-3 text-brand-dark font-medium border-b border-gray-100 pb-4">
                <Check className="w-5 h-5 text-brand-dark" />
                Entrega de valor contínuo ao cliente
              </li>
              <li className="flex items-center gap-3 text-brand-dark font-medium pb-4">
                <Check className="w-5 h-5 text-brand-dark" />
                Mapeamento de riscos psicossociais facilitado
              </li>
            </ul>
          </motion.div>
          <motion.div {...fadeIn} className="w-full md:w-1/2">
            <img 
              src="https://picsum.photos/seed/sstconsultancy/800/700" 
              alt="Consultancy Tools" 
              className="w-full h-auto rounded-[2rem] shadow-xl object-cover aspect-[5/4]" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-brand-light py-24 px-6 lg:px-8 border-t border-brand-sage/30">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-normal text-brand-dark mb-6 leading-tight">
            Cuidar de quem faz sua empresa crescer é o melhor investimento.
          </h2>
          <p className="text-lg text-brand-dark/70 font-light mb-10 max-w-2xl mx-auto">
            Tire o peso da gestão de saúde das suas costas. Vamos bater um papo rápido para entender o momento da sua equipe e te mostrar como a plataforma funciona por dentro.
          </p>
          <a href="#" className="inline-block bg-brand-dark text-white px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition shadow-lg text-lg">
            Agendar um bate-papo
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-brand-dark" />
            <span className="font-medium text-xl text-brand-dark tracking-wide">FineAndYou</span>
          </div>
          
          <div className="flex gap-6 text-sm text-brand-dark/60 font-light">
            <a href="#" className="hover:text-brand-dark transition">Privacy Policy</a>
            <a href="#" className="hover:text-brand-dark transition">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
