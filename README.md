# Vizotto Odontologia — Website Institucional

Projeto de desenvolvimento **front-end** criado para transformar uma referência visual e requisitos de um negócio real em uma página institucional moderna, responsiva e funcional.

> O objetivo deste repositório é apresentar o projeto como parte de um portfólio de desenvolvimento web, destacando decisões de interface, responsividade, interatividade e organização do código.

## ✨ Preview

### Desktop

![Preview do projeto em desktop](./screenshots/desktop.png)

### Mobile

![Preview do projeto em celular](./screenshots/mobile.png)

## 🚀 Tecnologias

- **HTML5** — estrutura e semântica da página
- **CSS3** — estilização, responsividade e animações
- **JavaScript** — interações e comportamento dos componentes
- **SVG** — ícones e elementos vetoriais
- **Google Maps** — localização integrada
- **WhatsApp** — chamada para contato
- **Waze** — links de navegação

## 🧩 Funcionalidades implementadas

- Layout institucional responsivo
- Navegação adaptada para desktop e mobile
- Menu mobile com abertura e fechamento
- Seções de apresentação, serviços, localização e contato
- FAQ interativo em formato accordion
- Estado visual das perguntas abertas/fechadas
- Setas do FAQ sincronizadas com o estado do componente
- Atributos de acessibilidade como `aria-expanded` e `aria-controls`
- Links de contato direto pelo WhatsApp
- Links de localização pelo Google Maps e Waze
- Meta tags para SEO e compartilhamento
- Adaptação de espaçamentos, tipografia e componentes para telas menores

## 📱 Responsividade

A interface foi construída para funcionar em diferentes tamanhos de tela.

No mobile, foram feitos ajustes específicos de:

- navegação;
- espaçamento;
- tamanho de textos;
- botões e áreas de toque;
- organização das seções;
- FAQ e seus indicadores visuais.

A intenção foi preservar a composição do desktop enquanto adapta a experiência para telas menores.

## ⚙️ JavaScript e acessibilidade

O JavaScript controla principalmente os componentes interativos da página.

No FAQ, o código utiliza `aria-expanded` para representar se uma pergunta está aberta ou fechada e `aria-controls` para relacionar o botão ao conteúdo correspondente. O estado visual da seta acompanha essas informações.

Também foi implementado o comportamento do menu mobile e o fechamento do menu ao selecionar um link.

## 🎨 Interface e UX

O desenvolvimento priorizou:

- hierarquia visual;
- navegação simples;
- chamadas para ação claras;
- consistência entre desktop e mobile;
- áreas de toque adequadas para dispositivos móveis;
- informações importantes facilmente localizáveis;
- feedback visual nos componentes interativos.

## 📂 Estrutura do projeto

```text
vizotto-odontologia/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── favicon.svg
├── screenshots/
│   ├── desktop.png
│   └── mobile.png
└── README.md
```

## 🛠️ Organização do código

O projeto foi separado em arquivos com responsabilidades diferentes:

- `index.html` — estrutura e conteúdo da página
- `style.css` — estilos, responsividade e estados visuais
- `script.js` — comportamentos e interações
- `assets/` — recursos estáticos
- `screenshots/` — imagens utilizadas na documentação do projeto
- `README.md` — documentação

Essa separação facilita manutenção, leitura do código e futuras alterações.

## 🌐 Publicação

O projeto pode ser publicado como site estático em serviços como **GitHub Pages, Netlify ou Vercel**. Também é possível conectar um domínio personalizado posteriormente.

## 📚 O que este projeto demonstra

Este projeto demonstra conhecimentos em:

- desenvolvimento front-end;
- HTML semântico;
- CSS e design responsivo;
- JavaScript para interações;
- componentes interativos;
- acessibilidade básica;
- integração com serviços externos;
- organização de arquivos;
- documentação de projeto;
- preparação de um site estático para publicação.

## 🎯 Objetivo para portfólio

Este projeto foi organizado para demonstrar a capacidade de transformar requisitos e referências visuais em uma interface web funcional, responsiva e preparada para publicação.

Além do resultado visual, o foco do projeto está na organização do código, na adaptação para diferentes dispositivos e na implementação de interações com JavaScript.

## 👨‍💻 Autor

Projeto desenvolvido para portfólio de desenvolvimento web.
