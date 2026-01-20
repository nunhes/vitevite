---
title: Ferramentas do navegador - O laboratorio do desenvolvedor web
description: As ferramentas do desenvolvedor do navegador son o teu laboratorio persoal integrado
lastUpdated: true
---

# {{ $frontmatter.title }}


**Imaxina que estás a reparar un coche de alta tecnoloxía**. Non usarías só un martelo e un chave fixa, verdade? Terías escáners electrónicos, diagnósticos por computador e ferramentas especializadas. As **ferramentas do desenvolvedor do navegador** son o equivalente digital para o desenvolvedor web: o teu **laboratorio personal integrado** onde podes inspeccionar, depurar e perfeccionar cada aspecto do teu sitio web.

## 🛠️ Introdución: O teu taller de desenvolvemento integrado

Para un desenvolvedor novo, abrir as DevTools por primeira vez pode parecer **abrir a tapa dun reloxo suízo**: decenas de engrenaxes, botóns e indicadores. Pero non te asustes. Cada unha destas ferramentas foi deseñada para resolver **problemas reais que atoparás no teu día a día** como desenvolvedor.

Nesta guía, imos percorrer **non só como usar estas ferramentas, senón cando e por que** usalas. Porque dominar as DevTools non é só saber que botóns premer, é **saber pensar como o navegador pensa**.

## 🚪 Accedendo ao laboratorio: Atallos e métodos

### **Formas de abrir as DevTools**

```javascript
// Métodos para abrir DevTools programaticamente
// (Útil para depuración en dispositivos móbiles)

// 1. Desde o código (só en desenvolvemento)
if (process.env.NODE_ENV === 'development') {
  // Abrir consola automaticamente
  console.log('Modo desenvolvemento activado');
}

// 2. Usando o teclado (atallos universais)
/*
Windows/Linux: F12 ou Ctrl+Shift+I
MacOS: Cmd+Option+I
Chrome específico: Ctrl+Shift+J (só consola)
Firefox: Ctrl+Shift+K (consola web)
*/

// 3. Desde o menú contextual
// Botón dereito → "Inspeccionar elemento"
```

### **O panel de control principal**

**Cada navegador ten a súa propia distribución**, pero os conceptos básicos son similares:

```
┌────────────────────────────────────────┐
│  Chrome DevTools Interface             │
├────────────────────────────────────────┤
│  ┌─────┬─────┬─────┬─────┬─────┐      │
│  │Elem │Cons │Sour │Netw │Perf │ ...  │
│  └─────┴─────┴─────┴─────┴─────┘      │
├────────────────────────────────────────┤
│  ┌────────────────────────────────┐    │
│  │                                │    │
│  │  Área de traballo principal    │    │
│  │                                │    │
│  └────────────────────────────────┘    │
│                                        │
│  ┌────────────────────────────────┐    │
│  │        Barra lateral           │    │    │  └────────────────────────────────┘    │
└────────────────────────────────────────┘
```

## 📐 Inspector de elementos: O teu microscopio web

### **Navegación e inspección**

```javascript
// Trucos de consola para o inspector
// 1. Seleccionar elementos desde a consola
$0  // Elemento actualmente seleccionado
$1  // Elemento previamente seleccionado
$('div')  // Equivalente a document.querySelector
$$('div') // Equivalente a document.querySelectorAll

// 2. Inspeccionar programaticamente
inspect(document.getElementById('mi-elemento'));

// 3. XPath para elementos complexos
$x('//div[@class="container"]//a[contains(@href, "galicia")]');
```

### **Manipulación en tempo real**

**No panel Elements/Inspector**, podes:

1. **Editar HTML** directamente (Ctrl+E)
2. **Modificar CSS** en tempo real
3. **Probar diferentes estados** (:hover, :focus, :active)
4. **Ver o modelo de caixa** exacto de cada elemento

```css
/* Exemplo: Depurando problemas de layout */
.elemento-problematico {
  /* Usa o inspector para probar valores */
  border: 1px solid red !important; /* Destacar elemento */
  outline: 2px dashed blue; /* Ver contorno */
  box-shadow: 0 0 0 3px rgba(255,0,0,0.3); /* Overlay visual */
}
```

