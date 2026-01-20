---
title: Probas específicas por navegador - Dominando a compatibilidade
description: Cada navegador é un produto diferente, con distintos equipos de desenvolvemento, filosofías e prioridades. 
lastUpdated: true
---

# {{ $frontmatter.title }}

## 🔍 Introdución: O labirinto da compatibilidade

**Imaxina que estás a preparar unha gran cea para invitados de todo o mundo**. Cada convidado ten as súas propias necesidades dietéticas, preferencias culinarias e incluso formas diferentes de usar os cubos. Probas específicas por navegador son o equivalente a **garantir que cada comensal reciba un prato que poida saborear e digerir correctamente**, independentemente das súas particularidades.

Para un novo desenvolvedor, descubrir que o teu sitio **parece perfecto en Chrome pero está roto en Safari** pode ser unha experiencia frustrante. Pero non te preocupes: esta diversidade non é un erro do sistema, senón **unha característica inherente da web aberta**. Cada navegador é un produto diferente, con distintos equipos de desenvolvemento, filosofías e prioridades.

Aprender a navegar por estas diferenzas non é só unha habilidade técnica, é **unha arte que combina coñecemento técnico, pensamento estratéxico e paciencia**. Imos explorar como dominar esta arte.

## 🗺️ O mapa da compatibilidade: Entendendo o terreno

### **Os tres grandes motores de renderizado**

Antes de profundizar nas probas, debemos entender **por que existen estas diferencias**:

#### **1. Blink (Google Chrome, Microsoft Edge, Opera, Brave)**
- **Dominio de mercado:** ~70% global
- **Actualizacións:** Automáticas cada 6 semanas
- **Filosofía:** Innovación rápida, adopción temperá de estándares
- **Peculiaridades:** Implementa características experimentais con prefixos `-webkit-` por compatibilidade

#### **2. Gecko (Mozilla Firefox)**
- **Cota de mercado:** ~8% global
- **Actualizacións:** Cada 4 semanas aproximadamente
- **Filosofía:** Privacidade, estándares abertos, independencia
- **Peculiaridades:** Ten o seu propio sistema de prefixos `-moz-`

#### **3. WebKit (Safari, todos os navegadores en iOS)**
- **Cota de mercado:** ~18% global (maioría en iOS)
- **Actualizacións:** Vinculadas a actualizacións do sistema operativo
- **Filosofía:** Seguridade, eficiencia enerxética
- **Peculiaridades:** Restritivo con APIs novas, forte enfoque en privacidade

**Dato crucial:** En iOS, **todos os navegadores usan WebKit** por requirimento de Apple. Isto significa que Firefox en iOS non usa Gecko, senón WebKit.

## 🛠️ Configurando o teu ambiente de proba

### **1. O laboratorio virtual dos navegadores**

**Non necesitas 10 ordenadores físicos** para probar en diferentes navegadores. Existen solucións modernas:

```bash
# Instalación básica para probas locais
# Navegadores principais
brew install --cask google-chrome firefox

# Para Safari, necesita macOS
# Para Edge en macOS/Linux:
brew install --cask microsoft-edge

# Para versións antigas específicas
npm install -g @browserstack/cli
```

### **2. Ferramentas de proba en nube**
```javascript
// Exemplo de configuración con WebDriverIO (compatible con BrowserStack)
const { remote } = require('webdriverio');

const browsers = [
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--disable-dev-shm-usage']
    },
    'bstack:options': {
      os: 'Windows',
      osVersion: '10',
      browserVersion: 'latest'
    }
  },
  {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['-headless']
    },
    'bstack:options': {
      os: 'OS X',
      osVersion: 'Big Sur',
      browserVersion: 'latest'
    }
  },
  {
    browserName: 'safari',
    'bstack:options': {
      os: 'OS X',
      osVersion: 'Big Sur',
      browserVersion: '14'
    }
  }
];

async function runTest(browserConfig) {
  const browser = await remote({
    logLevel: 'error',
    capabilities: browserConfig
  });
  
  await browser.url('https://tusitio.com');
  // Executar as túas probas aquí
  
  await browser.deleteSession();
}

// Executar probas en paralelo
await Promise.all(browsers.map(runTest));
```

### **3. Configuracións recomendadas por proxecto**

**Para un proxecto profesional**, considera esta configuración:

