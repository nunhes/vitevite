---
title: Introdución á metodoloxía da programación para o desenvolvemento de algoritmos
lang: gl
lastUpdated: true
---

# {{ $frontmatter.title }}

## 📋 **Que é a metodoloxía da programación?**

Unha **metodoloxía** é o conxunto de procedementos sistemáticos, técnicas e boas prácticas que se empregan para deseñar e desenvolver unha tarefa de forma eficiente, eficaz e sostible.

A **metodoloxía da programación** é o conxunto sistemático de principios, técnicas e prácticas organizadas que guían o proceso completo de transformar unha necesidade real nunha solución computacional eficiente e fiable. Non se trata só de "escribir código", senón de **pensar de forma estruturada** antes de programar.

No contexto do **desenvolvemento de algoritmos**, esta metodoloxía serve como o plano de arquitectura que asegura que a nosa solución non só funcione, senón que sexa óptima, mantible e escalable.

## 🔍 **Por que é imprescindible ter unha metodoloxía?**

Sen metodoloxía, programar convértese en construír sen un plan(o): gastas enerxía en avanzar, co risco de ter que refacer e|ou reempezalo todo a cada paso que damos. A metodoloxía é o que separa a resolución casual de problemas -marcada polo ensaio-erro e solucións fráxiles- do desenvolvemento profesional de algoritmos robustos, eficientes e mantibles.

Para novos programadores, dominar esta metodoloxía non é un "extra", é aprender a pensar como programador antes mesmo de escribir a primeira liña de código.

Dispor de procedementos sistemáticos, técnicas e boas prácticas resulta fundamental para:

### **1. Dispor dunha estratexia contra a complexidade**  

Afrontar a resolución programada dun problema que queremos resolver axudándonos da programación require capacidade de análise e algo de creatividade para afrontar:

- **Problemas complexos** requiren descomposición en subproblemas máis simples
- **Estruturación** evita o "código espagueti" e facilita a mantibilidade
- **Abstracción** permite traballar con conceptos sen entrar en detalles de implementación

#### **A. A descomposición analítica**
- **Divide et impera**: Fragmentar problemas complexos en subproblemas máis pequenos e manexables
- **Xerarquización de dificultades**: Identificar que partes do problema son máis críticas ou difíciles
- **Abstracción progresiva**: Traballar a diferentes niveis de detalle, desde a visión xeral ata os detalles de implementación

#### **B. O pensamento algorítmico**
- **Pattern recognition**: Identificar patróns comúns en problemas aparentemente diferentes
- **Xeneralización**: Crear solucións adaptables a variacións do mesmo problema
- **Optimización natural**: Buscar de forma sistemática melloras na eficiencia

#### **C. A xestión da incerteza**
- **Anticipación de casos límite**: Considerar entradas inesperadas ou extremas
- **Deseño defensivo**: Construír algoritmos robustos ante posibles erros
- **Flexibilidade estrutural**: Permitir modificacións futuras sen reescribir todo

### **2. Garantía de calidade e fiabilidade**
- **Algoritmos verificables**: Solucións que poden ser probadas sistematicamente
- **Consistencia lóxica**: Eliminación de contradicións internas no razoamento
- **Resultados predicibles**: Comportamento estable baixo condicións definidas
- **Documentación implícita**: Código que se explica a si mesmo mediante boas prácticas

### **3. Facilitador do traballo colaborativo**
- **Linguaxe común**: Estándares compartidos que todos os membros do equipo comprenden
- **Desenvolvemento paralelo**: Múltiples persoas poden traballar en diferentes partes simultaneamente
- **Mantibilidade a longo prazo**: Código que outros poden entender e modificar anos despois
- **Reutilización intelixente**: Patróns e solucións que serven para múltiples proxectos

---

## 🧩 **Compoñentes fundamentais da metodoloxía**

### **Fase 1: Comprensión profunda do problema**

```
ANÁLISE → "Que necesitamos resolver realmente?"
├── Contextualización do problema real
├── Identificación de usuarios e necesidades
├── Delimitación de alcance e restricións
├── Definición clara de entradas e saídas
└── Establecemento de criterios de éxito
```

### **Fase 2: Deseño estrutural da solución**

