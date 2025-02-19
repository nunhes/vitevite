---
title: Linguaxes de marcas i
lastUpdated: true
---

# {{ $frontmatter.title }}

> Unha linguaxe de marcas é un sistema de codificación que utiliza etiquetas e marcadores para definir a estrutura e o formato dun documento. As linguaxes de marcas usan instrucións específicas para que os ordenadores poidan comprender e representar a información de forma coherente.

# **As linguaxes de marcas: Introdución, historia, usos e aplicacións**

As linguaxes son ferramentas esenciais no ámbito da tecnoloxía e da informática. Nos sistemas informáticos as linguaxes pódense dividir en dous tipos: as que se empregan para crear aplicacións, coñecidos somo linguaxes de programación; e, os que serven para marcar documentos, coñecidos como linguaxes de marcado ou de marcas.

As linguaxes de marcas ou linguaxes de marcado son unha categoría de linguaxes informáticas deseñadas para estruturar, organizar e presentar información. Ao estar deseñadas para estruturar, presentar e intercambiar información de maneira clara e estandarizada son esenciais no desenvolvemento web e en outras moitas áreas tecnolóxicas, permitindo que os datos sexan interpretados e procesados por humanos e máquinas. :tada: :100:

Neste artigo, exploraremos que son as linguaxes de marcado, a súa historia, aplicacións prácticas e como podemos utilizalas, acompañadas de exemplos e recursos útiles.

------

## **Que son as linguaxes de marcas?**

Unha linguaxe de marcado é un conxunto de regras e etiquetas (chamadas marcas ou *tags*) que se empregan para definir a estrutura e o significado do contido e permiten identificar datos nun documento. En lugar de ser programas executables, como outras linguaxes de programación, as linguaxes de marcado funcionan como formatos que describen datos. E o elemento clave para resolver esa tarefa son as etiquetas - ou marcas, de aí o seu nome-.

As etiquetas están delimitadas por corchetes angulares, como `<etiqueta>`, e axudan a identificar elementos como títulos, parágrafos, listas, ligazóns, imaxes, e moito máis. Outros elementos clave das linguaxes de marcado son a súa estrutura aniñada e/ou xerárquica, e os atributos - marcas que completan o significado ou a funcionalidade dunha determinada etiqueta-.  

### **Elementos comúns nunha linguaxe de marcado**:

1. **Marcas (tags)**: Usadas para definir o significado ou propósito dunha sección de datos - normalmente texto-.
   Exemplo: `<h1>` para encabezados en HTML.
2. **Atributos**: Engaden información adicional ás marcas.
   Exemplo: `<img src="imaxe.jpg" alt="Descrición da imaxe">`.
3. **Estrutura xerárquica**: Os documentos teñen unha organización en forma de árbore para mostrar relacións entre os datos.

------

## **Un pouco de historia**

A finais dos anos 60, do século XX, a empresa IBM propúxose a creación dun sistema estándar para a xestión e a edición de documentos, dado que se deron conta de que moitos dos seus sistemas informáticos non podían comunicarse entre eles debido a distinto sistema de descrición que empregaban.

