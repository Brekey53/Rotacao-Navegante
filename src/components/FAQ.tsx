'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o pagamento da taxa semanal?",
    answer: "A taxa de gestão (9% da sua faturação, com um mínimo de 35€ semanais) é deduzida automaticamente dos ganhos gerados nas plataformas Uber e Bolt. O valor restante é transferido integralmente para o seu IBAN todas as semanas. Tudo de forma transparente e sem taxas escondidas."
  },
  {
    question: "Posso usar a minha própria viatura?",
    answer: "Sim, absolutamente. O carro continua em seu nome (DUA). Terá apenas de garantir que o seguro automóvel está adequado para a atividade de TVDE e que a viatura cumpre os requisitos do IMT."
  },
  {
    question: "O que acontece se eu quiser ir de férias?",
    answer: "Sendo um parceiro, tem total liberdade para definir os seus horários e pausas. Para pausas prolongadas (como férias), pedimos apenas que nos avise com alguma antecedência para ajustarmos a gestão do seu perfil e a cobrança da taxa mínima."
  },
  {
    question: "Quanto tempo demora até começar a faturar?",
    answer: "Se já tiver toda a documentação legal válida (Carta, Registo Criminal e Certificado TVDE do IMT), o processo de ativação nas plataformas costuma demorar entre 24 a 48 horas úteis."
  },
  {
    question: "Preciso de abrir atividade nas Finanças?",
    answer: "Não! Esse é um dos nossos maiores benefícios. Trabalhará com um contrato legal diretamente associado à nossa empresa, o que significa que não precisa de ir às Finanças abrir atividade, nem se preocupar com a emissão de recibos verdes ou complexidades contabilísticas. Nós tratamos de toda a burocracia associada ao seu enquadramento legal."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-bold text-[#0D2b45] dark:text-white pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#F1B631] shrink-0"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
