---
title: Linguaxes de marcas ii
lastUpdated: true
---

# {{ $frontmatter.title }}

## 1. Recoñecemento das características das linguaxes de marcas

As linguaxes de marcas son ferramentas fundamentais na construción de documentos estruturados, como as páxinas web. Aquí tes as principais características que as definen:

### Principais características das linguaxes de marcas

- **1. Baseadas en texto**

  As linguaxes de marcas están compostas por texto plano, o que permite a súa edición con calquera editor de texto e fai que sexan sinxelas de ler e interpretar tanto por humanos como por máquinas. Deste xeito se consigue que os documentos sexan independentes do sistema operativo e do programa que os creou.

  Os caracteres de ditos textos se codifican mediante a utilización de diferentes códigos dependendo do idioma ou do alfabeto necesario, como poden ser: ASCII, **UTF-8**, ISO- 8859-15. 

------

  - **2. Uso de etiquetas**

    - As etiquetas son o elemento fundamental destas linguaxes e están formadas por palabras clave dentro de corchetes angulares (`< >`).

    - As etiquetas indican a estrutura ou o significado do contido. Por exemplo, en HTML, `<h1>` indica un encabezado principal, e `<p>` indica un parágrafo.

    Un exemplo, ``<h1>Contido</h1>``. 

    O código que aparece entre corchetes é o que denominamos instrucións de marcado ou etiquetas. Mentres que o texto situado entre as marcas fai referencia ao contido propio do documento.

------

  - **3. Xerarquía e estrutura**

    As linguaxes de marcas permiten organizar o contido de forma xerárquica mediante etiquetas aniñadas. Isto facilita a estrutura lóxica e a interpretación do documento, esencial en casos como HTML para navegadores.

------

  - **4. Dependencia dun esquema ou estándar**

    Algunhas linguaxes de marcas, como XML, requiren seguir un esquema definido para garantir a validez e coherencia do documento. Por exemplo:

    - XML pode usar un arquivo DTD ou XML Schema para validar a estrutura.
    - En HTML, hai estándares definidos polo **W3C** para garantir a compatibilidade entre navegadores e o uso correcto do marcado.

------

  - **5. Independencia do formato de presentación**

    - Estas linguaxes céntranse no contido e na estrutura, pero non na súa presentación.
    - A presentación adoita ser definida por tecnoloxías complementarias, como CSS para o caso de HTML.

    Co paso dos anos, as linguaxes de marcas foron evolucionando, de tal xeito que, podemos facer uso delas nun grande número de áreas, como poden ser os gráficos vectoriais, a notación científica, as interfaces de usuario, o transporte e almacenamento de datos, etc.

------

  - **6. Extensibilidade**

    Linguaxes como XML permiten crear etiquetas personalizadas, adaptándose a múltiples contextos, desde documentos web ata sistemas de intercambio de datos.

    Outras linguaxes como HTML tamén foron, e seguen, cambiando adaptándose a novos escenarios e requirimentos dos usuarios.

------

  - **7. Compatibilidade e portabilidade**

    Ao tratarse de texto plano, os documentos baseados nestas linguaxes son compatibles con múltiples sistemas e plataformas, sendo ideais para o intercambio de información.

------

  - **8. Flexibilidade e facilidade de integración**

    Son facilmente integrables con outras tecnoloxías. Por exemplo:

    - HTML pode combinarse con CSS, JavaScript ou PHP para crear páxinas dinámicas e atractivas.
    - XML é amplamente usado en APIs para comunicar diferentes sistemas, que poden ser consumidas con distintas linguaxes de programación.

------

### **Exemplos destacados de linguaxes de marcas:**

1. **HTML (HyperText Markup Language):** Usado para crear a estrutura de páxinas web.
2. **XML (eXtensible Markup Language):** Usado para almacenar e transportar datos de forma estruturada.
3. **Markdown:** Unha linguaxe lixeira para a creación de documentos con formato básico (popular en documentación técnica).
4. **SVG (Scalable Vector Graphics):** Usado para descrición de gráficos vectoriais.



## 2. Clasificación

As linguaxes de marcas pódense clasificar dependendo do tipo de marcas que empreguen para definir a estrutura e o significado do contido. Aquí tes unha clasificación común baseada neste criterio:

------

### **1. Linguaxes de marcas predefinidas**