### **Ferramentas específicas do inspector**

```javascript
// Accesando funcionalidades avanzadas desde consola
// Copiar estilos CSS
copy($0.style.cssText);

// Copiar selector único
function getUniqueSelector(el) {
  if (el.id) return `#${el.id}`;
  
  const path = [];
  while (el.nodeType === Node.ELEMENT_NODE) {
    let selector = el.nodeName.toLowerCase();
    
    if (el.id) {
      selector += `#${el.id}`;
      path.unshift(selector);
      break;
    } else {
      let sibling = el;
      let nth = 1;
      while (sibling.previousElementSibling) {
        sibling = sibling.previousElementSibling;
        if (sibling.nodeName.toLowerCase() === selector) nth++;
      }
      if (nth !== 1) selector += `:nth-of-type(${nth})`;
    }
    
    path.unshift(selector);
    el = el.parentNode;
  }
  
  return path.join(' > ');
}

copy(getUniqueSelector($0));
```

## 🐛 Consola JavaScript: O teu diagnóstico interactivo

### **Máis aló do `console.log()`**

```javascript
// Niveis de log
console.log('Mensaxe informativa');    // Log normal
console.info('Información');           // Información
console.warn('Advertencia!');          // Advertencia (amarelo)
console.error('Erro crítico!');         // Erro (vermello)
console.debug('Depuración detallada');  // Só visible en modo verbose

// Logs con estilo
console.log(
  '%c🚨 ATENCIÓN %cMensaxe importante',
  'background: red; color: white; padding: 2px 4px; border-radius: 3px;',
  'color: blue; font-weight: bold;'
);

// Logs de grupo
console.group('Proceso de carga');
console.log('Paso 1: Cargar configuración');
console.log('Paso 2: Inicializar módulos');
console.groupEnd();

// Tablas
const usuarios = [
  { nome: 'Ana', idade: 28, cidade: 'Santiago' },
  { nome: 'Pedro', idade: 35, cidade: 'Vigo' }
];
console.table(usuarios);

// Medición de tempo
console.time('cargaImaxes');
// Código a medir...
console.timeEnd('cargaImaxes');

// Contadores
console.count('click'); // click: 1
console.count('click'); // click: 2
console.countReset('click'); // Reiniciar contador
```

### **Depuración avanzada**

```javascript
// 1. Breakpoints condicionais
function procesoComplexo(datos) {
  // Engadir breakpoint só cando...
  if (datos.error || datos.length > 100) {
    debugger; // Pausa aquí
  }
  // Continuar execución
}

// 2. Monitores de expresión
// Na consola, escribir:
monitor(procesoComplexo);
// Cada chamada mostrará argumentos e resultado

// 3. Pilas de chamadas
console.trace('Onde se chamou esta función?');

// 4. Depuración de eventos
getEventListeners(document.getElementById('meuBoton'));
// Mostra todos os listeners do elemento

// 5. Capturar excepcións non tratadas
window.addEventListener('error', function(e) {
  console.error('Erro non tratado:', e.error);
  console.error('En:', e.filename, 'línea:', e.lineno);
  // Enviar a servidor de monitorización
  sendErrorToServer(e);
});
```

### **Consola como calculadora e experimentador**

```javascript
// Operacións matemáticas complexas
Math.sqrt(144) // 12
(10 * 2 + 5) / 3 // 8.333...

// Manipulación de datos
JSON.parse('{"nome": "Carlos", "idade": 30}');
JSON.stringify({nome: "Carlos", idade: 30}, null, 2);

// Experimentar con APIs
fetch('https://api.exemplo.com/datos')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);

// Probar regex
const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
regex.test('usuario@exemplo.com'); // true
```

## 🌐 Panel de Rede (Network): O analizador de tráfico

### **Comprendendo as solicitudes HTTP**

```javascript
// Configurar monitorización personalizada
const requests = [];