```
CONCEPTO → "Como abordamos a solución?"
├── Modelización do problema (representación abstracta)
├── Descomposición en módulos funcionais
├── Selección de estruturas de datos apropiadas
├── Diseño de fluxo de control (secuencias, decisións, bucles)
└── Definición de interfaces entre módulos
```

### **Fase 3: Desenvolvemento iterativo**

```
IMPLEMENTACIÓN → "Como codificamos a solución?"
├── Prototipado rápido (proba de concepto)
├── Desenvolvemento incremental (funcionalidade por funcionalidade)
├── Refactorización continua (mellorando o código existente)
├── Integración progresiva (unindo pezas probadas)
└── Documentación en tempo real (comentarios útiles)
```

### **Fase 4: Validación rigurosa**

```
VERIFICACIÓN → "Como sabemos que funciona correctamente?"
├── Proba unitaria (cada parte por separado)
├── Proba de integración (todo xunto)
├── Proba de regresión (non romper o que xa funcionaba)
├── Análise de eficiencia (tempo e memoria)
└── Validación con usuarios (cumpre as necesidades reais?)
```

---

## 🎯 **Aplicación práctica:**

### **Problema**: Determinar se un número é par ou impar

#### **Análise metodolóxica aplicada:**

**Paso 1: Descomposición do problema**
```
Problema orixinal complexo → "Xestión de paridade"
├── Subproblema 1: Validación de entrada (número > 0)
├── Subproblema 2: Cálculo matemático (operación módulo)
├── Subproblema 3: Decisión lóxica (par vs. impar)
└── Subproblema 4: Presentación de resultados
```

**Paso 2: Selección de ferramentas algorítmicas**
- **Estrutura condicional `if-else`** → Para decisión binaria <!--(CE1.1)-->
- **Operador módulo (%)** → Para cálculo matemático <!--(CE1.4)-->
- **Variables enteiras** → Para representar números <!--(CE1.3)-->
- **Secuencia lóxica** → Orde natural de operacións

**Paso 3: Deseño da arquitectura lóxica**
```plaintext
Algoritmo: DeterminarParidade
  Require: n ∈ ℤ, n > 0
  Asegura: mensaxe ∈ {"PAR", "IMPAR"}

  1. VALIDAR(n > 0)    // Precondición
  2. CALCULAR(n % 2)   // Operación central
  3. DECIDIR(resultado) // Lóxica de negocio
  4. MOSTRAR(mensaxe)  // Comunicación
```

**Paso 4: Consideración de casos especiais**
- **Casos límite**: n = 1 (mínimo positivo), n grande (límites de tipo de dato)
- **Entradas inválidas**: n ≤ 0, non número, valores decimais
- **Eficiencia**: O(1) - solución óptima en tempo e espazo

---

## 🛠️ **Ferramentas esenciais**

### **1. Pseudocódigo como linguaxe de deseño**
- **Ponte entre pensamento e código**: Traduce ideas a estrutura programable
- **Independente de plataforma**: Mesma lóxica aplicable en calquera linguaxe
- **Enfoque na esencia**: Elimina distraccións sintácticas
- **Documentación viva**: Explica o "por qué" detrás de cada decisión

### **2. Ordinogramas como mapas visuais**
- **Cartografía do fluxo lóxico**: Ver o camiño dos datos e decisións
- **Detectar complexidades**: Patróns intricados faise visibles
- **Comunicación universal**: Entendible por técnicos e non técnicos
- **ISO 5807**: Estándar internacional para consistencia

### **3. Táboas de decisión como ferramentas analíticas**
- **Análise exhaustiva**: Todas combinacións de condicións
- **Verificación de completitude**: Non esquecemos ningún caso
- **Simplificación lóxica**: Eliminar redundancias
- **Documentación de regras de negocio**

---

## 💡 **Boas prácticas metodolóxicas**

### **Principios de calidade algorítmica:**
1. **Claridade sobre astucia**: Código claro é máis valioso que código listo
2. **Simplicidade intelixente**: Resolver o problema, non demostrar coñecemento
3. **Evolución iterativa**: Primeiro funcionar, despois optimizar
4. **Testabilidade desde o deseño**: Pensar nas probas desde o inicio

