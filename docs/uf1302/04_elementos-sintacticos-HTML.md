---
title: Elementos sintácticos de HTML
lastUpdated: true
---

# {{ $frontmatter.title }}

HTML (HyperText Markup Language) é a linguaxe de marcas utilizada para estruturar páxinas web. A súa sintaxe baséase en elementos que permiten organizar o contido e definir a súa semántica. Aquí tes unha explicación detallada dos principais elementos sintácticos de HTML, orientada a persoas que están a aprender desenvolvemento web.

------

## **1. Etiquetas (Tags)**

As etiquetas son os bloques fundamentais de HTML. Están delimitadas polos símbolos `<>` e normalmente aparecen en pares:

```html
<etiqueta>Contido</etiqueta>
```

- A primeira etiqueta chámase **etiqueta de apertura** (`<etiqueta>`).
- A segunda etiqueta chámase **etiqueta de peche** (`</etiqueta>`).
- Entre ambas as dúas vai o contido do elemento.

🔹 **Exemplo:**

```html
<p>Este é un parágrafo.</p>
```

### **1.1. Elementos con etiqueta de peche obrigatoria**

A maioría das etiquetas necesitan unha etiqueta de peche. Exemplos:

```html
<h1>Este é un título</h1>
<p>Este é un parágrafo.</p>
```

### **1.2. Elementos sen etiqueta de peche (Elementos vacíos ou "self-closing")**

Algúns elementos HTML non teñen contido interno e non requiren etiqueta de peche.
 🔹 **Exemplo:**

```html
<img src="imaxe.jpg" alt="Descrición da imaxe">
<br> <!-- Salto de liña -->
<input type="text">
```

Desde HTML5, pódese escribir `<img>` ou `<img />` (ambas as formas son válidas).

------

## **2. Atributos**

Os atributos proporcionan información adicional sobre un elemento HTML. Escríbense dentro da etiqueta de apertura.

### **2.1. Estrutura dun atributo**

```html
<etiqueta atributo="valor">Contido</etiqueta>
```

- O **nome do atributo** vén despois do nome da etiqueta.
- O **valor do atributo** escríbese entre comiñas `" "`.

🔹 **Exemplo con atributos comúns:**

```html
<a href="https://example.com" target="_blank">Ir a Example</a>
```

- `href`: Indica a URL á que apunta a ligazón.
- `target="_blank"`: Fai que a ligazón se abra nunha nova pestana.

### **2.2. Atributos booleanos**

Os atributos booleanos non precisan un valor, só necesitan estar presentes para activarse.
 🔹 **Exemplo:**

```html
<input type="checkbox" checked> <!-- O "checked" indica que a opción xa está seleccionada -->
<input type="text" disabled> <!-- O "disabled" desactiva o campo de entrada -->
```

------

## **3. Elementos básicos da estrutura HTML**

Un documento HTML típico contén os seguintes elementos principais:

```html
<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O meu sitio web</title>
</head>
<body>
    <h1>Benvido ao meu sitio web</h1>
    <p>Este é un parágrafo de exemplo.</p>
</body>
</html>
```

🔹 **Explicación dos elementos principais:**

- `<!DOCTYPE html>`: Declara que se está a usar HTML5.
- `<html>`: Elemento raíz de toda a páxina.
- `<head>`: Contén metadatos e configuracións da páxina.
- `<meta charset="UTF-8">`: Define a codificación de caracteres.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Mellora a adaptación en dispositivos móbiles.
- `<title>`: Define o título da páxina (o que aparece na pestana do navegador).
- `<body>`: Contén o contido visible da páxina.

------

## **4. Elementos estruturais e semánticos**

HTML ten etiquetas para organizar e dar significado ao contido.

### **4.1. Encabezados** (`<h1>` – `<h6>`)

Os encabezados definen títulos de diferentes niveis.
 🔹 **Exemplo:**

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Sección secundaria</h3>
```

### **4.2. Parágrafos e formato de texto**

- `<p>` → Parágrafo
- `<strong>` → Texto en negrita
- `<em>` → Texto en cursiva
- `<mark>` → Texto resaltado
- `<small>` → Texto pequeno
- `<blockquote>` → Cita en bloque
   🔹 **Exemplo:**

```html
<p>Este é un <strong>texto importante</strong> con <em>cursiva</em> e <mark>resaltado</mark>.</p>
```

### **4.3. Listas**

HTML permite crear listas ordenadas e desordenadas: 🔹 **Lista desordenada (`<ul>`)**

```html
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>
```

🔹 **Lista ordenada (`<ol>`)**

```html
<ol>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ol>
```

------

## **5. Elementos de contedor**

Os elementos de contedor axudan a estruturar a páxina.

### **5.1. Divisións (`<div>`)**

- Usada para agrupar contido e aplicar estilos con CSS.

```html
<div class="cadro">
    <h2>Sección importante</h2>
    <p>Texto dentro da división.</p>
</div>
```

### **5.2. Span (`<span>`)**

- Usado para aplicar estilos ou scripts a unha parte dun texto.

```html
<p>Este é un <span style="color: red;">texto en vermello</span>.</p>
```

------

## **6. Elementos de formulario**

Os formularios permiten a interacción co usuario.

```html
<form action="/procesar" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <button type="submit">Enviar</button>
</form>
```

------

## **7. Elementos multimedia**

HTML permite inserir imaxes, vídeos e audio: 🔹 **Imaxe**

```html
<img src="imaxe.jpg" alt="Descrición da imaxe">
```

🔹 **Vídeo**

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    O teu navegador non soporta vídeo.
</video>
```

🔹 **Son** (audio)

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    O teu navegador non soporta audio.
</audio>
```

------

## **Conclusión**

HTML baséase en etiquetas, atributos e elementos estruturais que permiten organizar o contido dunha páxina web. Comprender a súa sintaxe é fundamental para o desenvolvemento web. 😊


---

DAW🧊2025