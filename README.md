# 🧭 Rotação Navegante - Website

Página institucional (Landing Page B2B/B2C) desenvolvida para a **Rotação Navegante, Lda.**, uma empresa que atua como Operador de TVDE em Portugal (parceiro Uber e Bolt). 

O website tem como principal objetivo a angariação de motoristas, explicando o modelo de negócio ("Aluguer de Slot"), as vantagens em trabalhar sob contrato com a empresa sem burocracias, e um simulador de rendimentos interativo.

---

## ✨ Funcionalidades Principais

* **Simulador de Rendimentos:** Componente interativo (React State) que calcula instantaneamente a faturação bruta e líquida baseada na estimativa de horas do motorista.
* **Perguntas Frequentes (FAQ) Dinâmicas:** Sistema de *accordion* com animações fluidas para esclarecer dúvidas comuns (por exemplo, questões sobre Finanças e Contratos).
* **Animações Profissionais de Scroll:** Integração com Framer Motion para entradas suaves de elementos no ecrã (fade-ups, staggers, scales), aumentando a retenção e credibilidade visual.
* **Dark Mode & Light Mode:** Suporte nativo para tema Escuro/Claro que respeita as preferências de sistema do utilizador, com alternância manual através de botão no cabeçalho.
* **Comunicação por WhatsApp:** Botão flutuante animado (CTA) para contacto direto e imediato via WhatsApp.
* **Design 100% Responsivo & Acessível:** Layout Mobile-First desenhado com CSS Grids avançadas.
* **Página Legal:** Secção separada dedicada aos Termos e Condições, Política de Privacidade e Aviso de Cookies (com Auto-Scroll para âncoras).

---

## 🛠️ Tecnologias e Stack

O projeto utiliza o ecossistema moderno da Vercel focado em alta performance e SEO (Search Engine Optimization):

* **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Tipografia:** Google Fonts (`Inter`)

### 📦 Componentes e Bibliotecas Extra (Dependencies)

* **[Framer Motion](https://www.framer.com/motion/):** Biblioteca principal de animação em React. Utilizada para os efeitos de entrada no *Hero*, os staggers das listas e o sistema de abre/fecha da secção FAQ.
* **[next-themes](https://github.com/pacocoursey/next-themes):** Gestor de temas perfeito para Next.js App Router, prevenindo "flickering" de cores (Hydration Mismatch) e facilitando o dark mode com a classe `.dark` do Tailwind.
* **[lucide-react](https://lucide.dev/):** Pacote de ícones SVG limpos e customizáveis (usado para os ícones de Sol/Lua no botão de Tema e as setas nas FAQ).

---

## 📂 Arquitetura do Projeto

Abaixo encontra-se a árvore simplificada da pasta `src` (Source), que adota a organização orientada a App Router do Next.js:

```text
Rotacao-Navegante/
├── public/                 # Recursos estáticos
├── src/
│   ├── app/
│   │   ├── legal/
│   │   │   └── page.tsx    # Página de Informação Legal (Termos, Privacidade, Cookies)
│   │   ├── globals.css     # Estilos globais e diretivas do Tailwind v4
│   │   ├── icon.svg        # Favicon dinâmico vetorial (Bússola)
│   │   ├── layout.tsx      # RootLayout (Contém Meta tags e ThemeProvider)
│   │   └── page.tsx        # Landing Page Principal (Hero, O Que É, Vantagens, Passos)
│   │
│   ├── components/
│   │   ├── FAQ.tsx         # Componente interativo de Perguntas Frequentes (Framer Motion)
│   │   ├── Simulator.tsx   # Simulador interativo do lado do cliente (Client Component)
│   │   ├── ThemeProvider.tsx # Wrapper (Client) da biblioteca next-themes
│   │   └── ThemeToggle.tsx   # Botão de alternância de modo Escuro/Claro (Lucide-react)
```

---

## 🚀 Como Correr o Projeto Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Abrir no navegador:** 
   Navegue para [http://localhost:3000](http://localhost:3000). O servidor atualiza automaticamente a página assim que edita um ficheiro (HMR - Hot Module Replacement).

4. **Testar Produção:**
   ```bash
   npm run build
   npm run start
   ```

---
*Criado com Next.js e Tailwind CSS para máxima velocidade e indexação otimizada no Google.*
