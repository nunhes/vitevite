---
title: A etiqueta `<table>`, elemento de bloque e elemento en liña
description: As táboas HTML son ensenciais para a mostra de datos tabulados.
lastUpdated: true
---

# {{ $frontmatter.title }}

 

Unha táboa en HTML créase usando as etiquetas `<table>`, `<tr>`, `<th>`, e `<td>`. 

- `<table>`: Define a táboa.
- `<tr>`: Define unha fila na táboa.
- `<th>`: Define unha celda de cabeceira (normalmente usada para títulos de columnas).
- `<td>`: Define unha celda de datos.

#### **Exemplo básico:**

```html
<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Táboa de Exemplo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Táboa de Alumnos</h1>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelidos</th>
                <th>Idade</th>
                <th>Curso</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ana</td>
                <td>García López</td>
                <td>20</td>
                <td>Desenvolvemento Web</td>
            </tr>
            <tr>
                <td>Pedro</td>
                <td>Martínez Pérez</td>
                <td>22</td>
                <td>Deseño Gráfico</td>
            </tr>
            <tr>
                <td>María</td>
                <td>Fernández González</td>
                <td>21</td>
                <td>Marketing Dixital</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

**Explicación do código:**  

- A táboa ten unha cabeceira (`<thead>`) que contén os títulos das columnas (`<th>`).
- O corpo da táboa (`<tbody>`) contén as filas de datos (`<tr>`), onde cada celda de datos está definida por `<td>`.

## A etiqueta táboa e outras etiquetas asociadas

**tr, th, td**  

- `<tr>`: unha fila de celas nunha táboa.  
- `<th>`: unha cela como cabeceira dun grupo de celas da táboa.  
- `<td>`: unha cela dunha táboa que contén datos.  

**Libro | Nome | Total**  
1 | Harry Potter | 100  

```html
<table>
    <tr>
        <th>Libro</th>
        <th>Nome</th>
        <th>Total</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Harry Potter</td>
        <td>100</td>
    </tr>
</table>
```

**colspan, rowspan**  

- **colspan**: Este atributo contén un valor enteiro non negativo que indica cantas columnas abarca a cela. (Combina columnas // `colspan="3"` combina 3 columnas horizontalmente).  
- **rowspan**: Este atributo contén un valor enteiro non negativo que indica cantas filas abarca a cela. (Combina filas // `rowspan="3"` combina 3 filas verticalmente).  

```html
<tr>
    <td colspan="2">Vendas Totais</td>
    <td>600</td>
</tr>
```

**thead, tbody, tfoot**  

- `<thead>`: Elemento de cabeceira da táboa. Define un conxunto de filas que representan a cabeceira das columnas da táboa.  
- `<tbody>`: Un conxunto de filas da táboa (`<tr>`), indicando que forman o corpo da táboa (`<table>`).  
- `<tfoot>`: Elemento que define un conxunto de filas que resumen as columnas da táboa.  

**Libro | Nome | Total**  
1 | Harry Potter | 100  
2 | Hunger Game | 200  
3 | Lord of the rings | 300  
**Total | 600**  

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Título da páxina</title>
    <style>
      table, tr, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>Libro</th>
          <th>Nome</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Harry Potter</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hunger Game</td>
          <td>200</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Lord of the rings</td>
          <td>300</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td>600</td>
        </tr>
      </tfoot>
    </table>
  </body>
</html>
```

**caption, colgroup**  

- `<caption>`: Especifica o título ou subtítulo dunha táboa.  
- `<colgroup>`: Define un grupo de columnas dentro dunha táboa. A etiqueta `<colgroup>` é útil para aplicar estilos a columnas enteiras, en vez de repetir os estilos para cada cela e cada fila.  

**Exemplo**  