Neste tipo de linguaxes, as marcas ou etiquetas están predefinidas polo estándar da linguaxe. Non se poden crear novas etiquetas, o que garante uniformidade no uso.

#### **Exemplos:**

- **HTML (HyperText Markup Language):**
  - As etiquetas como `<html>`, `<head>`, `<body>`, `<p>`, entre outras, son fixas.
  - Úsase para a estrutura e presentación de páxinas web.
- **SVG (Scalable Vector Graphics):**
  - Emprega etiquetas predefinidas como `<circle>`, `<rect>` ou `<path>` para crear gráficos vectoriais.

#### **Características:**

- Son doadas de aprender porque teñen un conxunto limitado de etiquetas.
- Adoitan estar optimizadas para un propósito específico (web, gráficos, etc.).

------

### **2. Linguaxes de marcas extensibles**

Estas linguaxes permiten aos usuarios definir as súas propias etiquetas. Son altamente flexibles e adaptables a múltiples usos.

#### **Exemplos:**

- **XML (eXtensible Markup Language):**
  - Permite crear etiquetas personalizadas como `<produto>`, `<prezo>`, `<cliente>`, segundo as necesidades.
  - Moi utilizada para intercambio e almacenamento de datos estruturados.
- **XHTML (eXtensible HyperText Markup Language):**
  - Combina(ba) as características de HTML e XML, mantendo compatibilidade coas etiquetas predefinidas de HTML mentres adopta(ba) unha sintaxe XML válida.
  - *Sobrevive en contornas pouco actualizados e xa non se usa en novos proxectos.*

#### **Características:**

- Ofrecen grande flexibilidade, pero tamén requiren máis esforzo para deseñar esquemas ou validadores.
- Útiles en aplicacións que necesitan definir estándares personalizados (como en sistemas de xestión de datos).

------

### **3. Linguaxes de marcas mixtas**

Combinan marcas predefinidas e personalizables, ofrecendo unha base estándar coa posibilidade de expansión para cubrir necesidades específicas.

#### **Exemplos:**

- **DocBook:**
  - Úsase para crear documentación técnica.
  - Ten un conxunto de etiquetas estándar, pero permite ampliacións mediante XML.
- **TEI (Text Encoding Initiative):**
  - Útil na codificación de textos académicos e históricos.
  - Combina etiquetas predefinidas e a posibilidade de personalización.

#### **Características:**

- Ofrecen un equilibrio entre uniformidade e flexibilidade.
- Frecuentemente usadas en contextos específicos, como investigación académica ou publicacións.

------

### **4. Linguaxes de marcas lixeiras**

Estas linguaxes usan marcas mínimas para definir a estrutura, sendo moi fáciles de usar e ler.

#### **Exemplos:**

- **Markdown:**
  - Usa símbolos simples como `#` para encabezados ou `*` para listas.
  - Popular en documentación técnica e redacción de contido en liña.
- **BBCode (Bulletin Board Code):**
  - Empregado en foros en liña.
  - Usa marcas simples como `[b]texto[/b]` para aplicar formatos.

#### **Características:**

- A súa simplicidade fai que sexan ideais para principiantes ou aplicacións que non requiren estruturas complexas.
- Non son tan potentes ou flexibles como XML ou HTML.

------

Esta clasificación permite entender mellor cal é a linguaxe de marcas máis axeitada segundo o propósito. Pero non é a úneca clasificación que podemos atopar.

Dependendo do tipo de marcas que utilicemos, as linguaxes de marcas pódense dividir en **tres+1 categorías principais**. Esta clasificación baséase na función que teñen as marcas dentro do documento. Aquí tes unha descrición dos tres+1 tipos:

------

### **1. Linguaxes de marcas de presentación**

- **Definición:** Estas linguaxes utilízanse para describir como debe presentarse visualmente o contido, como o estilo, a posición ou o formato. As súas marcas están deseñadas para controlar o aspecto máis que a semántica do contido.
- **Aplicacións:** Usadas en documentos que requiren un formato visual definido, como publicacións científicas ou documentos estilizados.
- **Exemplos:**
  - **LaTeX:** Utilizado para documentos técnicos ou científicos, e para crear documentos de alta calidade tipográfica. As marcas indican formatos específicos, como `\section{Título}` para secciones.
  - **RTF (Rich Text Format):** Centrado na presentación de texto con formato e estilos.
  - **SVG (Scalable Vector Graphics):** Para definir gráficos vectoriais.
