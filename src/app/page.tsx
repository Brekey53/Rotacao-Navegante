'use client';

import Image from 'next/image';
import Link from 'next/link';
import Simulator from '@/components/Simulator';
import FAQ from '@/components/FAQ';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden">
      {/* Secção 1: Header e Hero Section */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {/* Logo */}
            <div className="text-2xl font-bold text-[#0D2b45] dark:text-white flex items-center gap-2">
              <span className="text-[#F1B631] text-3xl">🧭</span>
              Rotação <span className="text-[#F1B631]">Navegante</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <nav className="hidden md:flex space-x-6">
              <a href="#o-que-e" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0D2b45] dark:hover:text-[#F1B631] transition-colors">O Que É</a>
              <a href="#vantagens" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0D2b45] dark:hover:text-[#F1B631] transition-colors">Vantagens</a>
              <a href="#documentos" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0D2b45] dark:hover:text-[#F1B631] transition-colors">Documentos</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0D2b45] dark:hover:text-[#F1B631] transition-colors">FAQ</a>
              <a href="#simulador" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0D2b45] dark:hover:text-[#F1B631] transition-colors">Simulador</a>
              <a href="#contactos" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0D2b45] dark:hover:text-[#F1B631] transition-colors">Contactos</a>
            </nav>
            <ThemeToggle />
          </motion.div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#0D2b45] text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10" />
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
              alt="Condutor num carro moderno pela cidade, representando a atividade TVDE"
              className="w-full h-full object-cover object-center"
              aria-hidden="true"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Acelere os seus rendimentos <br className="hidden md:block"/> sem burocracias.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-200 mb-4 italic font-light">
                "O rumo certo para o seu destino."
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                Junte-se à Rotação Navegante, utilize a nossa licença de Operador TVDE por uma quota fixa semanal e fique com 100% dos seus lucros.
              </motion.p>
              <motion.a 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contactos"
                className="inline-block bg-[#F1B631] text-[#0D2b45] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-colors duration-300 mb-6"
                aria-label="Quero Começar a Conduzir - Ir para os contactos"
              >
                Quero Começar a Conduzir
              </motion.a>
              <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-2 text-slate-300 text-sm">
                <span className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#0D2b45] overflow-hidden"><img src="https://i.pravatar.cc/100?img=11" alt="Motorista" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#0D2b45] overflow-hidden"><img src="https://i.pravatar.cc/100?img=33" alt="Motorista" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#0D2b45] overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt="Motorista" /></div>
                </span>
                <span>Junte-se a dezenas de condutores de sucesso.</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Secção 2: O que é o Slot TVDE? */}
        <section id="o-que-e" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2b45] dark:text-white mb-4">O que é o Slot TVDE?</h2>
              <div className="w-24 h-1 bg-[#F1B631] mx-auto rounded-full mb-8"></div>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Em Portugal, para trabalhar na Uber e Bolt é obrigatório estar associado a uma empresa (Operador TVDE) com licença do IMT.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            >
              
              {/* Card 1: Como funciona (Faixa Amarela) */}
              <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-white/5 border-l-4 border-l-[#F1B631] flex flex-col justify-center h-full hover:shadow-md dark:hover:shadow-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0D2b45] dark:text-white mb-4">Como funciona na Rotação Navegante?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Em vez de criar a sua própria empresa ou abrir atividade nas Finanças, trabalha com um contrato legal através da nossa empresa. Mantém o carro em seu nome, faz os seus próprios horários e utiliza a nossa licença pagando apenas uma <span className="text-[#0D2b45] dark:text-white font-bold">taxa fixa (quota semanal) de gestão</span>.
                </p>
              </motion.div>

              {/* Card 2: Checklist (Ícone Edifício) */}
              <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-white/5 relative overflow-hidden group flex flex-col justify-center h-full hover:shadow-md dark:hover:shadow-white/10 transition-all duration-300">
                <div className="absolute -top-4 -right-4 text-8xl opacity-10 dark:opacity-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" aria-hidden="true">🏢</div>
                <ul className="space-y-5 relative z-10">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F1B631] mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300 text-lg">Não precisa de abrir empresa (Lda. ou Unipessoal)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F1B631] mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300 text-lg">Carro continua legalmente em seu nome</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#F1B631] mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300 text-lg">Zero preocupações com contabilidade complexa</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Secção 3: Vantagens */}
        <section id="vantagens" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2b45] dark:text-white mb-4">Porquê juntar-se a nós?</h2>
              <div className="w-24 h-1 bg-[#F1B631] mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-white/5 border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-[#F1B631]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D2b45] dark:text-white mb-3">Lucro Transparente</h3>
                <p className="text-slate-600 dark:text-slate-300 flex-grow">Fica com os seus lucros das viagens. Não cobramos percentagens, apenas a quota semanal fixa.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-white/5 border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-[#F1B631]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D2b45] dark:text-white mb-3">Zero Burocracias</h3>
                <p className="text-slate-600 dark:text-slate-300 flex-grow">Tratamos de todo o processo de integração nas plataformas, licenciamento e emissão de faturas.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-white/5 border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-[#F1B631]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D2b45] dark:text-white mb-3">Independência</h3>
                <p className="text-slate-600 dark:text-slate-300 flex-grow">Sem horários obrigatórios, sem chefes. É o seu próprio patrão, nós somos apenas o seu parceiro legal.</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-white/5 border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-[#F1B631]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D2b45] dark:text-white mb-3">Pagamentos Rápidos</h3>
                <p className="text-slate-600 dark:text-slate-300 flex-grow">Processamento semanal garantido diretamente na sua conta IBAN, sem atrasos.</p>
              </motion.div>

              {/* Card 5 */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-white/5 border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full sm:col-span-2 lg:col-span-2">
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-[#F1B631]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D2b45] dark:text-white mb-3">Apoio Personalizado</h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl flex-grow">Contacto direto e humano. Mais do que parceiros, somos a equipa que o apoia na estrada, pronta para resolver qualquer questão com as plataformas.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Secção 4: Simulador */}
        <section id="simulador" className="py-24 bg-[#0D2b45] dark:bg-slate-950 text-white transition-colors duration-300 border-y border-slate-800 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Simule os seus rendimentos</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-300 mb-12 max-w-2xl mx-auto text-lg">Veja o quanto pode ganhar por semana trabalhando com a nossa licença, pagando apenas a quota fixa.</motion.p>
            
            <motion.div variants={fadeInUp}>
              <Simulator />
            </motion.div>
          </motion.div>
        </section>

        {/* Secção 5: Requisitos e Documentação */}
        <section id="documentos" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2b45] dark:text-white mb-4">Requisitos e Documentação</h2>
              <div className="w-24 h-1 bg-[#F1B631] mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 lg:gap-12"
            >
              <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm dark:shadow-white/5 hover:shadow-md dark:hover:shadow-white/10 transition-shadow">
                <h3 className="text-2xl font-bold text-[#0D2b45] dark:text-white mb-6 flex items-center">
                  <span className="bg-[#F1B631] text-[#0D2b45] w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shrink-0">1</span>
                  Para o Motorista
                </h3>
                <ul className="space-y-4">
                  {[
                    "Carta de Condução (mais de 3 anos)",
                    "Averbamento no Grupo 2",
                    "Certificado de Motorista TVDE (IMT)",
                    "Registo Criminal (sem antecedentes)",
                    "Cartão de Cidadão e Comprovativo de IBAN"
                  ].map((req, i) => (
                    <li key={i} className="flex items-center text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 p-3 sm:p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 transition-colors hover:border-[#F1B631] dark:hover:border-[#F1B631]">
                      <span className="text-green-500 dark:text-green-400 mr-3 shrink-0" aria-hidden="true">✓</span> 
                      <span className="text-sm sm:text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm dark:shadow-white/5 hover:shadow-md dark:hover:shadow-white/10 transition-shadow">
                <h3 className="text-2xl font-bold text-[#0D2b45] dark:text-white mb-6 flex items-center flex-wrap gap-2">
                  <div className="flex items-center">
                    <span className="bg-[#F1B631] text-[#0D2b45] w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shrink-0">2</span>
                    Para a Viatura
                  </div>
                  <span className="text-sm font-normal text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">(Se tiver carro)</span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 p-3 sm:p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 transition-colors hover:border-[#F1B631] dark:hover:border-[#F1B631]">
                    <span className="text-green-500 dark:text-green-400 mr-3 mt-0.5 shrink-0" aria-hidden="true">✓</span> 
                    <div>
                      <span className="block font-medium text-sm sm:text-base">DUA (Documento Único Automóvel)</span>
                      <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 block">O carro pode continuar no seu nome</span>
                    </div>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 p-3 sm:p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 transition-colors hover:border-[#F1B631] dark:hover:border-[#F1B631]">
                    <span className="text-green-500 dark:text-green-400 mr-3 shrink-0" aria-hidden="true">✓</span> 
                    <span className="text-sm sm:text-base">Seguro compatível com atividade TVDE</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 p-3 sm:p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 transition-colors hover:border-[#F1B631] dark:hover:border-[#F1B631]">
                    <span className="text-green-500 dark:text-green-400 mr-3 shrink-0" aria-hidden="true">✓</span> 
                    <span className="text-sm sm:text-base">Folha de Inspeção e Dísticos</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Secção 6: Passos para Começar */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2b45] dark:text-white mb-4">Passos para Começar</h2>
              <div className="w-24 h-1 bg-[#F1B631] mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 relative"
            >
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-1 bg-slate-200 dark:bg-slate-800 -z-0"></div>
              
              <motion.div variants={fadeInUp} className="text-center relative z-10 group">
                <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-[#0D2b45] dark:text-white border-4 border-[#F1B631] mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-yellow-500/20">1</div>
                <h4 className="text-lg font-bold text-[#0D2b45] dark:text-white mb-2">Submeta Documentos</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Envie a sua documentação via WhatsApp ou Email.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center relative z-10 group">
                <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-[#0D2b45] dark:text-white border-4 border-[#F1B631] mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-yellow-500/20">2</div>
                <h4 className="text-lg font-bold text-[#0D2b45] dark:text-white mb-2">Análise</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Avaliamos e aprovamos num prazo de 24h a 48h.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center relative z-10 group">
                <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-[#0D2b45] dark:text-white border-4 border-[#F1B631] mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-yellow-500/20">3</div>
                <h4 className="text-lg font-bold text-[#0D2b45] dark:text-white mb-2">Ativação</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Ativamos o seu perfil nas plataformas Uber e Bolt.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center relative z-10 group">
                <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-[#0D2b45] dark:text-white border-4 border-[#F1B631] mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:shadow-yellow-500/20">4</div>
                <h4 className="text-lg font-bold text-[#0D2b45] dark:text-white mb-2">Comece a Faturar</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Receba o seu "Kit Legal" e faça-se à estrada.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Secção 7: Perguntas Frequentes */}
        <section id="faq" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2b45] dark:text-white mb-4">Perguntas Frequentes</h2>
              <div className="w-24 h-1 bg-[#F1B631] mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Esclareça as dúvidas mais comuns sobre a nossa parceria TVDE.
              </p>
            </motion.div>

            <FAQ />
          </div>
        </section>
      </main>

      {/* Secção 8: Footer */}
      <footer id="contactos" className="bg-[#0D2b45] dark:bg-[#071624] text-white pt-16 pb-8 border-t-[6px] border-[#F1B631] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-white flex items-center gap-2 mb-6">
                <span className="text-[#F1B631] text-4xl">🧭</span>
                Rotação <span className="text-[#F1B631]">Navegante</span>
              </div>
              <p className="text-slate-300 max-w-sm mb-6 text-lg italic">
                O rumo certo para o seu destino.
              </p>
              <div className="text-slate-300">
                <p className="font-semibold text-white">Ivan Da Veiga</p>
                <p className="text-sm">Sócio-Gerente</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contactos</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-[#F1B631] shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <a href="https://wa.me/351936037055" className="hover:text-white transition-colors break-all" aria-label="Ligar para +351 936 037 055">+351 936 037 055</a>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-[#F1B631] shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <a href="mailto:rotacao.navegantelda@gmail.com" className="hover:text-white transition-colors text-sm break-all" aria-label="Enviar email para rotacao.navegantelda@gmail.com">rotacao.navegantelda@gmail.com</a>
                </li>
              </ul>
              
              <a 
                href="https://wa.me/351936037055" 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20b858] transition-colors w-full sm:w-auto shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400"
                aria-label="Falar no WhatsApp"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.824-3.113 6.938-6.938 6.938z"/></svg>
                Falar no WhatsApp
              </a>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Links Úteis</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link href="/legal#termos" className="hover:text-white transition-colors text-sm focus:outline-none focus:underline" aria-label="Ler Termos e Condições">Termos e Condições</Link></li>
                <li><Link href="/legal#privacidade" className="hover:text-white transition-colors text-sm focus:outline-none focus:underline" aria-label="Ler Política de Privacidade">Política de Privacidade</Link></li>
                <li><Link href="/legal#cookies" className="hover:text-white transition-colors text-sm focus:outline-none focus:underline" aria-label="Ler Aviso de Cookies">Aviso de Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Rotação Navegante, Lda. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Feito com <span className="text-red-500" aria-hidden="true">♥</span> em Portugal</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        href="https://wa.me/351936037055" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-green-500/30 transition-all duration-300 z-50 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-green-400"
        aria-label="Contactar no WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.824-3.113 6.938-6.938 6.938z"/></svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear whitespace-nowrap ml-0 group-hover:ml-3 font-semibold text-lg">Fale conosco.</span>
      </motion.a>
    </div>
  );
}