```html
<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Etiqueta de táboa</title>
    <style>
        table, tr, th, td {
            border: solid 1px black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <table>
        <caption>
            Esta táboa comezou no Reino Unido e dá unha volta ao ano...
        </caption>
        <colgroup>
            <col class="Distinción" />
            <col class="Nome" />
            <col class="Vendas" />
        </colgroup>
        <thead>
            <tr>
                <th>Distinción</th>
                <th>Nome do libro</th>
                <th>Prezo do libro</th>
                <th>Vendas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Ola</td>
                <td>10000</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ola2</td>
                <td>2000</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Ola3</td>
                <td>3000000000000000000</td>
                <td>3</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Vendas totais</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

**Scope**  
O atributo `scope` especifica se unha cela de cabeceira é unha cabeceira para unha columna, fila ou grupo de columnas ou filas.  
O atributo `scope` non ten efecto visual nos navegadores web normais, pero pode ser utilizado por lectores de pantalla.  

- `scope="col"`: Especifica que a cela é unha cabeceira para unha columna.  
- `scope="row"`: Especifica que a cela é unha cabeceira para unha fila.  
- `scope="colgroup"`: Especifica que a cela é unha cabeceira para un grupo de columnas.  
- `scope="rowgroup"`: Especifica que a cela é unha cabeceira para un grupo de filas.  

**Horario do autobús**  

|                  | Luns  | Martes | Mércores | Xoves | Venres | Sábado |
| ---------------- | ----- | ------ | -------- | ----- | ------ | ------ |
| Primeiro autobús | 05:00 | 05:30  | 05:30    | 05:00 | 06:30  | 06:30  |
| Último autobús   | 00:50 | 00:50  | 00:50    | 00:50 | 01:30  | 23:50  |

```html
<table>
  <caption>Horario do autobús</caption>
  <tbody>
    <tr>
      <th></th>
      <th scope="col">Luns</th>
      <th scope="col">Martes</th>
      <th scope="col">Mércores</th>
      <th scope="col">Xoves</th>
      <th scope="col">Venres</th>
      <th scope="col">Sábado</th>
    </tr>      
    <tr>
      <th scope="row">Primeiro autobús</th>
      <td>05:00</td>
      <td>05:30</td>
      <td>05:30</td>
      <td>05:00</td>
      <td>06:30</td>
      <td>06:30</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Último autobús</th>
      <td>00:50</td>
      <td>00:50</td>
      <td>00:50</td>
      <td>00:50</td>
      <td>01:30</td>
      <td>23:50</td>
    </tr>
  </tfoot>
</table>
```

#### Lembra

- **Elementos de bloque (elementos de nivel de bloque)**  
  `<article>`, `<header>`, `<h1>`, `<nav>`, `<section>`, `<div>`, `<ul>`, `<ol>`, `<li>`, `<p>`, ...  
  Un elemento de bloque ocupa todo o espazo horizontal do seu elemento pai (contenedor) e un espazo vertical igual á altura do seu contido, creando así un "bloque".  
  Un elemento de bloque sempre comeza nunha nova liña e ocupa todo o ancho dispoñible (estírase á esquerda e á dereita tanto como poida). Podes visualizalos como unha pila de caixas.  

- **Elementos en liña (elementos de nivel en liña)**  
  `<span>`, `<a>`, `<button>`, `<video>`, `<input>`, `<br>`, ...  
  Os elementos en liña son aqueles que só ocupan o espazo delimitado polas etiquetas que definen o elemento, en vez de romper o fluxo do contido.  
  Un elemento en liña non comeza nunha nova liña e só ocupa o ancho necesario.  

---

## Aplicar estilos básicos con CSS

Podes darlle estilo á táboa usando CSS para mellorar a súa aparencia. Aquí tes algúns estilos básicos:

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

table {
    width: 100%;
    border-collapse: collapse; /* Elimina o espazo entre as celas */
    margin-bottom: 20px;
}

th, td {
    border: 1px solid #ddd; /* Bordes para as celas */
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f4f4f4; /* Cor de fondo para as cabeceiras */
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f9f9f9; /* Cor de fondo para filas pares */
}

tr:hover {
    background-color: #f1f1f1; /* Efecto hover nas filas */
}
```

#### **Explicación do CSS:**

