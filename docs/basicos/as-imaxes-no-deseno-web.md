---
title: As imaxes no deseño web
description: As imaxes son unha compoñente esencial no deseño web, pero requiren un manexo axeitado para non comprometer o rendemento do sitio
lang: gl
lastUpdated: true
---

# {{ $frontmatter.title }}

> As imaxes son unha compoñente fundamental do deseño web, capaces de mellorar a experiencia de usuario, transmitir información visualmente e establecer a identidade de marca. No entanto, requiren un manexo axeitado para non comprometer o rendemento do sitio.

## 📸 Introdución: o poder visual na web

**Imaxinar unha web sen imaxes** é como pensar nun libro sen ilustracións: funcional, pero profundamente limitado no seu potencial comunicativo. As imaxes non só embelecen as nosas páxinas; conteñen historias, transmiten emocións, guían a atención dos usuarios e, en moitos casos, son a diferencia entre unha experiencia memorable e unha visita rápida e esquecible.

Para os novos desenvolvedores, **o mundo das imaxes web pode parecer simple** á primeira vista: subes un arquivo, inclúes unha etiqueta `<img>` e listo. Pero a realidade é máis complexa e matizable. Cada imaxe na web é un equilibrio entre **calidade visual e rendemento**, entre **deseño creativo e accesibilidade**, entre **impacto estético e velocidade de carga**.

Nesta pequena guía, imos percorrer xuntos **dende os conceptos básicos ata técnicas avanzadas**, sempre co obxectivo de que as túas imaxes sumen á experiencia do usuario sen restar rendemento ao teu sitio. Sexas un desenvolvedor front-end que comeza ou alguén con experiencia que busca actualizar coñecementos, aquí atoparás **explicacións claras, exemplos prácticos e recomendacións baseadas na experiencia real**.

## 🖼️ Formatos de imaxe compatibles coa web: Escollendo a ferramenta axeitada

**Cada formato de imaxe é como unha ferramenta especializada**: ideal para certos traballos pero pouco eficiente para outros. Coñecer estas diferenzas é o primeiro paso para poder tomar decisións técnicas acertadas.

Imaxina que tes **unha fotografía da túa última viaxe á costa galega**. Esa imaxe ten miles de cores, gradacións sutís entre o azul do mar e o ceo, e detalles complexos nas rochas. Para este caso, os formatos como **JPEG, WebP ou Avif**, serían os teus aliados, xa que están especificamente deseñados para manexar este tipo de contido fotográfico mantendo uns tamaños de arquivo razoables.

Pero se, en cambio, necesitas **incluír o logotipo da túa empresa ou unha icona decorativa** que require fondos transparentes ou manterse nítida en calquera tamaño, entón **PNG ou SVG** serían as túas mellores opcións. Estas decisións non son caprichosas - cada formato ten unha **historia técnica e un propósito específico** que determinan cando debes usalo.

### **Formatos ráster ou de mapas de bits(baseados en píxeles)**

| Formato      | Extensións      | Usos preferentes                                          | Compresión                        |
| ------------ | --------------- | --------------------------------------------------------- | --------------------------------- |
| **JPEG/JPG** | `.jpg`, `.jpeg` | Fotografías, imaxes con gradacións de cor                 | Con perdas, axustable             |
| **PNG**      | `.png`          | Logotipos, gráficos con transparencia, imaxes con texto   | Sen perdas                        |
| **GIF**      | `.gif`          | Animacións simples, gráficos con poucas cores             | Sen perdas (limitado a 256 cores) |
| **WebP**     | `.webp`         | Fotografías e gráficos (formato moderno)                  | Con/sen perdas, mellor compresión |
| **AVIF**     | `.avif`         | Fotografías de alta calidade (formato de última xeración) | Compresión moi eficiente          |

### **Formatos vectoriais**

| Formato              | Extensións        | Usos preferentes                       | Extras                    |
| -------------------- | ----------------- | -------------------------------------- | ------------------------- |
| **SVG**              | `.svg`            | Iconas, logotipos, gráficos escalables | Podemos acceder ao código |
| **Fontes de iconas** | `.woff`, `.woff2` | Conxuntos de iconas como Font Awesome  |                           |

## 🎯 Recomendacións por tipo de contido

### **Para fotografías**
Cando traballas con **fotografías reais** - retratos, paisaxes, produtos - estás a manexar información visual complexa. Aquí **a eficiencia da compresión é crucial** porque estes ficheiros poden crecer rapidamente. O formato **WebP** converteuse no estándar moderno porque ofrece calidade similar a JPEG con arquivos ata un 30% máis pequenos. Por compatibilidade con navegadores máis antigos, sempre podes ofrecer un fallback (contido alternativo) en JPEG. Se buscas o último en tecnoloxía, **AVIF** ofrece aínda mellor compresión, aínda que o seu soporte aínda non chega a tódolos navegadores.

