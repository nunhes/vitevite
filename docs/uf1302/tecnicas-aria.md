---
title: Técnicas ARIA
description: As imaxes son unha compoñente esencial no deseño web, pero requiren un manexo axeitado para non comprometer o rendemento do sitio
lang: gl
lastUpdated: true
---

# {{ $frontmatter.title }}


## 🧩 Introdución a ARIA: máis que simples atributos

**Imaxina que estás construíndo un edificio complexo**. O HTML proporciona a estrutura básica: paredes, portas, xanelas. O CSS engade a estética: cores, texturas, iluminación. Pero **ARIA (Accessible Rich Internet Applications)** é como o sistema de sinalización interior: indica que é cada espazo, como navegar entre eles e como interactuar cos diferentes elementos.

Para desenvolvedores que xa coñecen o básico de accesibilidade, **aprofundar en ARIA é como aprender unha lingua de sinalización interna** que fai que as túas aplicacións sexan comprensibles para todos, especialmente para usuarios de tecnoloxías asistivas.

## 📚 Os tres piares de ARIA

### **1. Roles: Definindo o que algo é**
Os roles de ARIA **anuncian a natureza dun elemento** aos lectores de pantalla:

```html
<!-- Roles comúns e o seu uso correcto -->
<div role="navigation" aria-label="Menú principal">
  <!-- Contido do menú -->
</div>

<!-- Role incorrecto - non abuses dos roles xenéricos -->
<div role="button" onclick="accion()">Fai clic</div>
<!-- Mellor: usar o elemento nativo -->
<button onclick="accion()">Fai clic</button>
```

**Regra de ouro:** **Usa elementos HTML semánticos sempre que poidas**. Se non existe un elemento HTML adecuado, entón e só entón usa ARIA.

### **2. Propiedades: Engadindo información adicional**
As propiedades **describen características** dos elementos:

```html
<!-- aria-label: etiqueta directa -->
<button aria-label="Pechar a ventá de diálogo">X</button>

<!-- aria-labelledby: referencia a outro elemento -->
<h2 id="dialog-title">Configuracións</h2>
<div role="dialog" aria-labelledby="dialog-title">
  <!-- Contido do diálogo -->
</div>

<!-- aria-describedby: información adicional -->
<input type="password" aria-describedby="password-hint">
<span id="password-hint">A túa contrasinal debe ter polo menos 8 caracteres</span>
```

### **3. Estados: Comunicando situacións dinámicas**
Os estados **informan sobre condicións cambiables**:

```html
<!-- Estados booleanos -->
<button aria-pressed="false">Mute</button>
<div aria-hidden="true" style="display: none;">Contido oculto</div>
<input type="checkbox" aria-checked="false">

<!-- Estados con máis valores -->
<div role="progressbar" 
     aria-valuenow="75"
     aria-valuemin="0" 
     aria-valuemax="100">
  75% completado
</div>
```

## 🏗️ Patróns avanzados de ARIA

### **1. Menús complexos con navegación por teclado**
```html
<nav aria-label="Menú de aplicación">
  <ul role="menubar">
    <li role="none">
      <button role="menuitem" 
              aria-haspopup="true"
              aria-expanded="false"
              id="file-menu">
        Arquivo
      </button>
      <ul role="menu" 
          aria-labelledby="file-menu"
          hidden>
        <li role="none">
          <a role="menuitem" href="#novo">Novo</a>
        </li>
        <li role="none">
          <a role="menuitem" href="#abrir">Abrir</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

<script>
// JavaScript para xestionar a interacción
document.querySelectorAll('[role="menuitem"]').forEach(item => {
  item.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'ArrowDown':
        // Mover ao seguinte elemento do menú
        e.preventDefault();
        break;
      case 'ArrowUp':
        // Mover ao elemento anterior
        e.preventDefault();
        break;
      case 'Enter':
      case ' ':
        // Activar o elemento
        e.preventDefault();
        break;
    }
  });
});
</script>
```