```json
// package.json
{
  "scripts": {
    "test:browsers": "npm run test:chrome && npm run test:firefox && npm run test:safari",
    "test:chrome": "cross-env BROWSER=chrome npm run test:e2e",
    "test:firefox": "cross-env BROWSER=firefox npm run test:e2e",
    "test:safari": "cross-env BROWSER=safari npm run test:e2e",
    "test:edge": "cross-env BROWSER=edge npm run test:e2e",
    "test:mobile": "npm run test:ios && npm run test:android",
    "test:legacy": "npm run test:ie11"
  }
}
```

## 🎯 Áreas críticas de diferenza entre navegadores

### **1. CSS: O campo de loita principal**

```css
/* Exemplo: diferenzas en flexbox */
.contenedor {
  display: flex;
  
  /* Safari precisa isto para elementos flex fill */
  display: -webkit-flex;
  
  /* Firefox antigo */
  display: -moz-box;
}

/* Grid CSS - soporte variable */
.layout {
  display: grid;
  display: -ms-grid; /* Para IE/Edge antigo */
  
  /* Safari necesita prefixos para certas propiedades */
  -webkit-grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}

/* Propiedades experimentais */
.elemento {
  /* Chrome/Safari */
  -webkit-backdrop-filter: blur(10px);
  
  /* Firefox */
  backdrop-filter: blur(10px);
}

/* Custom properties con fallbacks */
:root {
  --cor-principal: #3498db;
}

.boton {
  color: #3498db; /* Fallback para navegadores sen soporte */
  color: var(--cor-principal);
}
```

**Estratexia práctica:** Usa ferramentas como **Autoprefixer** automaticamente:

```json
// .browserslistrc
> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 11
```

### **2. JavaScript: APIs e comportamentos diferentes**

```javascript
// Date.parse pode ter diferenzas
const fechaChrome = Date.parse('2024-01-15'); // Funciona
const fechaSafari = Date.parse('2024-01-15'); // Pode fallar

// Mellor: usar formato ISO ou Date.UTC
const fechaSegura = new Date('2024-01-15T00:00:00Z');

// Intersection Observer - soporte variable
if ('IntersectionObserver' in window) {
  // Navegadores modernos
  const observer = new IntersectionObserver(callback);
} else {
  // Fallback para navegadores antigos
  implementarFallback();
}

// Eventos de teclado - diferenzas
document.addEventListener('keydown', (e) => {
  // Chrome/Firefox: 'Escape'
  // Safari antigo: 'Esc'
  // Solución: normalizar
  const tecla = e.key || e.keyIdentifier || e.keyCode;
  
  if (tecla === 'Escape' || tecla === 'Esc' || tecla === 27) {
    pecharModal();
  }
});

// Promises e async/await - probar soporte
function soportaAsyncAwait() {
  try {
    eval('async () => {}');
    return true;
  } catch {
    return false;
  }
}

// Web APIs específicas
if ('serviceWorker' in navigator) {
  // Chrome, Firefox, Edge
  navigator.serviceWorker.register('/sw.js');
} else if ('standalone' in navigator && navigator.standalone) {
  // Safari en modo PWA
  console.log('Safari PWA');
}
```

### **3. Formularios: Un mundo de diferenzas**

```html
<!-- Input de data -->
<input type="date" id="fecha">

<script>
const inputFecha = document.getElementById('fecha');

// Chrome/Edge: Ten selector nativo
// Firefox: Campo de texto
// Safari: Selector pero diferente UI

// Proba de soporte
if (inputFecha.type === 'date') {
  // O navegador soporta input date nativo
  inputFecha.addEventListener('change', (e) => {
    console.log('Data seleccionada:', e.target.value);
  });
} else {
  // Fallback con JavaScript
  inputFecha.type = 'text';
  // Engadir datepicker personalizado
}
</script>

<!-- Input de ficheiros -->
<input type="file" accept=".pdf,.doc,.docx">

<!-- 
  Chrome: Filtro visual de ficheiros
  Firefox: Mostra todos os ficheiros pero filtra despois
  Safari: Comportamento similar a Chrome
-->
```

## 📋 Checklist de proba por navegador

### **Checklist xeral para todos os navegadores**