// Interceptar solicitudes fetch
const originalFetch = window.fetch;
window.fetch = function(...args) {
  const startTime = performance.now();
  return originalFetch.apply(this, args).then(response => {
    const endTime = performance.now();
    
    requests.push({
      url: args[0],
      method: args[1]?.method || 'GET',
      duration: endTime - startTime,
      timestamp: new Date().toISOString(),
      status: response.status,
      size: response.headers.get('content-length')
    });
    
    return response;
  });
};

// Tamén para XMLHttpRequest
const originalXHR = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function(method, url) {
  this._startTime = performance.now();
  this._url = url;
  this._method = method;
  return originalXHR.apply(this, arguments);
};
```

### **Análise práctica no panel Network**

**Filtros útiles**:
- `domain:*.exemplo.com` - Só solicitudes deste dominio
- `method:POST` - Só solicitudes POST
- `larger-than:1M` - Arquivos maiores de 1MB
- `status-code:404` - Recursos non atopados
- `-status-code:200` - Excluír solicitudes exitosas

**Columnas recomendadas**:
1. **Waterfall** - Visualización temporal
2. **Size** - Tamaño vs tamaño transferido
3. **Time** - Duración total
4. **Priority** - Prioridade do navegador
5. **Initiator** - Que iniciou a solicitude

### **Simulación de condicións de rede**

```javascript
// Throttling manual para probas
class NetworkThrottler {
  constructor(delay = 1000) {
    this.delay = delay;
    this.originalFetch = window.fetch;
  }
  
  enable() {
    window.fetch = async (...args) => {
      await this.delayAsync();
      return this.originalFetch.apply(window, args);
    };
  }
  
  disable() {
    window.fetch = this.originalFetch;
  }
  
  delayAsync() {
    return new Promise(resolve => setTimeout(resolve, this.delay));
  }
}

// Usar desde consola
const throttler = new NetworkThrottler(2000); // 2 segundos de delay
throttler.enable();
// Probar a páxina con throttling...
throttler.disable();
```

### **Auditoría de recursos**

```javascript
// Script para analizar recursos pesados
function analizarRecursos() {
  const resources = performance.getEntriesByType('resource');
  
  const analise = {
    total: resources.length,
    porTipo: {},
    maiores: [],
    duplicados: []
  };
  
  resources.forEach(resource => {
    // Agrupar por tipo
    const tipo = resource.initiatorType || 'other';
    analise.porTipo[tipo] = (analise.porTipo[tipo] || 0) + 1;
    
    // Identificar recursos grandes (> 500KB)
    if (resource.transferSize > 500 * 1024) {
      analise.maiores.push({
        nome: resource.name,
        tamaño: resource.transferSize,
        duración: resource.duration
      });
    }
  });
  
  // Buscar recursos duplicados
  const urls = resources.map(r => r.name);
  analise.duplicados = urls.filter((url, index) => 
    urls.indexOf(url) !== index
  );
  
  return analise;
}

// Executar e mostrar resultados
console.table(analizarRecursos().maiores);
```

## 🎨 Panel de Rendemento (Performance): A análise de velocidade

### **Gravación e análise**

```javascript
// API de Performance manual
const marks = {};

function startMeasure(nome) {
  marks[nome] = {
    start: performance.now(),
    startMark: performance.mark(`${nome}-start`)
  };
}

function endMeasure(nome) {
  if (marks[nome]) {
    const duration = performance.now() - marks[nome].start;
    performance.measure(nome, `${nome}-start`);
    
    console.log(`${nome}: ${duration.toFixed(2)}ms`);
    
    // Limpar marcas
    performance.clearMarks(`${nome}-start`);
    performance.clearMeasures(nome);
    
    delete marks[nome];
  }
}

// Uso práctico
startMeasure('cargaGaleria');
// Código que carga a galería...
endMeasure('cargaGaleria');
```

### **Métricas esenciais a monitorizar**

```javascript
// Capturar Core Web Vitals
class WebVitalsMonitor {
  constructor() {
    this.metrics = {};
    this.setupObservers();
  }
  