### **2. Diálogos modais accesibles**
```html
<!-- Botón que abre o diálogo -->
<button aria-haspopup="dialog" 
        onclick="abrirDialogo()"
        aria-controls="modal-dialog">
  Abrir configuracións
</button>

<!-- O diálogo modal -->
<div id="modal-dialog"
     role="dialog"
     aria-modal="true"
     aria-labelledby="dialog-titulo"
     aria-describedby="dialog-descripcion"
     hidden
     tabindex="-1">
  
  <h2 id="dialog-titulo">Configuracións da conta</h2>
  <p id="dialog-descripcion">
    Modifica as túas preferencias de conta aquí.
  </p>
  
  <!-- Contido do diálogo -->
  <form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome">
  </form>
  
  <!-- Botóns de acción -->
  <button onclick="gardarConfiguracion()">Gardar</button>
  <button onclick="pecharDialogo()" autofocus>Cancelar</button>
</div>

<script>
let focoAnterior;

function abrirDialogo() {
  const dialog = document.getElementById('modal-dialog');
  focoAnterior = document.activeElement;
  
  dialog.hidden = false;
  dialog.focus();
  
  // Trap do foco dentro do diálogo
  dialog.addEventListener('keydown', trapFoco);
  
  // Fondo non interactivo
  document.body.style.overflow = 'hidden';
  document.body.setAttribute('aria-hidden', 'true');
}

function pecharDialogo() {
  const dialog = document.getElementById('modal-dialog');
  dialog.hidden = true;
  dialog.removeEventListener('keydown', trapFoco);
  
  // Restaurar estado anterior
  document.body.style.overflow = '';
  document.body.removeAttribute('aria-hidden');
  
  if (focoAnterior) {
    focoAnterior.focus();
  }
}

function trapFoco(event) {
  const dialog = document.getElementById('modal-dialog');
  const focusableElements = dialog.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const primeiro = focusableElements[0];
  const ultimo = focusableElements[focusableElements.length - 1];
  
  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === primeiro) {
        ultimo.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === ultimo) {
        primeiro.focus();
        event.preventDefault();
      }
    }
  }
  
  if (event.key === 'Escape') {
    pecharDialogo();
  }
}
</script>
```

### **3. Barras de progreso e indicadores dinámicos**
```html
<!-- Barra de progreso estándar -->
<div role="progressbar"
     aria-valuenow="60"
     aria-valuemin="0"
     aria-valuemax="100"
     aria-label="Progreso da carga">
  <div style="width: 60%; height: 20px; background: blue;"></div>
</div>

<!-- Indicador de carga (spinner) -->
<div role="status" aria-live="polite">
  <div class="spinner" aria-hidden="true"></div>
  <span class="sr-only">Cargando contido...</span>
</div>

<!-- Mensaxe de estado dinámico -->
<div id="mensaxe-estado"
     role="status"
     aria-live="assertive"
     aria-atomic="true"
     class="sr-only">
  <!-- O contido aquí será anunciado inmediatamente -->
</div>

<script>
function actualizarProgreso(porcentaxe) {
  const progressbar = document.querySelector('[role="progressbar"]');
  progressbar.setAttribute('aria-valuenow', porcentaxe);
  
  // Actualizar tamén a representación visual
  const fill = progressbar.querySelector('div');
  fill.style.width = porcentaxe + '%';
  
  // Anunciar cambios importantes
  if (porcentaxe === 100) {
    anunciarMensaxe('Carga completada');
  }
}

function anunciarMensaxe(mensaxe) {
  const elemento = document.getElementById('mensaxe-estado');
  elemento.textContent = mensaxe;
  
  // Limpar despois dun momento para mensaxes futuras
  setTimeout(() => {
    elemento.textContent = '';
  }, 1000);
}
</script>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
```