```markdown
## Checklist de compatibilidade básica

### ✅ Renderización visual
- [ ] Layout correcto en todas as resolucións
- [ ] Fonts cargan e se mostran correctamente
- [ ] Imaxes se mostran con proporcións correctas
- [ ] Videos/animacions funcionan
- [ ] Scroll suave e consistente

### ✅ Funcionalidade JavaScript
- [ ] Todos os eventos do ratón/táctil funcionan
- [ ] Validación de formularios funciona
- [ ] APIs asíncronas (fetch, etc.) funcionan
- [ ] Storage (localStorage, sessionStorage) funciona
- [ ] Notificacións funcionan (se aplicable)

### ✅ Rendemento
- [ ] Tempo de carga aceptable
- [ ] Animacions suaves (60fps)
- [ ] Uso de memoria razoable
- [ ] Responsividade inmediata a interaccións

### ✅ Accesibilidade
- [ ] Navegación por teclado funciona
- [ ] Lectores de pantalla anuncian contido correctamente
- [ ] Contraste de cores suficiente
- [ ] Zoom funciona ata 200%
```

### **Checklist específica por navegador**

#### **Google Chrome**
```markdown
## Chrome específico

### ✅ Funcionalidades experimentais
- [ ] Web Components funcionan
- [ ] APIs de realidade aumentada (se usadas)
- [ ] WebUSB/WebBluetooth (se usadas)

### ✅ Integracións
- [ ] Instalación como PWA funciona
- [ ] Notificacións push funcionan
- [ ] Background sync funciona

### ✅ Extensións/Ferramentas
- [ ] As extensións non rompen o sitio
- [ ] Modo incógnito funciona
- [ ] Ferramentas de desenvolvedor non afectan funcionalidade
```

#### **Mozilla Firefox**
```markdown
## Firefox específico

### ✅ Privacidade e seguranza
- [ ] O sitio funciona con protección antitrazamento activada
- [ ] Cookies de terceiros bloqueadas non rompen funcionalidade
- [ ] HTTPS obrigatorio funciona

### ✅ Estándares web
- [ ] WebAuthn funciona
- [ ] CSS subgrid (se usado)
- [ ] :focus-visible funciona correctamente

### ✅ Peculiaridades
- [ ] Scroll diferente (non momentum scrolling por defecto)
- [ ] Renderización de fonts pode ser diferente
- [ ] CSS con -moz- prefixos funciona
```

#### **Safari/WebKit**
```markdown
## Safari/WebKit específico

### ✅ iOS/MacOS
- [ ] Toques/táctil funcionan correctamente
- [ ] Status bar en iOS non cubre contido
- [ ] 100vh funciona correctamente (considerar altura do navegador)
- [ ] PWA funciona en modo standalone

### ✅ Limitacións coñecidas
- [ ] Autoplay de vídeo/audio respecta políticas
- [ ] Notification API limitada
- [ ] Service Workers teñen limitacións
- [ ] iframes con sandbox teñen restricións

### ✅ WebKit específico
- [ ] -webkit- prefixos necesarios funcionan
- [ ] backdrop-filter funciona
- [ ] CSS sticky funciona
- [ ] Input types especiais teñen UI nativa
```

#### **Microsoft Edge**
```markdown
## Edge específico

### ✅ Compatibilidade
- [ ] Modo IE funciona (se necesario para empresas)
- [ ] WebView2 funciona (para aplicaciones Windows)
- [ ] Collections non interfiren

### ✅ Integración Windows
- [ ] Instalación como app funciona
- [ ] Live tiles funcionan
- [ ] Windows share funciona
```

## 🧪 Técnicas de proba efectivas

### **1. Proba de degradación amable - *Graceful Degradation***
```javascript
// Estratexia: Detectar capacidades, non navegadores
function soportaWebP() {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

function soportaAvif() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
}

// Usar detección de características
async function cargarImaxeOptimizada(url, fallbackUrl) {
  if (await soportaAvif()) {
    return `${url}.avif`;
  } else if (soportaWebP()) {
    return `${url}.webp`;
  } else {
    return `${url}.jpg`;
  }
}
```