  setupObservers() {
    // LCP (Largest Contentful Paint)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.LCP = lastEntry.startTime;
      console.log('LCP:', this.metrics.LCP);
    }).observe({type: 'largest-contentful-paint', buffered: true});
    
    // FID (First Input Delay)
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.FID = entry.processingStart - entry.startTime;
        console.log('FID:', this.metrics.FID);
        break;
      }
    }).observe({type: 'first-input', buffered: true});
    
    // CLS (Cumulative Layout Shift)
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          this.metrics.CLS = (this.metrics.CLS || 0) + entry.value;
          console.log('CLS:', this.metrics.CLS);
        }
      }
    }).observe({type: 'layout-shift', buffered: true});
  }
  
  getReport() {
    return {
      ...this.metrics,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };
  }
}

// Inicializar monitor
window.webVitals = new WebVitalsMonitor();
```

### **Análise de memoria e CPU**

```javascript
// Monitor de memoria
function monitorizarMemoria() {
  if (performance.memory) {
    const memory = performance.memory;
    
    console.log('Uso de memoria:');
    console.log(`- Usada: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
    console.log(`- Total: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
    console.log(`- Límite: ${(memory.jsHeapSizeLimit / 1073741824).toFixed(2)} GB`);
    
    return {
      usedMB: memory.usedJSHeapSize / 1048576,
      totalMB: memory.totalJSHeapSize / 1048576,
      limitGB: memory.jsHeapSizeLimit / 1073741824,
      percent: (memory.usedJSHeapSize / memory.totalJSHeapSize * 100).toFixed(1)
    };
  }
  
  return null;
}

// Executar periodicamente
setInterval(() => {
  const mem = monitorizarMemoria();
  if (mem && mem.percent > 90) {
    console.warn('⚠️ Uso de memoria elevado:', mem.percent + '%');
  }
}, 10000); // Cada 10 segundos
```

## 📱 Panel de dispositivos móbiles (Device Mode)

### **Emulación avanzada**

```javascript
// Script para probar responsividade
function testResponsiveBreakpoints() {
  const breakpoints = [
    { width: 320, name: 'Móbil pequeno' },
    { width: 375, name: 'Móbil medio' },
    { width: 414, name: 'Móbil grande' },
    { width: 768, name: 'Tableta' },
    { width: 1024, name: 'Portátil' },
    { width: 1280, name: 'Escritorio' },
    { width: 1920, name: 'Escritorio grande' }
  ];
  
  breakpoints.forEach(bp => {
    console.log(`\n=== Probando ${bp.name} (${bp.width}px) ===`);
    
    // Cambiar tamaño da ventá
    window.resizeTo(bp.width, 800);
    
    // Esperar a que se redimensione
    setTimeout(() => {
      // Comprobar problemas comúns
      const problemas = [];
      
      // 1. Elementos que sobresaen
      const elementosAnchos = document.querySelectorAll('*');
      elementosAnchos.forEach(el => {
        if (el.offsetWidth > bp.width) {
          problemas.push(`Elemento máis ancho que a pantalla: ${el.tagName}`);
        }
      });
      
      // 2. Texto demasiado pequeno
      const textos = document.querySelectorAll('p, span, a, li');
      textos.forEach(texto => {
        const fontSize = parseInt(window.getComputedStyle(texto).fontSize);
        if (fontSize < 14 && bp.width <= 768) {
          problemas.push(`Texto moi pequeno: ${fontSize}px`);
        }
      });
      
      // 3. Botóns/links pequenos
      const interactivos = document.querySelectorAll('button, a');
      interactivos.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
          problemas.push(`Elemento interactivo moi pequeno: ${el.tagName}`);
        }
      });
      
      if (problemas.length > 0) {
        console.warn(`Problemas en ${bp.width}px:`, problemas);
      } else {
        console.log(`✓ ${bp.name}: OK`);
      }
    }, 500);
  });
}