- **Formato principal:** WebP (con fallback a JPEG para compatibilidade)
- **Alternativa:** JPEG con calidade entre 60-80%
- **Última xeración:** AVIF para navegadores compatibles

### **Para gráficos, logotipos e iconas**
Aquí é onde **SVG brila con luz propia**. A beleza dos gráficos vectoriais é que **non perden calidade ao ampliarse**, algo esencial para o deseño web responsive onde un mesmo elemento pode mostrarse en pantallas de 320 píxeles ou 4K. Se necesitas transparencias complexas ou debes soportar navegadores moi antigos, PNG é a túa alternativa segura.

- **Formato principal:** SVG (escalable, lixeiro)
- **Alternativa:** PNG-8 para gráficos con poucas cores
- **Para transparencias:** PNG-24 e paletas máis extensas

### **Para animacións**
Os **GIF animados** teñen un encanto nostálxico, pero son notoriamente ineficientes. Para animacións complexas, **considera sempre usar vídeo** (MP4 ou WebM) que se comprimen moito mellor. Para animacións simples de interface, CSS ou JavaScript ofrecen moita máis flexibilidade e rendemento.

- **Animacións simples:** GIF (poden acabar sendo moi pesados - heavy and bored)
- **Animacións complexas:** Vídeo (MP4/WebM) ou usar CSS/JS
- **Alternativa moderna:** [APNG](https://www.ionos.es/digitalguide/paginas-web/diseno-web/que-es-apng/) (menos compatible)

## 📏 Tamaños e resolucións recomendadas
**O mundo multidispositivo actual** presenta un desafío técnico fascinante: como servir imaxes que parezan perfectas nun smartphone de 5 polgadas e nun monitor de 27", sen enviar megabytes innecesarios aos dispositivos pequenos?

A clave está en entender que **non todas as pantallas son iguais**. Un usuario no seu móbil con conexión 4G necesita unha experiencia rápida, mentres que outro nun escritorio con fibra óptica pode permitirse imaxes de maior resolución. A técnica do **"responsive images"** (imaxes responsivas) é a nosa ferramenta para esta adaptación intelixente.

### **Imaxes responsivas - puntos de ruptura típicos**
```css
/* Breakpoints recomendados para imaxes */
320px   (móbiles pequenos)
480px   (móbiles)
768px   (tabletas)
1024px  (portátiles)
1280px  (escritorios)
1920px  (escritorios grandes)
```

**Un erro común** é pensar que se necesitan crear 6 ou 7 versións de cada imaxepara cubrir a maioría dos escenarios posibles. Na práctica, **3 a 4 tamaños diferentes adoitan ser máis que suficientes**. O importante é entender que estes tamaños deben basearse **no tamaño real que a imaxe ocupará na pantalla**, non nunha lista predeterminada de dispositivos.

### **Relación de aspecto común**
A relación de aspecto determina **a forma da túa imaxe** e ten implicacións no deseño:
- **16:9:** Ideal para imaxes hero ou banners, é cinematográfica e moderna
- **4:3:** Máis "cadrada", boa para galerías de produtos
- **1:1:** Perfecta para avatares de usuario ou elementos en grella
- **Personalizada:** Ás veces, o teu deseño require relacións únicas

- **Hero/header:** 16:9 ou 21:9
- **Blog/card:** 3:2 ou 4:3
- **Retrato:** 2:3
- **Cadrada:** 1:1
- **Logo:** Variable, segundo necesidades

**Lembra**: A **consistencia nas relacións de aspecto** dentro dun mesmo sitio web crea unha experiencia visual máis harmoniosa e profesional.

## ⚡ Técnicas de optimización: a busca do equilibrio perfecto (dimensións/peso)

**Optimizar imaxes é unha arte** que combina técnica, estética e psicoloxía visual. O obxectivo non é facer as imaxes o máis pequenas posibles, senón **atingir o punto ideal onde a calidade percibida é alta pero o peso do arquivo é mínimo**.

### **1. Compresión de imaxes**
A compresión é o noso aliado secreto. **Unha fotografía JPEG con 85% de calidade** será case indistinguible da orixinal ao ollo humano, pero pode reducirse a menos da metade do tamaño. Ferramentas como **Squoosh.app** (desenvolvida por Google) permítenos ver en tempo real como afectan diferentes configuracións á imaxe, facilitando decisións informadas.

- **JPEG:** Usar calidade 60-85% (85% para alta calidade, 60% para aforro)
- **PNG:** Usar ferramentas como TinyPNG ou PNGQuant
- **Ferramentas automáticas:** ImageOptim, Squoosh, ShortPixel

### **2. Redimensión axeitada**
```html
<!-- 
Enviar só o tamaño necesario 
Esta etiqueta é máis intelixente do que parece
-->
<img src="imaxe-800w.jpg" 
     srcset="imaxe-400w.jpg 400w,
             imaxe-800w.jpg 800w,
             imaxe-1200w.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     alt="Descripción da imaxe">
```

**O atributo `srcset` é como un asistente persoal** para o navegador: dámoslle opcións e el escolle a mellor según o dispositivo e conexión do usuario. A beleza deste sistema é que **funciona de forma progresiva** - os navegadores que non entenden srcset simplemente usan a imaxe do atributo `src`.

### **3. Lazy Loading**
```html
<img src="imaxe.jpg" loading="lazy" alt="...">
```

**O lazy loading transforma a forma en que cargamos imaxes**. En vez de descargar todas as imaxes ao cargar a páxina (incluso as que están fóra da pantalla), só cargamos as visibles. Cando o usuario despraza a páxina, as novas imaxes vanse cargando según se fan visibles. Esta simple liña pode **mellorar drasticamente os tempos de carga inicial**.

### **4. Uso de CDN para imaxes**
Para proxectos grandes ou con moito tráfico, **un CDN de imaxes pode ser un cambio radical**. Servizos como Cloudinary non só almacenan as túas imaxes, senón que **poden transformalas on-demand**: redimensionar, comprimir, cambiar formato ou incluso aplicar filtros, todo mediante simples parámetros na URL.

- Cloudinary, Imgix ou Cloudflare Images
- Transformacións on-demand
- Entrega optimizada por dispositivo

## 🏗️ Boas prácticas de implementación: máis aló do básico

**Implementar imaxes correctamente** vai moito máis alá de saber a sintaxe HTML. Implica pensar na **experiencia de usuario, na accesibilidade e na mantibilidade** do código.

### **Etiqueta `<img>` correcta**
```html
<img src="ruta/imaxe.jpg" 
     alt="Dúas persoas disfrutando dun café nunha cafeteria de Santiago"
     width="800"
     height="600"
     loading="lazy">
```

**Cada atributo ten un propósito específico**: `width` e `height` evitan saltos no layout durante a carga, `alt` ou a descrición textual alternativa fai a túa web máis accesible, `loading="lazy"` mellora o rendemento. Xuntos, crean unha **base sólida para calquera imaxe na web**.

### **Picture Element para formatos modernos**
```html
<picture>
  <source srcset="imaxe.avif" type="image/avif">
  <source srcset="imaxe.webp" type="image/webp">
  <img src="imaxe.jpg" alt="Descripción">
</picture>
```

**O elemento `<picture>` é unha das adicións máis poderosas** aos estándares web recentes. Permítenos ofrecer formatos modernos (como AVIF ou WebP) aos navegadores que os soportan, mentres proporcionamos un fallback seguro (JPEG ou PNG) para o resto. É **progressive enhancement en acción**: os usuarios con navegadores modernos obteñen unha experiencia mellor, sen penalizar a ninguén.

### **Imaxes de fondo con CSS**

En algunhas ocasións quereremos empregar imaxes pero o marcado HTML non bastará. por exemplo cando queiramos dispor un titular ou un texto sobre a imaxe. Nestes casos precisaremso empregar CSS. Tendo en conta que tamén nesta ocasión deberemos preparar e optimizar a imaxe de maneira correcta: cun tamaño e peso axeitados.

```css
.hero {
  background-image: url('imaxe-pequena.jpg');
  
  /* Para pantallas de alta resolución */
  @media (-webkit-min-device-pixel-ratio: 2), 
         (min-resolution: 192dpi) {
    background-image: url('imaxe-grande.jpg');
  }
}
```

## 🌐 A accesibilidade e as imaxes: inclusión visual

**A accesibilidade web non é un luxo, nin tampouco un *snoobismo*, é unha necesidade**, ao tempo que un dereito. Así que os deseñadores e desenvolvedors web teñen a obriga de tratalas e implementalas correctamente, xa que doutro xeito estarían a crear barreiras e a discriminar a moitos usuarios con capacidades visuais ou cognitivas diferenciadas das que de xeito pouco solidario se considran *normais*.

### **Texto alternativo (alt)**
O atributo `alt` é **a voz das túas imaxes para quen non pode velas**. Un bo texto alternativo:
- **Describe o contido** da imaxe de forma concisa (`alt="Dúas persoas traballando nun portátil nun café"`)
- **Inclúe información funcional** se a imaxe é interactiva (`alt="Buscar"`)
- **Omítese** se a imaxe é puramente decorativa (ou mellor se indica que é decorativa:  `alt="Imaxe decorativa"`)
- **Evitar sempre frases xenéricas** como "imaxe" ou "foto"

> **Proba este exercicio**: pecha os ollos e pídelle a alguén que te lea os textos `alt` das túas imaxes. Se podes formar unha idea clara do contido visual, estás no bo camiño.

### **Outras consideracións**
- Contraste suficiente entre texto e imaxe de fondo
- Non usar texto dentro de imaxes (usar texto real cando sexa posible)
- Proporcionar descricións longas para gráficos complexos

Ata aquí as consideración fundamentais que un deseñador|desenvolvedor web debe ter en conta á hora de empregar imaxes nos seus proxectos.

A continuación imos a profundizar nas **métricas de rendemento, fluxos de traballo eficientes e tecnoloxías avanzadas**, sempre desde o punto de vista práctico e accesible que debe caracterizar o desenvolvemento web profesional.

## 📊 Métricas de Rendemento

### **Obxectivos de rendemento**
- **Largest Contentful Paint (LCP):** < 2.5 segundos
- **Peso total de imaxes:** < 1 MB por páxina (ideal)
- **Imaxes pre-cargadas críticas:** Usar `rel="preload"`

### **Ferramentas de análise**
- Lighthouse (Chrome DevTools)
- WebPageTest
- PageSpeed Insights

## 🔧 Fluxo de Traballo Recomendado

1. **Captura/creación:** Traballar con imaxes en alta resolución
2. **Edición:** Axustar tamaño, recortar e corrixir
3. **Exportar:** Escoller formato adecuado ao contido
4. **Optimizar:** Comprimir sen perder calidade visible
5. **Implementar:** Usar técnicas responsivas e lazy loading
6. **Probar:** Verificar en distintos dispositivos e conexións

## 🚀 Tecnoloxías Avanzadas

### **WebP e AVIF**
```html
<!-- Soporte progresivo -->
<picture>
  <source type="image/avif" srcset="imaxe.avif">
  <source type="image/webp" srcset="imaxe.webp">
  <img src="imaxe.jpg" alt="...">
</picture>
```

### **Imaxes responsivas con CSS**
```css
.img-responsiva {
  max-width: 100%;
  height: auto;
}

/* Imaxe de fondo responsiva */
.bg-responsivo {
  background-image: url('imaxe.jpg');
  background-size: cover;
  background-position: center;
}
```

### **API de imaxes do navegador**
```javascript
// Detección de soporte WebP
async function supportsWebp() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 0;
}
```

## 📱 Consideracións para Dispositivos Móbiles

- **Priorizar imaxes críticas** para a vista inicial
- **Usar SRCSET** para diferentes densidades de pantalla
- **Considerar a rede:** Ofrecer imaxes máis lixeiras en 3G
- **Tamaños adecuados:** Non enviar imaxes de 2000px a un móbil

## 🔍 SEO para Imaxes

- Nomes de arquivo descriptivos (`cafe-traballando-portatil.jpg` en vez de `IMG_1234.jpg`)
- Texto `alt` relevante e descriptivo
- Sitemap de imaxes para sitios grandes
- Metadatos estruturados para imaxes destacadas

## 🛠️ Ferramentas Recomendadas

| Tipo                   | Ferramentas                                 |
| ---------------------- | ------------------------------------------- |
| **Compresión**         | TinyPNG, ImageOptim, Squoosh                |
| **Edición**            | Photoshop, GIMP, Affinity Photo             |
| **CDN/Transformación** | Cloudinary, Imgix, Cloudflare Images        |
| **Análise**            | Lighthouse, WebPageTest, PageSpeed Insights |
| **Vectorial**          | Illustrator, Inkscape, Figma                |

## 📚 Conclusión

O manexo adecuado de imaxes no desenvolvemento web é un equilibrio entre calidade visual, rendemento e accesibilidade. Ao seguir estas prácticas:

1. **Escolle o formato axeitado** para cada tipo de imaxe
2. **Optimiza sempre** o tamaño do arquivo
3. **Implementa de forma responsiva** con srcset e picture
4. **Prioriza a accesibilidade** con textos alt adecuados
5. **Mide o rendemento** regularmente

As imaxes ben optimizadas non só melloran a estética do teu sitio, senón que tamén contribúen a unha mellor experiencia de usuario, maior velocidade de carga e mellor posicionamento SEO.

**Lembra que cada imaxe na web conta unha historia** - asegúrate de que a túa se conte de forma rápida, bela e accesible para todos.

---

XAN 2026