A tarefa foille asignada a [Charles F. Goldfarb](https://en.wikipedia.org/wiki/Charles_Goldfarb), que xunto a Ed Mosher e Ray Lorie, desenvolveron o concepto de linguaxe de marcado xeral no proxecto [*Generalized Markup Language* (GML)](https://en.wikipedia.org/wiki/IBM_Generalized_Markup_Language). 

A idea do marcado xeral era que cada etiqueta - marca- servira tanto para describir o formato coma para indicar o seu contido, tipo de información ou dato, polo que se deseñou un sistema moi completo capaz de dar solución a calquera tipo de documento. A solución utilizaba etiquetas de descrición de datos relacionadas con modelos de estilos de formato. 

O desenvolvemento do GML continuou durante anos, ata que entre 1978 e 1986, o propio Goldfarb coordinou o equipo técnico que desenvolveu, para Organización Internacional para a Estandarización (ISO),  a norma internacional [ISO 8879](https://www.iso.org/standard/16387.html), que describe o que dende entón se coñece como estándar SGML (*Standard Generalized Markup Language*). Este estándar SGML foi o que sentou as bases para linguaxes populares como XML ou HTML. Coa chegada da web nos anos 90, HTML (HyperText Markup Language) converteuse na linguaxe de marcado máis coñecida, permitindo a creación de páxinas web.

Algúns dos fitos clave deste desenvolvemento das linguaxes de marcado son:

1. [**SGML (Standard Generalized Markup Language)**](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language): Desenvolvido nos anos 80, foi un dos primeiros estándares amplamente adoptados para a creación de documentos estruturados. É a base de linguaxes máis modernas como HTML e XML.
2. [**HTML (HyperText Markup Language)**](https://en.wikipedia.org/wiki/HTML) : Creado por Tim Berners-Lee nos anos 90, HTML converteuse na linguaxe fundamental da World Wide Web, permitindo a creación de páxinas web e hiperligazóns entre elas.
3. **[XML (eXtensible Markup Language)](https://en.wikipedia.org/wiki/XML)**: Introducido nos anos 90, XML proporcionou unha forma flexible de almacenar e transportar datos, sendo amplamente usado en sistemas empresariais e tecnoloxías web.
4. **[Markdown](https://en.wikipedia.org/wiki/Markdown)**: Unha linguaxe de marcado sinxela desenvolvida nos anos 2000, deseñada para ser lida tanto por humanos como por máquinas, ideal para documentos e publicacións en liña.

------

## **Usos e aplicacións das linguaxes de marcas**

As linguaxes de marcado teñen unha ampla variedade de aplicacións, desde a creación de páxinas web ata a xestión de datos e o intercambio de información en sistemas complexos. Algúns exemplos inclúen: 

1. **Desenvolvemento web**:

   - **HTML**: Linguaxe básica para estruturar páxinas web. Combinado con CSS e JavaScript, úsase para estruturar, estilizar e dar interactividade ás páxinas web.

     Exemplo:

     ```html
     <!DOCTYPE html>
     <html>
     <head><title>Exemplo</title></head>
     <body>
         <h1>Benvidos ao mundo das linguaxes de marcas</h1>
         <p>HTML é a base de moitas aplicacións web.</p>
         <a href="https://developer.mozilla.org/gl/docs/Web/HTML">Aprende máis sobre HTML</a>.
     </body>
     </html>
     ```

     Os arquivos creados con HTML usan nomes acabados en `.html`

2. **Intercambio de datos**:

   - **XML**: Usado para almacenar e intercambiar datos entre aplicacións e sistemas.

     Exemplo:

     ```xml
     <libro>
         <título>Aprendendo XML</título>
         <autor>Xian Xove</autor>
         <ano>2024</ano>
     </libro>
     ```

     Os arquivos creados con XML usan nomes acabados en `.xml`

   - **JSON**: Usado tamén para almacenar e intercambiar datos entre aplicacións e sistemas.

     Exemplo:

     ```json
     {
       "libro": {
         "título": "Aprendendo XML",
         "autor": "Xian Xove",
         "ano": 2024
       }
     }
     ```

     Os arquivos creados con JSON usan nomes acabados en `.json`

3. **Formatos de publicación**:

   - **Markdown**: Utilizado para redactar documentación técnica, artigos ou contidos en plataformas de publicación, permite crear documentos sinxelos e lexibles tanto por humanos como máquinas, e que poden ser convertidos de xeito rápido a formatos como HTML ou PDF.

     Exemplo:

     ```markdown
     # Título Principal
     Este é un texto en **Markdown**.
     ```

     Os arquivos creados con Markdown usan nomes acabados en `.md`

4. **Procesamento de documentos**:

   - **LaTeX**: Linguaxe usada para crear publicacións académicas e documentos científicos e técnicos con formato avanzado.

     ```latex
     \documentclass{article}
     
     \usepackage[utf8]{inputenc} % Inclúe o paquete inputenc para soportar caracteres especiais como acentos, ñ, ç,...
     
     \title{Exemplo básico en LaTeX}
     \author{Xian Xove}
     \date{\today} % Insire a data actual automaticamente
     
     \begin{document}
     
     \maketitle % Crea o título do documento
     
     \section{Introdución}
     Este é un pequeno exemplo de como escribir un documento usando \LaTeX. Podes engadir texto, ecuacións, imaxes, e moito máis.
     
     \section{Un exemplo de ecuación}
     Aquí tes un exemplo dunha ecuación en modo matemático:
     \[
     E = mc^2
     \]
     Esta é a famosa ecuación de Einstein.
     
     \end{document}
     
     ```

     Os arquivos creados con LaTeX usan nomes acabados en `.tex`

5. **Definición de interface de usuario (UI)**:

   - Linguaxes como JSON e YAML úsanse para definir a configuración e interfaces en aplicacións modernas.

6. **Formatos específicos**: 

   - [SVG (**Scalable Vector Graphics*)](https://en.wikipedia.org/wiki/SVG) é unha linguaxe baseada en XML para definir gráficos vectoriais en liña.

     ```txt
     <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
       <!-- Círculo vermello -->
       <circle cx="50" cy="50" r="40" fill="red" />
     
       <!-- Cadrado azul -->
       <rect x="100" y="100" width="50" height="50" fill="blue" />
     </svg>
     ```

------

## **Como se usan as linguaxes de marcas e onde?**

As linguaxes de marcado úsanse en contornos moi variados e depende do contexto e do propósito:

- **Creación de sitios web**: HTML é imprescindible para crear unha páxina web e definir a estrutura do sitio. Pódese crear con calquera editor de texto non enriquecido ou con editores de código especializados como [Visual Studio Code](https://code.visualstudio.com/) ou [Sublime Tex](https://www.sublimetext.com/)t.
- **Xestión de datos en aplicacións empresariais**: XML úsase para configuracións de software ou para intercambio de datos entre sistemas. Unha terefa que nos últimos anos tamén se pode completar con JSON. Tanto un coma outro, son comúns no intercambio de datos entre sistemas e plataformas, en parte debido a que ámbolos son compatibles con linguaxes de programación como Python, JavaScript ou Java.
- **Edición de libros e artigos**: En publicacións científicas, LaTeX é popular debido á súa capacidade de manexar ecuacións matemáticas complexas.
- **Documentación**: Markdown é ideal para escribir documentación técnica ou blogs. Moitas plataformas, como GitHub, admiten Markdown de forma nativa.
- **Creación de gráficos**: SVG permite debuxar gráficos interactivos que se adaptan ao tamaño da pantalla.

![img](./assets/Lenguaje_de_marcado.png)

------

## **Recursos e ligazóns de interese**

Para profundizar no tema, aquí tes algúns recursos útiles:

1. **HTML**: [Mozilla Developer Network (MDN)](https://developer.mozilla.org/es/docs/Web/HTML) + [HTML Tutorial](https://www.w3schools.com/html/default.asp)
2. **XML**: [W3C](https://www.w3.org/XML/) + [XML Tutorial](https://www.w3schools.com/xml/) 
3. **Markdown**: [Guía de Markdown](https://www.markdownguide.org) + [Markdown en GitHub](https://guides.github.com/features/mastering-markdown/)
4. **SVG**: [Comezar con SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) + [SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp)
5. **LaTeX**: [Documentación oficial de LaTeX](https://www.latex-project.org/) + [LaTeX editor](https://www.overleaf.com)

------

## **Resumo**

As linguaxes de marcado son ferramentas fundamentais na era dixital, utilizadas para estruturar e transmitir información de forma clara e eficiente. Coñecer e empregar estas linguaxes abre as portas a múltiples posibilidades, desde o desenvolvemento web ata a xestión de datos e a creación de documentos técnicos. A medida que a tecnoloxía avanza, seguir aprendendo sobre estas linguaxes permitirá aproveitar mellor o potencial da información estruturada.

---

***\_ref:***

- [Evolución das linguaxes de marcas](https://view.genially.com/6505d0a13079590011a0fbf7/interactive-content-lenguaje-de-marcas) + [2](https://view.genially.com/6506b74a7d706000117c2ad3/interactive-content-origen-y-evolucion-de-los-lenguajes-de-marcas) + [3](https://view.genially.com/650488f21e369200110e12cd/interactive-content-actividad-1-evol-lenguaje-de-marcas-david-dominguez)
- [Linguaxes de marcas e sistemas de xestión da información](https://www.cartagena99.com/recursos/alumnos/apuntes/210927125007-DAM_M04_03_1909_QA03.pdf)

---

#linguaxe de marcas #devweb 