// Executar desde consola
// testResponsiveBreakpoints();
```

### **Simulación de dispositivos reais**

```javascript
// Configuracións predefinidas para dispositivos populares
const dispositivos = {
  'iPhone 12': {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15',
    viewport: { width: 390, height: 844, deviceScaleFactor: 3 },
    touch: true
  },
  'iPad Air': {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15',
    viewport: { width: 820, height: 1180, deviceScaleFactor: 2 },
    touch: true
  },
  'Samsung Galaxy S21': {
    userAgent: 'Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36',
    viewport: { width: 360, height: 800, deviceScaleFactor: 3.5 },
    touch: true
  }
};

// Función para cambiar dispositivo
function cambiarDispositivo(nome) {
  const dispositivo = dispositivos[nome];
  if (!dispositivo) {
    console.error('Dispositivo non encontrado');
    return;
  }
  
  // Cambiar user agent (en DevTools normalmente)
  console.log(`Cambiando a: ${nome}`);
  console.log('User Agent:', dispositivo.userAgent);
  console.log('Viewport:', dispositivo.viewport);
  
  // Cambiar tamaño da ventá
  window.resizeTo(dispositivo.viewport.width, dispositivo.viewport.height);
  
  // Simular eventos táctiles
  if (dispositivo.touch) {
    document.documentElement.style.touchAction = 'auto';
    // Engadir listeners para eventos táctiles
  }
}
```

## 🔒 Panel de Seguridade e Aplicación (Application)

### **Analizando Storage**

```javascript
// Auditoría de localStorage
function auditoriaLocalStorage() {
  console.group('🔍 Auditoría de localStorage');
  
  let totalSize = 0;
  const items = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const size = new Blob([value]).size;
    
    totalSize += size;
    
    items.push({
      clave: key,
      tamaño: `${(size / 1024).toFixed(2)} KB`,
      valor: value.length > 100 ? value.substring(0, 100) + '...' : value
    });
  }
  
  console.table(items);
  console.log(`📊 Total almacenado: ${(totalSize / 1024).toFixed(2)} KB`);
  
  // Identificar posibles problemas
  if (totalSize > 5 * 1024) { // > 5MB
    console.warn('⚠️ localStorage excede 5MB, considerar limpeza');
  }
  
  console.groupEnd();
}

// Limpeza selectiva
function limparStorageSelectivo(patron) {
  const regex = new RegExp(patron);
  const paraEliminar = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (regex.test(key)) {
      paraEliminar.push(key);
    }
  }
  
  console.log(`Encontradas ${paraEliminar.length} claves para eliminar:`);
  paraEliminar.forEach(key => {
    console.log(`- ${key}`);
    localStorage.removeItem(key);
  });
}
```

### **Xestión de Service Workers**

```javascript
// Depuración de Service Workers
class ServiceWorkerDebugger {
  constructor() {
    this.worker = null;
    this.setup();
  }
  
  async setup() {
    if ('serviceWorker' in navigator) {
      this.worker = await navigator.serviceWorker.ready;
      this.monitorizarEventos();
    }
  }
  
  monitorizarEventos() {
    navigator.serviceWorker.addEventListener('message', event => {
      console.log('📨 Mensaxe do Service Worker:', event.data);
    });
    
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('🔄 Controller do Service Worker cambiado');
    });
  }
  
  async getEstado() {
    if (!this.worker) return null;
    
    const registration = await navigator.serviceWorker.getRegistration();
    const workers = registration ? registration.active : null;
    
    return {
      scope: registration?.scope,
      estado: workers?.state || 'non activo',
      url: workers?.scriptURL
    };
  }
  
  async enviarMensaxe(mensaxe) {
    if (this.worker && this.worker.active) {
      this.worker.active.postMessage(mensaxe);
      console.log('✅ Mensaxe enviada ao Service Worker:', mensaxe);
    }
  }
  
  async actualizar() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      await registration.update();
      console.log('🔄 Service Worker actualizado');
    }
  }
}