- **Características**:
  - Máis enfocadas na estética e na aparencia.
  - Poden carecer dunha estrutura semántica, ou lóxica, clara.

------

### **2. Linguaxes de marcas de descrición, estruturais ou semánticas**

- **Definición:** Deseñadas para organizar e estruturar o contido de maneira lóxica e xerárquica. Estas linguaxes están deseñadas para describir a estrutura e o significado semántico do contido. As marcas dividen o contido en seccións lóxicas como encabezados, parágrafos, listas, táboas, etc.
- **Aplicacións:** Utilízanse en documentos ou datos que necesitan unha organización clara para facilitar a súa lectura, procesamento ou presentación.
- **Exemplo:**
  - **HTML:** Organiza o contido dunha páxina web mediante etiquetas estruturais como `<h1>` (encabezado principal) ou `<p>` (parágrafo).
  - **XML:** Usado para describir datos estruturados de forma xerárquica, e para facilitar o intercambio de información entre sistemas.
    - Moitas linguaxes que derivan de XML teñen este propósito de crear documentos que se almacenan nesa [forma de árbore](https://www.tutorialspoint.com/es/xml/xml_tree_structure.htm) característica, polo que se consideran bases de datos, pero neste caso, ao non utilizar táboas, reciben o nome de bases de datos semiestruturadas. Algúns exemplos deste tipo poden ser: ASN. 1, YAML, EBML, RDF, XFML, OWL, XTM.
- **Características:**
  - Máis enfocadas en que o contido teña un significado semántico claro e unha estrutura lóxica.
  - Útiles para representar información que debe ser interpretada ou procesada.
  - Facilitan a interoperabilidade entre sistemas.

------

### **3. Linguaxes de marcas de datos**

- **Definición:** Orientadas á representación, almacenamento e intercambio de datos entre diferentes sistemas ou aplicacións. As marcas identifican valores, relacións e atributos.

- **Aplicacións:** Ideais para comunicación entre APIs, almacenamento de datos estruturados ou exportación/importación de información.

- **Exemplo:**

  - **JSON (JavaScript Object Notation):** Formato lixeiro para o intercambio de datos. Usado para transmitir datos estruturados en APIs. 

    (*Aínda que JSON non sexa propiamente unha linguaxe de marcas inclúese aquí pola súa alta penetración no intercambio de datos, APIs e documentación estruturada.*)

  - **XML:** Amplamente usado para transportar e almacenar datos. Se soe empregar como linguaxe de datos en contextos de intercambio de información.

  - **YAML:** Alternativa sinxela para describir datos estruturados.

- **Características:**

  - Moi orientadas á interoperabilidade entre aplicacións e sistemas.
  - Non se preocupan da presentación ou da estrutura semántica visual, senón de organizar os datos de maneira que sexan procesables.
  - Máis compactas e eficientes que as linguaxes de estrutura.
  - Adaptadas para sistemas automáticos e APIs.

### **4. Linguaxes de marcas híbridas**

- **Funcionalidade:** Combinan estrutura e presentación, permitindo organizar o contido e definir o seu aspecto visual.
- **Aplicacións:** Usadas en casos onde o contido debe ter unha estrutura semántica clara pero tamén control visual.

- **Exemplos:**
  - **XHTML (eXtensible HyperText Markup Language):** Combina características de XML e HTML.(*Abandoado!*)
  - **Markdown:** Permite estruturar contido e, ao mesmo tempo, definir a súa presentación básica. Tamén ten a capacidade de ser facilmente transportado a outros formatos como HTML, RTF, LaTeX ou PDF grazas a ferramentas como [Pandoc](https://pandoc.org/).

- **Características:**
  - Equilibran semántica, estrutura e presentación.
  - Usadas tanto para publicacións en liña como para documentos sinxelos.

------

### Resumo:

1. **Presentación:** Enfócanse no estilo (e.g.[^1], LaTeX, RTF, nroff, troff, Docbook,…).
2. **Descrición, semántica e estrutura:** Enfócanse no significado e na organización lóxica (e.g., HTML, XML, YAML, EBML, RDF,…).
3. **De datos:** Enfócanse na transmisión e intercambio de datos (e.g., JSON, XML).
4. **Híbridas**: Combinan estrutura e presentación pero tamén control visual. (Markdown)

---
##### NOTAS:^

[1]: e.g.,  “exempli gratia”, “por exemplo”