- `border-collapse: collapse;` elimina o espazo entre as celas, facendo que os bordes se solapen.
- `padding: 8px;` engade espazo dentro das celas para que o texto non estea pegado aos bordes.
- `nth-child(even)` aplica un fondo alternado ás filas pares para mellorar a lexibilidade.
- `tr:hover` cambia a cor de fondo cando o usuario pasa o rato por riba dunha fila.

---

### Estilización avanzada e responsividade

Para facer a táboa máis atractiva e funcional, podes engadir estilos avanzados e facela responsiva.

#### **Estilos avanzados:**

```css
/* styles.css */
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

th {
    background-color: #4CAF50; /* Verde para as cabeceiras */
    color: white; /* Texto branco */
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

/* Responsividade */
@media (max-width: 600px) {
    table, thead, tbody, th, td, tr {
        display: block; /* Converte a táboa en bloques para dispositivos pequenos */
    }

    th {
        position: absolute;
        top: -9999px;
        left: -9999px; /* Oculta as cabeceiras en dispositivos pequenos */
    }

    tr {
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }

    td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%; /* Espazo para os datos */
    }

    td:before {
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: attr(data-label); /* Mostra o nome da columna antes de cada dato */
    }
}
```

#### **Explicación do CSS avanzado:**

- `box-shadow` engade unha sombra suave á táboa para darlle profundidade.
- En dispositivos pequenos, a táboa convértese en bloques para que sexa máis lexible. As cabeceiras ocúltanse e os datos móstranse en liña, co nome da columna antes de cada valor.


## Responsividade e accesibilidade

A **responsividade** e a **accesibilidade** son dous aspectos fundamentais cando se traballa con táboas en HTML, especialmente nun contexto web moderno onde os usuarios acceden aos contidos desde dispositivos de diferentes tamaños e con distintas necesidades. Vouche explicar en detalle cada un destes aspectos e como melloralos nas táboas.

---

### **1. Responsividade das Táboas**

A responsividade refírese á capacidade dunha táboa (ou calquera outro elemento web) de adaptarse a diferentes tamaños de pantalla, especialmente en dispositivos móbiles, onde o espazo é limitado. As táboas, por natureza, son elementos que poden ser difíciles de ler en pantallas pequenas se non están deseñadas correctamente.

#### **Problemas comúns:**

- **Desbordamento horizontal:** En dispositivos pequenos, as táboas anchas poden causar que a páxina se desprace horizontalmente, o que é moi molesto para o usuario.
- **Dificultade de lectura:** Cando hai moitas columnas, os datos poden volverse confusos e difíciles de seguir en pantallas pequenas.

#### **Solucións para mellorar a responsividade:**

##### **a. Uso de `overflow-x: auto;`**

Podes envolver a táboa nun contedor e aplicar `overflow-x: auto;` para permitir que o usuario desprace horizontalmente a táboa se é necesario.

```css
.table-container {
    overflow-x: auto;
}
```

```html
<div class="table-container">
    <table>
        <!-- Contido da táboa -->
    </table>
</div>
```

##### **b. Converter a táboa en bloques en dispositivos pequenos**

En dispositivos móbiles, podes convertir a táboa nunha lista de bloques onde cada fila se converte nun bloque independente. Isto faise usando media queries e CSS.

```css
@media (max-width: 600px) {
    table, thead, tbody, th, td, tr {
        display: block;
    }

    th {
        position: absolute;
        top: -9999px;
        left: -9999px; /* Oculta as cabeceiras */
    }

    tr {
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }

    td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%; /* Espazo para os datos */
    }

    td:before {
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: attr(data-label); /* Mostra o nome da columna antes de cada dato */
    }
}
```

Neste exemplo, cada celda (`<td>`) mostra o nome da columna antes do valor, o que facilita a lectura en dispositivos pequenos.

##### **c. Ocultar columnas non esenciais**

En dispositivos pequenos, podes optar por ocultar columnas que non sexan esenciais para a comprensión dos datos.

```css
@media (max-width: 600px) {
    .non-essential {
        display: none;
    }
}
```

