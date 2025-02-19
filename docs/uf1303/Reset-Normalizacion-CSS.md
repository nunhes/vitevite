# Reset CSS e|ou Normalización CSS

O *reset de CSS* e a *normalización de CSS* son conceptos relacionados pero teñen diferenzas sutiles no seu enfoque. Ambos métodos están destinados a garantir que os estilos dos elementos sexan consistentes entre diferentes navegadores, xa que cada un ten as súas propias regras predeterminadas que poden variar lixeiramente. Vexamos as diferenzas e a súa importancia:

### **Reset de CSS**

Un *reset* de CSS elimina todos os estilos predeterminados dos navegadores, restablecendo os elementos aos seus valores máis básicos ou "neutros". Isto implica eliminar marxes, *padding*, fontes predeterminadas e outros estilos aplicados polo navegador. O obxectivo é ofrecer unha base completamente limpa sobre a que podes aplicar os teus propios estilos de maneira coherente en todos os navegadores.

Un exemplo clásico de *reset* de CSS é o que propón Eric Meyer, un dos primeiros en popularizar esta técnica. Neste enfoque, todos os elementos do HTML teñen marxes e *padding* a cero, e tamén se reinician outras propiedades como as fontes ou os tamaños predeterminados.

**Exemplo de código de reset de CSS:**

```css
/* Reset de Eric Meyer */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: sans-serif;
}
```

Con este tipo de *reset*, eliminas case todos os valores predeterminados do navegador para ter un control completo sobre os estilos.

### **Normalización de CSS**

A *normalización* de CSS, en cambio, busca preservar algúns dos estilos predeterminados do navegador, pero mellorándolos para asegurar a consistencia entre navegadores. En lugar de eliminar todos os estilos por completo, a normalización axusta ou "normaliza" algúns elementos para que se comporten de maneira máis coherente en todos os navegadores. Isto significa que se aplican algúns valores predeterminados, pero de forma coherente entre as plataformas.

Un exemplo moi utilizado de normalización é o *Normalize.css*, unha biblioteca que axusta as regras predeterminadas para garantir unha base común sen eliminar totalmente os estilos predeterminados.

**Exemplo de código de normalización con Normalize.css:**

```css
/* Normalize.css */
html {
  line-height: 1.15; /* Axusta a altura de liña */
  -webkit-text-size-adjust: 100%; /* Impide a redimensión do texto en dispositivos móbiles */
}
```

