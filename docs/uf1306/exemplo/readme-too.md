# **Dark Mode Toggle con Animación Suave**

Vou engadir un interruptor de Dark Mode ao noso formulario anterior, cunha animación fluída e persistencia do estado. Aquí está o código completo:

## **📝 Código Actualizado (HTML, CSS, JS)**

```html
<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Interactivo con Dark Mode</title>
    <style>
        :root {
            --bg-color: #f5f7fa;
            --text-color: #2c3e50;
            --form-bg: white;
            --input-border: #dfe6e9;
            --primary-color: #3498db;
            --primary-hover: #2980b9;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --label-color: #7f8c8d;
            --success-bg: #d4edda;
            --success-text: #155724;
            --error-bg: #f8d7da;
            --error-text: #721c24;
        }

        .dark-mode {
            --bg-color: #1a1a2e;
            --text-color: #f1f1f1;
            --form-bg: #16213e;
            --input-border: #2a3a5e;
            --primary-color: #4cc9f0;
            --primary-hover: #4895ef;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            --label-color: #a8a8a8;
            --success-bg: #1a3a1e;
            --success-text: #7ddf8d;
            --error-bg: #3a1a1e;
            --error-text: #df7d7d;
        }

        body {
            font-family: 'Segoe UI', sans-serif;
            background: var(--bg-color);
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            transition: background 0.5s ease, color 0.5s ease;
        }

        /* Estilos previos mantidos... */
        .form-container {
            background: var(--form-bg);
            /* ...outros estilos mantidos */
            transition: all 0.4s ease, background 0.5s ease;
        }

        h1 {
            color: var(--text-color);
            /* ...outros estilos mantidos */
        }

        input, textarea {
            border: 2px solid var(--input-border);
            background: var(--form-bg);
            color: var(--text-color);
            transition: all 0.3s ease, background 0.5s ease, color 0.5s ease;
        }

        .float-label {
            color: var(--label-color);
            transition: all 0.3s ease, color 0.5s ease;
        }

        /* Estilos do toggle switch */
        .theme-switcher {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            align-items: center;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 30px;
            margin-left: 10px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 22px;
            width: 22px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: var(--primary-color);
        }

        input:checked + .slider:before {
            transform: translateX(30px);
        }

        .slider:after {
            content: "☀️";
            position: absolute;
            left: 8px;
            top: 3px;
            font-size: 14px;
            opacity: 1;
            transition: opacity 0.3s;
        }

        input:checked + .slider:after {
            opacity: 0;
        }

        .slider:before {
            content: "🌙";
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-size: 14px;
            transition: transform 0.4s, content 0.3s;
        }

        input:checked + .slider:before {
            content: "🌙";
            color: white;
        }

        /* Animación de cambio de tema */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        body.theme-transition * {
            transition: all 0.5s ease !important;
        }
    </style>
</head>
<body>
    <div class="theme-switcher">
        <span>Modo:</span>
        <label class="switch">
            <input type="checkbox" id="themeToggle">
            <span class="slider"></span>
        </label>
    </div>

    <div class="form-container">
        <!-- Contido do formulario mantido igual -->
        <h1>Contacto</h1>
        <form id="contactForm">
            <!-- ...código do formulario anterior... -->
        </form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Código anterior mantido...
            
            // Dark Mode Toggle
            const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
            
            // Comprobar preferencia do usuario ou localStorage
            const savedTheme = localStorage.getItem('theme') || 
                              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            
            if (savedTheme === 'dark') {
                themeToggle.checked = true;
                body.classList.add('dark-mode');
            }
            
            // Cambiar tema con animación
            themeToggle.addEventListener('change', function() {
                // Activar transicións suaves
                body.classList.add('theme-transition');
                
                if (this.checked) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                } else {
                    body.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light');
                }
                
                // Eliminar a clase de transición despois de completarse
                setTimeout(() => {
                    body.classList.remove('theme-transition');
                }, 500);
            });
            
            // Efecto especial ao cambiar o tema
            themeToggle.addEventListener('click', function(e) {
                if (body.classList.contains('theme-transition')) return;
                
                // Pequena animación no formulario
                const formContainer = document.querySelector('.form-container');
                formContainer.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    formContainer.style.transform = 'scale(1)';
                }, 200);
            });
        });
    </script>
</body>
</html>
```

## **✨ Novas Características Engadidas**

1. **Toggle Switch Estilizado**:
   - Interruptor con iconos de sol/lúa
   - Deslizamento suave cunha animación CSS
   - Efecto de transformación no formulario ao cambiar

2. **Sistema de Temas Completo**:
   - Variables CSS para cada modo
   - Transición suave entre modos (0.5s)
   - Persistencia con localStorage

3. **Detalles de Animación**:
   - Efecto de "pulsación" no formulario ao cambiar
   - Fade in/out dos iconos no toggle
   - Transición coordinada de todos os elementos

4. **Respeto ás Preferencias do Usuario**:
   - Detecta automáticamente o modo do sistema
   - Garda a elección do usuario para futuras visitas

## **🎨 Paleta de Cores (Modo Dark)**
| Elemento       | Color     |
| -------------- | --------- |
| Fondo          | `#1a1a2e` |
| Formulario     | `#16213e` |
| Texto          | `#f1f1f1` |
| Botón Primario | `#4cc9f0` |
| Borde Inputs   | `#2a3a5e` |

## **📌 Como Funciona**
1. O interruptor verifica:
   - localStorage (preferencia gardada)
   - prefers-color-scheme (configuración do sistema)
2. Ao cambiar:
   - Engade/elimina a clase `dark-mode`
   - Actualiza as variables CSS
   - Garda a preferencia
3. As animacións aseguran unha transición fluída

## **🚀 Posibles Melloras**
- Engadir máis temas (ej: azul, verde)
- Implementar un "theme switcher" avanzado
- Animacións máis complexas con GSAP
- Efectos de partículas no fondo

Queres que profundice en algunha parte ou engadir máis efectos visuais? 😊