```html
<td class="non-essential">Dato non esencial</td>
```

---

### **2. Accesibilidade das Táboas**

A accesibilidade refírese a facer que as táboas sexan comprensibles e utilizables por todos os usuarios, incluíndo aqueles que usan lectores de pantalla ou teclados para navegar.

#### **Problemas comúns:**

- **Falta de contexto:** Sen unha estrutura adecuada, os lectores de pantalla poden ter dificultades para interpretar os datos da táboa.
- **Falta de foco visible:** Os usuarios que navegan con teclado poden ter problemas para interactuar coa táboa se non hai un foco visible.

#### **Solucións para mellorar a accesibilidade:**

##### **a. Uso de `<caption>` e `<th>`**

Engade unha descrición da táboa usando a etiqueta `<caption>` e asegúrate de usar `<th>` para as cabeceiras das columnas e filas. Isto axuda aos lectores de pantalla a entender a estrutura da táboa.

```html
<table>
    <caption>Lista de alumnos e os seus cursos</caption>
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Nota</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ana</td>
            <td>Desenvolvemento Web</td>
            <td>8.5</td>
        </tr>
    </tbody>
</table>
```

- **`<caption>`**: Proporciona unha descrición da táboa.
- **`scope="col"` ou `scope="row"`**: Indica se unha cabeceira se aplica a unha columna ou a unha fila, o que axuda aos lectores de pantalla.

##### **b. Uso de `aria-label` e `aria-describedby`**

Podes usar atributos ARIA para proporcionar información adicional sobre a táboa ou partes dela.

```html
<table aria-label="Lista de alumnos">
    <thead>
        <tr>
            <th id="name">Nome</th>
            <th id="course">Curso</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td headers="name">Ana</td>
            <td headers="course">Desenvolvemento Web</td>
        </tr>
    </tbody>
</table>
```

- **`aria-label`**: Proporciona unha etiqueta descritiva para a táboa.
- **`headers`**: Asocia celas de datos coas súas cabeceiras correspondentes.

##### **c. Foco visible e navegación por teclado**

Asegúrate de que os usuarios que navegan con teclado poidan interactuar coa táboa. Podes engadir estilos para o foco visible.

```css
td:focus, th:focus {
    outline: 2px solid #4CAF50; /* Foco visible */
    outline-offset: 2px;
}
```

##### **d. Evitar táboas para deseño**

As táboas deben usarse só para presentar datos tabulares. Non se deben usar para deseñar páxinas web, xa que isto pode confundir aos lectores de pantalla.

---

### **3. Boas prácticas xerais**

#### **a. Simplifica a táboa**

- Evita táboas con moitas columnas ou filas complexas.
- Se a táboa é moi grande, considera dividila en varias táboas máis pequenas ou usar paginación.

#### **b. Usa `scope` e `headers`**

- Usa `scope="col"` ou `scope="row"` para asociar as cabeceiras cos datos.
- Usa `headers` para asociar celas de datos con múltiples cabeceiras.

#### **c. Proba con lectores de pantalla**

- Usa ferramentas como **NVDA** ou **VoiceOver** para probar como os lectores de pantalla interpretan a táboa.

#### **d. Proba a responsividade**

- Usa as ferramentas de desenvolvemento do navegador (F12) para probar como a táboa se comporta en diferentes tamaños de pantalla.

---

### **Conclusión**

A **responsividade** e a **accesibilidade** son esenciais para crear táboas en HTML que sexan útiles e inclusivas. Para mellorar a responsividade, podes usar técnicas como o desprazamento horizontal, a conversión a bloques en dispositivos pequenos e a ocultación de columnas non esenciais. Para a accesibilidade, asegúrate de usar etiquetas como `<caption>`, `<th>`, e atributos ARIA para proporcionar contexto e estrutura aos lectores de pantalla.

Con estas prácticas, as túas táboas serán máis accesibles, responsivas e fáciles de usar para todos os usuarios, independentemente do dispositivo ou das súas necesidades.

---

DAW🧊2026