### **2. Proba de rendemento cruzada**
```javascript
// Medir rendemento en diferentes navegadores
const metricas = {
  fcp: null, // First Contentful Paint
  lcp: null, // Largest Contentful Paint
  cls: null, // Cumulative Layout Shift
  fid: null  // First Input Delay
};

// Capturar métricas
function capturarMetricas() {
  // Usar Performance API
  const perfData = performance.getEntriesByType('navigation')[0];
  
  metricas.fcp = perfData.domContentLoadedEventEnd;
  metricas.lcp = performance.getEntriesByName('largest-contentful-paint')[0]?.startTime;
  
  // Layout Shift
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      metricas.cls = (metricas.cls || 0) + entry.value;
    }
  }).observe({type: 'layout-shift', buffered: true});
  
  // Input Delay
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      metricas.fid = entry.processingStart - entry.startTime;
    }
  }).observe({type: 'first-input', buffered: true});
}

// Enviar métricas para análise
function reportarMetricas() {
  navigator.sendBeacon('/analytics/metricas', {
    ...metricas,
    navegador: navigator.userAgent,
    timestamp: Date.now()
  });
}
```

### **3. Proba automatizada con diferentes *User Agents***
```javascript
// Probar comportamento con diferentes user agents
const userAgents = {
  chrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  firefox: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15',
  edge: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
};

async function probarConUserAgent(userAgent) {
  // Usar Puppeteer ou Playwright para cambiar User Agent
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setUserAgent(userAgent);
  await page.goto('http://localhost:3000');
  
  // Executar probas específicas
  const result = await page.evaluate(() => {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      features: {
        webp: document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0,
        flexbox: 'flex' in document.documentElement.style,
        grid: 'grid' in document.documentElement.style,
        serviceWorker: 'serviceWorker' in navigator
      }
    };
  });
  
  await browser.close();
  return result;
}
```

## 🚨 Problemas comúns e solucións

### **1. O Problema dos 100vh en Mobile Safari**
```css
/* MAL: Usar 100vh en iOS */
.contenedor {
  height: 100vh; /* Problema: inclúe a barra do navegador */
}

/* BEN: Solución para todos os navegadores */
.contenedor {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

/* JavaScript para corrixir */
function fixVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', fixVH);
window.addEventListener('orientationchange', fixVH);
fixVH(); // Inicial
```

### **2. Autoplay de Vídeo Diferente**
```javascript
// Xestión de autoplay entre navegadores
function xestionarAutoplay(videoElement) {
  const promise = videoElement.play();
  
  if (promise !== undefined) {
    promise.catch(error => {
      // Autoplay non permitido
      if (error.name === 'NotAllowedError') {
        // Mostrar botón de play manual
        mostrarControlesManuales(videoElement);
      }
    });
  }
}

// Estratexia: esperar interacción do usuario
document.addEventListener('click', () => {
  // Despois do primeiro clic, tentar autoplay
  videoElement.play().catch(() => {
    // Se falla, esperar máis interacción
  });
}, { once: true });
```

### **3. Entradas (*inputs*) Date/Time inconsistentes**
```html
<!-- Solución cross-browser para inputs de data -->
<div class="date-input">
  <label for="date">Data:</label>
  <input type="date" id="date" 
         placeholder="DD/MM/AAAA"
         pattern="\d{2}/\d{2}/\d{4}">
  
  <!-- Fallback para navegadores sen soporte nativo -->
  <div class="datepicker-fallback" hidden>
    <!-- Datepicker personalizado -->
  </div>
</div>

<script>
const dateInput = document.getElementById('date');

// Detectar soporte para input type="date"
if (dateInput.type === 'text') {
  // O navegador non soporta input date nativo
  dateInput.type = 'text';
  document.querySelector('.datepicker-fallback').hidden = false;
  
  // Inicializar datepicker personalizado
  inicializarDatepickerPersonalizado();
}

// Normalizar formato de data
function normalizarData(input) {
  // Converter calquera formato a YYYY-MM-DD
  const date = new Date(input);
  if (!isNaN(date)) {
    return date.toISOString().split('T')[0];
  }
  return input;
}
</script>
```

## 📊 Ferramentas de análise e monitorización