// Uso
const swDebugger = new ServiceWorkerDebugger();
setTimeout(() => swDebugger.getEstado().then(console.log), 1000);
```

## 🎯 Extensións e personalización

### **Creando extensións propias**

```javascript
// Exemplo de extensión simple para DevTools
// manifest.json
{
  "name": "DevTools Personalizados Galicia",
  "version": "1.0",
  "devtools_page": "devtools.html",
  "manifest_version": 3
}

// devtools.html
<!DOCTYPE html>
<html>
<head>
  <script src="devtools.js"></script>
</head>
<body>
  <h1>Ferramentas Personalizadas</h1>
</body>
</html>

// devtools.js
chrome.devtools.panels.create(
  "Galicia Tools",
  "icon.png",
  "panel.html",
  function(panel) {
    console.log("Panel creado");
  }
);

// panel.html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { padding: 20px; font-family: Arial, sans-serif; }
    .feature { margin: 10px 0; padding: 10px; background: #f0f0f0; }
  </style>
</head>
<body>
  <h2>🍃 Ferramentas Galegas para DevTools</h2>
  
  <div class="feature">
    <h3>📏 Verificador de Accesibilidade</h3>
    <button onclick="verificarAccesibilidad()">Executar análise</button>
  </div>
  
  <div class="feature">
    <h3>🌐 Optimizador de Imaxes</h3>
    <button onclick="optimizarImaxes()">Analizar imaxes</button>
  </div>
  
  <script>
    function verificarAccesibilidad() {
      chrome.devtools.inspectedWindow.eval(
        `Array.from(document.querySelectorAll('img'))
          .filter(img => !img.alt)
          .map(img => img.src)`,
        (result, exception) => {
          if (exception) {
            console.error(exception);
          } else {
            console.log('Imaxes sen alt:', result);
          }
        }
      );
    }
    
    function optimizarImaxes() {
      chrome.devtools.inspectedWindow.eval(
        `Array.from(document.querySelectorAll('img'))
          .map(img => ({
            src: img.src,
            size: img.naturalWidth * img.naturalHeight,
            format: img.src.split('.').pop()
          }))`,
        (result, exception) => {
          if (!exception && result) {
            const grande = result.filter(img => img.size > 1000000);
            console.log('Imaxes grandes (>1MP):', grande);
          }
        }
      );
    }
  </script>
</body>
</html>
```

### **Snippets de código reutilizables**

```javascript
// Crear snippets personalizados en Sources → Snippets

// 1. Snippet para limpar formularios
(function limparFormularios() {
  document.querySelectorAll('form').forEach(form => form.reset());
  console.log('✅ Formularios limpos');
})();

// 2. Snippet para extraer cores
function extraerPaletaCores() {
  const estilos = getComputedStyle(document.documentElement);
  const cores = {};
  
  for (let i = 0; i < estilos.length; i++) {
    const prop = estilos[i];
    if (prop.includes('color') || prop.includes('background') || prop.includes('border')) {
      const valor = estilos.getPropertyValue(prop);
      if (valor.match(/^#|rgb|hsl/)) {
        cores[prop] = valor;
      }
    }
  }
  
  console.table(cores);
  return cores;
}

// 3. Snippet para verificar enlaces rotos
async function verificarEnlaces() {
  const enlaces = Array.from(document.querySelectorAll('a'));
  const resultados = [];
  
  for (let enlace of enlaces) {
    if (enlace.href && !enlace.href.startsWith('javascript:')) {
      try {
        const response = await fetch(enlace.href, { method: 'HEAD' });
        resultados.push({
          url: enlace.href,
          texto: enlace.textContent,
          status: response.status,
          ok: response.ok
        });
      } catch (error) {
        resultados.push({
          url: enlace.href,
          texto: enlace.textContent,
          status: 'ERROR',
          ok: false,
          error: error.message
        });
      }
    }
  }
  
  const rotos = resultados.filter(r => !r.ok);
  console.table(rotos.length ? rotos : '✅ Todos os enlaces funcionan');
  return resultados;
}
```

## 📊 Dashboard personalizado

```javascript
// Crear un dashboard personalizado en DevTools
class DevToolsDashboard {
  constructor() {
    this.metrics = {
      performance: {},
      accessibility: {},
      seo: {},
      bestPractices: {}
    };
    
    this.setup();
  }
  
  setup() {
    // Crear panel personalizado
    if (chrome.devtools && chrome.devtools.panels) {
      chrome.devtools.panels.create(
        "Dashboard Galego",
        "icon.png",
        "dashboard.html",
        (panel) => {
          panel.onShown.addListener(this.onPanelShown.bind(this));
        }
      );
    }
  }
  
  onPanelShown(window) {
    // Enviar datos ao panel
    window.postMessage({
      type: 'DASHBOARD_DATA',
      data: this.collectData()
    }, '*');
  }
  
  collectData() {
    return {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      performance: this.getPerformanceMetrics(),
      accessibility: this.getAccessibilityScore(),
      resources: this.getResourceAnalysis()
    };
  }
  
  getPerformanceMetrics() {
    const timing = performance.timing;
    return {
      dns: timing.domainLookupEnd - timing.domainLookupStart,
      connect: timing.connectEnd - timing.connectStart,
      ttfb: timing.responseStart - timing.requestStart,
      domReady: timing.domContentLoadedEventStart - timing.navigationStart,
      pageLoad: timing.loadEventEnd - timing.navigationStart
    };
  }
  
  getAccessibilityScore() {
    const issues = [];
    
    // Verificacións básicas
    if (!document.querySelector('h1')) issues.push('Falta H1');
    
    document.querySelectorAll('img').forEach(img => {
      if (!img.alt && !img.getAttribute('aria-hidden')) {
        issues.push(`Imaxe sen alt: ${img.src}`);
      }
    });
    
    document.querySelectorAll('button, a').forEach(el => {
      if (!el.textContent.trim() && !el.getAttribute('aria-label')) {
        issues.push(`Elemento interactivo sen texto: ${el.tagName}`);
      }
    });
    
    return {
      score: Math.max(100 - issues.length * 5, 0),
      issues,
      total: issues.length
    };
  }
  
  getResourceAnalysis() {
    const resources = performance.getEntriesByType('resource');
    return {
      total: resources.length,
      byType: resources.reduce((acc, res) => {
        const type = res.initiatorType || 'other';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {}),
      totalSize: resources.reduce((acc, res) => acc + (res.transferSize || 0), 0)
    };
  }
}

// Inicializar
window.dashboard = new DevToolsDashboard();
```

## 🎓 Conclusión: Converténdote en artesán web

**Dominar as ferramentas do desenvolvedor non é un destino, é unha viaxe continua**. Cada nova característica que engaden, cada novo panel que descubres, é unha **nova ferramenta na túa caixa de artesán web**.

**Recorda estas leccións fundamentais**:

1. **As DevTools son un diálogo** co navegador, non un monólogo
2. **Cada panel resolve problemas específicos** - aprende cando usar cada un
3. **A personalización é poder** - crea os teus propios snippets e extensións
4. **O coñecemento compartido multiplica** - ensina aos teus compañeiro o que descubras

**O verdadeiro poder** das ferramentas do desenvolvedor non está nas funcionalidades que ofrecen, senón na **forma en que transforman o teu proceso de pensamento**. Deixas de ver a web como un produto terminado e comezas a velo como un **sistema vivo que podes entender, diagnosticar e mellorar**.

**Comeza pequeno**: domina unha ferramenta cada semana. **Experimenta sen medo**: o peor que pode pasar é que necesites recargar a páxina. **Comparte o que aprendas**: o coñecemento web crece cando se comparte.

**E agora, a práctica está nas túas mans**. Abre as DevTools, explora, experimenta e, sobre todo, **disfruta do proceso de descubrimento**. Porque cada vez que resolves un problema usando estas ferramentas, non só estás arranxando código, estás **converténdote nun mellor artesán da web**.

_**Preparado para converter as DevTools na túa aliada máis poderosa?** O laboratorio está aberto, as ferramentas están listas. **¡A crear!**_ 🚀