### **Documentación como investimento:**
- **Comentarios intelixentes**: Explican decisións complexas, non o obvio
- **Exemplos de uso**: Mostran como utilizar cada función
- **Casos de proba**: Documentan o comportamento esperado
- **Historial de decisións**: Por que escollemos esta solución e non outra

### **Manexo profesional de erros:**
- **Fail fast**: Detectar erros temperán no proceso
- **Mensaxes útiles**: Que axuden a corrixir o problema
- **Recuperación graciosa**: Non abortar por calquera erro menor
- **Logging estratéxico**: Rexistrar o necesario para depurar

---

## 🚀 **Evolución e futuro da metodoloxía**

### **Tendencias transformadoras:**
- **Algoritmos adaptativos**: Que aprenden e melloran co uso
- **Programación colaborativa con IA**: Co-pilotos intelixentes
- **Verificación formal**: Probas matemáticas de corrección
- **Ética algorítmica**: Consideración de sesgos e impacto social

### **Competencias do futuro programador:**
1. **Pensamento sistémico**: Ver interconexións e consecuencias
2. **Comunicación algorítmica**: Explicar solucións a diversos públicos
3. **Adaptabilidade metodolóxica**: Escoller a ferramenta axeitada para cada problema
4. **Conciencia ética**: Entender o impacto das nosas solucións

### **Integración con novos paradigmas:**
- **Quantum-ready algorithms**: Preparación para computación cuántica
- **Edge computing optimization**: Algoritmos para dispositivos limitados
- **Sustainable coding**: Eficiencia enerxética como criterio de calidade


## 📚 **Conclusión: A metodoloxía como superpoder**

Ter unha metodoloxía sólida non é ter **máis traballo**, é ter **máis intelixencia aplicada**. É a diferenza entre:

❌ **Programar por tentativa e erro** (ensinar a un robot propinándolle azoutes)  
✅ **Programar con propósito e precisión** (dar instrucións claras a un asistente competente)

<!--**Nos exercicios desta actividade**, cada paso metodolóxico está presente:-->

<!--🔹 **Análise** → Comprender o problema de paridade ou cálculo de área  
🔹 **Deseño** → Escoller entre if-else ou estrutura secuencial  
🔹 **Implementación** → Escribir pseudocódigo claro  
🔹 **Verificación** → Considerar casos límite e validacións  -->

**A metodoloxía é o que transforma *estudantes de programación* en *creadores de solucións* - persoas capaces non só de escribir código, senón de resolver problemas reais de forma eficiente, elegante e profesional**.


## Caso práctico

Volvendo ao problema plantexado antes: vexamos como afrontar o desenvolvemento dun algoritmo para determinar se un número é par ou impar.
Primeiro vexamos con que ferramentas podemos contar: 

**a. Instrucións de control**

As instrucións de control son estruturas que dirixen o fluxo de execución dun programa. Permiten alterar a secuencia lineal de execución mediante decisións, repeticións ou saltos. Nos paradigmas actuais (2026), intégranse con patróns funcionais e programación reactiva.

**b. Instrucións alternativas**

Estrutura que executa un bloque de código entre varias posibilidades baseándose nunha condición. Inclúe:
- **if/else**: Decisión binaria
- **switch/case**: Selección múltiple (modernizado con pattern matching)
- **Operador ternario**: `condición ? valor_si_true : valor_si_false`

**c. Instrucións de salto incondicional**

Transfere o control a outra parte do programa sen condición:
- **Goto**: Desaconsellado en programación estruturada
- **Break/continue**: En bucles (limitados a contexto)
- **Excepcións**: Salto controlado para manexo de erros
- **Retorno de función**: `return` (forma estruturada recomendada)

**d. Instrucións de salto condicional**

Executa un salto baseándose nunha condición avaliada:
- **If con goto**: Anticuado, non recomendado
- **Instrucións break/continue etiquetadas**: En linguaxes como Java
- **Excepcións condicionais**: En Python con raise condicional

**e. Instrucións repetitivas**

Estrutura que executa un bloque múltiples veces:
- **Bucles contados**: `for` con contador explícito
- **Bucles condicionais**: `while`, `do-while`
- **Iteradores modernos**: `forEach`, streams, comprensións de listas
- **Recursión**: Alternativa funcional a bucles imperativos