### **4. Táboas de datos complexas con ARIA**
```html
<div role="region" 
     aria-labelledby="taboa-titulo"
     tabindex="0">
  <h3 id="taboa-titulo">Vendas por rexión 2024</h3>
  
  <table role="grid"
         aria-readonly="true"
         aria-rowcount="6"
         aria-colcount="4">
    <thead>
      <tr role="row">
        <th role="columnheader" scope="col">Rexión</th>
        <th role="columnheader" scope="col">Q1</th>
        <th role="columnheader" scope="col">Q2</th>
        <th role="columnheader" scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr role="row" aria-rowindex="2">
        <td role="rowheader" scope="row">Galicia</td>
        <td role="gridcell">€12,450</td>
        <td role="gridcell">€15,230</td>
        <td role="gridcell">€27,680</td>
      </tr>
      <!-- Máis filas... -->
    </tbody>
    <tfoot>
      <tr role="row" aria-rowindex="6">
        <td role="rowheader" scope="row">Total</td>
        <td role="gridcell" colspan="3">€125,430</td>
      </tr>
    </tfoot>
  </table>
</div>

<script>
// Navegación por teclado na táboa
document.querySelectorAll('[role="grid"]').forEach(grid => {
  grid.addEventListener('keydown', function(e) {
    const cell = e.target.closest('[role="gridcell"], [role="rowheader"], [role="columnheader"]');
    if (!cell) return;
    
    const row = cell.closest('[role="row"]');
    const cells = Array.from(row.querySelectorAll('[role="gridcell"], [role="rowheader"]'));
    const currentIndex = cells.indexOf(cell);
    
    switch(e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (currentIndex < cells.length - 1) {
          cells[currentIndex + 1].focus();
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (currentIndex > 0) {
          cells[currentIndex - 1].focus();
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        const nextRow = row.nextElementSibling;
        if (nextRow && nextRow.matches('[role="row"]')) {
          const nextCells = Array.from(nextRow.querySelectorAll('[role="gridcell"], [role="rowheader"]'));
          if (nextCells[currentIndex]) {
            nextCells[currentIndex].focus();
          }
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevRow = row.previousElementSibling;
        if (prevRow && prevRow.matches('[role="row"]')) {
          const prevCells = Array.from(prevRow.querySelectorAll('[role="gridcell"], [role="rowheader"]'));
          if (prevCells[currentIndex]) {
            prevCells[currentIndex].focus();
          }
        }
        break;
    }
  });
});
</script>
```

## ⚠️ Erros comúns e como evitalos

### **1. ARIA redundante ou contraditoria**
```html
<!-- MAL: ARIA redundante -->
<button role="button">Fai clic</button>

<!-- MAL: ARIA contraditoria -->
<a href="#" role="button" aria-label="Ler máis">Ler máis</a>
<!-- O role="button" contradi a natureza de enlace -->

<!-- BEN: Elemento nativo -->
<button>Fai clic</button>
```

### **2. Estados incorrectos**
```html
<!-- MAL: Estado non actualizado -->
<button aria-expanded="false" onclick="toggleMenu()">
  Menú
</button>
<!-- Se o menú está aberto, aria-expanded debe ser "true" -->

<!-- BEN: Estado actualizado dinamicamente -->
<button aria-expanded="false" 
        onclick="toggleMenu(this)"
        aria-controls="menu-content">
  Menú
</button>

<script>
function toggleMenu(boton) {
  const menu = document.getElementById(boton.getAttribute('aria-controls'));
  const isExpanded = boton.getAttribute('aria-expanded') === 'true';
  
  boton.setAttribute('aria-expanded', !isExpanded);
  menu.hidden = isExpanded;
}
</script>
```

### **3. *Live Regions* mal utilizadas**
```html
<!-- MAL: Uso excesivo de aria-live -->
<div aria-live="assertive">
  Cada pequeno cambio aquí será anunciado
</div>

<!-- BEN: Uso estratéxico -->
<div id="notificacions" aria-live="polite">
  <!-- Só mensaxes importantes -->
</div>

<div id="erros" aria-live="assertive" aria-atomic="true">
  <!-- Só erros críticos -->
</div>
```

## 🧪 Probas específicas para ARIA

### **1. Probas con Lectores de Pantalla**
- **NVDA + Firefox:** Combinación moi popular
- **VoiceOver + Safari:** Para ecosistema Apple
- **JAWS + Chrome/Edge:** En entornos corporativos

