import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata = {
  title: "Informação Legal | Rotação Navegante",
  description: "Termos e Condições, Política de Privacidade e Aviso de Cookies da Rotação Navegante.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Header Simplificado */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#F1B631] rounded-lg">
            <span className="text-[#F1B631] text-3xl">🧭</span>
            <div className="text-xl md:text-2xl font-bold text-[#0D2b45] dark:text-white">
              Rotação <span className="text-[#F1B631]">Navegante</span>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0D2b45] dark:hover:text-[#F1B631] transition-colors hidden sm:block">
              &larr; Voltar à página inicial
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D2b45] dark:text-white mb-4">Informação Legal</h1>
          <div className="w-24 h-1 bg-[#F1B631] mx-auto rounded-full"></div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-sm dark:shadow-white/5 border border-slate-100 dark:border-slate-700 space-y-16">
          
          {/* Termos e Condições */}
          <section id="termos" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#0D2b45] dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">1. Termos e Condições</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <p><strong>1.1. Objeto:</strong> Os presentes Termos e Condições regulam a prestação de serviços por parte da Rotação Navegante, Lda. (doravante "Operador") a motoristas que pretendam exercer a atividade de transporte individual e remunerado de passageiros em veículos descaracterizados a partir de plataforma eletrónica (TVDE).</p>
              
              <p><strong>1.2. Registo e Elegibilidade:</strong> Para utilizar os nossos serviços, o motorista declara cumprir todos os requisitos legais previstos na Lei n.º 45/2018 (ou legislação superveniente), incluindo a posse de certificado de motorista de TVDE emitido pelo IMT, e a inexistência de antecedentes criminais incompatíveis com a atividade.</p>

              <p><strong>1.3. Obrigações do Motorista:</strong> O motorista compromete-se a prestar um serviço com urbanidade perante os passageiros, zelando pelo bom estado da viatura e respeitando rigorosamente as normas das plataformas TVDE. O seu enquadramento legal e proteção contributiva são assegurados pelo contrato formalizado com a Rotação Navegante.</p>

              <p><strong>1.4. Quota Semanal e Pagamentos:</strong> O motorista concorda com o pagamento de uma quota semanal fixa pela utilização da licença de Operador da Rotação Navegante. O valor bruto gerado nas plataformas (após deduzidas as taxas das próprias plataformas e a quota semanal da Rotação Navegante) será transferido semanalmente para o IBAN fornecido pelo motorista.</p>
              
              <p><strong>1.5. Resolução:</strong> O acordo pode ser cessado por qualquer das partes mediante aviso prévio, sem prejuízo da liquidação de quaisquer valores em dívida até à data de cessação.</p>
            </div>
          </section>

          {/* Política de Privacidade */}
          <section id="privacidade" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#0D2b45] dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">2. Política de Privacidade</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <p><strong>2.1. Responsável pelo Tratamento:</strong> A Rotação Navegante, Lda. é a entidade responsável pela recolha e tratamento dos dados pessoais dos utilizadores e parceiros, de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
              
              <p><strong>2.2. Dados Recolhidos:</strong> Recolhemos apenas os dados estritamente necessários para o exercício legal da atividade TVDE e processamento de pagamentos, tais como: nome, NIF, dados do Cartão de Cidadão, Certificado TVDE, Registo Criminal, DUA da viatura e IBAN.</p>

              <p><strong>2.3. Finalidade e Base Legal:</strong> O tratamento dos dados tem como finalidade a execução de um contrato de prestação de serviços, o cumprimento de obrigações legais (IMT, Autoridade Tributária) e a gestão de pagamentos.</p>

              <p><strong>2.4. Conservação dos Dados:</strong> Os dados pessoais são guardados apenas pelo período necessário para a finalidade para a qual foram recolhidos, ou pelo período exigido por lei (por exemplo, exigências fiscais).</p>
              
              <p><strong>2.5. Direitos do Titular:</strong> O titular dos dados tem o direito de solicitar o acesso, retificação, apagamento, limitação do tratamento, bem como o direito à portabilidade dos dados, podendo exercê-los contactando-nos através do e-mail: <em>rotacao.navegantelda@gmail.com</em>.</p>
            </div>
          </section>

          {/* Aviso de Cookies */}
          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#0D2b45] dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">3. Aviso de Cookies</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <p><strong>3.1. O que são Cookies?</strong> Cookies são pequenos ficheiros de texto guardados no seu dispositivo (computador, tablet, telemóvel) através do navegador de internet (browser) quando visita o nosso website, permitindo melhorar a sua experiência de navegação.</p>
              
              <p><strong>3.2. Que Cookies utilizamos:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li><em>Cookies Estritamente Necessários:</em> São essenciais para o correto funcionamento do website (exemplo: preferências de tema claro/escuro). Não podem ser desativados nos nossos sistemas.</li>
                <li><em>Cookies Analíticos:</em> Utilizados anonimamente para efeitos de criação e análise de estatísticas, no sentido de melhorar o funcionamento do website.</li>
              </ul>

              <p><strong>3.3. Gestão de Cookies:</strong> A maioria dos navegadores permite controlo sobre os cookies armazenados no seu dispositivo, através das definições do próprio navegador. Note que a desativação de cookies pode impactar a sua experiência de utilização no nosso website.</p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-[#0D2b45] dark:bg-[#071624] text-white py-8 border-t-[6px] border-[#F1B631] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Rotação Navegante, Lda.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Página Inicial</Link>
            <a href="mailto:rotacao.navegantelda@gmail.com" className="hover:text-white transition-colors">Contactos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