**Enlace á documentación de Normalize.css:** [Normalize.css GitHub](https://github.com/necolas/normalize.css)

### **Por que é necesario un Reset ou Normalización de CSS?**

Os navegadores teñen estilos predeterminados que poden variar entre eles. Por exemplo, un parágrafo en Chrome pode ter un *padding* por defecto, mentres que en Firefox pode non ter nada. Isto fai que a túa páxina se vea diferente en función do navegador. Usar un *reset* ou unha *normalización* pode axudar a garantir que a túa páxina se vea igual en todos os navegadores, facendo que a base do deseño sexa consistente.

Ademais, un *reset* ou *normalización* permite mellorar a manexo de compoñentes como formularios ou ligazóns, que teñen estilizacions predeterminadas que non sempre se queren ou se necesitan.

### **Diferencias principais entre Reset e Normalización**

1. **Reset de CSS:** Elimina totalmente os estilos predeterminados dos navegadores.
2. **Normalización de CSS:** Axusta os estilos predeterminados para garantir coherencia entre navegadores sen eliminar totalmente os seus valores.

### **Cando usar cada un?**

- **Reset de CSS:** Úsase cando desexas ter un control total sobre todos os estilos e queres partir dunha base completamente limpa, especialmente se vas crear un deseño moi personalizado.
- **Normalización de CSS:** Úsase cando desexas manter algúns dos comportamentos predeterminados dos navegadores (como as fontes ou o tamaño de texto) pero queres asegurarte de que se comporten de forma coherente entre eles.

Ambos métodos son ferramentas útiles para mellorar a coherencia e a predictibilidade do deseño web, así que a elección entre un e outro dependerá do tipo de proxecto que estés desenvolvendo.

## Reset CSS ou Normalize CSS

Podes tomalo ou deixalo. Isto non é un estándar, só o intento de mellorar unha competencia non resolta entre os distintos navegadores.

Tomando notas de [Andy Bell](https://piccalil.li/blog/a-more-modern-css-reset/), [Chris Coyier](https://chriscoyier.net/2023/10/03/being-picky-about-a-css-reset-for-fun-pleasure/), [Nicolas Gallagher](https://github.com/necolas/normalize.css), [Sindre Sorhus](https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css) et alt.

### Reseteo xeral

Sería bo deixalo ir. Pero aínda segue a ser un mal necesario:

```css 
/* Box sizing rules to better box model */

*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### Só para os iPhones

Apple debería abandonar ese comportamento de preferir o tamaño da fonte no modo horizontal, pero mentres persista o seu modelo ti podes combatelo con algo así:

```css
/* Prevent font size inflation */

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

### Marxes incomodos

```css
/* Remove default margin in favour of better control in authored CSS */

body, h1, h2, h3, h4, h5, h6, p,
figure, blockquote, dl, dd, 
ul, ol, li {
  margin: 0;
}
```

ou tamén

```css
body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin-block-end: 0;
}
```

### Listas

Se o comportamento por defecto non é o que queres...

```css
/* 
Remove list styles on ul, ol elements with a list role, 
which suggests default styling will be removed 
*/

ul[role='list'],
ol[role='list'] {
  list-style: none;
}
```

ou 

```css
ul[class],
ol[class] {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

### Corpo

Pode que non sexa estritamente necesario, pero si ben útil en algúns casos:

```css
body {
  min-height: 100vh;
  line-height: 1.5;   /* omitir ou cambiar ao teu gusto */
}
```

### Cabeceiras

```css
h1, h2, h3, h4, h5, h6,
button, input, label {
  line-height: 1.1;
}
```

e tamén en moitos casos

```css
h1, h2,
h3, h4, 
h5, h6, {
  text-wrap: balance;
}
```

### Ligazóns

Xa non máis ligazóns de cor azul ;p

```css
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}
```

### Elementos de formulario

```css
/* Inherit fonts for inputs and buttons */
input, button,
textarea, select, optgroup {
  font-family: inherit;
  font-size: inherit;   /* ou font-size: 100%; */
  line-height: 1.15;    /* opcional */ 
  /*  Remove the margin in Firefox and Safari */  
  margin: 0;
}
```

ou simplemente 

```css
input, button,
textarea, select, optgroup {
  font: inherit;
}
```

e tamén

```css
textarea:not([rows]) {
  min-height: 10em;
}
```

Botóns e selectores

```css
/**
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}
```

e outras inconsistencias máis

```css
/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}
```

### Imaxes

```css
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
```

ou aínda mellor, se estas pensando na accesibilidade:

```css
/* Barebones CSS for fluid images || https://www.zachleat.com/web/fluid-images/ */

img {
  max-width: 100%;
}
img[width] {
  width: auto; /* Defer to max-width */
}
img[width][height] {
  height: auto; /* Preserve aspect ratio */
}

/* Let SVG scale without boundaries */
img[src$=".svg"] {
  width: 100%;
  height: auto;
  max-width: none;
}
```

### Outras cousas

```css
:target {
  scroll-margin-block: 5ex;
}
```

### Fontes tipográficas

Seguro que en algúns dos teus proxectos non xogas a complicarte a vida con estrafalarias combinacións de fontes tipográficas. Para facelo máis sinxelo:

```css
html {
	/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
	font-family:
		system-ui,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
	line-height: 1.15; /* 1. Correct the line height in all browsers. */
	-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
	-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
	tab-size: 4; /* 3 */
}
```

Isto tamén vale para os bloque de código:

```css
/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}
```

Outras inconsistencias que podes querer corrixir:

```css
/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}


/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
```

### Accesibilidade

Engadir isto ao restablecemento de CSS para mellorar a accesibilidade

```css
/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    }

    html {
    scroll-behavior: initial;
    }
}
```

Lembra que se traballas con marcos CSS como Bootstrap, PureCSS, TailwindCSS,... non vas a precisar desta posta a cero. Eles te proveran dunha posta a cero propia. 

E si estas creando a túa propia folla de estilos sempre poderás decidir que partes e cales non vas precisar.

## Tendencias en 2025

En 2025, é probable que os CSS resets evolucionen para adaptarse ás novas características de CSS e ás necesidades dos desenvolvedores. Algunhas tendencias poderían incluir:

- **Resets específicos para CSS moderno**: Con características como Grid, Flexbox e variables CSS.
- **Resets adaptativos**: Pensados para proxectos con deseño responsivo e temas escuros/claros.
- **Integración con frameworks**: Como Tailwind CSS ou Bootstrap, que xa inclúen os seus propios resets.

---

## **Recursos para aprender máis:**

- **Guía de Reset de CSS de Eric Meyer:** [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- **Normalize.css:** [Normalize.css GitHub](https://github.com/necolas/normalize.css)
- **MDN sobre Normalización:** [Normalize](https://developer.mozilla.org/en-US/docs/Glossary/Normalize)

## Conclusión

Escoller o ***CSS reset*** axeitado depende das necesidades do teu proxecto.  
Se buscas unha normalización lixeira, **Normalize.css** ou **Sanitize.css** son excelentes opcións.  
Se prefires un reset completo, o **Reset CSS de Eric Meyer** ou **Modern Reset** poden ser os máis axeitados.   
En 2025, é probable que estas ferramentas siguan sendo relevantes, sobre todo se non empregas frameworks CSS que xa teñen as súas propias estratexías de posta a cero.
Tamén é de agardar que vexamos novas adaptacións ás novas tendencias e estándares web tanto por parte dos navegadores como destas técnicas que combatesn certas discontinuidades entre eles.

Bo código!