### **2. Ferramentas de análise automática**
```bash
# Usando axe-core via línea de comandos
npm install -g axe-core
axe https://tusitio.com --rules wcag2a,wcag2aa

# Ou usando puppeteer
const axe = require('axe-core');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  await page.addScriptTag({ path: require.resolve('axe-core') });
  const results = await page.evaluate(async () => {
    return await axe.run();
  });
  
  console.log(results.violations);
  await browser.close();
})();
```

### **3. Verificación manual de patróns ARIA**
Crea unha checklist para cada patrón:

```javascript
// Checklist para diálogos modais
const checklistDialogo = [
  'role="dialog" ou role="alertdialog" presente',
  'aria-modal="true" para diálogos modais',
  'aria-labelledby ou aria-label definido',
  'foco atrapado dentro do diálogo',
  'tecla Escape pecha o diálogo',
  'foco devolto ao elemento que abriu o diálogo',
  'contenido exterior marcado como aria-hidden="true"'
];
```

## 📈 Estratexias de implementación gradual

### **Fase 1: Correccións básicas**
1. Identificar e corrixir ARIA redundante
2. Asegurar que todos os elementos interactivos sexan accesibles por teclado
3. Implementar textos alternativos adecuados

### **Fase 2: Melloras demánticas**
1. Engadir roles apropiados para rexións complexas
2. Implementar navegación por teclado en componentes personalizados
3. Engadir etiquetas e descricións para elementos complexos

### **Fase 3: Experiencias ricas**
1. Implementar patrones ARIA complexos (acordeóns, pestanas, diálogos)
2. Engadir notificacións dinámicas con aria-live
3. Optimizar para diferentes lectores de pantalla

## 🔧 Ferramentas recomendadas para traballar con ARIA

### **1. Extensións de Navegador**
- **axe DevTools:** Análise automático de accesibilidade
- **ARC Toolkit:** Análise profundo de ARIA y WCAG
- **WAVE Evaluation Tool:** Identificación visual de problemas

### **2. Depuración en tempo real**
```javascript
// Función de depuración para ver atributos ARIA
function depurarARIA(elemento) {
  const atributos = {};
  for (let attr of elemento.attributes) {
    if (attr.name.startsWith('aria-') || attr.name === 'role') {
      atributos[attr.name] = attr.value;
    }
  }
  console.log('Atributos ARIA:', atributos);
  
  // Verificar relacións
  if (elemento.hasAttribute('aria-labelledby')) {
    const label = document.getElementById(elemento.getAttribute('aria-labelledby'));
    console.log('Etiqueta asociada:', label?.textContent);
  }
  
  if (elemento.hasAttribute('aria-describedby')) {
    const desc = document.getElementById(elemento.getAttribute('aria-describedby'));
    console.log('Descrición asociada:', desc?.textContent);
  }
}

// Usar no console do navegador
depurarARIA(document.querySelector('[role="dialog"]'));
```

### **3. Probas automatizadas en CI/CD**
```yaml
# Exemplo de configuración para GitHub Actions
name: Probas de Accesibilidade

on: [push, pull_request]

jobs:
  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Executar probas de accesibilidade
        uses: dequelabs/axe-core-github-action@v1
        with:
          site: 'http://localhost:3000'
          rules: 'wcag2a,wcag2aa,aria'
          exit-code: 'true'
```

## 🎯 Conclusión: ARIA como aliado, non como carga

**Dominar ARIA non significa engadir atributos a todo**. Significa **comprender como as tecnoloxías asistivas perciben a túa aplicación** e proporcionarlles a información que necesitan para presentala correctamente.

**Recorda estas regras fundamentais**:
1. **Prefire sempre elementos HTML semánticos**
2. **Non uses ARIA para corrixir HTML mal estruturado**
3. **Proba sempre con tecnoloxías asistivas reais**
4. **Mantén a túa ARIA tan simple como sexa posible**

**A verdadeira habilidade con ARIA** chega cando podes crear interfaces ricas e complexas que, aínda sendo personalizadas, se comportan de forma predecible e accesible para todos os usuarios.

---