### **1. Dashboard de compatibilidade**
```javascript
// Dashboard básico para monitorizar problemas de compatibilidade
class CompatibilidadeDashboard {
  constructor() {
    this.problemas = [];
    this.navegador = this.detectarNavegador();
    this.capacidades = this.testarCapacidades();
  }
  
  detectarNavegador() {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome') && !ua.includes('Edg')) return 'chrome';
    if (ua.includes('Firefox')) return 'firefox';
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'safari';
    if (ua.includes('Edg')) return 'edge';
    return 'descoñecido';
  }
  
  testarCapacidades() {
    return {
      flexbox: 'flex' in document.documentElement.style,
      grid: 'grid' in document.documentElement.style,
      webp: this.soportaWebP(),
      webgl: this.soportaWebGL(),
      serviceWorker: 'serviceWorker' in navigator,
      push: 'PushManager' in window,
      intersectionObserver: 'IntersectionObserver' in window
    };
  }
  
  soportaWebP() {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  
  soportaWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
               (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      return false;
    }
  }
  
  reportarProblema(tipo, descricion, severidade = 'media') {
    this.problemas.push({
      tipo,
      descricion,
      severidade,
      navegador: this.navegador,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
    
    // Enviar a servidor para análise
    this.enviarReporte();
  }
  
  enviarReporte() {
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/compatibilidade/report', JSON.stringify({
        problemas: this.problemas,
        capacidades: this.capacidades,
        navegador: this.navegador
      }));
    }
  }
}

// Inicializar dashboard
window.compatDashboard = new CompatibilidadeDashboard();
```

### **2. Integración con ferramentas de CI/CD**
```yaml
# GitHub Actions workflow para probas multi-navegador
name: Probas Multi-Navegador

on: [push, pull_request]

jobs:
  test-chrome:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Instalar dependencias
        run: npm ci
      - name: Probas en Chrome
        run: npm run test:e2e:chrome
        env:
          BROWSER: chrome
          
  test-firefox:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Instalar dependencias
        run: npm ci
      - name: Probas en Firefox
        run: npm run test:e2e:firefox
        env:
          BROWSER: firefox
          
  test-safari:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Instalar dependencias
        run: npm ci
      - name: Probas en Safari
        run: npm run test:e2e:safari
        env:
          BROWSER: safari
```

## 📈 Estratexia de compatibilidade a longo prazo

### **1. Niveis de soporte definidos**
```json
{
  "soporteCompleto": {
    "descripcion": "Funcionalidade completa, probas exhaustivas",
    "navegadores": [
      "chrome >= 100",
      "firefox >= 100",
      "safari >= 15",
      "edge >= 100"
    ]
  },
  "soporteBasico": {
    "descripcion": "Funcionalidade principal, degradación graceful",
    "navegadores": [
      "chrome >= 80",
      "firefox >= 80",
      "safari >= 13",
      "edge >= 80"
    ]
  },
  "soporteLimitado": {
    "descripcion": "Contido accesible pero funcionalidade reducida",
    "navegadores": [
      "chrome >= 60",
      "firefox >= 60",
      "safari >= 11"
    ]
  }
}
```

### **2. Calendario de retirada de soporte**
```markdown
## Política de compatibilidade

### 2024
- Soporte completo: Chrome 100+, Firefox 100+, Safari 15+, Edge 100+
- Soporte básico: Chrome 80+, Firefox 80+, Safari 13+, Edge 80+
- Retirado: IE 11, EdgeHTML, Safari < 13

### 2025
- Soporte completo: Chrome 110+, Firefox 110+, Safari 16+, Edge 110+
- Soporte básico: Chrome 90+, Firefox 90+, Safari 14+, Edge 90+
- Retirado: Safari < 14, Firefox < 90

### Revisión trimestral
- Actualizar lista de navegadores soportados
- Revisar métricas de uso
- Axustar política segundo necesidades de usuarios
```

## 🎓 Conclusión: A filosofía da compatibilidade

**Probar en múltiples navegadores non é un castigo**, é un recordatorio de que a web é un medio diverso e descentralizado. Cada navegador representa **unha elección diferente de valores**: privacidade, velocidade, innovación, estándares.

**As mellores prácticas** que debes levar contigo:

1. **Proba tempero e frecuentemente**, non ao final do desenvolvemento
2. **Usa detección de características, non de navegadores**
3. **Implementa progressive enhancement como filosofía**
4. **Mantén un dashboard de compatibilidade** activo
5. **Involucra a usuarios reais** en probas de diferentes dispositivos

**Recorda:** A compatibilidade perfecta é un mito. O obxectivo real é **garantir que cada usuario teña unha experiencia funcional e digna**, independentemente da súa elección de navegador.

Na próxima parte, exploraremos **ferramentas particulares de desenvolvemento** que te axudarán a facer todo isto de forma máis eficiente. ¿Tes algunha área específica de proba entre navegadores que che resulte especialmente desafiante?