### Problema: Número par ou impar

### a. Ordinograma

```
[INICIO]
     ↓
[LER número por teclado]
     ↓
[Validar: número > 0?]
     ├───NO───→ [Mostrar: "Número debe ser > 0"]
     │               ↓
     │          [FIN]
     ↓
    SI
     ↓
[Calcular resto = número % 2]
     ↓
[resto == 0?]
     ├───SI───→ [Mostrar: "O número é PAR"]
     ↓           ↓
    NO           [FIN]
     ↓
[Mostrar: "O número é IMPAR"]
     ↓
[FIN]
```

### b. Pseudocódigo

```pseudocode
INICIO
    // Tipos de datos - número enteiro
    DECLARAR numero: ENTEIRO
    
    // Operación de entrada
    ESCRIBIR "Introduce un número mayor que 0:"
    LER numero
    
    // Operador de comparación
    SI numero <= 0 ENTONCES
        ESCRIBIR "Erro: O número debe ser maior que 0"
    SENÓN
        // Operador módulo para cálculo
        DECLARAR resto: ENTEIRO
        resto = numero % 2
        
        // Estrutura condicional
        SI resto == 0 ENTONCES
            ESCRIBIR "O número ", numero, " é PAR"
        SENÓN
            ESCRIBIR "O número ", numero, " é IMPAR"
        FIN_SI
    FIN_SI
FIN
```

### c. Tipo de estrutura utilizada e razón

**Estrutura condicional alternativa (if-else)**  

**Razóns:**
1. <!-- **CE1.1**:--> Requírese tomar unha decisión baseada nunha condición (se o número é par ou impar)
2. **Claridade**: A estrutura if-else é lexible e autocontida
3. **Eficiencia**: Unha única condición cun resultado binario
4. **Boa práctica**: Evita anidación innecesaria de estruturas
5. **Validación incluída**: A estrutura permite validar a entrada antes de procesar

## Problema: Cálculo de superficie rectangular

### Pseudocódigo

```pseudocode
INICIO
    // Tipos de datos - números reais para medidas
    DECLARAR base, altura, superficie: REAL
    
    // Operacións de entrada/saída
    ESCRIBIR "Cálculo da superficie dun rectángulo"
    ESCRIBIR "-----------------------------------"
    
    // Sintaxe para entrada de datos
    ESCRIBIR "Introduce a base (metros):"
    LER base
    
    ESCRIBIR "Introduce a altura (metros):"
    LER altura
    
    // Operador de multiplicación
    superficie = base * altura
    
    // Formateo de saída con dous decimais
    ESCRIBIR "A superficie do rectángulo é: ", FORMATAR(superficie, "0.00"), " m²"
FIN
```

### Tipo de estrutura utilizada e razón

**Estrutura secuencial**  

**Razóns:**
1. <!--**CE1.1**: -->Todas as instrucións execútanse en secuencia lineal, sen ramificacións
2. **Natureza do problema**: O cálculo de área segue un fluxo fixo:
   - Entrada de datos → Cálculo → Saída de resultados
3. **Simplicidade**: Non se requiren decisións nin repeticións
4. **Claridade**: O fluxo é intuitivo e doado de seguir
5. **Eficiencia**: Máxima eficiencia para operacións lineais

**Xustificación técnica:**
- A estrutura secuencial é fundamental en programación estruturada
- Mantense como base sobre a que se constrúen estruturas complexas
- Aproveita o modelo de execución secuencial da CPU
- Compatible con programación funcional mediante composición de funcións

---

<!-- **Cumprimento dos obxectivos da actividade:** -->

<!-- - **C1**: Identificáronse estruturas condicionais e secuenciais -->
<!-- - **CE1.1**: Describíronse estruturas secuencial, condicional e operacións básicas -->
<!-- - **CE1.2**: Mostrouse sintaxe de pseudocódigo para diferentes estruturas -->
<!-- - **CE1.3**: Especificáronse tipos de datos (enteiros, reais) segundo necesidades -->
<!-- - **CE1.4**: Utilizáronse operadores (%, *, ==, <=) para cálculos e comparacións -->
