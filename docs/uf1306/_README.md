#### IFCD0110 - CONFECCIÓN E PUBLICACIÓN DE PÁXINAS WEB

# UF1306: Probas de funcionalidade e optimización

# Introdución a validacións de datos, efectos especiais e probas en páxinas web

## Validacións de datos no desenvolvemento web

A validación de datos é un proceso fundamental no desenvolvemento web que garante a **integridade**, **seguridade** e **calidade** da información que os usuarios introducen nos nosos sistemas. Podemos distinguir dous tipos principais de validación:

**Validación do lado do cliente** (front-end):
- Realízase antes de enviar datos ao servidor
- Usa JavaScript ou características HTML5
- Proporciona retroalimentación inmediata ao usuario
- Reduce a carga no servidor

**Validación do lado do servidor** (back-end):
- Última liña de defensa contra datos incorrectos ou maliciosos
- Independente do código do cliente
- Esencial para seguridade

As técnicas comúns inclúen:
- Comprobación de campos obrigatorios
- Validación de formatos (emails, números de teléfono)
- Rango e lonxitude de datos
- Expresións regulares para padróns complexos

## Efectos Especiais e Interaccións Modernas

Os efectos especiais e as animacións xogan un papel crucial na experiencia de usuario:
- **CSS Animations/Transitions**: Para efectos suaves e eficientes
- **JavaScript Libraries**: Como GSAP para animacións avanzadas
- **Canvas/WebGL**: Para gráficos e efectos complexos
- **Scroll-based Animations**: Que responden ao desprazamento

Estas técnicas deben usarse con moderación para:
- Mellorar a usabilidade, non dificultala
- Guiar a atención do usuario
- Proporcionar retroalimentación visual
- Crear experiencias memorables sen sacrificar o rendemento

## Estratexias de Probas en Páxinas Web

As probas son esenciais para garantir calidade e funcionalidade:

**Tipos de probas**:
1. **Probas unitarias**: Compoñentes individuais
2. **Probas de integración**: Como interactúan os módulos
3. **Probas end-to-end (E2E)**: Fluxos completos de usuario
4. **Probas de rendemento**: Tempos de carga e resposta
5. **Probas de compatibilidade**: Entre navegadores e dispositivos

**Ferramentas populares**:
- Jest, Mocha (JavaScript testing)
- Selenium, Cypress (E2E testing)
- Lighthouse (rendemento e accesibilidade)
- BrowserStack (compatibilidade)

Esta introdución proporciona unha base sólida para explorar cada un destes temas fundamentais no desenvolvemento web moderno, onde a validación de datos, os efectos controlados e as probas exhaustivas son pilares para crear aplicacións robustas, seguras e atractivas.